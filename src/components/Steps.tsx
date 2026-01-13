import { Smartphone, Key, Radio } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Steps() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Key,
      title: t.steps.step1.title,
      description: t.steps.step1.description,
      subtext: 'ASSA ABLOY • dormakaba • SALTO',
      color: '#C3A36E',
    },
    {
      icon: Smartphone,
      title: t.steps.step2.title,
      description: t.steps.step2.description,
      subtext: t.hero.title.includes('phone') ? 'Compatible iPhone/Apple Watch & Android' : 'Compatible iPhone/Apple Watch et Android',
      color: '#007AFF',
    },
    {
      icon: Radio,
      title: t.steps.step3.title,
      description: t.steps.step3.description,
      subtext: t.hero.title.includes('phone') ? 'Works even when locked' : 'Fonctionne même sans déverrouiller',
      color: '#34C759',
    },
  ];

  return (
    <section
      id="steps"
      aria-labelledby="steps-heading"
      className="relative overflow-hidden scroll-mt-16 pt-8 md:pt-12"
      ref={ref}
      style={{
        background: 'transparent',
        paddingBottom: 'calc(var(--spacing) * 14)', // Réduit de 80px à 56px
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-24">
        <motion.div
          className="text-center"
          style={{ marginBottom: 'calc(var(--spacing) * 16)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2
            id="steps-heading"
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-balance"
            style={{
              color: '#1C1C1E',
                            fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 'calc(var(--spacing) * 4)',
            }}
          >
            {t.steps.title}
          </h2>
          <p
            className="max-w-[600px] mx-auto text-[15px] md:text-base lg:text-lg text-pretty"
            style={{
              color: '#3C3C43',
                            fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            {t.steps.subtitle}
          </p>
        </motion.div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 'calc(var(--spacing) * 6)' }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="group relative rounded-[20px] md:rounded-[24px] cursor-default"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: 'var(--shadow-sm)',
                  padding: 'calc(var(--spacing) * 8)',
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: 'easeOut'
                }}
                whileHover={{
                  y: -8,
                  boxShadow: 'var(--shadow-lg)',
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {/* Step number */}
                <motion.div
                  className="absolute -top-2.5 md:-top-3 -left-2.5 md:-left-3 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: step.color,
                    color: '#FFFFFF',
                                        fontSize: '15px',
                    fontWeight: 700,
                  }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                >
                  {index + 1}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-[14px] md:rounded-[16px] flex items-center justify-center"
                  aria-hidden="true"
                  style={{
                    background: `${step.color}15`,
                    border: `1.5px solid ${step.color}30`,
                    marginBottom: 'calc(var(--spacing) * 6)',
                  }}
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <motion.div
                    animate={isInView && index === 2 ? {
                      scale: [1, 1.15, 1],
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    <Icon
                      className="w-8 h-8 md:w-9 md:h-9"
                      style={{ color: step.color }}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </motion.div>
                </motion.div>

                <h3
                  className="text-xl md:text-2xl text-balance"
                  style={{
                    color: '#1C1C1E',
                                        fontWeight: 600,
                    letterSpacing: '-0.01em',
                    marginBottom: 'calc(var(--spacing) * 3)',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm md:text-base text-pretty"
                  style={{
                    color: '#3C3C43',
                                        fontWeight: 400,
                    lineHeight: 1.6,
                    marginBottom: 'calc(var(--spacing) * 4)',
                  }}
                >
                  {step.description}
                </p>
                <p
                  className="text-xs md:text-sm"
                  style={{
                    color: '#8E8E93',
                                        fontWeight: 500,
                  }}
                >
                  {step.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <motion.div
          className="flex items-center justify-center"
          style={{ marginTop: 'calc(var(--spacing) * 16)', gap: 'calc(var(--spacing) * 3)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, ease: 'easeOut' }}
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
