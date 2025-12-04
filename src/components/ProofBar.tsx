import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FONT_HEADING } from '../styles/typography';

// Premium SVG Logos - Detailed versions - LARGER SIZE
const SaltoLogo = () => (
  <svg width="180" height="56" viewBox="0 0 180 56" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logo SALTO Systems">
    {/* Modern lock icon with gradient */}
    <defs>
      <linearGradient id="saltoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0066CC" />
        <stop offset="100%" stopColor="#004A99" />
      </linearGradient>
    </defs>
    <rect x="4" y="20" width="20" height="22" rx="3" fill="url(#saltoGrad)" opacity="0.9"/>
    <rect x="8" y="16" width="12" height="8" rx="6" fill="none" stroke="url(#saltoGrad)" strokeWidth="2.5"/>
    <circle cx="14" cy="32" r="3" fill="white" opacity="0.9"/>
    <rect x="12.5" y="34" width="3" height="5" rx="1.5" fill="white" opacity="0.9"/>
    {/* SALTO wordmark */}
    <text x="32" y="36" fontFamily={FONT_HEADING} fontSize="28" fontWeight="800" fill="#0066CC" letterSpacing="-0.5">SALTO</text>
    <text x="32" y="47" fontFamily={FONT_HEADING} fontSize="11" fontWeight="500" fill="#0066CC" opacity="0.6">ACCESS SYSTEMS</text>
  </svg>
);

const DormakabaLogo = () => (
  <svg width="220" height="54" viewBox="0 0 220 54" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logo dormakaba">
    {/* Sophisticated arrow/triangle mark */}
    <defs>
      <linearGradient id="dormaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E31E24" />
        <stop offset="100%" stopColor="#B71C1C" />
      </linearGradient>
    </defs>
    <path d="M6 10L16 27L6 44V10Z" fill="url(#dormaGrad)"/>
    <path d="M11 16L19 27L11 38V16Z" fill="#E31E24" opacity="0.6"/>
    {/* dormakaba wordmark - lowercase modern style */}
    <text x="28" y="34" fontFamily={FONT_HEADING} fontSize="24" fontWeight="600" fill="#005596" letterSpacing="-0.3">dormakaba</text>
    <rect x="28" y="38" width="125" height="2" fill="#005596" opacity="0.2"/>
  </svg>
);

const AssaAbloyLogo = () => (
  <svg width="210" height="54" viewBox="0 0 210 54" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logo ASSA ABLOY">
    {/* Hexagonal security badge */}
    <defs>
      <linearGradient id="assaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#005596" />
        <stop offset="100%" stopColor="#003D6B" />
      </linearGradient>
    </defs>
    <path d="M11 16L6 27L11 38L16 27L11 16Z" fill="url(#assaGrad)" opacity="0.15"/>
    <path d="M11 19L7.5 27L11 35L14.5 27L11 19Z" fill="url(#assaGrad)"/>
    <circle cx="11" cy="27" r="3.5" fill="white" opacity="0.8"/>
    {/* ASSA ABLOY wordmark - Bold industrial style */}
    <text x="24" y="34" fontFamily={FONT_HEADING} fontSize="25" fontWeight="800" fill="#005596" letterSpacing="0.5">
      ASSA ABLOY
    </text>
    <rect x="24" y="38" width="50" height="2.5" rx="1.25" fill="#005596" opacity="0.3"/>
    <rect x="78" y="38" width="50" height="2.5" rx="1.25" fill="#005596" opacity="0.3"/>
  </svg>
);

export function ProofBar() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const partners = [
    { name: 'SALTO', component: SaltoLogo, width: 180, height: 56 },
    { name: 'dormakaba', component: DormakabaLogo, width: 220, height: 54 },
    { name: 'ASSA ABLOY', component: AssaAbloyLogo, width: 210, height: 54 },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section 
      id="proofbar"
      aria-label="Nos partenaires d'intégration"
      className="relative overflow-hidden scroll-mt-16" 
      ref={ref}
      style={{ 
        background: '#F2F2F7',
        paddingTop: 'calc(var(--spacing) * 8)', // Augmenté de 24px à 32px
        paddingBottom: 'calc(var(--spacing) * 10)', // Augmenté de 32px à 40px
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-24 relative z-10">
        {/* Section title - Compact & Refined */}
        <motion.div
          className="text-center"
          style={{ marginBottom: 'calc(var(--spacing) * 8)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2
            className="text-sm md:text-base lg:text-lg px-4"
            style={{
              color: '#8E8E93',
              fontFamily: FONT_HEADING,
              fontWeight: 500,
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
            }}
          >
            {t.proofBar.title}
          </h2>
        </motion.div>

        {/* Partners logos - Desktop with grayscale */}
        <div 
          className="hidden md:flex flex-wrap items-center justify-center"
          style={{ 
            gap: 'calc(var(--spacing) * 12)',
            marginBottom: 'calc(var(--spacing) * 8)',
          }}
        >
          {partners.map((partner, index) => {
            const LogoComponent = partner.component;
            return (
              <motion.div
                key={index}
                className="flex items-center justify-center"
                style={{ 
                  minWidth: partner.width,
                  filter: 'grayscale(100%)',
                  opacity: 0.4,
                  transition: 'all var(--transition-base) var(--easing-smooth)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 0.4, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ filter: 'grayscale(0%)', opacity: 1, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <LogoComponent />
              </motion.div>
            );
          })}
        </div>

        {/* Partners logos - Mobile marquee with grayscale */}
        <div className="md:hidden relative overflow-hidden">
          <motion.div
            className="flex gap-16"
            animate={{
              x: [0, -240 * partners.length],
            }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => {
              const LogoComponent = partner.component;
              return (
                <div
                  key={index}
                  className="flex items-center justify-center shrink-0"
                  style={{ 
                    minWidth: partner.width,
                    filter: 'grayscale(100%)',
                    opacity: 0.4,
                  }}
                >
                  <LogoComponent />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}