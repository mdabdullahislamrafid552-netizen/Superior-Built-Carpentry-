import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        // Easing function for the counter to slow down at the end
        const increment = Math.max(1, Math.floor((100 - prev) * 0.1));
        return prev + increment;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-ink text-paper flex flex-col justify-between p-6 lg:p-12"
        >
          <div className="flex justify-between items-start w-full">
            <img 
              src="https://i.imgur.com/Q2sdfuU.png" 
              alt="Superior Built Carpentry Logo" 
              className="h-16 md:h-20 lg:h-24 w-auto object-contain" 
              referrerPolicy="no-referrer"
            />
            <span className="text-xs uppercase tracking-[0.2em] text-wood mt-4">Loading Experience</span>
          </div>
          
          <div className="flex justify-between items-end w-full">
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                className="text-[12vw] leading-none font-serif tracking-tighter"
              >
                Superior Built
              </motion.h1>
            </div>
            <div className="text-[8vw] font-mono leading-none text-wood">
              {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
