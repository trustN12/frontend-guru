
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import SectionHeading from '../components/main/SectionHeading';
import BlogCard from '../components/main/BlogCard';

const blogPosts = [
  {
    id: 1,
    title: "Mastering React Hooks: Beyond the Basics",
    slug: "mastering-react-hooks",
    excerpt: "Explore advanced use cases for React Hooks and learn patterns that will take your component architecture to the next level.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    date: "May 12, 2024",
    readTime: 10,
    author: "Nabarun Biswas",
    tags: ["React", "JavaScript", "Web Development"],
    content: "",
  },
  {
    id: 2,
    title: "System Design for Frontend Engineers",
    slug: "system-design-frontend",
    excerpt: "A comprehensive guide to frontend system design interviews and real-world architecture planning for scalable applications.",
    image: "https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    date: "April 28, 2024",
    readTime: 10,
    author: "Nabarun Biswas",
    tags: ["System Design", "Architecture", "Career"],
    content: "",
  },
  {
    id: 3,
    title: "Modern CSS Techniques Every Developer Should Know",
    slug: "modern-css-techniques",
    excerpt: "From CSS Grid to custom properties, discover the modern CSS features that will transform how you approach styling your web applications.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    date: "September 15, 2024",
    readTime: 5,
    author: "Nabarun Biswas",
    tags: ["CSS", "Web Design", "Tailwind"],
    content: "",
  },
  {
    id: 4,
    title: "Optimizing React Performance: A Practical Guide",
    slug: "optimizing-react-performance",
    excerpt: "Learn practical techniques to identify and solve common performance bottlenecks in your React applications.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    date: "March 31, 2023",
    readTime: 15,
    author: "Nabarun Biswas",
    tags: ["React", "Performance", "JavaScript"],
    content: "",
  },
  {
    id: 5,
    title: "Preparing for Frontend Interviews: What Companies Really Look For",
    slug: "frontend-interview-preparation",
    excerpt: "Insights from my experience as both an interviewer and candidate at top tech companies. Learn what matters most in frontend engineering interviews.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    date: "March 18, 2023",
    readTime: 11,
    author: "Nabarun Biswas",
    tags: ["Career", "Interviews", "Job Search"],
    content: "",
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  
  // Extract all unique tags
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
  
  // Filter posts based on search term and selected tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading subtext="Insights & Tutorials" centered>
          Frontend Engineering Blog
        </SectionHeading>
        
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag('')}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTag === '' 
                  ? 'bg-primary text-white' 
                  : 'bg-secondary text-muted-foreground hover:text-primary'
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTag === tag 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary text-muted-foreground hover:text-primary'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No blog posts found matching your criteria.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;