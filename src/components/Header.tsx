
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Heart, Search, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/providers/CartProvider";
import { useWishlist } from "@/providers/WishlistProvider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const { getItemCount } = useCart();
  const { wishlistItems } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const cartCount = getItemCount();
  const wishlistCount = wishlistItems.length;
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/') ? "text-plant-forest font-medium" : "text-plant-charcoal hover:text-plant-forest";
  };
  
  return (
    <header className="sticky top-0 z-40 w-full bg-plant-background/80 backdrop-blur-md border-b border-plant-beige py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="mr-2">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px]">
                  <div className="flex flex-col space-y-6 py-6">
                    <Link to="/" className="flex items-center mb-6" onClick={() => setIsMenuOpen(false)}>
                      <span className="text-2xl font-display font-semibold text-plant-forest">Leafy</span>
                      <span className="text-plant-sage font-display">Bloom</span>
                    </Link>
                    <nav className="flex flex-col space-y-4">
                      <Link to="/" className="text-plant-charcoal hover:text-plant-forest transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
                      <Link to="/plants" className="text-plant-charcoal hover:text-plant-forest transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Plants</Link>
                      <Link to="/blogs" className="text-plant-charcoal hover:text-plant-forest transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Plant Care</Link>
                      <Link to="/about" className="text-plant-charcoal hover:text-plant-forest transition-colors py-2" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                      <Link to="/cart" className="text-plant-charcoal hover:text-plant-forest transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Cart</Link>
                      <Link to="/wishlist" className="text-plant-charcoal hover:text-plant-forest transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Wishlist</Link>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            )}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-display font-semibold text-plant-forest">Leafy</span>
              <span className="text-plant-sage font-display">Bloom</span>
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          {!isMobile && (
            <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search plants..."
                  className="pl-9 bg-white/50 border-plant-beige/50 rounded-full"
                />
              </div>
            </div>
          )}

          {/* Navigation Links - Hidden on mobile */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className={`${isActive('/')} transition-colors`}>Home</Link>
              <Link to="/plants" className={`${isActive('/plants')} transition-colors`}>Plants</Link>
              <Link to="/blogs" className={`${isActive('/blogs')} transition-colors`}>Plant Care</Link>
              <Link to="/about" className={`${isActive('/about')} transition-colors`}>About Us</Link>
            </nav>
          )}

          {/* User Actions */}
          <div className="flex items-center space-x-2">
            {isMobile && (
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="h-5 w-5" />
              </Button>
            )}
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="rounded-full relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-plant-terracotta text-white rounded-full flex items-center justify-center text-xs">
                    {wishlistCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="rounded-full relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-plant-terracotta text-white rounded-full flex items-center justify-center text-xs">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
