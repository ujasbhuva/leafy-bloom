
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type SortOption =
  | "featured"
  | "price-low-high"
  | "price-high-low"
  | "newest"
  | "name-a-z"
  | "name-z-a"
  | "easiest-care"
  | "best-air-purifiers";

interface SortDropdownProps {
  value: SortOption;
  onValueChange: (value: SortOption) => void;
}

const SortDropdown = ({ value, onValueChange }: SortDropdownProps) => {
  const sortLabels: Record<SortOption, string> = {
    "featured": "Featured",
    "price-low-high": "Price: Low to High",
    "price-high-low": "Price: High to Low",
    "newest": "Newest Arrivals",
    "name-a-z": "Name: A to Z",
    "name-z-a": "Name: Z to A",
    "easiest-care": "Easiest to Care For",
    "best-air-purifiers": "Best Air Purifiers",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-white w-full md:w-auto justify-between">
          Sort: {sortLabels[value]}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
          {Object.entries(sortLabels).map(([key, label]) => (
            <DropdownMenuRadioItem 
              key={key} 
              value={key as SortOption}
              className="cursor-pointer flex justify-between"
            >
              {label}
              {value === key && <Check className="h-4 w-4" />}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortDropdown;
