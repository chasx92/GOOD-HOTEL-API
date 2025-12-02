import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

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
      <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-24 pt-12 pb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">

          {/* Brand & Contact */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              {/* Logo */}
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="9" stroke="#C3A36E" strokeWidth="1.5" fill="none" />
                <circle cx="14" cy="14" r="2.5" fill="#C3A36E" />
              </svg>
              <span className="text-xl font-light" style={{ color: '#C3A36E', fontFamily: '-apple-system, SF Pro Display, sans-serif' }}>
                Openli
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-gray-600">
              <a href="mailto:sam.grailled@gmail.com" className="hover:text-gray-900 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                sam.grailled@gmail.com
              </a>
              <a href="tel:+33629644854" className="hover:text-gray-900 transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +33 6 29 64 48 54
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <Link
              to="/legal"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Mentions Légales
            </Link>
            <button
              onClick={() => alert("Gestion des cookies à implémenter")}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium text-left"
            >
              Paramètres de cookies
            </button>
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