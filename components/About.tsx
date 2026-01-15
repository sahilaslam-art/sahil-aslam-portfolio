
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4"
        >
          <h2 className="text-4xl md:text-5xl font-serif italic mb-8">Personal Approach</h2>
          <p className="text-sm uppercase tracking-widest opacity-40 mb-12">Software Engineer & Developer</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-8 flex flex-col gap-16"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
            With a focus on <span className="italic font-serif">precision</span> and <span className="italic font-serif">interactivity</span>, I bridge the gap between complex backend architecture and elegant user interfaces.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest opacity-40 mb-4">Core Expertise</h3>
              <ul className="flex flex-col gap-4">
                {PERSONAL_INFO.specialization.map((spec, i) => (
                  <li key={i} className="text-lg md:text-xl font-light">{spec}</li>
                ))}
                <li className="text-lg md:text-xl font-light">Full-Stack Architecture</li>
                <li className="text-lg md:text-xl font-light">Performance Optimization</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs uppercase tracking-widest opacity-40 mb-4">Selected Tech</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind', 'Framer Motion'].map((tech) => (
                  <span key={tech} className="px-3 py-1 border border-white/20 rounded-full text-xs font-medium opacity-60">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
