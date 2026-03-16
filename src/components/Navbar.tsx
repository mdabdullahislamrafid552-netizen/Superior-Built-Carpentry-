import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if current page is home to determine initial text color
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  const isDarkText = !isOpen && (scrolled || !isHome);

  const navClass = isOpen 
    ? 'bg-transparent py-6 text-white'
    : scrolled 
      ? 'bg-paper/90 backdrop-blur-md border-b border-ink/5 text-ink py-4' 
      : `bg-transparent py-6 ${isHome ? 'text-white' : 'text-ink'}`;

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${navClass}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          
          <Link to="/" className="flex flex-col z-50 relative">
            <img 
              src="https://i.imgur.com/Q2sdfuU.png" 
              alt="Superior Built Carpentry Logo" 
              className={`w-[121px] h-[117px] object-contain transition-all duration-300 ${isDarkText ? 'brightness-0' : ''}`} 
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xs uppercase tracking-[0.15em] font-medium hover:text-wood transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-wood transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <MagneticButton>
              <Link
                to="/contact"
                className={`text-xs uppercase tracking-[0.15em] font-medium px-6 py-3 rounded-full border transition-all duration-300 cursor-hover ${
                  scrolled || !isHome 
                    ? 'border-ink text-ink hover:bg-ink hover:text-paper' 
                    : 'border-white text-white hover:bg-white hover:text-ink'
                }`}
              >
                Get a Quote
              </Link>
            </MagneticButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 relative p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className={isDarkText ? 'text-ink' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-ink text-paper z-40 flex flex-col justify-center px-6"
          >
            <div className="flex flex-col gap-8">
              <Link to="/" className="text-5xl font-serif tracking-tighter hover:text-wood transition-colors">Home</Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-5xl font-serif tracking-tighter hover:text-wood transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="text-5xl font-serif tracking-tighter text-wood hover:text-white transition-colors mt-8"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
