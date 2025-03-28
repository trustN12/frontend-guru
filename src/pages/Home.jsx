import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Layout,
  Lightbulb,
  CheckCircle,
  Zap,
  BookOpen,
} from "lucide-react";
import SectionHeading from "../components/main/SectionHeading";
import CourseCard from "../components/main/CourseCard";
import Testimonials from "@/components/main/Testimonials";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import ElevenLabsConversationalChat from "@/components/AI-AGENT/AIChat";

const Home = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Load the ElevenLabs widget script dynamically
    const script = document.createElement("script");
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* ElevenLabs AI Chat Widget */}

              <div className="div">
                <ElevenLabsConversationalChat />
              </div>

              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Master Frontend Engineering
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Learn Modern Web Development from{" "}
                <span className="text-primary relative">
                  an Expert
                  <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-primary/30"></span>
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl text-pretty">
                Elevate your frontend skills with Nabarun Biswas, learning
                JavaScript, React, and modern UI libraries through practical,
                real-world applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-primary font-medium hover:bg-secondary/70 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-[#FEF3C7D9] bg-opacity-40 from-primary/5 to-primary/20 rounded-2xl p-6 md:p-8 overflow-hidden">
                <div className="glass-card rounded-lg p-4 md:p-6 shadow-lg bg-gray-300 bg-opacity-50">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="ml-2 text-xs font-mono text-muted-foreground">
                        index.js
                      </div>
                    </div>
                    <pre className="font-mono text-xs md:text-sm bg-slate-950 text-purple-300 p-4 rounded-md overflow-x-auto">
                      <code>{`import React from 'react';
import { motion } from 'framer-motion';

// Modern React component with animations
export const FeatureCard = ({ icon, title, desc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="feature-card"
    >
      <div className="icon">{icon}</div>
      <h3 className="title">{title}</h3>
      <p className="description">{desc}</p>
    </motion.div>
  );
};`}</code>
                    </pre>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-muted-foreground">
                      From React Mastery Course
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                        React
                      </span>
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-blue-500/10 text-blue-500">
                        Framer Motion
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-primary/10 animate-float"></div>
              <div
                className="absolute -left-6 -top-6 w-12 h-12 rounded-full bg-primary/20 animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtext="Why Choose My Courses" centered>
            Expert-Led Frontend Development Training
          </SectionHeading>

          <div className="mt-12  md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <MagicCard
              className="rounded-xl"
              gradientColor={theme === "dark" ? "#FFA50555" : "#FEF3C7D9"}
            >
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl bg-[#FCE3C7] bg-opacity-10"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <Lightbulb size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Exclusive Content
                </h3>
                <p className="text-muted-foreground text-sm">
                  Access unique insights and techniques not available on YouTube
                  or other platforms.
                </p>
              </motion.div>
            </MagicCard>

            <MagicCard
              className="rounded-xl"
              gradientColor={theme === "dark" ? "#FFA50555" : "#FEF3C7D9"}
            >
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl bg-[#FCE3C7] bg-opacity-10"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <Code size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Practical Approach
                </h3>
                <p className="text-muted-foreground text-sm">
                  Build real-world projects that demonstrate modern frontend
                  engineering practices.
                </p>
              </motion.div>
            </MagicCard>

            <MagicCard
              className="rounded-xl"
              gradientColor={theme === "dark" ? "#FFA50555" : "#FEF3C7D9"}
            >
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl bg-[#FCE3C7] bg-opacity-10"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <Zap size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Stay Current</h3>
                <p className="text-muted-foreground text-sm">
                  Learn the latest frameworks and libraries like React, Tailwind
                  CSS, and modern UI libraries.
                </p>
              </motion.div>
            </MagicCard>

            <MagicCard
              className="rounded-xl"
              gradientColor={theme === "dark" ? "#FFA50555" : "#FEF3C7D9"}
            >
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl bg-[#FCE3C7] bg-opacity-10"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <Layout size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Interview Preparation
                </h3>
                <p className="text-muted-foreground text-sm">
                  Get comprehensive training for technical interviews, with real
                  questions and expert feedback.
                </p>
              </motion.div>
            </MagicCard>

            <MagicCard
              className="rounded-xl"
              gradientColor={theme === "dark" ? "#FFA50555" : "#FEF3C7D9"}
            >
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl bg-[#FCE3C7] bg-opacity-10"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <BookOpen size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">System Design</h3>
                <p className="text-muted-foreground text-sm">
                  Master frontend system design principles essential for senior
                  engineering roles.
                </p>
              </motion.div>
            </MagicCard>

            <MagicCard
              className="rounded-xl"
              gradientColor={theme === "dark" ? "#FFA50555" : "#FEF3C7D9"}
            >
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl bg-[#FCE3C7] bg-opacity-10"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <CheckCircle size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Personalized Mentoring
                </h3>
                <p className="text-muted-foreground text-sm">
                  Receive one-on-one guidance tailored to your specific learning
                  needs and career goals.
                </p>
              </motion.div>
            </MagicCard>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtext="Popular Courses" centered>
            Elevate Your Frontend Development Skills
          </SectionHeading>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <CourseCard
              icon={<Code size={20} />}
              title="JavaScript Mastery"
              description="Comprehensive JavaScript training from fundamentals to advanced patterns and modern ES6+ features."
              topics={["ES6+", "Async/Await", "Closures", "Prototypes"]}
            />

            <CourseCard
              icon={<Zap size={20} />}
              title="React Ecosystem"
              description="Deep dive into React and its ecosystem, covering hooks, context, state management, and performance optimization."
              topics={["Hooks", "Redux", "React Query", "Performance"]}
            />

            <CourseCard
              icon={<Layout size={20} />}
              title="Modern UI Development"
              description="Master Tailwind CSS, shadcn/ui, and other modern UI libraries to build beautiful, responsive interfaces."
              topics={["Tailwind CSS", "shadcn/ui", "DaisyUI", "MagicUI"]}
            />

            <CourseCard
              icon={<Lightbulb size={20} />}
              title="Interview Preparation"
              description="Prepare for frontend engineering interviews with practice problems, mock interviews, and feedback."
              topics={[
                "Algorithms",
                "System Design",
                "Behavioral",
                "Take-home",
              ]}
            />

            <CourseCard
              icon={<Code size={20} />}
              title="System Design for Frontend"
              description="Learn to design scalable frontend architectures for complex applications."
              topics={[
                "Architecture",
                "Performance",
                "State Management",
                "API Design",
              ]}
            />

            <CourseCard
              icon={<BookOpen size={20} />}
              title="Machine Coding"
              description="Build complex UI components and systems from scratch to demonstrate your engineering skills."
              topics={[
                "Autocomplete",
                "Infinite Scroll",
                "Kanban Board",
                "Form Builder",
              ]}
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance"
            >
              Ready to Transform Your Frontend Skills?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-white/80 mb-8 max-w-2xl text-pretty"
            >
              Whether you're just starting out or looking to level up your
              career, I can help you master the skills that modern employers
              demand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-primary font-medium hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent border border-white text-white font-medium hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Learn About Me
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
