
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FeaturedPlants from "@/components/FeaturedPlants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <FeaturedPlants 
          title="Featured Plants"
          subtitle="Our carefully selected favorites this season"
          filter={(plant) => plant.featured}
        />
        
        <section className="py-12 bg-plant-sage/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg plant-card-shadow">
                <div className="h-12 w-12 bg-plant-sage/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-plant-forest">
                    <path d="M9 11a4 4 0 0 1 8 0" />
                    <path d="M8 21h8" />
                    <path d="M12 12v9" />
                    <path d="M7.714 3h8.572L18 7.8l-2.286.7" />
                    <path d="m8.286 7.7-2.286-.7L7.714 3" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Easy Care Plants</h3>
                <p className="text-sm text-muted-foreground">Perfect for beginners and busy plant parents who want low-maintenance greenery.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg plant-card-shadow">
                <div className="h-12 w-12 bg-plant-sage/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-plant-forest">
                    <path d="M4 13c3.5-2 8-2 11.5 0" />
                    <path d="M4 13v9h11.5v-9" />
                    <path d="m15.5 13 4-9" />
                    <path d="M9.5 13v5a2 2 0 0 0 2 2v0h.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Air Purifying</h3>
                <p className="text-sm text-muted-foreground">Plants that help clean indoor air by removing toxins and increasing oxygen levels.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg plant-card-shadow">
                <div className="h-12 w-12 bg-plant-sage/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-plant-forest">
                    <path d="M15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    <path d="M6 12a3 3 0 0 0 0-6 3 3 0 0 0 0 6z" />
                    <path d="M17 13a2 2 0 0 1 0 4 2 2 0 0 1 0-4z" />
                    <path d="M7 21a5 5 0 0 1 5-5 5 5 0 0 1 5 5H7z" />
                    <path d="M15 6.5c2.5 0 4 1.8 4 4.5v3c0 1-1 2-2.5 2s-2.5-1-2.5-2v-7z" />
                    <path d="M9 7c-2.5 0-4 1.8-4 4.5v3c0 1 1 2 2.5 2s2.5-1 2.5-2v-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Pet Friendly</h3>
                <p className="text-sm text-muted-foreground">Safe options for homes with curious pets that won't cause harm if nibbled on.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg plant-card-shadow">
                <div className="h-12 w-12 bg-plant-sage/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-plant-forest">
                    <path d="M12 2v20" />
                    <path d="m4.93 10.93 14.14-7.07" />
                    <path d="m4.93 13.07 14.14 7.07" />
                    <circle cx="12" cy="2" r="2" />
                    <circle cx="12" cy="22" r="2" />
                    <circle cx="19.07" cy="6" r="2" />
                    <circle cx="19.07" cy="18" r="2" />
                    <circle cx="4.93" cy="10.93" r="2" />
                    <circle cx="4.93" cy="13.07" r="2" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Expert Support</h3>
                <p className="text-sm text-muted-foreground">Get plant care advice and tips from our team of horticultural experts.</p>
              </div>
            </div>
          </div>
        </section>

        <FeaturedPlants 
          title="New Arrivals"
          subtitle="The latest additions to our plant family"
          filter={(plant) => plant.newArrival}
        />
        
        <section className="py-16 bg-plant-terracotta/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <img 
                src="https://images.unsplash.com/photo-1604762512641-341acbcac90c?auto=format&fit=crop&q=80&w=800"
                alt="Person watering plants"
                className="rounded-lg object-cover h-[400px] w-full"
              />
              
              <div>
                <h2 className="text-3xl font-semibold mb-4">Plant Care Made Simple</h2>
                <p className="mb-6 text-muted-foreground">
                  We believe everyone can be a successful plant parent. Our detailed care guides and ongoing support help you keep your plants thriving year-round.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-6 w-6 bg-plant-sage/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-plant-forest">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Personalized care schedules</h4>
                      <p className="text-sm text-muted-foreground">Get reminders tailored to each plant's specific needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 bg-plant-sage/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-plant-forest">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Troubleshooting help</h4>
                      <p className="text-sm text-muted-foreground">Expert advice when your plants need special attention.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 bg-plant-sage/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-plant-forest">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Seasonal care tips</h4>
                      <p className="text-sm text-muted-foreground">Guidance to help plants thrive through changing seasons.</p>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-6 bg-plant-sage hover:bg-plant-forest">
                  Explore Care Guides <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-2">Find the Perfect Plant</h2>
              <p className="text-muted-foreground">Browse our complete collection to find your new green friend</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/plants?category=Foliage" className="group relative h-60 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1620127252536-03bdfcb67c86?auto=format&fit=crop&q=80&w=800"
                  alt="Foliage Plants"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plant-forest/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-medium text-white mb-1">Foliage Plants</h3>
                  <p className="text-white/80 text-sm mb-3">Bold leaves for dramatic impact</p>
                  <Button size="sm" variant="secondary" className="bg-white text-plant-forest hover:bg-white/90">
                    Explore
                  </Button>
                </div>
              </Link>
              
              <Link to="/plants?category=Succulents" className="group relative h-60 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=800"
                  alt="Succulents"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plant-forest/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-medium text-white mb-1">Succulents</h3>
                  <p className="text-white/80 text-sm mb-3">Low-maintenance desert beauties</p>
                  <Button size="sm" variant="secondary" className="bg-white text-plant-forest hover:bg-white/90">
                    Explore
                  </Button>
                </div>
              </Link>
              
              <Link to="/plants?category=Flowering" className="group relative h-60 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1615213612138-4d1195b8e0bb?auto=format&fit=crop&q=80&w=800"
                  alt="Flowering Plants"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plant-forest/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-medium text-white mb-1">Flowering Plants</h3>
                  <p className="text-white/80 text-sm mb-3">Add color and fragrance to your home</p>
                  <Button size="sm" variant="secondary" className="bg-white text-plant-forest hover:bg-white/90">
                    Explore
                  </Button>
                </div>
              </Link>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/plants">
                <Button variant="outline" size="lg">
                  View All Categories <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-plant-beige/60">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-2">What Our Customers Say</h2>
              <p className="text-muted-foreground">Real experiences from plant lovers like you</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg plant-card-shadow">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FFB800" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="text-sm mb-4">
                  "My Monstera arrived in perfect condition and is thriving in my living room. The care instructions were so helpful for a beginner like me."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-plant-sage/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-plant-forest font-medium">JD</span>
                  </div>
                  <div>
                    <p className="font-medium">Jessica D.</p>
                    <p className="text-xs text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg plant-card-shadow">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FFB800" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="text-sm mb-4">
                  "The ZZ plant I ordered has been practically indestructible despite my busy schedule. The packaging was eco-friendly and secure."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-plant-sage/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-plant-forest font-medium">MT</span>
                  </div>
                  <div>
                    <p className="font-medium">Michael T.</p>
                    <p className="text-xs text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg plant-card-shadow">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FFB800" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="text-sm mb-4">
                  "I'm now a proud plant parent to six LeafyBloom plants! Each one arrived healthy and the customer service team has been incredibly helpful."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-plant-sage/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-plant-forest font-medium">SL</span>
                  </div>
                  <div>
                    <p className="font-medium">Sarah L.</p>
                    <p className="text-xs text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
