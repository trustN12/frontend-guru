
import { motion } from 'framer-motion';

const SectionHeading = ({ subtext, children, className = "", centered = false }) => {
  return (
    <div className={`space-y-2 max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {subtext && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm font-medium tracking-wide text-primary/80 uppercase"
        >
          {subtext}
        </motion.p>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold tracking-tight text-primary text-balance"
      >
        {children}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;