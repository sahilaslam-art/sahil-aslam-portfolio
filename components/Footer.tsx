
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

interface FooterProps {
  onOpenContact?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openGmailCompose = () => {
    const subject = encodeURIComponent("Project Inquiry");
    const body = encodeURIComponent(
      "Hi Sahil,\n\nI would like to work with you.\n\nThanks"
    );
    const mailtoURL = `mailto:${PERSONAL_INFO.contact.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoURL;
  };

  return (
    <footer id="contact" className="px-6 md:px-12 lg:px-20 py-20 pb-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <p className="text-sm uppercase tracking-[0.4em] opacity-40 mb-12 font-medium">Have a project in mind?</p>
          <button 
            onClick={openGmailCompose}
            className="group block text-[10vw] md:text-[8vw] font-serif italic leading-none hover:pl-8 transition-all duration-700 text-left"
          >
            Let's talk <span className="not-italic text-zinc-800 transition-colors group-hover:text-white">→</span>
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24">
          <div>
            <h4 className="text-xs uppercase tracking-widest opacity-30 mb-6 font-medium">Contact</h4>
            <div className="flex flex-col gap-2">
              <button 
                onClick={openGmailCompose}
                className="text-lg hover:opacity-50 transition-opacity bg-transparent border-none cursor-pointer p-0"
              >
                {PERSONAL_INFO.contact.email}
              </button>
              <a 
                href={`tel:${PERSONAL_INFO.contact.phone.replace(/\s+/g, '')}`} 
                className="text-lg hover:opacity-50 transition-opacity"
              >
                {PERSONAL_INFO.contact.phone}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest opacity-30 mb-6 font-medium">Socials</h4>
            <div className="flex flex-col gap-2">
              <a 
                href={PERSONAL_INFO.contact.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg hover:opacity-50 transition-opacity underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
              <a 
                href={PERSONAL_INFO.contact.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg hover:opacity-50 transition-opacity underline-offset-4 hover:underline"
              >
                GitHub
              </a>
              <a 
                href={PERSONAL_INFO.contact.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg hover:opacity-50 transition-opacity underline-offset-4 hover:underline"
              >
                Twitter
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col items-start md:items-end justify-between">
            <div className="text-right">
              <h4 className="text-xs uppercase tracking-widest opacity-30 mb-6 font-medium">Location</h4>
              <p className="text-lg opacity-80">{PERSONAL_INFO.contact.location}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 opacity-30">
          <p className="text-[10px] uppercase tracking-widest mb-4 md:mb-0">
            © 2024 {PERSONAL_INFO.name}. All Rights Reserved.
          </p>
          <div className="flex gap-8">
             <span className="text-[10px] uppercase tracking-widest font-medium italic">Handcrafted with care</span>
             <button 
              onClick={scrollToTop}
              className="text-[10px] uppercase tracking-widest font-medium hover:opacity-50 transition-opacity"
             >
               Back to Top ↑
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
