
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-plant-beige/50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">LeafyBloom</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Bringing nature indoors with our carefully curated selection of beautiful, healthy plants for every space.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/plants" className="hover:text-plant-forest transition-colors">All Plants</a></li>
              <li><a href="/plants?category=Foliage" className="hover:text-plant-forest transition-colors">Foliage Plants</a></li>
              <li><a href="/plants?category=Succulents" className="hover:text-plant-forest transition-colors">Succulents</a></li>
              <li><a href="/plants?category=Flowering" className="hover:text-plant-forest transition-colors">Flowering Plants</a></li>
              <li><a href="/planters" className="hover:text-plant-forest transition-colors">Planters</a></li>
              <li><a href="/tools" className="hover:text-plant-forest transition-colors">Tools & Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/faq" className="hover:text-plant-forest transition-colors">FAQs</a></li>
              <li><a href="/shipping" className="hover:text-plant-forest transition-colors">Shipping Information</a></li>
              <li><a href="/returns" className="hover:text-plant-forest transition-colors">Returns & Exchanges</a></li>
              <li><a href="/care-guide" className="hover:text-plant-forest transition-colors">Plant Care Guides</a></li>
              <li><a href="/contact" className="hover:text-plant-forest transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Join Our Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for plant care tips, exclusive offers and new arrivals.
            </p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="rounded-l-none bg-plant-sage hover:bg-plant-forest">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-plant-beige pt-6 mt-6 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} LeafyBloom. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-plant-forest transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-plant-forest transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
