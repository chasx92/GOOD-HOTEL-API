import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function StickyCTA() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 100vh)
      const heroHeight = window.innerHeight;
      const currentScroll = window.scrollY;
      
      // Hide when near form section
      const formSection = document.getElementById('form');
      const formOffset = formSection ? formSection.offsetTop - window.innerHeight : Infinity;
      
      setIsVisible(currentScroll > heroHeight && currentScroll < formOffset);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="lg:hidden fixed bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 z-40"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            opacity: { duration: 0.2 }
          }}
        >
          <motion.button
            onClick={scrollToForm}
            aria-label={`${t.stickyCTA.button} - ${t.stickyCTA.text}`}
            className="group relative w-full px-5 md:px-6 py-3.5 md:py-4 rounded-[14px] md:rounded-[16px] overflow-hidden shadow-2xl btn-gradient"
            whileTap={{ scale: 0.96 }}
          >
            <span 
              className="relative z-10 flex items-center justify-center gap-2 text-white text-[16px] md:text-[17px]"
              style={{ 
                fontWeight: 600,
                fontFamily: '-apple-system, SF Pro Display, sans-serif'
              }}
            >
              {t.stickyCTA.button}
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
              </motion.div>
            </span>
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
              }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Glow pulse */}
            <motion.div
              className="absolute inset-0 rounded-[16px] pointer-events-none"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
              }}
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
