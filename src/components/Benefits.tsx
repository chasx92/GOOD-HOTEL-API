import { Zap, TrendingDown, Clock, BarChart3, Headphones, Leaf } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Benefits() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // OPTIMIZED: 3 couleurs max (Bleu/Vert/Or) au lieu de 6
  const ACCENT_COLORS = {
    blue: '#007AFF',
    green: '#34C759',
    gold: '#C3A36E',
  };

  const benefits = [
    {
      icon: Zap,
      metric: '+ 42 %',
      metricLabel: 'Satisfaction',
      title: t.benefits.benefit1.title,
      description: t.benefits.benefit1.description,
      color: '#34C759',
    },
    {
      icon: TrendingDown,
      metric: '− 80 %',
      metricLabel: 'Cartes plastique',
      title: t.benefits.benefit2.title,
      description: t.benefits.benefit2.description,
      color: '#007AFF',
    },
    {
      icon: Clock,
      metric: '< 24h',
      metricLabel: 'Déploiement',
      title: t.benefits.benefit3.title,
      description: t.benefits.benefit3.description,
      color: '#FF9500',
    },
    {
      icon: BarChart3,
      metric: '+ 28 %',
      metricLabel: 'Check-in mobile',
      title: t.benefits.benefit4.title,
      description: t.benefits.benefit4.description,
      color: '#5AC8FA',
    },
    {
      icon: Headphones,
      metric: '< 5min',
      metricLabel: 'Support',
      title: t.benefits.benefit5.title,
      description: t.benefits.benefit5.description,
      color: '#AF52DE',
    },
    {
      icon: Leaf,
      metric: '− 65 %',
      metricLabel: 'Plastique',
      title: t.benefits.benefit6.title,
      description: t.benefits.benefit6.description,
      color: '#32AE85',
    },
  ];

  return (
    <section 
      id="benefits"
      aria-labelledby="benefits-heading"
      className="relative overflow-hidden scroll-mt-16"
      ref={ref}
      style={{ 
        background: '#F2F2F7',
        paddingTop: 'calc(var(--spacing) * 14)', // Réduit de 80px à 56px
        paddingBottom: 'calc(var(--spacing) * 14)', // Réduit de 80px à 56px
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-24">
        <motion.div
          className="text-center px-4"
          style={{ marginBottom: 'calc(var(--spacing) * 16)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 
            id="benefits-heading"
            className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl text-balance"
            style={{
              color: '#1C1C1E',
                            fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 'calc(var(--spacing) * 4)',
            }}
          >
            {t.benefits.title}
          </h2>
          <p 
            className="max-w-[700px] mx-auto text-[15px] md:text-base lg:text-lg text-pretty"
            style={{
              color: '#3C3C43',
                            fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            {t.benefits.subtitle}
          </p>
        </motion.div>

        {/* OPTIMIZED: Gap cohérent avec système spacing */}
        <div 
          className="grid sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 'calc(var(--spacing) * 6)' }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <motion.div
                key={index}
                tabIndex={0}
                role="article"
                aria-labelledby={`benefit-title-${index}`}
                className="group relative overflow-hidden cursor-default rounded-[20px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  // OPTIMIZED: Padding fixe 24→28px au lieu de 20→24→32px
                  padding: '24px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.06)',
                  // OPTIMIZED: Shadow premium Y12/B28 @12% au lieu de Y2/B8
                  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.06)',
                  // OPTIMIZED: Focus ring avec couleur accent
                  '--tw-ring-color': benefit.color,
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  // OPTIMIZED: Hover shadow Y16/B40 @12% + border @12%
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
                  borderColor: 'rgba(0,0,0,0.12)',
                  scale: 1.1,
                  y: -4,
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
                whileFocus={{
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
                  borderColor: 'rgba(0,0,0,0.12)',
                  scale: 1.1,
                  y: -4,
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
                whileTap={{
                  // OPTIMIZED: Press translateY +1px + opacity 96%
                  y: 1,
                  opacity: 0.96,
                }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${benefit.color}08 0%, transparent 60%)`,
                  }}
                />

                {/* OPTIMIZED: Badge 32×32 fixe au lieu de 48→56→64px */}
                <motion.div
                  className="relative z-10 flex items-center justify-center rounded-[10px] mb-3"
                  style={{
                    width: '40px',
                    height: '40px',
                    // OPTIMIZED: Background @10% et border @22%
                    background: `${benefit.color}10`,
                    border: `1.5px solid ${benefit.color}22`,
                  }}
                  whileHover={{
                    // OPTIMIZED: Icône translateY -2px au lieu de rotate
                    y: -2,
                    scale: 1.08,
                  }}
                  transition={{ duration: 0.1, ease: 'easeOut' }}
                >
                  {/* OPTIMIZED: Icône 28px pour une présence renforcée */}
                  <Icon
                    className="w-7 h-7"
                    style={{ color: benefit.color }}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </motion.div>

                {/* OPTIMIZED: Gap 8px au lieu de 10→12→16px */}
                <div className="mb-2 relative z-10">
                  {/* OPTIMIZED: Métrique en prefix (social proof) avec label contextuel */}
                  <div 
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-2"
                    style={{
                      background: `${benefit.color}12`,
                                          }}
                  >
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: benefit.color,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {benefit.metric}
                    </span>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 500,
                        color: benefit.color,
                        opacity: 0.7,
                        letterSpacing: '0.03em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {benefit.metricLabel}
                    </span>
                  </div>

                  {/* OPTIMIZED: Titre 20px fixe au lieu de 20→24→30px */}
                  <h3
                    id={`benefit-title-${index}`}
                    style={{
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: '#1C1C1E',
                                            fontWeight: 600,
                      // OPTIMIZED: Tracking -0.5% au lieu de -2%
                      letterSpacing: '-0.005em',
                    }}
                  >
                    {benefit.title}
                  </h3>
                </div>

                {/* OPTIMIZED: Description 15px/24 au lieu de 14→16px */}
                <p 
                  className="relative z-10"
                  style={{
                    fontSize: '15px',
                    lineHeight: '24px',
                    color: '#3C3C43',
                                        fontWeight: 400,
                  }}
                >
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}