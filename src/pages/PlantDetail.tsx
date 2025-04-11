
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { plants } from "@/data/plants";
import { ArrowLeft, Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import FeaturedPlants from "@/components/FeaturedPlants";

const PlantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const plant = plants.find((p) => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  if (!plant) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center flex-col p-8">
          <h1 className="text-2xl font-semibold mb-4">Plant not found</h1>
          <p className="text-muted-foreground mb-6">
            Sorry, we couldn't find the plant you're looking for.
          </p>
          <Button onClick={() => navigate("/plants")}>Return to Plants</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} × ${plant.name} added to your cart`,
    });
  };
  
  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${plant.name} added to your wishlist`,
    });
  };

  // Helper functions to render plant attributes
  const renderCareLevel = (level: string) => {
    const levels = {
      beginner: { label: "Easy", dots: 1 },
      intermediate: { label: "Moderate", dots: 2 },
      expert: { label: "Expert", dots: 3 },
    };
    
    const { label, dots } = levels[level as keyof typeof levels];
    
    return (
      <div className="flex items-center">
        <span className="mr-2">{label}</span>
        <div className="flex">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className={`h-2 w-2 rounded-full mx-0.5 ${i <= dots ? "bg-plant-forest" : "bg-gray-200"}`}
            />
          ))}
        </div>
      </div>
    );
  };
  
  const renderLightLevel = (level: string) => {
    const levels = {
      low: { label: "Low Light", dots: 1 },
      medium: { label: "Medium Light", dots: 2 },
      bright: { label: "Bright Light", dots: 3 },
    };
    
    const { label, dots } = levels[level as keyof typeof levels];
    
    return (
      <div className="flex items-center">
        <span className="mr-2">{label}</span>
        <div className="flex">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className={`h-2 w-2 rounded-full mx-0.5 ${i <= dots ? "bg-plant-forest" : "bg-gray-200"}`}
            />
          ))}
        </div>
      </div>
    );
  };
  
  const renderWaterLevel = (level: string) => {
    const levels = {
      low: { label: "Low Water", dots: 1 },
      medium: { label: "Regular Water", dots: 2 },
      high: { label: "Frequent Water", dots: 3 },
    };
    
    const { label, dots } = levels[level as keyof typeof levels];
    
    return (
      <div className="flex items-center">
        <span className="mr-2">{label}</span>
        <div className="flex">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className={`h-2 w-2 rounded-full mx-0.5 ${i <= dots ? "bg-plant-forest" : "bg-gray-200"}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center text-plant-forest hover:text-plant-sage transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Plants
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src={plant.images[selectedImage]}
                  alt={plant.name}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="flex gap-4 overflow-auto pb-2">
                {plant.images.map((image, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md ${
                      selectedImage === i ? "ring-2 ring-plant-forest" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${plant.name} view ${i + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Plant details */}
            <div>
              <h1 className="text-3xl font-semibold mb-1">{plant.name}</h1>
              <p className="text-lg text-muted-foreground italic mb-4">{plant.scientificName}</p>
              
              <div className="flex items-baseline mb-6">
                {plant.salePrice ? (
                  <>
                    <span className="text-2xl font-semibold text-plant-terracotta mr-2">${plant.salePrice.toFixed(2)}</span>
                    <span className="text-lg text-muted-foreground line-through">${plant.price.toFixed(2)}</span>
                  </>
                ) : (
                  <span className="text-2xl font-semibold">${plant.price.toFixed(2)}</span>
                )}
              </div>
              
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`inline-flex h-3 w-3 rounded-full ${
                    plant.availability === "in-stock" ? "bg-green-500" :
                    plant.availability === "low-stock" ? "bg-amber-500" :
                    "bg-red-500"
                  }`}></span>
                  <span className="capitalize">
                    {plant.availability === "in-stock" ? "In Stock" :
                     plant.availability === "low-stock" ? "Low Stock" :
                     "Out of Stock"}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="bg-plant-beige text-xs px-2 py-1 rounded-full">
                    {plant.category}
                  </span>
                  
                  {plant.petFriendly && (
                    <span className="bg-plant-beige text-xs px-2 py-1 rounded-full">
                      Pet Friendly
                    </span>
                  )}
                  
                  {plant.airPurifying && (
                    <span className="bg-plant-beige text-xs px-2 py-1 rounded-full">
                      Air Purifying
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">{plant.description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-3 bg-plant-beige/30 rounded-lg text-sm text-center">
                  <div className="text-plant-forest mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-1">
                      <path d="M12 2v10"></path>
                      <path d="m12 16 2-2"></path>
                      <path d="m12 16-2-2"></path>
                      <path d="M12 16v6"></path>
                    </svg>
                  </div>
                  {renderCareLevel(plant.careLevel)}
                </div>
                
                <div className="p-3 bg-plant-beige/30 rounded-lg text-sm text-center">
                  <div className="text-plant-forest mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-1">
                      <circle cx="12" cy="12" r="5"></circle>
                      <path d="M12 1v2"></path>
                      <path d="M12 21v2"></path>
                      <path d="M4.22 4.22l1.42 1.42"></path>
                      <path d="M18.36 18.36l1.42 1.42"></path>
                      <path d="M1 12h2"></path>
                      <path d="M21 12h2"></path>
                      <path d="M4.22 19.78l1.42-1.42"></path>
                      <path d="M18.36 5.64l1.42-1.42"></path>
                    </svg>
                  </div>
                  {renderLightLevel(plant.light)}
                </div>
                
                <div className="p-3 bg-plant-beige/30 rounded-lg text-sm text-center">
                  <div className="text-plant-forest mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-1">
                      <path d="M7 21h10"></path>
                      <path d="M12 21v-2"></path>
                      <path d="M3 7v5h19V7l-9-4-9 4Z"></path>
                      <path d="M3 12v3c0 1.5 3 2.6 3 5"></path>
                      <path d="M21 12v3c0 1.5-3 2.6-3 5"></path>
                    </svg>
                  </div>
                  {renderWaterLevel(plant.water)}
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="flex gap-4 items-center mb-6">
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-10 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    className="h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button 
                  className="flex-1 bg-plant-sage hover:bg-plant-forest" 
                  onClick={handleAddToCart}
                  disabled={plant.availability === "out-of-stock"}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleAddToWishlist}
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Tabs defaultValue="details">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
                <TabsTrigger 
                  value="details"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-plant-forest data-[state=active]:bg-transparent py-3 px-6"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger 
                  value="care"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-plant-forest data-[state=active]:bg-transparent py-3 px-6"
                >
                  Care Guide
                </TabsTrigger>
                <TabsTrigger 
                  value="shipping"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-plant-forest data-[state=active]:bg-transparent py-3 px-6"
                >
                  Shipping
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">About this plant</h3>
                    <p className="mb-4 text-muted-foreground">{plant.description}</p>
                    
                    <h4 className="font-medium mb-2">Features</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
                      {plant.petFriendly && <li>Pet friendly</li>}
                      {plant.airPurifying && <li>Air purifying qualities</li>}
                      <li>Size: {plant.size === "small" ? "Small (up to 12 inches)" : plant.size === "medium" ? "Medium (12-24 inches)" : "Large (over 24 inches)"}</li>
                      {plant.tags.map((tag, index) => (
                        <li key={index} className="capitalize">{tag.replace('-', ' ')}</li>
                      ))}
                    </ul>
                    
                    <h4 className="font-medium mb-2">Perfect Location</h4>
                    <p className="text-muted-foreground">
                      This plant works well in: {plant.roomSuggestion.join(', ')}
                    </p>
                  </div>
                  
                  <div className="bg-plant-beige/30 p-6 rounded-lg">
                    <h3 className="text-lg font-medium mb-4">Plant Specifications</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Scientific Name</span>
                        <span className="font-medium">{plant.scientificName}</span>
                      </div>
                      
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Family</span>
                        <span className="font-medium">Araceae</span>
                      </div>
                      
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Native Region</span>
                        <span className="font-medium">Tropical Americas</span>
                      </div>
                      
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Growth Rate</span>
                        <span className="font-medium">Moderate</span>
                      </div>
                      
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Mature Height</span>
                        <span className="font-medium">3-5 feet</span>
                      </div>
                      
                      <div className="flex justify-between pb-2">
                        <span className="text-muted-foreground">Ideal Temperature</span>
                        <span className="font-medium">65-80°F (18-27°C)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="care" className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-plant-beige/30 p-6 rounded-lg">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-plant-forest">
                        <path d="M12 2v10"></path>
                        <path d="m12 16 2-2"></path>
                        <path d="m12 16-2-2"></path>
                        <path d="M12 16v6"></path>
                      </svg>
                    </div>
                    <h4 className="font-medium mb-2">Care Level</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      This plant is rated as <span className="font-medium">{plant.careLevel}</span> to care for.
                    </p>
                    {renderCareLevel(plant.careLevel)}
                  </div>
                  
                  <div className="bg-plant-beige/30 p-6 rounded-lg">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-plant-forest">
                        <circle cx="12" cy="12" r="5"></circle>
                        <path d="M12 1v2"></path>
                        <path d="M12 21v2"></path>
                        <path d="M4.22 4.22l1.42 1.42"></path>
                        <path d="M18.36 18.36l1.42 1.42"></path>
                        <path d="M1 12h2"></path>
                        <path d="M21 12h2"></path>
                        <path d="M4.22 19.78l1.42-1.42"></path>
                        <path d="M18.36 5.64l1.42-1.42"></path>
                      </svg>
                    </div>
                    <h4 className="font-medium mb-2">Light Requirements</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      This plant prefers <span className="font-medium">{plant.light}</span> light conditions.
                    </p>
                    {renderLightLevel(plant.light)}
                  </div>
                  
                  <div className="bg-plant-beige/30 p-6 rounded-lg">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-plant-forest">
                        <path d="M7 21h10"></path>
                        <path d="M12 21v-2"></path>
                        <path d="M3 7v5h19V7l-9-4-9 4Z"></path>
                        <path d="M3 12v3c0 1.5 3 2.6 3 5"></path>
                        <path d="M21 12v3c0 1.5-3 2.6-3 5"></path>
                      </svg>
                    </div>
                    <h4 className="font-medium mb-2">Water Requirements</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      This plant needs <span className="font-medium">{plant.water}</span> watering frequency.
                    </p>
                    {renderWaterLevel(plant.water)}
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Care Tips</h3>
                  <ul className="space-y-4">
                    {plant.careTips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 bg-plant-sage/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-plant-forest">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="shipping" className="pt-6">
                <div className="bg-plant-beige/30 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-medium mb-4">Shipping Information</h3>
                  <p className="mb-4 text-muted-foreground">
                    We carefully package all plants to ensure they arrive in perfect condition. Each plant is wrapped securely with eco-friendly materials to protect it during transit.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-5 w-5 bg-plant-sage/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs text-plant-forest font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Processing Time</h4>
                        <p className="text-sm text-muted-foreground">Orders are processed within 1-3 business days.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-5 w-5 bg-plant-sage/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs text-plant-forest font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Shipping Time</h4>
                        <p className="text-sm text-muted-foreground">Standard shipping takes 3-7 business days. Express shipping is available at checkout.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-5 w-5 bg-plant-sage/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs text-plant-forest font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">30-Day Guarantee</h4>
                        <p className="text-sm text-muted-foreground">All plants are covered by our 30-day happiness guarantee.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg plant-card-shadow">
                  <h4 className="font-medium mb-3">Shipping Restrictions</h4>
                  <p className="text-sm text-muted-foreground">
                    Due to agricultural restrictions, we currently cannot ship plants to the following locations:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mt-2">
                    <li>Hawaii</li>
                    <li>Alaska</li>
                    <li>Puerto Rico</li>
                    <li>International destinations</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <FeaturedPlants
            title="You Might Also Like"
            filter={(p) => p.id !== plant.id && (p.category === plant.category || p.tags.some(tag => plant.tags.includes(tag)))}
            className="mt-12 pt-6 border-t"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlantDetail;
