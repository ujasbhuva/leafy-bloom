
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-plant-beige/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-display font-medium mb-6 text-plant-forest">Our Journey with Plants</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Welcome to LeafyBloom, where our passion for plants transforms spaces and lives. 
                  Founded in 2020, we've grown from a small home-based business to a community 
                  of plant enthusiasts dedicated to bringing nature indoors.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our mission is simple: to help you discover the perfect plants for your space and 
                  provide the knowledge you need to help them thrive.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&q=80&w=1080" 
                  alt="Our store" 
                  className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-medium mb-12 text-center">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div className="flex flex-col justify-center">
                <p className="mb-4">
                  LeafyBloom began as a simple idea between two friends with a shared love of houseplants. 
                  What started in a small greenhouse with just a dozen varieties has grown into a curated 
                  collection of hundreds of plants from around the world.
                </p>
                <p className="mb-4">
                  We source our plants directly from sustainable growers who share our values of 
                  environmental responsibility and ethical cultivation practices. Each plant in 
                  our collection is hand-selected for quality and health.
                </p>
                <p>
                  Beyond selling plants, we've created a community where knowledge is shared and 
                  questions are welcomed. Whether you're a seasoned plant parent or just beginning 
                  your journey, we're here to help your green friends flourish.
                </p>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&q=80&w=1080" 
                    alt="Our journey" 
                    className="rounded-lg h-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1516048015710-7a3b4c86be43?auto=format&fit=crop&q=80&w=1080" 
                    alt="Our plants" 
                    className="rounded-lg h-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1530968348606-69c989d6efc9?auto=format&fit=crop&q=80&w=1080" 
                    alt="Plant care" 
                    className="rounded-lg h-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1528465258429-0c606ebeaad8?auto=format&fit=crop&q=80&w=1080" 
                    alt="Our greenhouse" 
                    className="rounded-lg h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 bg-plant-beige/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-medium mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1080" 
                  alt="Sarah Johnson" 
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-medium text-center">Sarah Johnson</h3>
                <p className="text-plant-sage text-center mb-3">Co-Founder & Plant Expert</p>
                <p className="text-muted-foreground text-center">
                  With a degree in botany and 10+ years in horticulture, Sarah brings expertise and passion to every plant we source.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080" 
                  alt="David Chen" 
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-medium text-center">David Chen</h3>
                <p className="text-plant-sage text-center mb-3">Co-Founder & Creative Director</p>
                <p className="text-muted-foreground text-center">
                  David's background in design helps us create beautiful plant arrangements and spaces that inspire our customers.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1080" 
                  alt="Maya Patel" 
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-medium text-center">Maya Patel</h3>
                <p className="text-plant-sage text-center mb-3">Plant Care Specialist</p>
                <p className="text-muted-foreground text-center">
                  Maya develops our care guides and provides expert advice to help you keep your plants thriving year-round.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-medium mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-plant-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-plant-sage">
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
                    <path d="M8.5 8.5a7 7 0 0 0 9.9 9.9"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to eco-friendly practices, from biodegradable packaging to partnering with growers who share our environmental values.
                </p>
              </div>
              
              {/* Value 2 */}
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-plant-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-plant-sage">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We believe in building a community of plant lovers who share knowledge and inspire each other in their plant journeys.
                </p>
              </div>
              
              {/* Value 3 */}
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-plant-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-plant-sage">
                    <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10"/>
                    <path d="m15 9-6 6"/>
                    <path d="m9 9 6 6"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Education</h3>
                <p className="text-muted-foreground">
                  We're dedicated to providing the knowledge and resources you need to become a confident and successful plant parent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-plant-beige/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-medium mb-6 text-center">Visit Our Store</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              We'd love to meet you in person! Come visit our store to explore our plant collection, 
              attend workshops, and get personalized plant care advice.
            </p>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium mb-4">Store Hours</h3>
                <Separator className="mb-4" />
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <p>Monday - Friday</p>
                  <p>10:00 AM - 7:00 PM</p>
                  <p>Saturday</p>
                  <p>9:00 AM - 8:00 PM</p>
                  <p>Sunday</p>
                  <p>11:00 AM - 6:00 PM</p>
                </div>
                <h3 className="text-xl font-medium mb-4">Contact Information</h3>
                <Separator className="mb-4" />
                <div className="space-y-2">
                  <p>📞 (555) 123-4567</p>
                  <p>✉️ hello@leafybloom.com</p>
                  <p>📍 123 Green Street, Plantville, CA 94123</p>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080" 
                  alt="Our store location" 
                  className="w-full h-full object-cover rounded-xl shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
