
import React from "react";
import { useWishlist } from "@/providers/WishlistProvider";
import { useCart } from "@/providers/CartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center">
          <div className="text-center max-w-md">
            <Heart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h1 className="text-3xl font-display font-semibold mb-4">Your wishlist is empty</h1>
            <p className="text-muted-foreground mb-8">
              Save your favorite plants to your wishlist for easy access later.
            </p>
            <Link to="/plants">
              <Button className="rounded-full">
                Explore Plants
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-display font-semibold">Your Wishlist</h1>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-muted-foreground hover:text-destructive"
            onClick={clearWishlist}
          >
            <Trash2 className="h-4 w-4 mr-1" /> Clear Wishlist
          </Button>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((plant) => (
            <div key={plant.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-plant-beige/30">
              <Link to={`/plant/${plant.id}`} className="block relative aspect-square">
                <img 
                  src={plant.images[0]} 
                  alt={plant.name} 
                  className="w-full h-full object-cover"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 text-rose-500 hover:bg-white hover:text-rose-600"
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromWishlist(plant.id);
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </Link>
              
              <div className="p-4">
                <h3 className="font-medium">{plant.name}</h3>
                <p className="text-sm text-muted-foreground italic mb-3">{plant.scientificName}</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    {plant.salePrice ? (
                      <div className="flex items-baseline">
                        <span className="text-plant-terracotta font-semibold">${plant.salePrice.toFixed(2)}</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">${plant.price.toFixed(2)}</span>
                      </div>
                    ) : (
                      <span className="font-semibold">${plant.price.toFixed(2)}</span>
                    )}
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="rounded-full bg-plant-sage hover:bg-plant-forest"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(plant, 1);
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" /> Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
