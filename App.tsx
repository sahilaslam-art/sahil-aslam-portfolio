
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsGrid from './components/ProjectsGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleEmailRedirect = () => {
    const recipient = "sahilaslam754@gmail.com";
    const subject = encodeURIComponent("Work with us - Project Inquiry");
    const body = encodeURIComponent("Hi Sahil,\n\nI'm interested in working with you on a project. Here are some details:\n\n[Project Description]\n\nBest regards,");
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative min-h-screen selection:bg-white selection:text-black">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Navbar onOpenContact={handleEmailRedirect} />
          <main className="px-6 md:px-12 lg:px-20">
            <Hero />
            <About />
            <ProjectsGrid />
          </main>
          <Footer onOpenContact={handleEmailRedirect} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
