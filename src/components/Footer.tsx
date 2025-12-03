import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
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
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="p-2 rounded-full btn-gradient"
              aria-label="Contact téléphonique"
            >
              <Phone className="w-4 h-4 text-white" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="p-2 rounded-full btn-gradient"
              aria-label="Contact par email"
            >
              <Mail className="w-4 h-4 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            {t.footer.copyright.replace('2025', currentYear.toString())}
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center flex-wrap justify-center gap-3">
              <div className="px-2.5 py-1 rounded-md bg-green-50 text-green-700 text-xs font-medium border border-green-100">
                🔒 RGPD Compliant
              </div>
              <div className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
                🇫🇷 Made in France
              </div>
              <Link
                to="/terms"
                className="px-3 py-1 rounded-md border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:text-gray-900 hover:border-gray-300 transition-colors"
              >
                CGV
              </Link>
              <Link
                to="/legal"
                className="px-3 py-1 rounded-md border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:text-gray-900 hover:border-gray-300 transition-colors"
              >
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
