
import React, { createContext, useState, useContext, useEffect } from "react";
import { Plant } from "@/data/plants";
import { toast } from "@/hooks/use-toast";

type CartItem = {
  plant: Plant;
  quantity: number;
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (plant: Plant, quantity: number) => void;
  removeFromCart: (plantId: string) => void;
  updateQuantity: (plantId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
      }
    }
  }, []);
  
  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  const addToCart = (plant: Plant, quantity: number) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.plant.id === plant.id);
      
      if (existingItemIndex >= 0) {
        // Item already in cart, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        
        toast({
          title: "Updated cart",
          description: `Updated ${plant.name} quantity in your cart`
        });
        
        return updatedItems;
      } else {
        // Add new item to cart
        toast({
          title: "Added to cart",
          description: `${plant.name} added to your cart`
        });
        
        return [...prevItems, { plant, quantity }];
      }
    });
  };
  
  const removeFromCart = (plantId: string) => {
    setCartItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.plant.id === plantId);
      
      if (itemToRemove) {
        toast({
          title: "Removed from cart",
          description: `${itemToRemove.plant.name} removed from your cart`
        });
      }
      
      return prevItems.filter(item => item.plant.id !== plantId);
    });
  };
  
  const updateQuantity = (plantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(plantId);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.plant.id === plantId 
          ? { ...item, quantity } 
          : item
      )
    );
  };
  
  const clearCart = () => {
    setCartItems([]);
    toast({
      title: "Cart cleared",
      description: "All items removed from your cart"
    });
  };
  
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.plant.salePrice || item.plant.price;
      return total + (price * item.quantity);
    }, 0);
  };
  
  const getItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };
  
  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        getCartTotal,
        getItemCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
