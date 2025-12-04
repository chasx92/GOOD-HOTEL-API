import { Check, ArrowRight, Zap } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Pricing() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = t.pricingCard.features;

  const addons = t.pricingCard.addons;

  return (
    <section 
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative overflow-hidden scroll-mt-16" 
      ref={ref}
      style={{
        background: 'linear-gradient(180deg, #F2F2F7 0%, #FFFFFF 100%)',
        paddingTop: 'calc(var(--spacing) * 14)', // Reduced from 80px to 56px
        paddingBottom: 'calc(var(--spacing) * 14)', // Reduced from 80px to 56px
      }}
    >
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0, 122, 255, 0.03) 0%, transparent 100%)',
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
            className="text-[11px] md:text-xs tracking-[0.12em] uppercase"
            style={{
              color: '#007AFF',
                            fontWeight: 600,
              marginBottom: 'calc(var(--spacing) * 3)',
            }}
          >
            {t.navbar.pricing}
          </p>
          <h2 
            id="pricing-heading"
            className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl text-balance"
            style={{
              color: '#1C1C1E',
                            fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 'calc(var(--spacing) * 4)',
            }}
          >
            {t.pricing.title}
          </h2>
          <p 
            className="max-w-[700px] mx-auto text-[15px] md:text-base lg:text-lg text-pretty"
            style={{
              color: '#3C3C43',
                            fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            {t.pricing.subtitle}
          </p>
        </motion.div>

        {/* Main Pricing Card */}
        <motion.div
          className="max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <div 
            className="relative rounded-[20px] md:rounded-[24px] p-6 md:p-8 lg:p-10 xl:p-12 overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1.5px solid rgba(0, 122, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 122, 255, 0.18), 0 2px 8px rgba(0, 122, 255, 0.1)',
            }}
          >
            {/* Popular badge */}
            <motion.div
              className="absolute top-4 md:top-6 right-4 md:right-6 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full flex items-center gap-1 md:gap-1.5"
              style={{
                background: 'linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)',
                boxShadow: '0 4px 12px rgba(0, 122, 255, 0.3)',
              }}
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
            >
              <Zap className="w-3.5 h-3.5 text-white" fill="white" />
              <span
                className="text-xs text-white"
                style={{
                                    fontWeight: 700,
                }}
              >
                {t.pricingCard.badge}
              </span>
            </motion.div>

            {/* Price */}
            <div className="mb-8">
              <h3 
                className="mb-2"
                style={{
                  color: '#1C1C1E',
                                    fontSize: '28px',
                  fontWeight: 700,
                }}
              >
                {t.pricingCard.planName}
              </h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span
                  className="text-4xl md:text-5xl lg:text-6xl"
                  style={{
                    color: '#007AFF',
                                        fontWeight: 700,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {t.pricingCard.priceLabel}
                </span>
              </div>
              <p
                className="text-sm"
                style={{
                  color: '#8E8E93',
                                  }}
              >
                {t.pricingCard.priceDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <p 
                className="mb-5"
                style={{
                  color: '#1C1C1E',
                                    fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                {t.pricingCard.featuresTitle}
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  >
                    <div 
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: 'rgba(52, 199, 89, 0.15)' }}
                    >
                      <Check 
                        className="w-3 h-3" 
                        style={{ color: '#34C759' }}
                        strokeWidth={3}
                      />
                    </div>
                    <span 
                      className="text-sm leading-relaxed"
                      style={{
                        color: '#3C3C43',
                                                fontWeight: 400,
                      }}
                    >
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div 
              className="mb-8 pt-8 border-t"
              style={{ borderColor: 'rgba(0, 0, 0, 0.06)' }}
            >
              <p 
                className="mb-4"
                style={{
                  color: '#1C1C1E',
                                    fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                {t.pricingCard.addonsTitle}
              </p>
              <div className="flex flex-wrap gap-3">
                {addons.map((addon, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2.5 rounded-[12px]"
                    style={{
                      background: 'rgba(0, 122, 255, 0.08)',
                      border: '1px solid rgba(0, 122, 255, 0.2)',
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <p 
                      className="text-sm mb-0.5"
                      style={{
                        color: '#007AFF',
                                                fontWeight: 600,
                      }}
                    >
                      {addon.label}
                    </p>
                    <p 
                      className="text-xs"
                      style={{
                        color: '#8E8E93',
                                              }}
                    >
                      {addon.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.button
              onClick={() => {
                document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full px-8 py-4 rounded-[16px] relative overflow-hidden group btn-gradient cta-hover-effect"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 8px 24px rgba(0, 122, 255, 0.25), 0 4px 8px rgba(0, 122, 255, 0.15)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span 
                className="flex items-center justify-center gap-2 text-white relative z-10"
                style={{
                                    fontSize: '17px',
                  fontWeight: 600,
                }}
              >
                {t.pricingCard.cta}
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
              
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.button>
          </div>
        </motion.div>

        {/* ROI Banner */}
        <motion.div
          className="max-w-[800px] mx-auto mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div 
            className="rounded-[20px] p-6 md:p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(195, 163, 110, 0.08) 0%, rgba(195, 163, 110, 0.04) 100%)',
              border: '1px solid rgba(195, 163, 110, 0.2)',
            }}
          >
            <p 
              className="mb-2"
              style={{
                color: '#1C1C1E',
                                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              {t.pricingCard.roiTitle}
            </p>
            <p
              className="text-sm max-w-[600px] mx-auto"
              style={{
                color: '#3C3C43',
                              }}
            >
              {t.pricingCard.roiDescription}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}