import { useState, useEffect } from "react";

import Navbar from "../main/Navbar";
import Footer from "../main/Footer";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);


  return isLoaded ? (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  ) : (
    <div className="h-screen w-screen flex items-center justify-center">
      <div class="terminal-loader">
        <div class="terminal-header">
          <div class="terminal-title">Frontend Guru</div>
          <div class="terminal-controls">
            <div class="control close"></div>
            <div class="control minimize"></div>
            <div class="control maximize"></div>
          </div>
        </div>
        <div class="content">
          <div class="text">Loading...</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
