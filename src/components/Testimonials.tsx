import { Star } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Testimonials() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const benefits = t.testimonials.benefits;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden scroll-mt-16"
      ref={ref}
      style={{ 
        background: 'linear-gradient(180deg, #F2F2F7 0%, #FFFFFF 50%, #F2F2F7 100%)',
        paddingTop: 'calc(var(--spacing) * 14)', // Réduit de 80px à 56px
        paddingBottom: 'calc(var(--spacing) * 14)', // Réduit de 80px à 56px
      }}
    >
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(195, 163, 110, 0.03) 0%, transparent 100%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-24 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center px-4"
          style={{ marginBottom: 'calc(var(--spacing) * 16)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p 
            className="text-xs tracking-[0.12em] uppercase"
            style={{
              color: '#C3A36E',
                            fontWeight: 600,
              marginBottom: 'calc(var(--spacing) * 3)',
            }}
          >
            {t.testimonials.badge}
          </p>
          <h2
            id="testimonials-heading"
            className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl text-balance"
            style={{
              color: '#1C1C1E',
                            fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 'calc(var(--spacing) * 4)',
            }}
          >
            {t.testimonials.title}
          </h2>
          <p
            className="max-w-[650px] mx-auto text-[15px] md:text-base lg:text-lg text-pretty"
            style={{
              color: '#3C3C43',
                            fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            {t.testimonials.description}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 'calc(var(--spacing) * 6)' }}
        >
          {benefits.map((benefit, index) => {
            const delay = 0.15 * index;

            return (
              <motion.div
                key={benefit.title}
                className="group relative rounded-[20px] md:rounded-[24px] cursor-default"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: 'var(--shadow-md)',
                  padding: 'calc(var(--spacing) * 8)',
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.5,
                  delay,
                  ease: 'easeOut'
                }}
                whileHover={{
                  y: -6,
                  boxShadow: 'var(--shadow-gold-lg)',
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {/* Icon */}
                <motion.div
                  className="absolute -top-2.5 md:-top-3 -right-2.5 md:-right-3 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #B8935C 0%, #C3A36E 35%, #D4B886 70%, #E5D4A8 100%)',
                    boxShadow: '0 4px 16px rgba(195, 163, 110, 0.2), 0 2px 4px rgba(195, 163, 110, 0.12)',
                  }}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                  transition={{ duration: 0.5, delay: 0.3 + delay }}
                  whileHover={{ scale: 1.1, rotate: 15 }}
                >
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-white" fill="white" />
                </motion.div>

                {/* Badge */}
                <div
                  className="inline-flex items-center px-3 py-1 rounded-full mb-4"
                  style={{
                    background: 'rgba(195, 163, 110, 0.1)',
                    border: '1px solid rgba(195, 163, 110, 0.2)',
                  }}
                >
                  <span
                    className="text-xs"
                    style={{
                      color: '#C3A36E',
                                        fontWeight: 600,
                    }}
                  >
                    {benefit.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl mb-3"
                  style={{
                    color: '#1C1C1E',
                                    fontWeight: 700,
                  }}
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p
                  className="text-base text-pretty mb-6"
                  style={{
                    color: '#3C3C43',
                                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {benefit.description}
                </p>

                {/* Highlight */}
                <motion.div
                  className="border-t"
                  style={{
                    borderColor: 'rgba(0, 0, 0, 0.06)',
                    paddingTop: 'calc(var(--spacing) * 5)',
                  }}
                >
                  <div
                    className="flex items-baseline"
                    style={{ gap: 'calc(var(--spacing) * 2)' }}
                  >
                    <span
                      className="text-2xl"
                      style={{
                        color: '#C3A36E',
                                        fontWeight: 700,
                      }}
                    >
                      {benefit.highlight.value}
                    </span>
                    <span
                      className="text-sm"
                      style={{
                        color: '#8E8E93',
                                        fontWeight: 500,
                      }}
                    >
                      {benefit.highlight.label}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          style={{ marginTop: 'calc(var(--spacing) * 16)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
        >
          <div 
            className="inline-flex items-center px-4 py-2 rounded-full mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(195, 163, 110, 0.12) 0%, rgba(195, 163, 110, 0.06) 100%)',
              border: '1.5px solid rgba(195, 163, 110, 0.3)',
            }}
          >
            <div 
              className="w-2 h-2 rounded-full mr-2 animate-pulse"
              style={{ background: '#34C759' }}
            />
            <span
              className="text-sm"
              style={{
                color: '#1C1C1E',
                                fontWeight: 600,
              }}
            >
              {t.testimonials.programNote}
            </span>
          </div>
          <div
            className="flex items-center justify-center flex-wrap"
            style={{ gap: 'calc(var(--spacing) * 8)' }}
          >
            {t.testimonials.perks.map((perk, index) => (
              <div
                key={perk}
                className="flex items-center"
                style={{ gap: 'calc(var(--spacing) * 2)' }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: index === 0 ? '#007AFF' : '#C3A36E' }}
                />
                <span
                  className="text-sm"
                  style={{
                    color: '#3C3C43',
                                      fontWeight: 500,
                  }}
                >
                  {perk}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}