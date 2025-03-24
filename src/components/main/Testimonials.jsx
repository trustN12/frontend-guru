
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';

const testimonials = [
  {
    id: 1,
    name: "Arjun Das",
    role: "Student",
    image: "https://avatar.iran.liara.run/public/boy", // Indian man avatar
    quote: "Nabarun's React course completely transformed how I approach component design. His teaching style made complex concepts seem intuitive, and I landed my dream job shortly after completing his course.",
    rating: 5,
  },
  {
    id: 2,
    name: "Shreya Munshi",
    role: "Works at CodeClause",
    image: "https://i.pravatar.cc/150?img=46", // Bengali woman avatar
    quote: "The JavaScript Mastery course went beyond syntax to teach me how to think like a professional developer. Nabarun's deep understanding of the language and practical teaching approach made all the difference.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ethan Smith",
    role: "Student",
    image: "https://randomuser.me/api/portraits/men/44.jpg", // New Zealand man
    quote: "I tried multiple online courses before finding Nabarun's Modern UI Development program. His attention to detail and focus on best practices helped me level up my career within months.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Roy",
    role: "Works at Devtown",
    image: "https://i.pravatar.cc/150?img=49", // Bengali woman avatar
    quote: "The interview preparation course was exactly what I needed to break into the tech industry. Nabarun's systematic approach to problem-solving and system design is invaluable.",
    rating: 5,
  },
  {
    id: 5,
    name: "Viyanah D'Souza",
    role: "Works at ShapeAI",
    image: "https://i.pravatar.cc/150?img=9", // Indian man avatar
    quote: "I struggled with JavaScript before, but Nabarun's structured learning made it so easy to understand. Now, I work confidently with React and Next.js.",
    rating: 5,
  },
  {
    id: 6,
    name: "Ananya Bose",
    role: "Works at Newton School",
    image: "https://i.pravatar.cc/150?img=31", // Bengali woman avatar (Kolkata)
    quote: "From UI/UX design to full-stack development, Nabarun's courses cover it all! The hands-on projects helped me build a strong portfolio.",
    rating: 5,
  },
];






const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading subtext="Success Stories" centered>
          What My Students Say
        </SectionHeading>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl relative"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <Quote size={16} />
              </div>
              
              <div className="mb-4 flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;