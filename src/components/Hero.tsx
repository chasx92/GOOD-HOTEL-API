import { ChevronRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { WalletCard } from './WalletCard';
import { useLanguage } from '../contexts/LanguageContext';
import { useCallback } from 'react';
import { FONT_BODY, FONT_HEADING } from '../styles/typography';

// Constants for Hero component
const HERO_STYLES = {
  background: '#FFFFFF',
  brandColor: '#C3A36E',
  fontFamily: FONT_BODY,
  paddingTop: 'calc(var(--spacing) * 12)',
  paddingBottom: 'calc(var(--spacing) * 6)',
  maxWidth: '1440px',
} as const;

// CSS Classes
const CLASS_NAMES = {
  heading: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight font-heading',
  subtitle: 'text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed',
  primaryButton: 'group relative overflow-hidden rounded-xl px-8 py-3.5 text-white shadow-md transition-all hover:shadow-lg btn-gradient cta-hover-effect',
  secondaryButton: 'group relative overflow-hidden rounded-xl px-8 py-3.5 text-white shadow-md transition-all hover:shadow-lg cta-hover-effect',
  trustIndicators: 'flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-600',
} as const;

interface HeroProps {
  onPrimaryClick?: () => void;
}

export function Hero({ onPrimaryClick }: HeroProps) {
  const { t } = useLanguage();
  const [heroTitleStart = '', heroTitleEnd = ''] = t.hero.title.split('{highlight}');

  // Unified scroll handler
  const scrollToSection = useCallback((sectionId: string, callback?: () => void) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    callback?.();
  }, []);

  const scrollToForm = useCallback(() => {
    scrollToSection('form', onPrimaryClick);
  }, [scrollToSection, onPrimaryClick]);

  const scrollToSteps = useCallback(() => {
    scrollToSection('steps');
  }, [scrollToSection]);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex items-center overflow-hidden"
      style={{
        background: HERO_STYLES.background,
        paddingTop: HERO_STYLES.paddingTop,
        paddingBottom: HERO_STYLES.paddingBottom,
        fontFamily: HERO_STYLES.fontFamily,
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-12 xl:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16">

          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >

            {/* H1 Heading with Gold "téléphone" */}
            <h1
              id="hero-heading"
              className={CLASS_NAMES.heading}
            >
              {heroTitleStart}
              <span style={{ color: HERO_STYLES.brandColor }}>{t.hero.titleHighlight}</span>
              {heroTitleEnd ?? ''}
            </h1>

            {/* Subtitle */}
            <p className={CLASS_NAMES.subtitle}>
              {t.hero.subtitle}
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <motion.button
                onClick={scrollToForm}
                className={CLASS_NAMES.primaryButton}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                  {t.hero.cta}
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>

              <motion.button
                onClick={scrollToSteps}
                className={CLASS_NAMES.secondaryButton}
                style={{ background: '#0B0B0F' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                  {t.hero.ctaSecondary || 'Comment ça marche'}
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <ul className={CLASS_NAMES.trustIndicators} role="list">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" aria-hidden="true" />
                <span>{t.hero.trustIndicator1 || 'Plus de cartes perdues'}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" aria-hidden="true" />
                <span>{t.hero.trustIndicator2 || 'Support sous 10 min'}</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Column: Visual */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative z-10">
              <WalletCard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
