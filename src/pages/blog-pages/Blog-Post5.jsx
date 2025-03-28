import { motion } from "framer-motion";
import { useState } from "react";

const BlogPost5 = () => {
  // Toggle Read More for each section
  const [expanded, setExpanded] = useState(Array(10).fill(false));

  return (
    <div className="min-h-screen py-24 md:py-32 flex-col items-center">
      {/* Outer Container with Background */}
      <div className="container mx-auto px-4 md:px-8 shadow-2xl rounded-lg overflow-hidden bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white">
        {/* Blog Content */}
        <motion.div 
          className="p-10"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          {/* Title and Meta Info */}
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
            Preparing for Frontend Interviews: What Companies Really Look For
          </h1>
          <div className="text-gray-300 text-sm mt-3 flex justify-between">
            <p>By <span className="font-semibold">Nabarun Biswas</span></p>
            <p>📅 January 18, 2025 | ⏳ 11 mins read</p>
          </div>

          {/* Tags */}
          <div className="mt-5 flex gap-3 flex-wrap">
            {["Career", "Interviews", "Job Search", "Frontend", "Tech Industry"].map((tag, index) => (
              <motion.span
                key={index}
                className="bg-orange-500 text-white text-xs px-4 py-2 rounded-full shadow-md"
                whileHover={{ scale: 1.1 }}
              >
                #{tag}
              </motion.span>
            ))}
          </div>

          {/* Introduction */}
          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Preparing for frontend interviews can be <strong>challenging</strong>. Companies don’t just assess your coding skills—they look at <strong>problem-solving ability, system design knowledge, and communication skills</strong>. This guide, based on real-world experiences, will give you a structured <strong>roadmap to ace your interview</strong>.
          </p>

          {/* Blog Sections */}
          {[
            {
              title: "1️⃣ HTML, CSS, and JavaScript Fundamentals",
              content: "Master semantic HTML, Flexbox, Grid, media queries, ES6+, closures, event delegation, and the event loop.",
            },
            {
              title: "2️⃣ React and Frontend Frameworks",
              content: "Understand React hooks, state management (Redux, Context API), performance optimizations, and SSR with Next.js.",
            },
            {
              title: "3️⃣ Data Structures & Algorithms (DSA)",
              content: "Focus on arrays, linked lists, stacks, queues, recursion, sorting algorithms, and dynamic programming.",
            },
            {
              title: "4️⃣ System Design & Performance Optimization",
              content: "Learn frontend system design, lazy loading, caching, PWAs, WebSockets, and CDN optimizations.",
            },
            {
              title: "5️⃣ Coding Challenges & Problem Solving",
              content: "Practice on LeetCode, Frontend Mentor, and build projects like to-do apps and weather apps.",
            },
            {
              title: "6️⃣ Debugging & Performance Optimization",
              content: "Use Chrome DevTools, optimize re-renders, avoid unnecessary state updates, and implement code splitting.",
            },
            {
              title: "7️⃣ Behavioral Interview Preparation",
              content: "Use the STAR method (Situation, Task, Action, Result) to structure answers and practice common questions.",
            },
            {
              title: "8️⃣ Building a Strong Portfolio & Resume",
              content: "Showcase real-world projects, GitHub contributions, blogs, and open-source contributions.",
            },
            {
              title: "9️⃣ Mock Interviews & Practice Resources",
              content: "Use platforms like Pramp, AlgoExpert, and participate in coding challenges and mock interviews.",
            },
          ].map((section, index) => (
            <motion.div 
              key={index} 
              className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-xl font-semibold text-orange-400">{section.title}</h2>
              <p className="text-gray-300 mt-2 leading-relaxed">
                {expanded[index] ? section.content : section.content.substring(0, 100) + "..."}
              </p>
              <button 
                className="text-orange-300 mt-3 underline text-sm"
                onClick={() => {
                  const newExpanded = [...expanded];
                  newExpanded[index] = !newExpanded[index];
                  setExpanded(newExpanded);
                }}
              >
                {expanded[index] ? "Read Less" : "Read More"}
              </button>
            </motion.div>
          ))}

          {/* Conclusion */}
          <motion.div 
            className="mt-10 p-6 bg-gray-900 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold text-orange-400">✨ Conclusion</h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Preparing for frontend interviews <strong>requires strategy and consistency</strong>. Follow this structured roadmap, work on real-world projects, and practice coding questions. 
            </p>
            <p className="text-lg font-semibold text-orange-300 mt-4">
              Best of luck! 🚀💡
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost5;
