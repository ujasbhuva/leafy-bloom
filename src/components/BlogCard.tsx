
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/blogs";

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 rounded-xl border-plant-beige/30">
      <Link to={`/blogs/${blog.id}`} className="flex flex-col h-full">
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar className="h-4 w-4" />
            <span>{blog.date}</span>
          </div>
          <h3 className="text-xl font-display font-medium line-clamp-2 leading-tight">
            {blog.title}
          </h3>
          <Badge variant="outline" className="w-fit bg-plant-sage/10 text-plant-forest border-plant-sage/20">
            {blog.category}
          </Badge>
        </CardHeader>
        <CardContent className="py-2">
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {blog.excerpt}
          </p>
        </CardContent>
        <CardFooter className="pt-1 pb-4 mt-auto">
          <p className="text-sm">
            By {blog.author}
          </p>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default BlogCard;
