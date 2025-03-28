
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const BlogCard = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <Link to={`/blog/${post.slug}`}>
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl tracking-tight hover:text-primary transition-colors">
              {post.title}
            </CardTitle>
            <CardDescription className="line-clamp-2">
              {post.excerpt}
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex flex-wrap text-sm text-muted-foreground gap-4">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.readTime} mins read</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{post.author}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-secondary text-primary/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardFooter>
        </Link>
      </Card>
    </motion.div>
  );
};

export default BlogCard;