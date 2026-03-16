import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="w-full pt-32 pb-16 bg-paper">
      
      {/* Header */}
      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10vw] md:text-[8vw] leading-[0.85] font-serif tracking-tighter uppercase mb-8"
          >
            Let's <span className="italic text-wood">Talk.</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full h-[1px] bg-ink/10 mb-8"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl font-light text-ink/70 max-w-2xl text-balance"
          >
            Ready to start your outdoor project? Get in touch for a free, no-obligation consultation and quote.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-serif text-ink mb-12">Direct Contact</h2>
              
              <div className="space-y-12">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-wood mb-2">Phone</h4>
                  <p className="text-2xl font-serif text-ink">+61 432 392 149</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-wood mb-2">Email</h4>
                  <p className="text-2xl font-serif text-ink">superior.built@outlook.com</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-wood mb-2">Service Area</h4>
                  <p className="text-lg font-light text-ink/80 leading-relaxed">
                    Newcastle, Lake Macquarie, Maitland,<br/>
                    Cessnock, and the Hunter Valley, NSW.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-24 pt-12 border-t border-ink/10">
              <h4 className="text-xs uppercase tracking-[0.2em] text-ink/50 mb-4">Business Hours</h4>
              <p className="text-ink/80 font-light">Mon - Fri: 7:00 AM - 5:00 PM<br/>Sat: By Appointment</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-16 rounded-sm shadow-2xl shadow-ink/5 relative overflow-hidden min-h-[600px]">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-3xl font-serif text-ink mb-10">Project Inquiry</h3>
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative pt-4">
                        <input 
                          type="text" 
                          id="name" 
                          required
                          onFocus={handleFocus}
                          className="w-full bg-transparent border-b border-ink/20 py-2 text-ink focus:outline-none focus:border-wood transition-colors peer placeholder-transparent"
                          placeholder="Full Name *"
                        />
                        <label htmlFor="name" className="absolute left-0 top-6 text-ink/50 text-sm transition-all duration-300 ease-out peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-wood cursor-text">
                          Full Name *
                        </label>
                      </div>
                      
                      <div className="relative pt-4">
                        <input 
                          type="tel" 
                          id="phone" 
                          required
                          onFocus={handleFocus}
                          className="w-full bg-transparent border-b border-ink/20 py-2 text-ink focus:outline-none focus:border-wood transition-colors peer placeholder-transparent"
                          placeholder="Phone Number *"
                        />
                        <label htmlFor="phone" className="absolute left-0 top-6 text-ink/50 text-sm transition-all duration-300 ease-out peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-wood cursor-text">
                          Phone Number *
                        </label>
                      </div>
                    </div>
                    
                    <div className="relative pt-4">
                      <input 
                        type="email" 
                        id="email" 
                        required
                        onFocus={handleFocus}
                        className="w-full bg-transparent border-b border-ink/20 py-2 text-ink focus:outline-none focus:border-wood transition-colors peer placeholder-transparent"
                        placeholder="Email Address *"
                      />
                      <label htmlFor="email" className="absolute left-0 top-6 text-ink/50 text-sm transition-all duration-300 ease-out peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-wood cursor-text">
                        Email Address *
                      </label>
                    </div>

                    <div className="relative pt-4">
                      <select 
                        id="service" 
                        required
                        defaultValue=""
                        onFocus={handleFocus}
                        className="w-full bg-transparent border-b border-ink/20 py-2 text-ink focus:outline-none focus:border-wood transition-colors appearance-none peer invalid:text-transparent"
                      >
                        <option value="" disabled hidden></option>
                        <option value="deck" className="text-ink">Deck Construction</option>
                        <option value="patio" className="text-ink">Patio Building</option>
                        <option value="renovation" className="text-ink">Deck Renovation</option>
                        <option value="custom" className="text-ink">Custom Carpentry</option>
                        <option value="other" className="text-ink">Other</option>
                      </select>
                      <label htmlFor="service" className="absolute left-0 top-6 text-ink/50 text-sm transition-all duration-300 ease-out peer-focus:top-0 peer-focus:text-xs peer-focus:text-wood peer-valid:top-0 peer-valid:text-xs pointer-events-none">
                        Select Service Required *
                      </label>
                    </div>

                    <div className="relative pt-4">
                      <textarea 
                        id="message" 
                        rows={4}
                        required
                        onFocus={handleFocus}
                        className="w-full bg-transparent border-b border-ink/20 py-2 text-ink focus:outline-none focus:border-wood transition-colors peer resize-none placeholder-transparent"
                        placeholder="Project Details *"
                      ></textarea>
                      <label htmlFor="message" className="absolute left-0 top-6 text-ink/50 text-sm transition-all duration-300 ease-out peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-wood cursor-text">
                        Project Details *
                      </label>
                    </div>

                    <MagneticButton className="w-full mt-8">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-ink hover:bg-wood text-paper font-medium py-5 uppercase tracking-widest text-sm transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center h-16 cursor-hover"
                      >
                        {isSubmitting ? (
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-paper border-t-transparent rounded-full"
                          />
                        ) : (
                          "Submit Inquiry"
                        )}
                      </button>
                    </MagneticButton>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col items-center justify-center text-center h-full absolute inset-0 px-8"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
                    className="w-24 h-24 bg-wood/10 rounded-full flex items-center justify-center mb-8 text-wood relative overflow-hidden"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <CheckCircle size={48} strokeWidth={1.5} />
                    </motion.div>
                    <motion.div 
                      className="absolute inset-0 border-2 border-wood rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-4xl font-serif text-ink mb-4"
                  >
                    Inquiry Received
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-ink/70 font-light max-w-sm mb-10 text-lg"
                  >
                    Thank you for reaching out. Our team will review your project details and get back to you within 24-48 hours.
                  </motion.p>
                  <motion.button 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    onClick={() => setIsSubmitted(false)}
                    className="border-b border-ink pb-1 text-sm uppercase tracking-widest hover:text-wood hover:border-wood transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 lg:px-12 mt-16 mb-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-ink mb-4">Our Service Area</h2>
            <p className="text-ink/60 font-light">Proudly serving Newcastle, the Hunter Valley, and surrounding regions.</p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="w-full aspect-[21/9] min-h-[400px] rounded-sm overflow-hidden bg-ink/5 relative group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212883.69315806686!2d151.52838381255555!3d-32.89066675034604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b73145952d92945%3A0x5017d681632f0c0!2sNewcastle%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1710600000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map"
              className="absolute inset-0 grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            ></iframe>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
