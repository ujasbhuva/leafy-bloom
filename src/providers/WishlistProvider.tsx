
import React, { createContext, useState, useContext, useEffect } from "react";
import { Plant } from "@/data/plants";
import { toast } from "@/hooks/use-toast";

interface WishlistContextType {
  wishlistItems: Plant[];
  addToWishlist: (plant: Plant) => void;
  removeFromWishlist: (plantId: string) => void;
  isInWishlist: (plantId: string) => boolean;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlistItems, setWishlistItems] = useState<Plant[]>([]);
  
  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      try {
        setWishlistItems(JSON.parse(savedWishlist));
      } catch (e) {
        console.error('Failed to parse wishlist from localStorage', e);
      }
    }
  }, []);
  
  // Save wishlist to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);
  
  const addToWishlist = (plant: Plant) => {
    if (!isInWishlist(plant.id)) {
      setWishlistItems(prev => [...prev, plant]);
      toast({
        title: "Added to wishlist",
        description: `${plant.name} added to your wishlist`
      });
    }
  };
  
  const removeFromWishlist = (plantId: string) => {
    const itemToRemove = wishlistItems.find(item => item.id === plantId);
    
    if (itemToRemove) {
      setWishlistItems(prev => prev.filter(item => item.id !== plantId));
      toast({
        title: "Removed from wishlist",
        description: `${itemToRemove.name} removed from your wishlist`
      });
    }
  };
  
  const isInWishlist = (plantId: string) => {
    return wishlistItems.some(item => item.id === plantId);
  };
  
  const clearWishlist = () => {
    setWishlistItems([]);
    toast({
      title: "Wishlist cleared",
      description: "All items removed from your wishlist"
    });
  };
  
  return (
    <WishlistContext.Provider 
      value={{ 
        wishlistItems, 
        addToWishlist, 
        removeFromWishlist, 
        isInWishlist,
        clearWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
