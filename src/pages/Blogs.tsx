
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { blogs, BlogPost } from "@/data/blogs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const categories = ["All", "Care Tips", "Plant Guides", "Indoor Gardening", "Plant Health"];

const Blogs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Filter blogs based on category and search query
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-plant-sage/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4 text-plant-forest">
              Plant Care Blog
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              Expert advice, tips, and guides to help your plants thrive. Explore our articles and grow your plant care knowledge.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mt-8 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        {/* Blog Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Category Tabs */}
          <Tabs 
            defaultValue="All" 
            value={activeCategory} 
            onValueChange={setActiveCategory}
            className="mb-8"
          >
            <div className="flex justify-center">
              <TabsList className="bg-plant-beige/30 rounded-full h-auto p-1">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="rounded-full data-[state=active]:bg-white px-4 py-2 text-sm"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {/* Blog Grid - All Categories */}
            <TabsContent value={activeCategory} className="mt-6">
              {filteredBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">No articles found. Try a different search term.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blogs;
