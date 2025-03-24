
import { motion } from 'framer-motion';

const CourseCard = ({ icon, title, description, topics }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group glass-card rounded-xl p-6 md:p-7 h-full hover:shadow-xl transition-all duration-300 bg-white/95 border border-amber-100"
      whileHover={{ 
        y: -5, 
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.07)" 
      }}
    >
      <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-5 group-hover:bg-amber-200 transition-colors">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-amber-800 group-hover:text-amber-700 transition-colors">{title}</h3>
      <p className="text-muted-foreground text-sm mb-5">{description}</p>
      
      {topics && (
        <div className="flex flex-wrap gap-2">
          {topics.map((topic, index) => (
            <span 
              key={index}
              className="inline-block text-xs font-medium bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full border border-amber-100 group-hover:bg-amber-100 transition-colors"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default CourseCard;