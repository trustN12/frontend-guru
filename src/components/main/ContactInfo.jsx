
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.p 
        variants={itemVariants}
        className="text-lg text-muted-foreground leading-relaxed"
      >
        Have questions about courses, training programs, or want to discuss your learning needs? 
        Fill out the form or reach out directly through the contact information below.
      </motion.p>
      
      <motion.div 
        variants={containerVariants}
        className="mt-8 space-y-6"
      >
        <motion.div 
          variants={itemVariants}
          className="flex items-start space-x-4 hover:transform hover:translate-x-1 transition-transform duration-300"
        >
          <div className="mt-0.5 w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shadow-sm">
            <Mail size={22} />
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">Email</h3>
            <a 
              href="mailto:academyshreyn12@gmail.com" 
              className="text-muted-foreground hover:text-amber-600 transition-colors"
            >
              academyshreyn12@gmail.com
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="flex items-start space-x-4 hover:transform hover:translate-x-1 transition-transform duration-300"
        >
          <div className="mt-0.5 w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shadow-sm">
            <Phone size={22} />
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">Phone</h3>
            <a 
              href="tel:+919679188394" 
              className="text-muted-foreground hover:text-amber-600 transition-colors"
            >
              +91 9679188394
            </a>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex items-start space-x-4 hover:transform hover:translate-x-1 transition-transform duration-300"
        >
          <div className="mt-0.5 w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shadow-sm">
            <MapPin size={22} />
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">Location</h3>
            <p className="text-muted-foreground">
              Kolkata, West Bengal, India
            </p>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className="glass-card rounded-xl p-6 mt-8 bg-white/90 border-amber-100 border shadow-md backdrop-blur-sm"
      >
        <h3 className="text-xl font-medium mb-5 text-amber-800">What happens next?</h3>
        <ol className="space-y-5">
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-medium shadow-sm">
              1
            </span>
            <p className="text-sm text-muted-foreground pt-1">
              I'll reach out to understand your learning goals and background
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-medium shadow-sm">
              2
            </span>
            <p className="text-sm text-muted-foreground pt-1">
              We'll discuss course options, scheduling, and any special requirements
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-medium shadow-sm">
              3
            </span>
            <p className="text-sm text-muted-foreground pt-1">
              Get personalized guidance and start your frontend mastery journey
            </p>
          </li>
        </ol>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;