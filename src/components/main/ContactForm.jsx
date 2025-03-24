
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import { sendContactForm } from '../../utils/emailjs';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocus = (field) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email via EmailJS
      const response = await sendContactForm(formData);
      
      if (response.success) {
        // Show success message
        toast.success('Your message has been sent!', {
          description: 'Nabarun will get back to you shortly.',
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      toast.error('Failed to send message', {
        description: 'Please try again later or contact directly via email.',
        duration: 5000,
      });
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formControlVariants = {
    focused: {
      scale: 1.02,
      boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.2 }
    },
    unfocused: {
      scale: 1,
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="glass-card rounded-xl p-7 md:p-8 shadow-lg bg-white/95 border-amber-100 border backdrop-blur-sm">
        <h3 className="text-xl font-medium mb-6 text-amber-800">Send a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            variants={formControlVariants}
            animate={focused === 'name' ? 'focused' : 'unfocused'}
          >
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-amber-800">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute left-4 top-3.5 text-amber-500">
                <User size={18} />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                required
                className="w-full pl-11 pr-4 py-3 rounded-lg border border-amber-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all"
                placeholder="Your name"
              />
            </div>
          </motion.div>
          
          <motion.div
            variants={formControlVariants}
            animate={focused === 'email' ? 'focused' : 'unfocused'}
          >
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-amber-800">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute left-4 top-3.5 text-amber-500">
                <Mail size={18} />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                required
                className="w-full pl-11 pr-4 py-3 rounded-lg border border-amber-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all"
                placeholder="your.email@example.com"
              />
            </div>
          </motion.div>
          
          <motion.div
            variants={formControlVariants}
            animate={focused === 'phone' ? 'focused' : 'unfocused'}
          >
            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-amber-800">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute left-4 top-3.5 text-amber-500">
                <Phone size={18} />
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={handleBlur}
                className="w-full pl-11 pr-4 py-3 rounded-lg border border-amber-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all"
                placeholder="Your phone number (optional)"
              />
            </div>
          </motion.div>
          
          <motion.div
            variants={formControlVariants}
            animate={focused === 'message' ? 'focused' : 'unfocused'}
          >
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-amber-800">
              Message
            </label>
            <div className="relative">
              <div className="absolute left-4 top-3.5 text-amber-500">
                <MessageSquare size={18} />
              </div>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                required
                className="w-full pl-11 pr-4 py-3 rounded-lg border border-amber-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all resize-none"
                placeholder="What would you like to learn?"
              />
            </div>
          </motion.div>
          
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-70"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <span className="mr-2">Sending...</span>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </>
            ) : (
              <>
                <span className="mr-2">Send Message</span>
                <Send size={18} />
              </>
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;