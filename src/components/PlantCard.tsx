
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { Plant } from "@/data/plants";
import { Link } from "react-router-dom";

interface PlantCardProps {
  plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return (
    <Card className="overflow-hidden border-0 bg-white plant-card-shadow plant-hover-animation h-full flex flex-col">
      <Link to={`/plant/${plant.id}`} className="relative overflow-hidden aspect-[3/4]">
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
          <Button variant="ghost" size="icon" className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        {plant.newArrival && (
          <div className="absolute top-3 left-3 z-10 bg-plant-forest text-white text-xs px-2 py-1 rounded-full">
            New
          </div>
        )}
        
        {plant.salePrice && (
          <div className="absolute top-3 left-3 z-10 bg-plant-terracotta text-white text-xs px-2 py-1 rounded-full">
            Sale
          </div>
        )}
        
        <img
          src={plant.images[0]}
          alt={plant.name}
          className="object-cover h-full w-full transition-transform duration-500 hover:scale-105"
        />
        
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
      </Link>
      
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-plant-charcoal line-clamp-1">
              {plant.name}
            </h3>
            <p className="text-sm text-muted-foreground italic line-clamp-1">{plant.scientificName}</p>
          </div>
        </div>
        
        <div className="mt-2 flex items-center space-x-2">
          {/* Care Level Indicator */}
          <div className="bg-plant-beige px-2 py-0.5 rounded-full text-xs">
            {plant.careLevel === "beginner" && "Easy Care"}
            {plant.careLevel === "intermediate" && "Moderate"}
            {plant.careLevel === "expert" && "Expert"}
          </div>
          
          {/* Pet Friendly Indicator */}
          {plant.petFriendly && (
            <div className="bg-plant-beige px-2 py-0.5 rounded-full text-xs">
              Pet Safe
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 border-t border-plant-beige mt-auto">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-baseline">
            {plant.salePrice ? (
              <>
                <span className="text-lg font-semibold text-plant-terracotta">${plant.salePrice.toFixed(2)}</span>
                <span className="text-sm text-muted-foreground line-through ml-2">${plant.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-lg font-semibold">${plant.price.toFixed(2)}</span>
            )}
          </div>
          <Button size="sm" variant="outline" className="rounded-full">
            <ShoppingCart className="h-4 w-4 mr-1" /> Add
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PlantCard;
