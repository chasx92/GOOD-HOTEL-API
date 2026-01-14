import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function Steps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="steps"
      aria-label="Séparateurs de section"
      className="relative overflow-hidden scroll-mt-16"
      ref={ref}
      style={{
        background: 'transparent',
        paddingTop: 'calc(var(--spacing) * 8)',
        paddingBottom: 'calc(var(--spacing) * 8)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-24">
        {/* Progress indicator */}
        <motion.div
          className="flex items-center justify-center"
          style={{ gap: 'calc(var(--spacing) * 3)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, ease: 'easeOut' }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-1 rounded-full"
              style={{ background: '#C3A36E' }}
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : { width: 0 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
