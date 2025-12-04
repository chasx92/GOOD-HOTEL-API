import { Check } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { FONT_BODY, FONT_HEADING } from '../styles/typography';

export function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section 
      className="py-12 md:py-16" 
      ref={ref}
      style={{ 
        background: 'linear-gradient(135deg, rgba(195, 163, 110, 0.04) 0%, rgba(0, 122, 255, 0.04) 100%)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
          <motion.div
            className="flex items-center gap-2.5 md:gap-3 px-5 md:px-6 py-3 md:py-3.5 rounded-full shadow-lg"
            style={{
              background: '#FFFFFF',
              border: '1.5px solid rgba(195, 163, 110, 0.3)',
              boxShadow: '0 4px 16px rgba(195, 163, 110, 0.2), 0 2px 4px rgba(195, 163, 110, 0.12)',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 8px 24px rgba(195, 163, 110, 0.3), 0 4px 8px rgba(195, 163, 110, 0.18)" 
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center"
              style={{ 
                background: 'linear-gradient(135deg, #B8935C 0%, #C3A36E 50%, #D4B886 100%)',
                boxShadow: '0 2px 8px rgba(195, 163, 110, 0.25)'
              }}
              initial={{ rotate: -180, scale: 0 }}
              animate={isInView ? { rotate: 0, scale: 1 } : { rotate: -180, scale: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Check className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
            </motion.div>
            <span
              className="text-[15px] md:text-[16px]"
              style={{
                color: '#1C1C1E',
                fontFamily: FONT_HEADING,
                fontWeight: 600,
              }}
            >
              Vu chez Hyatt
            </span>
          </motion.div>

          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p
              className="text-[14px] md:text-[15px]"
              style={{
                color: '#3C3C43',
                fontFamily: FONT_BODY,
                fontWeight: 500,
              }}
            >
              Pionnier Apple Wallet côté hôtellerie.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
