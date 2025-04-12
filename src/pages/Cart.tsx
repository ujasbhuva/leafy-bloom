
import React from "react";
import { useCart } from "@/providers/CartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate();
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-display font-semibold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any plants to your cart yet.
              Browse our selection and find your perfect green companion.
            </p>
            <Link to="/plants">
              <Button className="rounded-full">
                Shop Plants
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
        <h1 className="text-3xl font-display font-semibold mb-6">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium">{cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}</h2>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-muted-foreground hover:text-destructive"
                  onClick={clearCart}
                >
                  <Trash2 className="h-4 w-4 mr-1" /> Clear Cart
                </Button>
              </div>
              
              <Separator className="mb-6" />
              
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.plant.id} className="flex gap-4">
                    <div className="w-24 h-24 flex-shrink-0">
                      <img 
                        src={item.plant.images[0]} 
                        alt={item.plant.name} 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <Link to={`/plant/${item.plant.id}`} className="font-medium hover:text-plant-forest transition-colors">
                          {item.plant.name}
                        </Link>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                          onClick={() => removeFromCart(item.plant.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground italic mb-2">{item.plant.scientificName}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border rounded-full overflow-hidden">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.plant.id, item.quantity - 1)}
                            className="h-8 w-8 rounded-full"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.plant.id, item.quantity + 1)}
                            className="h-8 w-8 rounded-full"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <div className="font-medium">
                          ${((item.plant.salePrice || item.plant.price) * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-20">
              <h2 className="text-xl font-medium mb-4">Order Summary</h2>
              
              <Separator className="mb-4" />
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              
              <Separator className="mb-4" />
              
              <div className="flex justify-between font-medium text-lg mb-6">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              
              <Button 
                className="w-full rounded-full bg-plant-sage hover:bg-plant-forest"
                onClick={() => navigate("/checkout")}
              >
                Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                Shipping and taxes calculated at checkout.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
