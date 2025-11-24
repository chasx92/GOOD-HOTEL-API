import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function BackToTop() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label={t.backToTop.label}
          className="hidden md:flex fixed bottom-6 md:bottom-8 right-6 md:right-8 z-40 w-11 h-11 md:w-12 md:h-12 rounded-full items-center justify-center shadow-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007AFF] focus-visible:ring-offset-4"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            boxShadow: '0 4px 16px rgba(0, 122, 255, 0.12), 0 2px 4px rgba(0, 0, 0, 0.06)',
          }}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 8px 24px rgba(0, 122, 255, 0.18), 0 4px 8px rgba(0, 122, 255, 0.1)',
          }}
          whileTap={{ scale: 0.92 }}
        >
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowUp 
              className="w-4.5 md:w-5 h-4.5 md:h-5" 
              style={{ color: '#007AFF' }}
              strokeWidth={2.5}
            />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
