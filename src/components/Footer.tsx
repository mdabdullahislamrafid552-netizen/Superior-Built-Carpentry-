import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import MagneticButton from './MagneticButton';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper pt-24 pb-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl mb-6">Ready to elevate your outdoor space?</h3>
            <p className="text-paper/60 max-w-md font-light leading-relaxed mb-8">
              Contact us today to schedule a consultation. We bring decades of craftsmanship to every deck, patio, and custom timber project in Newcastle & Hunter Valley.
            </p>
            <MagneticButton>
              <Link 
                to="/contact" 
                className="inline-block border border-paper/30 hover:bg-paper hover:text-ink px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300 rounded-full cursor-hover"
              >
                Start a Project
              </Link>
            </MagneticButton>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-paper/40 mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-paper/80 hover:text-wood transition-colors font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-paper/40 mb-6">Contact</h4>
            <ul className="space-y-4 font-light text-paper/80">
              <li>+61 432 392 149</li>
              <li>superior.built@outlook.com</li>
              <li>Newcastle & Hunter Valley, NSW</li>
              <li className="pt-4 text-paper/40 text-sm">Lic: 465482c</li>
            </ul>
          </div>
        </div>

        {/* Massive Footer Text */}
        <div className="border-t border-paper/10 pt-12 pb-6 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] leading-[0.8] font-serif tracking-tighter text-paper/5 w-full text-center select-none"
          >
            SUPERIOR BUILT
          </motion.h2>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center mt-12 text-xs uppercase tracking-widest text-paper/40">
            <p>&copy; {new Date().getFullYear()} Superior Built Carpentry.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="#" className="hover:text-paper transition-colors">Instagram</Link>
              <Link to="#" className="hover:text-paper transition-colors">Facebook</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
