import { motion } from "framer-motion";

const BlogPost3 = () => {
  return (
    <div className="min-h-screen py-24 md:py-32 flex-col items-center text-white">
      <div className="container mx-auto px-4 md:px-6 shadow-xl rounded-lg overflow-hidden bg-gray-800 p-6">
        {/* Animated Title */}
        <motion.h1
          className="text-4xl font-extrabold text-center text-indigo-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Modern CSS Techniques Every Developer Should Know
        </motion.h1>

        {/* Meta Info */}
        <div className="text-gray-300 text-sm mt-4 flex justify-between">
          <p>
            By <span className="font-semibold text-indigo-300">Nabarun Biswas</span>
          </p>
          <p>📅 September 15, 2024 | ⏳ 5 mins read</p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex gap-2">
          {["CSS", "Web Design", "Tailwind"].map((tag, index) => (
            <span
              key={index}
              className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow-md"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Blog Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="Modern CSS"
          className="w-full h-64 object-cover rounded-lg mt-6 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Blog Content */}
        <motion.div
          className="text-gray-300 mt-6 space-y-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            CSS has evolved significantly over the years, offering powerful new features that enhance styling capabilities, responsiveness, and maintainability.
          </p>

          {[
            {
              title: "1. CSS Grid & Flexbox",
              description: "CSS Grid and Flexbox revolutionized layout design, making it easier to create responsive, dynamic designs.",
              code: `display: grid;\ngrid-template-columns: repeat(3, 1fr);\ngap: 1rem;`
            },
            {
              title: "2. CSS Custom Properties (Variables)",
              description: "CSS variables enable easier theming and maintainability across projects.",
              code: `:root {\n  --primary-color: #6366f1;\n}\n\nbutton {\n  background-color: var(--primary-color);\n}`
            },
            {
              title: "3. Dark Mode with CSS",
              description: "With the `prefers-color-scheme` media query, implementing dark mode is simpler than ever.",
              code: `@media (prefers-color-scheme: dark) {\n  body {\n    background-color: #222;\n    color: white;\n  }\n}`
            },
            {
              title: "4. Scroll Snap for Smooth Scrolling",
              description: "CSS Scroll Snap creates a smooth scrolling experience by snapping elements into place.",
              code: `scroll-snap-type: y mandatory;\nscroll-snap-align: start;`
            },
            {
              title: "5. Aspect Ratio for Responsive Elements",
              description: "Maintaining consistent aspect ratios for images, videos, and other elements is now easier with `aspect-ratio`.",
              code: `img {\n  aspect-ratio: 16 / 9;\n}`
            },
            {
              title: "6. Backdrop Filter for Glassmorphism",
              description: "Glassmorphism, a popular modern UI trend, relies on `backdrop-filter` for a frosted-glass effect.",
              code: `.glass {\n  backdrop-filter: blur(10px);\n  background: rgba(255, 255, 255, 0.2);\n}`
            },
            {
              title: "7. CSS Nesting (Upcoming Feature)",
              description: "CSS nesting simplifies styling by grouping related selectors within a parent.",
              code: `.card {\n  background: white;\n  & h2 {\n    color: blue;\n  }\n}`
            },
            {
              title: "8. :is() and :where() Pseudo-Classes",
              description: "The `:is()` and `:where()` pseudo-classes simplify complex selectors and improve performance.",
              code: `:is(h1, h2, h3) {\n  font-weight: bold;\n}`
            },
            {
              title: "9. CSS Scroll Animations",
              description: "With CSS animations, you can create interactive scroll effects.",
              code: `@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n.fade-in {\n  animation: fadeIn 1s ease-in;\n}`
            },
            {
              title: "10. Custom Scrollbars with scrollbar-gutter",
              description: "The `scrollbar-gutter` property prevents layout shifts when scrollbars appear.",
              code: `body {\n  scrollbar-gutter: stable both-edges;\n}`
            }
          ].map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-indigo-300">{section.title}</h2>
              <p>{section.description}</p>
              <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-4">
                {section.code}
              </pre>
            </div>
          ))}

          <h2 className="text-2xl font-semibold text-indigo-300">Conclusion</h2>
          <p>
            Leveraging modern CSS techniques allows developers to create dynamic, accessible, and responsive websites effortlessly.
            Experiment with these features and take your CSS skills to the next level!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost3;
