import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-12 flex-grow">
          <div className="text-center">
            <h1 className="text-2xl font-display font-medium mb-4">
              Blog post not found
            </h1>
            <Button onClick={() => navigate("/blogs")}>Back to blogs</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Image */}
        <div className="w-full h-64 md:h-80 lg:h-96 relative">
          <div className="absolute inset-0 bg-black/40"></div>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/70 to-transparent">
            <div className="container mx-auto">
              <Badge className="mb-3 bg-plant-sage text-white border-0">
                {blog.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-6">
              <Button
                variant="ghost"
                className="text-plant-forest hover:text-plant-forest hover:bg-plant-sage/10"
                onClick={() => navigate("/blogs")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all blogs
              </Button>
            </div>

            {/* Blog Meta */}
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8 pb-4 border-b border-plant-beige">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-2 md:mt-0">
                <Tag className="h-4 w-4" />
                {blog.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-plant-beige/30 border-plant-beige"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="prose max-w-none lg:prose-lg">
              <div
                dangerouslySetInnerHTML={{
                  __html: blog.content
                    .replace(
                      /<h2>/g,
                      '<h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">'
                    )
                    .replace(
                      /<h3>/g,
                      '<h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">'
                    )
                    .replace(
                      /<p>/g,
                      '<p class="text-gray-700 mb-4 leading-relaxed">'
                    )
                    .replace(
                      /<ul>/g,
                      '<ul class="list-disc pl-5 mb-6 text-gray-700">'
                    )
                    .replace(
                      /<ol>/g,
                      '<ol class="list-decimal pl-5 mb-6 text-gray-700">'
                    )
                    .replace(/<li>/g, '<li class="mb-2">'),
                }}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
