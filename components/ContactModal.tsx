
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactModalProps {
  onClose: () => void;
}

// API URL - use Render production URL or localhost for development
const API_URL = import.meta.env.PROD 
  ? 'https://sahil-aslam-portfolio.onrender.com/api/contact'
  : 'http://localhost:3001/api/contact';

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Application',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', projectType: 'Web Application', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('❌ Failed to send email:', error);
      setFormState('error');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-[#0d0d0d]/95 backdrop-blur-xl overflow-y-auto"
    >
      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-2xl bg-[#1a1a1a] p-8 md:p-16 rounded-2xl md:rounded-3xl border border-white/5 shadow-2xl relative my-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 md:top-8 md:right-8 text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity font-medium bg-[#0d0d0d]/50 px-3 py-1 rounded-full md:bg-transparent md:p-0"
        >
          Close [esc]
        </button>

        {formState === 'success' ? (
          <div className="text-center py-12 md:py-20">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Thank You</h2>
            <p className="text-base md:text-lg opacity-60 max-w-sm mx-auto">Your message has been received. I'll get back to you shortly.</p>
            <button 
              onClick={onClose}
              className="mt-8 md:mt-12 text-[10px] uppercase tracking-widest font-semibold hover:opacity-50 transition-opacity"
            >
              Return Home
            </button>
          </div>
        ) : formState === 'error' ? (
          <div className="text-center py-12 md:py-20">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6 text-red-500">Error</h2>
            <p className="text-base md:text-lg opacity-60 max-w-sm mx-auto">Failed to send message. Please try again.</p>
            <button 
              onClick={() => setFormState('idle')}
              className="mt-8 md:mt-12 text-[10px] uppercase tracking-widest font-semibold hover:opacity-50 transition-opacity"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="mb-8 md:mb-12">
              <h2 className="text-4xl md:text-6xl font-serif italic mb-3">Inquiry</h2>
              <p className="text-[10px] md:text-sm uppercase tracking-widest opacity-40 font-medium">Let's build something exceptional</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-30 font-medium">Your Name</label>
                  <input 
                    required 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="bg-transparent border-b border-white/10 py-2 focus:border-white transition-colors outline-none text-base md:text-lg font-light"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-30 font-medium">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="bg-transparent border-b border-white/10 py-2 focus:border-white transition-colors outline-none text-base md:text-lg font-light"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest opacity-30 font-medium">Project Type</label>
                <div className="relative">
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white transition-colors outline-none text-base md:text-lg font-light appearance-none cursor-pointer"
                  >
                    <option className="bg-[#1a1a1a]">Web Application</option>
                    <option className="bg-[#1a1a1a]">E-commerce</option>
                    <option className="bg-[#1a1a1a]">UI/UX Design</option>
                    <option className="bg-[#1a1a1a]">Full Stack Project</option>
                  </select>
                  <div className="absolute right-0 bottom-3 pointer-events-none opacity-30">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest opacity-30 font-medium">Your Message</label>
                <textarea 
                  required 
                  rows={2} 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your vision..."
                  className="bg-transparent border-b border-white/10 py-2 focus:border-white transition-colors outline-none text-base md:text-lg font-light resize-none md:rows-3"
                />
              </div>

              <button 
                type="submit"
                disabled={formState === 'submitting'}
                className="mt-4 md:mt-6 bg-white text-black py-4 md:py-5 rounded-full text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-4 disabled:opacity-50"
              >
                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                <span className="text-lg md:text-xl">→</span>
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;
