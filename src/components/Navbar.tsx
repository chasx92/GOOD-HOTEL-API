import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    { label: t.navbar.pricing, href: 'pricing' },
    { label: t.navbar.faq, href: 'faq' },
    { label: t.navbar.contact, href: 'contact' },
  ];

  return (
    <motion.nav
      aria-label="Navigation principale"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
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
              className="flex items-center cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="text-2xl font-bold tracking-tight text-black">
                Unlocky
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
                  className="relative text-[15px] font-bold text-black nav-link-underline transition-colors"
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <Link
                to="/mobile"
                className="relative text-[15px] font-bold text-black nav-link-underline transition-colors"
              >
                {t.navbar.mobile}
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium btn-gradient cta-hover-effect no-underline"
              >
                <Globe className="w-4 h-4" />
                <span className="transition-colors">{language === 'fr' ? 'FR' : 'EN'}</span>
              </button>

              {/* CTA Desktop */}
              <motion.button
                onClick={scrollToForm}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-[15px] font-semibold btn-black cta-hover-effect"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>{t.navbar.cta}</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg btn-gradient"
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
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
                  className="block text-lg font-bold text-black"
                >
                  {link.label}
                </a>
              ))}

              <Link
                to="/mobile"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-bold text-black"
              >
                {t.navbar.mobile}
              </Link>

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                <button
                  onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                  className="flex items-center gap-2 font-medium btn-gradient rounded-lg px-3 py-2 cta-hover-effect no-underline"
                >
                  <Globe className="w-5 h-5" />
                  <span className="transition-colors">{language === 'fr' ? 'Passer en Anglais' : 'Switch to French'}</span>
                </button>

                <button
                  onClick={scrollToForm}
                  className="w-full py-3 rounded-xl font-semibold text-center btn-black cta-hover-effect"
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
