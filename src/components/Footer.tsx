import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const translation = t.footer?.copyright;
  const copyrightText = typeof translation === 'string'
    ? translation.replace('2025', currentYear.toString())
    : `© ${currentYear}`;

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
      <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-24 py-12">
        <div className="flex flex-col gap-6 items-center text-center">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
            <Link
              to="/terms"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              CGV
            </Link>
            <Link
              to="/legal"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Mentions Légales
            </Link>
          </div>
          <p className="text-xs text-gray-500">{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}
