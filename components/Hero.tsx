
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  // Explicitly typing as Variants avoids property inference errors when passing to motion components
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Using a tuple type assertion for 'ease' to match Framer Motion's BezierDefinition [number, number, number, number]
  const itemVariants: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1200px]"
      >
        <motion.p variants={itemVariants} className="text-sm uppercase tracking-[0.3em] mb-12 opacity-50 font-medium">
          {PERSONAL_INFO.identity}
        </motion.p>
        
        <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-serif tracking-tight mb-16 overflow-hidden">
          <motion.span variants={itemVariants} className="block italic">Designing</motion.span>
          <motion.span variants={itemVariants} className="block">Digital Experiences</motion.span>
          <motion.span variants={itemVariants} className="block">With Purpose.</motion.span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-12">
          <motion.div variants={itemVariants} className="max-w-md">
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-80">
              I specialize in creating high-performance web applications using the MERN stack with a primary focus on sophisticated frontend design.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest opacity-40 font-medium">Based in</span>
            <span className="text-lg">{PERSONAL_INFO.contact.location}</span>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] opacity-40">Scroll</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
           <motion.div 
            animate={{ y: [0, 48, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
           />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
