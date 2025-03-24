
import { motion } from 'framer-motion';
import { Code, Layout, Lightbulb, CheckCircle, Zap, BookOpen } from 'lucide-react';
import SectionHeading from '../components/main/SectionHeading';
import CourseCard from '../components/main/CourseCard';

const Courses = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading subtext="Course Catalog" centered>
          Comprehensive Frontend Engineering Courses
        </SectionHeading>
        
        <p className="mt-6 text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12 md:mb-16">
          Choose from a variety of specialized courses designed to help you master modern frontend development and advance your career.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <CourseCard
            icon={<Code size={20} />}
            title="JavaScript Fundamentals"
            description="Build a strong foundation in JavaScript with a focus on modern ES6+ features, asynchronous programming, and functional concepts."
            topics={["ES6+", "Promises", "Closures", "Functional JS"]}
          />
          
          <CourseCard
            icon={<Code size={20} />}
            title="Advanced JavaScript"
            description="Dive deep into advanced JavaScript patterns, performance optimization, and browser APIs for professional applications."
            topics={["Design Patterns", "Memory Management", "Web APIs", "TypeScript"]}
          />
          
          <CourseCard
            icon={<Zap size={20} />}
            title="React Fundamentals"
            description="Learn React from the ground up, including components, props, state, JSX, and the core concepts that make React powerful."
            topics={["Components", "Props & State", "Hooks", "JSX"]}
          />
          
          <CourseCard
            icon={<Zap size={20} />}
            title="Advanced React Patterns"
            description="Master advanced React patterns, hooks, context, performance optimization and state management."
            topics={["Custom Hooks", "Context API", "Suspense", "React Query"]}
          />
          
          <CourseCard
            icon={<Layout size={20} />}
            title="Modern CSS & Tailwind"
            description="Build responsive, beautiful UIs with modern CSS techniques and the utility-first approach of Tailwind CSS."
            topics={["Flexbox & Grid", "Responsive Design", "Animations", "Tailwind"]}
          />
          
          <CourseCard
            icon={<Layout size={20} />}
            title="UI Libraries Masterclass"
            description="Learn to leverage shadcn/ui, DaisyUI, and other modern component libraries to build professional interfaces quickly."
            topics={["shadcn/ui", "DaisyUI", "MagicUI", "Component Design"]}
          />
          
          <CourseCard
            icon={<Lightbulb size={20} />}
            title="Frontend Interview Prep"
            description="Comprehensive preparation for frontend engineering interviews, with real questions from top companies."
            topics={["Coding Challenges", "System Design", "Behavioral", "Portfolio Review"]}
          />
          
          <CourseCard
            icon={<BookOpen size={20} />}
            title="Frontend System Design"
            description="Learn to design and architect complex frontend applications that scale, focusing on performance and maintainability."
            topics={["Architecture", "State Management", "Performance", "API Design"]}
          />
          
          <CourseCard
            icon={<CheckCircle size={20} />}
            title="Machine Coding"
            description="Practice building complex UI components and systems from scratch, a key skill for frontend interviews."
            topics={["Autocomplete", "Infinite Scroll", "Drag & Drop", "Form Builder"]}
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 p-6 md:p-8 rounded-xl bg-primary/5 border border-primary/10"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Custom Training Programs
            </h3>
            <p className="text-muted-foreground mb-6">
              Need specialized training for yourself or your team? I offer custom-tailored programs designed to address your specific learning objectives and skill gaps.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Discuss Custom Training
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;