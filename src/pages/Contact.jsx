
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/main/SectionHeading';
import ContactForm from '../components/main/ContactForm';
import ContactInfo from '../components/main/ContactInfo';
import { initEmailJs } from '../utils/emailjs';

const Contact = () => {
  useEffect(() => {
    // Initialize EmailJS when the component mounts
    initEmailJs();
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-amber-50 -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading subtext="Get in Touch" centered>
            Contact Nabarun Biswas
          </SectionHeading>
        </motion.div>
        
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;