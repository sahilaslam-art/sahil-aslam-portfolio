
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

interface NavbarProps {
  onOpenContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleHireMe = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenContact();
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 md:px-12 lg:px-20 py-6 md:py-8 mix-blend-difference"
      >
        <div className="flex flex-col">
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium opacity-60">Portfolio</span>
          <a href="#" className="text-xs md:text-sm font-medium hover:opacity-50 transition-opacity">{PERSONAL_INFO.name}</a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12 text-sm font-medium">
          <div className="flex gap-12">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:opacity-50 transition-opacity">
                {link.name}
              </a>
            ))}
          </div>
          <button 
            onClick={handleHireMe}
            className="border border-white/20 px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 font-semibold"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Navbar Buttons */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={handleHireMe}
            className="border border-white/20 px-4 py-1.5 rounded-full text-[9px] uppercase tracking-[0.15em] font-bold hover:bg-white hover:text-black transition-all duration-300"
          >
            Hire
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[10px] uppercase tracking-widest font-medium hover:opacity-50 transition-opacity min-w-[45px] text-right"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#0d0d0d] flex flex-col items-center justify-center gap-12 md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-serif italic hover:opacity-50 transition-opacity"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <button 
              onClick={handleHireMe}
              className="mt-8 border border-white/20 px-10 py-4 rounded-full text-xs uppercase tracking-[0.3em] font-medium"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
