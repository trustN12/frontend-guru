
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg overflow-hidden flex items-center justify-center text-white font-bold">
                NB
              </div>
              <span className="font-bold text-lg text-primary tracking-tight">
                Frontend Guru
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Learn frontend engineering from an expert. Master JavaScript, React, and modern UI frameworks to build exceptional user interfaces.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Topics</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">JavaScript</li>
              <li className="text-sm text-muted-foreground">React</li>
              <li className="text-sm text-muted-foreground">Tailwind CSS</li>
              <li className="text-sm text-muted-foreground">System Design</li>
              <li className="text-sm text-muted-foreground">Interview Prep</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:academyshreyn12@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Mail size={16} />
                  <span>academyshreyn12@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919679188394" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Phone size={16} />
                  <span>+91 9679188394</span>
                </a>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <a href="https://github.com/trustN12" className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                  <Github size={16} />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                  <Linkedin size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Nabarun Biswas. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;