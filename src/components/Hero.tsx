
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-plant-beige/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left max-w-xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-plant-forest mb-4 leading-tight">
              Bring Nature Inside<br /> Your Living Space
            </h1>
            <p className="text-lg mb-6 text-muted-foreground">
              Discover our collection of beautiful, hand-picked plants that add life and freshness to your home. From easy-care options to exotic varieties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-plant-sage hover:bg-plant-forest">
                Shop Plants <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Plant Care Guide
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-white/80 rounded-lg">
                <p className="text-xl font-semibold text-plant-forest">100+</p>
                <p className="text-xs text-muted-foreground">Plant Varieties</p>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg">
                <p className="text-xl font-semibold text-plant-forest">Nationwide</p>
                <p className="text-xs text-muted-foreground">Shipping</p>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg">
                <p className="text-xl font-semibold text-plant-forest">30-Day</p>
                <p className="text-xs text-muted-foreground">Guarantee</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1602934585418-f588bea4215c?auto=format&fit=crop&q=80&w=800"
              alt="Indoor plants in beautiful setting"
              className="rounded-lg object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg plant-card-shadow hidden lg:block">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1587334274328-64186a80aeee?auto=format&fit=crop&q=80&w=200"
                  alt="Monstera plant"
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <span className="text-xs text-muted-foreground">Best Seller</span>
                  <h3 className="font-medium">Monstera Deliciosa</h3>
                  <p className="text-plant-terracotta font-semibold">$39.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
