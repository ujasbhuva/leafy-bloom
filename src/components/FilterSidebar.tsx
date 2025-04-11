
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
import { filterOptions, plantCategories } from "@/data/plants";
import { cn } from "@/lib/utils";
import { FilterValues } from "@/pages/Plants";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FilterSection = ({ title, children, defaultOpen = false }: FilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen ? "transform rotate-180" : "")} />
      </button>
      {isOpen && <div className="space-y-1">{children}</div>}
    </div>
  );
};

interface FilterSidebarProps {
  onFilterChange: (filters: FilterValues) => void;
  activeFilters: FilterValues;
}

const FilterSidebar = ({ onFilterChange, activeFilters }: FilterSidebarProps) => {
  const handleFilterChange = (category: keyof FilterValues, value: string) => {
    const newFilters = { ...activeFilters };
    
    if (category === "category" || category === "careLevel" || category === "light" || category === "water" || category === "size") {
      // For single-select filters
      if (newFilters[category] === value) {
        newFilters[category] = null;
      } else {
        newFilters[category] = value;
      }
    } else if (category === "features") {
      // For multi-select filters
      const features = [...(newFilters.features || [])];
      if (features.includes(value)) {
        newFilters.features = features.filter(f => f !== value);
      } else {
        newFilters.features = [...features, value];
      }
    }
    
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    onFilterChange({
      category: null,
      careLevel: null,
      light: null,
      water: null,
      size: null,
      features: [],
    });
  };

  const hasActiveFilters = Object.values(activeFilters).some(val => 
    (Array.isArray(val) ? val.length > 0 : val !== null)
  );

  return (
    <div className="bg-white p-4 rounded-lg plant-card-shadow h-fit">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={resetFilters}>
            Clear All
          </Button>
        )}
      </div>

      <Separator className="mb-4" />

      <FilterSection title="Categories" defaultOpen={true}>
        <div className="space-y-2">
          {plantCategories.map((category) => (
            <div className="flex items-center space-x-2" key={category}>
              <Checkbox 
                id={`category-${category}`} 
                checked={activeFilters.category === category}
                onCheckedChange={() => handleFilterChange("category", category)}
              />
              <Label htmlFor={`category-${category}`} className="text-sm">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      <Separator className="my-4" />

      <FilterSection title="Care Level" defaultOpen={true}>
        <div className="space-y-2">
          {filterOptions.careLevel.map((level) => (
            <div className="flex items-center space-x-2" key={level}>
              <Checkbox 
                id={`care-${level}`} 
                checked={activeFilters.careLevel === level}
                onCheckedChange={() => handleFilterChange("careLevel", level)}
              />
              <Label htmlFor={`care-${level}`} className="text-sm capitalize">
                {level}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      <Separator className="my-4" />

      <FilterSection title="Light Needs">
        <div className="space-y-2">
          {filterOptions.light.map((light) => (
            <div className="flex items-center space-x-2" key={light}>
              <Checkbox 
                id={`light-${light}`} 
                checked={activeFilters.light === light}
                onCheckedChange={() => handleFilterChange("light", light)}
              />
              <Label htmlFor={`light-${light}`} className="text-sm capitalize">
                {light}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      <Separator className="my-4" />

      <FilterSection title="Watering">
        <div className="space-y-2">
          {filterOptions.water.map((water) => (
            <div className="flex items-center space-x-2" key={water}>
              <Checkbox 
                id={`water-${water}`} 
                checked={activeFilters.water === water}
                onCheckedChange={() => handleFilterChange("water", water)}
              />
              <Label htmlFor={`water-${water}`} className="text-sm capitalize">
                {water === "low" ? "Infrequent" : water === "medium" ? "Regular" : "Frequent"}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      <Separator className="my-4" />

      <FilterSection title="Plant Size">
        <div className="space-y-2">
          {filterOptions.size.map((size) => (
            <div className="flex items-center space-x-2" key={size}>
              <Checkbox 
                id={`size-${size}`} 
                checked={activeFilters.size === size}
                onCheckedChange={() => handleFilterChange("size", size)}
              />
              <Label htmlFor={`size-${size}`} className="text-sm capitalize">
                {size}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      <Separator className="my-4" />

      <FilterSection title="Features">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="feature-petFriendly"
              checked={activeFilters.features?.includes("petFriendly")}
              onCheckedChange={() => handleFilterChange("features", "petFriendly")}
            />
            <Label htmlFor="feature-petFriendly" className="text-sm">Pet Friendly</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="feature-airPurifying"
              checked={activeFilters.features?.includes("airPurifying")}
              onCheckedChange={() => handleFilterChange("features", "airPurifying")}
            />
            <Label htmlFor="feature-airPurifying" className="text-sm">Air Purifying</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="feature-featured"
              checked={activeFilters.features?.includes("featured")}
              onCheckedChange={() => handleFilterChange("features", "featured")}
            />
            <Label htmlFor="feature-featured" className="text-sm">Featured</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="feature-newArrival"
              checked={activeFilters.features?.includes("newArrival")}
              onCheckedChange={() => handleFilterChange("features", "newArrival")}
            />
            <Label htmlFor="feature-newArrival" className="text-sm">New Arrivals</Label>
          </div>
        </div>
      </FilterSection>
    </div>
  );
};

export default FilterSidebar;
