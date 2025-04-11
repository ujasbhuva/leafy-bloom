
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Heart, Search, Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="sticky top-0 z-40 w-full bg-plant-background/80 backdrop-blur-md border-b border-plant-beige py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {isMobile && (
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
              </Button>
            )}
            <a href="/" className="flex items-center">
              <span className="text-2xl font-semibold text-plant-forest">Leafy</span>
              <span className="text-plant-sage">Bloom</span>
            </a>
          </div>

          {/* Search Bar - Hidden on mobile */}
          {!isMobile && (
            <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search plants..."
                  className="pl-9 bg-white/50"
                />
              </div>
            </div>
          )}

          {/* Navigation Links - Hidden on mobile */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-plant-charcoal hover:text-plant-forest transition-colors">Home</a>
              <a href="/plants" className="text-plant-charcoal hover:text-plant-forest transition-colors">Plants</a>
              <a href="/care" className="text-plant-charcoal hover:text-plant-forest transition-colors">Plant Care</a>
              <a href="/about" className="text-plant-charcoal hover:text-plant-forest transition-colors">About Us</a>
            </nav>
          )}

          {/* User Actions */}
          <div className="flex items-center space-x-2">
            {isMobile && (
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            )}
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-plant-terracotta text-white rounded-full flex items-center justify-center text-xs">3</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
