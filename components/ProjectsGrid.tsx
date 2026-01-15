
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PROJECTS } from '../constants';

const ProjectsGrid: React.FC = () => {
  // Variants for staggered text entry
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (index: number) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: (index % 2 * 0.2) + 0.4, // Starts after the main card begins its entry
      }
    })
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
      }
    }
  };

  return (
    <section id="work" className="py-40">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div>
          <h2 className="text-6xl md:text-8xl font-serif italic mb-4">Works</h2>
          <p className="text-sm uppercase tracking-[0.3em] opacity-40">Selected Projects 2023 — 2024</p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-sm max-w-xs opacity-60">A curated collection of digital experiences focusing on aesthetics and functionality.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-40">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { 
                  duration: 1, 
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number], 
                  delay: index % 2 * 0.2 
                }
              }
            }}
            className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-32' : ''}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-8 rounded-sm">
              <motion.img
                initial={{ scale: 1, opacity: 0.75 }}
                whileHover={{ scale: 1.04, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 flex gap-2">
                 <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-medium border border-white/10">
                    {project.year}
                 </span>
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
            
            <motion.div 
              variants={textContainerVariants}
              custom={index}
              className="flex justify-between items-start"
            >
              <div>
                <motion.h3 
                  variants={textItemVariants}
                  className="text-2xl md:text-3xl font-light mb-2 transition-colors group-hover:text-zinc-400"
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  variants={textItemVariants}
                  className="text-xs uppercase tracking-widest opacity-40 font-medium"
                >
                  {project.category}
                </motion.p>
              </div>
              <motion.div 
                variants={textItemVariants}
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L10.2929 4H6C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3H11.5C11.7761 3 12 3.22386 12 3.5V9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor"/>
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
