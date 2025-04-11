import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterSidebar from "@/components/FilterSidebar";
import SortDropdown, { SortOption } from "@/components/SortDropdown";
import PlantCard from "@/components/PlantCard";
import { Button } from "@/components/ui/button";
import { Plant, plants } from "@/data/plants";
import { useIsMobile } from "@/hooks/use-mobile";
import { SlidersHorizontal, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export interface FilterValues {
  category: string | null;
  careLevel: string | null;
  light: string | null;
  water: string | null;
  size: string | null;
  features: string[];
}

const Plants = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isMobile = useIsMobile();
  
  const initialSort = (searchParams.get("sort") as SortOption) || "featured";
  const initialCategory = searchParams.get("category");
  
  const [sortOption, setSortOption] = useState<SortOption>(initialSort);
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
  const [filters, setFilters] = useState<FilterValues>({
    category: initialCategory,
    careLevel: null,
    light: null,
    water: null,
    size: null,
    features: [],
  });
  
  useEffect(() => {
    let result = [...plants];

    if (filters.category) {
      result = result.filter(plant => plant.category === filters.category);
    }
    
    if (filters.careLevel) {
      result = result.filter(plant => plant.careLevel === filters.careLevel);
    }
    
    if (filters.light) {
      result = result.filter(plant => plant.light === filters.light);
    }
    
    if (filters.water) {
      result = result.filter(plant => plant.water === filters.water);
    }
    
    if (filters.size) {
      result = result.filter(plant => plant.size === filters.size);
    }
    
    if (filters.features.length > 0) {
      result = result.filter(plant => {
        return filters.features.every(feature => {
          if (feature === "petFriendly") return plant.petFriendly;
          if (feature === "airPurifying") return plant.airPurifying;
          if (feature === "featured") return plant.featured;
          if (feature === "newArrival") return plant.newArrival;
          return true;
        });
      });
    }
    
    switch (sortOption) {
      case "price-low-high":
        result.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
        break;
      case "price-high-low":
        result.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
        break;
      case "newest":
        result = result.filter(plant => plant.newArrival).concat(result.filter(plant => !plant.newArrival));
        break;
      case "name-a-z":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-z-a":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "easiest-care":
        result.sort((a, b) => {
          const careOrder = { beginner: 0, intermediate: 1, expert: 2 };
          return careOrder[a.careLevel] - careOrder[b.careLevel];
        });
        break;
      case "best-air-purifiers":
        result = result.filter(plant => plant.airPurifying).concat(result.filter(plant => !plant.airPurifying));
        break;
      case "featured":
      default:
        result = result.filter(plant => plant.featured).concat(result.filter(plant => !plant.featured));
        break;
    }
    
    setFilteredPlants(result);
    
    const params = new URLSearchParams();
    if (sortOption !== "featured") params.set("sort", sortOption);
    if (filters.category) params.set("category", filters.category);
    setSearchParams(params);
  }, [filters, sortOption, setSearchParams]);
  
  const handleFilterChange = (newFilters: FilterValues) => {
    setFilters(newFilters);
  };
  
  const handleSortChange = (value: SortOption) => {
    setSortOption(value);
  };
  
  const renderActiveFilters = () => {
    const activeFilters = [];
    
    if (filters.category) activeFilters.push({ type: "category", value: filters.category });
    if (filters.careLevel) activeFilters.push({ type: "careLevel", value: filters.careLevel });
    if (filters.light) activeFilters.push({ type: "light", value: filters.light });
    if (filters.water) activeFilters.push({ type: "water", value: filters.water });
    if (filters.size) activeFilters.push({ type: "size", value: filters.size });
    filters.features.forEach(feature => activeFilters.push({ type: "features", value: feature }));
    
    if (activeFilters.length === 0) return null;
    
    return (
      <div className="flex flex-wrap gap-2 mb-4">
        {activeFilters.map((filter, index) => (
          <Button 
            key={index} 
            variant="outline" 
            size="sm" 
            className="h-7 px-2 rounded-full bg-plant-beige border-plant-beige text-plant-charcoal hover:bg-plant-beige/80"
            onClick={() => {
              const newFilters = { ...filters };
              if (filter.type === "features") {
                newFilters.features = newFilters.features.filter(f => f !== filter.value);
              } else {
                newFilters[filter.type as keyof Omit<FilterValues, "features">] = null;
              }
              handleFilterChange(newFilters);
            }}
          >
            {filter.value}
            <X className="ml-1 h-3.5 w-3.5" />
          </Button>
        ))}
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-7 text-muted-foreground hover:text-plant-charcoal"
          onClick={() => handleFilterChange({
            category: null,
            careLevel: null,
            light: null,
            water: null,
            size: null,
            features: [],
          })}
        >
          Clear all
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-plant-beige/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-semibold mb-2">All Plants</h1>
            <p className="text-muted-foreground">
              Discover our carefully curated collection of beautiful, healthy plants
            </p>
          </div>
        </section>
        
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              {!isMobile && (
                <div className="md:w-1/4 lg:w-1/5">
                  <FilterSidebar onFilterChange={handleFilterChange} activeFilters={filters} />
                </div>
              )}
              
              {isMobile && (
                <Sheet>
                  <div className="flex justify-between items-center mb-4">
                    <SheetTrigger asChild>
                      <Button variant="outline" className="bg-white">
                        <SlidersHorizontal className="h-4 w-4 mr-2" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    
                    <SortDropdown value={sortOption} onValueChange={handleSortChange} />
                  </div>
                  
                  <SheetContent side="left" className="overflow-y-auto">
                    <h3 className="text-lg font-semibold mb-4">Filters</h3>
                    <FilterSidebar onFilterChange={handleFilterChange} activeFilters={filters} />
                  </SheetContent>
                </Sheet>
              )}
              
              <div className="flex-1">
                <div className="mb-6 flex flex-col gap-4">
                  {!isMobile && (
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Showing {filteredPlants.length} plants
                        </p>
                      </div>
                      <SortDropdown value={sortOption} onValueChange={handleSortChange} />
                    </div>
                  )}
                  
                  {renderActiveFilters()}
                  
                  {renderActiveFilters() && <Separator />}
                </div>
                
                {filteredPlants.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredPlants.map((plant) => (
                      <PlantCard key={plant.id} plant={plant} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-plant-beige/20 rounded-lg">
                    <h3 className="text-xl font-medium mb-2">No plants found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your filters to find what you're looking for
                    </p>
                    <Button onClick={() => handleFilterChange({
                      category: null,
                      careLevel: null,
                      light: null,
                      water: null,
                      size: null,
                      features: [],
                    })}>
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Plants;
