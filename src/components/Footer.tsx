import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: t.footer.features, href: '#steps' },
      { label: t.footer.pricing, href: '#pricing' },
    ],
    company: [
      { label: t.footer.about, href: '#' },
      { label: t.footer.contact, href: '#form' },
    ],
    legal: [
      { label: t.footer.privacy, href: '#' },
      { label: t.footer.terms, href: '#' },
      { label: t.footer.methodology, href: '#' },
    ],
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Informations de bas de page"
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid #E5E5EA',
        fontFamily: '-apple-system, SF Pro Display, sans-serif',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-24 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              {/* Logo */}
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="9" stroke="#C3A36E" strokeWidth="1.5" fill="none" />
                <circle cx="14" cy="14" r="2.5" fill="#C3A36E" />
              </svg>
              <span className="text-xl font-light" style={{ color: '#C3A36E', fontFamily: '-apple-system, SF Pro Display, sans-serif' }}>
                Openli
              </span>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-gray-600 mb-6">
              La solution premium pour transformer votre hôtel avec des clés digitales dans Apple & Google Wallet.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5 mb-6">
              <a
                href="mailto:sam.grailled@gmail.com"
                className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                sam.grailled@gmail.com
              </a>
              <a
                href="tel:+33629644854"
                className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                +33 6 29 64 48 54
              </a>
              <p className="flex items-center gap-2.5 text-sm text-gray-600">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                Paris, France
              </p>
            </div>

            {/* Social Links */}
            <a
              href="https://www.linkedin.com/in/samuel-chetrit/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-nous sur LinkedIn"
              className="inline-flex w-9 h-9 rounded-lg items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
            >
              <Linkedin className="w-4.5 h-4.5" aria-hidden="true" />
            </a>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-900">
              {t.footer.product}
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-900">
              {t.footer.company}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => e.preventDefault()}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-900">
              {t.footer.legal}
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => e.preventDefault()}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            {t.footer.copyright.replace('2025', currentYear.toString())}
          </p>

          <div className="flex items-center gap-3">
            <div className="px-2.5 py-1 rounded-md bg-green-50 text-green-700 text-xs font-medium border border-green-100">
              🔒 RGPD Compliant
            </div>
            <div className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
              🇫🇷 Made in France
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}