import { Shield, Zap, Lock, Radio } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Security() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Radio,
      title: t.security.feature1.title,
      description: t.security.feature1.description,
      color: '#007AFF',
    },
    {
      icon: Zap,
      title: t.security.feature2.title,
      description: t.security.feature2.description,
      color: '#FF9500',
    },
    {
      icon: Lock,
      title: t.security.feature3.title,
      description: t.security.feature3.description,
      color: '#34C759',
    },
    {
      icon: Shield,
      title: t.security.feature4.title,
      description: t.security.feature4.description,
      color: '#C3A36E',
    },
  ];

  return (
    <section 
      id="security"
      aria-labelledby="security-heading"
      className="relative overflow-hidden scroll-mt-16"
      ref={ref}
      style={{ 
        background: '#FFFFFF',
        paddingTop: 'calc(var(--spacing) * 14)', // Réduit de 80px à 56px
        paddingBottom: 'calc(var(--spacing) * 14)', // Réduit de 80px à 56px
      }}
    >
      {/* Top gradient overlay */}
      <div 
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(242, 242, 247, 0.8) 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      />
      
      {/* Bottom gradient overlay */}
      <div 
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(242, 242, 247, 0.8) 100%)',
        }}
      />
      
      <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-24 relative z-10">
        <motion.div
          className="text-center px-4"
          style={{ marginBottom: 'calc(var(--spacing) * 16)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 
            id="security-heading"
            className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl text-balance"
            style={{
              color: '#1C1C1E',
              fontFamily: '-apple-system, SF Pro Display, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 'calc(var(--spacing) * 4)',
            }}
          >
            {t.security.title}
          </h2>
          <p 
            className="max-w-[600px] mx-auto text-[15px] md:text-base lg:text-lg text-pretty"
            style={{
              color: '#3C3C43',
              fontFamily: '-apple-system, SF Pro Display, sans-serif',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            {t.security.subtitle}
          </p>
        </motion.div>

        <div 
          className="grid sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 'calc(var(--spacing) * 8)', marginBottom: 'calc(var(--spacing) * 12)' }}
        >
          {features.slice(0, 3).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
              >
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-[20px] md:rounded-[24px] flex items-center justify-center mx-auto relative overflow-hidden"
                  style={{
                    background: `${feature.color}10`,
                    border: `1.5px solid ${feature.color}20`,
                    boxShadow: `0 4px 12px ${feature.color}15`,
                    marginBottom: 'calc(var(--spacing) * 6)',
                  }}
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle, ${feature.color}30 0%, transparent 70%)`,
                      transition: 'opacity var(--transition-base) var(--easing-smooth)',
                    }}
                  />
                  
                  <Icon 
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 relative z-10" 
                    style={{ color: feature.color }}
                    strokeWidth={1.5}
                  />
                </motion.div>

                <h3 
                  className="text-lg md:text-xl lg:text-2xl text-balance"
                  style={{
                    color: '#1C1C1E',
                    fontFamily: '-apple-system, SF Pro Display, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    marginBottom: 'calc(var(--spacing) * 3)',
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-[14px] md:text-sm lg:text-base max-w-[280px] mx-auto text-pretty"
                  style={{
                    color: '#3C3C43',
                    fontFamily: '-apple-system, SF Pro Display, sans-serif',
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Privacy statement */}
        <motion.div
          className="text-center max-w-[700px] mx-auto rounded-[16px]"
          style={{
            background: 'rgba(195, 163, 110, 0.08)',
            border: '1px solid rgba(195, 163, 110, 0.2)',
            boxShadow: 'var(--shadow-gold-sm)',
            padding: 'calc(var(--spacing) * 5) calc(var(--spacing) * 6)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
        >
          <p 
            className="flex items-center justify-center gap-2 text-sm md:text-base"
            style={{
              color: '#1C1C1E',
              fontFamily: '-apple-system, SF Pro Display, sans-serif',
              fontWeight: 500,
            }}
          >
            <Lock className="inline w-4 h-4" style={{ color: '#C3A36E' }} />
            Vos clés restent dans le téléphone du client — pas dans le cloud.
          </p>
        </motion.div>
      </div>
    </section>
  );
}