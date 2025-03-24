import { motion } from 'framer-motion';
import { ArrowRight, Book, Check, Code, Laptop, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/main/SectionHeading';

const About = () => {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                Nabarun Biswas
              </h1>
              <p className="text-xl text-muted-foreground">
                Frontend Engineer & Educator
              </p>
              <div className="space-y-4 text-muted-foreground text-pretty">
                <p>
                  I'm a passionate frontend engineer with years of experience building modern web applications and teaching others to do the same. My expertise spans JavaScript, React, and a variety of modern UI frameworks.
                </p>
                <p>
                  What sets my teaching approach apart is my focus on both theory and practical application. I believe in teaching not just the "how" but also the "why," giving students a deeper understanding that helps them solve real-world problems.
                </p>
                <p>
                  Many of my teaching materials cover advanced topics that are difficult to find elsewhere, including specialized frontend system design patterns and performance optimization techniques that are crucial for senior roles.
                </p>
              </div>
              
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-auto bg-gradient-to-tr from-primary/5 to-primary/20 rounded-2xl p-10 md:p-8 flex items-center justify-center">
                <div className="w-full h-full overflow-hidden rounded-lg">
                  <img 
                    src="/profile-banner.png" 
                    alt="Nabarun Biswas" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-primary/10 animate-float"></div>
              <div className="absolute -left-6 -top-6 w-12 h-12 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "1s" }}></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtext="Areas of Expertise" centered>
            My Technical Skills & Knowledge
          </SectionHeading>
          
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <Code size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">JavaScript Ecosystem</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Deep expertise in modern JavaScript, including ES6+, TypeScript, and framework-agnostic patterns.
              </p>
              <ul className="space-y-2">
                {['ES6+ Features', 'Asynchronous JS', 'Functional Programming', 'TypeScript'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <Laptop size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">React & Frontend Frameworks</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Specialized knowledge in React and its ecosystem, along with modern frontend architecture.
              </p>
              <ul className="space-y-2">
                {['React Hooks & Patterns', 'Redux & State Management', 'Performance Optimization', 'Next.js'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <Book size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">UI Development</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Mastery of modern UI frameworks and design systems for creating beautiful interfaces.
              </p>
              <ul className="space-y-2">
                {['Tailwind CSS', 'shadcn/ui', 'DaisyUI', 'CSS Architecture'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <Award size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Technical Interviews</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Extensive experience with frontend technical interviews and assessment processes.
              </p>
              <ul className="space-y-2">
                {['Coding Challenges', 'System Design', 'Behavioral Questions', 'Portfolio Review'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <Clock size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Performance Optimization</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Specialized knowledge in frontend performance monitoring, debugging and optimization.
              </p>
              <ul className="space-y-2">
                {['Load Time Optimization', 'Runtime Performance', 'Memory Management', 'Rendering Optimization'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <Code size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">System Design</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Frontend architecture and system design principles for scalable applications.
              </p>
              <ul className="space-y-2">
                {['Component Architecture', 'State Management', 'API Design', 'Scalability Patterns'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtext="Teaching Approach" centered>
            My Educational Philosophy
          </SectionHeading>
          
          <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6 text-pretty text-muted-foreground"
            >
              <p>
                My teaching philosophy centers around practical mastery through a deep understanding of fundamentals. I believe that to excel as a frontend engineer, you need more than just syntax knowledge—you need to understand the underlying principles and patterns.
              </p>
              <p>
                Every concept I teach is connected to real-world applications and challenges you'll face on the job. I focus on building your problem-solving abilities rather than just memorization of techniques.
              </p>
              <p>
                My courses are designed to be comprehensive yet accessible, with a focus on the content that's most valuable for your career growth. I pride myself on covering topics that are often skipped in typical tutorials but are essential for professional development.
              </p>
              <p>
                Whether you choose to learn through paid courses or free resources, my goal is to help you become a more confident, skilled, and knowledgeable frontend engineer who can tackle complex problems with elegant solutions.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                Start Learning Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;