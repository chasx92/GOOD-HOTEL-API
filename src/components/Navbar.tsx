import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  onCTAClick?: () => void;
}

export function Navbar({ onCTAClick }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    onCTAClick?.();
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: t.navbar.features, href: 'steps' },
    { label: t.navbar.security, href: 'security' },
    { label: t.navbar.pricing, href: 'pricing' },
    { label: t.navbar.faq, href: 'faq' },
  ];

  return (
    <motion.nav
      aria-label="Navigation principale"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        fontFamily: '-apple-system, SF Pro Display, sans-serif',
      }}
    >
      <div
        className={`w-full transition-all duration-300 ${isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm py-3'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-24">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
              className="flex items-center gap-2.5 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="relative w-9 h-9 flex items-center justify-center rounded-xl overflow-hidden" style={{
                background: 'linear-gradient(135deg, #1C1C1E 0%, #3A3A3C 100%)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
              }}>
                <span className="font-bold text-xl text-white relative z-10">O</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D4B886] via-[#B68D40] to-transparent opacity-40" />
                <div className="absolute inset-0" style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 60%)',
                }} />
              </div>

              <span className="text-xl font-bold tracking-tight" style={{
                background: 'linear-gradient(135deg, #1C1C1E 0%, #3A3A3C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Openli
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="relative text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'fr' ? 'FR' : 'EN'}</span>
              </button>

              {/* CTA Desktop */}
              <motion.button
                onClick={scrollToForm}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-[15px] font-semibold shadow-lg hover:bg-gray-800 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>{t.navbar.cta}</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-900" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-lg font-medium text-gray-900"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                <button
                  onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                  className="flex items-center gap-2 text-gray-600 font-medium"
                >
                  <Globe className="w-5 h-5" />
                  <span>{language === 'fr' ? 'Passer en Anglais' : 'Switch to French'}</span>
                </button>

                <button
                  onClick={scrollToForm}
                  className="w-full py-3 rounded-xl bg-gray-900 text-white font-semibold text-center"
                >
                  {t.navbar.cta}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
