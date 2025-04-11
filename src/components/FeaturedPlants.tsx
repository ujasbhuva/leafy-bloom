
import { useEffect, useState } from "react";
import { Plant, plants } from "@/data/plants";
import PlantCard from "@/components/PlantCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FeaturedPlantsProps {
  title: string;
  subtitle?: string;
  filter: (plant: Plant) => boolean;
  limit?: number;
  className?: string;
}

const FeaturedPlants: React.FC<FeaturedPlantsProps> = ({
  title,
  subtitle,
  filter,
  limit = 4,
  className,
}) => {
  const [visiblePlants, setVisiblePlants] = useState<Plant[]>([]);
  const [showAll, setShowAll] = useState(false);
  const filteredPlants = plants.filter(filter);

  useEffect(() => {
    setVisiblePlants(showAll ? filteredPlants : filteredPlants.slice(0, limit));
  }, [showAll, filter, limit]);

  return (
    <section className={cn("py-12", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-plant-charcoal mb-2">{title}</h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visiblePlants.map((plant) => (
            <div key={plant.id} className="h-full">
              <PlantCard plant={plant} />
            </div>
          ))}
        </div>

        {filteredPlants.length > limit && (
          <div className="mt-8 text-center">
            <Button 
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="px-8"
            >
              {showAll ? "Show Less" : "View More"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedPlants;
