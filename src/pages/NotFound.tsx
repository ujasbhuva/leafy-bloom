
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-plant-forest mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          <div className="max-w-md mx-auto mb-8">
            <p className="text-muted-foreground">
              The page might have been moved, deleted, or perhaps never existed.
              Let's get you back to browsing our beautiful plants.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-plant-sage hover:bg-plant-forest">
              <Link to="/">Back to Home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/plants">Browse Plants</Link>
            </Button>
          </div>
          
          <div className="mt-12">
            <img
              src="https://images.unsplash.com/photo-1566836610593-62a64888a216?auto=format&fit=crop&q=80&w=800"
              alt="Lost plant illustration"
              className="max-w-xs mx-auto rounded-lg opacity-80"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
