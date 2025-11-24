import { ChevronRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { WalletCard } from './WalletCard';
import { useLanguage } from '../contexts/LanguageContext';
import { useCallback } from 'react';

// Constants for Hero component
const HERO_STYLES = {
  background: '#FFFFFF',
  brandColor: '#C3A36E',
  fontFamily: '-apple-system, SF Pro Display, sans-serif',
  paddingTop: 'calc(var(--spacing) * 28)',
  paddingBottom: 'calc(var(--spacing) * 12)',
  maxWidth: '1440px',
} as const;

// CSS Classes
const CLASS_NAMES = {
  statusBadge: 'inline-flex items-center gap-2.5 mb-6',
  statusDot: 'relative flex h-2 w-2',
  walletIcon: 'w-3.5 h-3.5 fill-current',
  heading: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight',
  subtitle: 'text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed',
  primaryButton: 'group relative overflow-hidden rounded-xl px-8 py-3.5 text-white shadow-md transition-all hover:shadow-lg',
  secondaryButton: 'group rounded-xl bg-gray-100 px-8 py-3.5 text-gray-900 transition-all hover:bg-gray-200',
  trustIndicators: 'flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-600',
} as const;

interface HeroProps {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function Hero({ onPrimaryClick, onSecondaryClick }: HeroProps) {
  const { t } = useLanguage();

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
    scrollToSection('steps', onSecondaryClick);
  }, [scrollToSection, onSecondaryClick]);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden"
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
            {/* Status Badge */}
            <motion.div
              className={CLASS_NAMES.statusBadge}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-2">
                <span className={CLASS_NAMES.statusDot}>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-gray-900">
                  {t.hero.statusAvailable || 'Disponible maintenant'}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                {/* Apple Logo */}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-label="Apple">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span className="text-xs">Wallet</span>

                <span className="mx-1 text-gray-400">•</span>

                {/* Google Logo */}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" aria-label="Google">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-xs">Wallet</span>
              </div>
            </motion.div>

            {/* H1 Heading with Gold "téléphone" */}
            <h1
              id="hero-heading"
              className={CLASS_NAMES.heading}
            >
              La clé est déjà dans le <span style={{ color: HERO_STYLES.brandColor }}>téléphone</span> de vos clients
            </h1>

            {/* Subtitle */}
            <p className={CLASS_NAMES.subtitle}>
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <motion.button
                onClick={scrollToForm}
                className={CLASS_NAMES.primaryButton}
                style={{ backgroundColor: HERO_STYLES.brandColor }}
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2 font-semibold">
                  {t.hero.ctaSecondary}
                  <ChevronRight className="w-5 h-5 opacity-50 transition-transform group-hover:translate-x-1" />
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