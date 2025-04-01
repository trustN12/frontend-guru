import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setHidden(true); // Hide on scroll down
      } else {
        setHidden(false); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Define navLinks inside the component
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled ? "glass shadow-md py-2" : "bg-[#FEF3C7] bg-opacity-85 py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-9 h-9 rounded-full overflow-hidden flex items-center justify-center border-[1px] border-orange-400">
            <img src="./profile.png" />
          </div>
          <div className="relative mb-3">
  <span className="font-bold text-lg text-primary tracking-tight">
    Frontend Guru
    <span className="absolute text-xs font-medium text-gray-500 top-[2em] left-[0em]" >
      v1.0.0
    </span>
  </span>
</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative transition-colors font-medium text-sm ${
                location.pathname === link.path
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <SignedIn>
            <Link
              to="/dashboard"
              className={`relative transition-colors font-medium text-sm ${
                location.pathname === "/dashboard"
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Dashboard
            </Link>
          </SignedIn>
        </nav>

        <div className="flex items-center gap-4">
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>

          <SignedOut>
            <Link
              to="/sign-in"
              className="hidden md:block px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary/5 transition-colors"
            >
              Log In
            </Link>
            <Link
              to="/sign-up"
              className="hidden md:block px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
            >
              Sign Up
            </Link>
          </SignedOut>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-yellow-200 glass absolute top-full left-0 right-0 border-t border-border"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 px-4 rounded-md ${
                  location.pathname === link.path
                    ? "bg-secondary text-primary font-medium"
                    : "text-muted-foreground hover:bg-secondary/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <SignedIn>
              <Link
                to="/dashboard"
                className={`py-2 px-4 rounded-md ${
                  location.pathname === "/dashboard"
                    ? "bg-secondary text-primary font-medium"
                    : "text-muted-foreground hover:bg-secondary/50"
                }`}
              >
                Dashboard
              </Link>
            </SignedIn>
            <div className="mt-4 flex flex-col gap-2">
              <SignedOut>
                <Link
                  to="/sign-up"
                  className="py-2 px-4 text-center text-white bg-primary rounded-md hover:bg-primary/90"
                >
                  Create Account
                </Link>
                <Link
                  to="/sign-in"
                  className="py-2 px-4 text-center text-primary border border-primary rounded-md hover:bg-primary/5"
                >
                  Log In
                </Link>
              </SignedOut>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
