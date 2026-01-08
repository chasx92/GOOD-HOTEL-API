import { Link } from 'react-router-dom';
import { Globe, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function MobileHeader() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link to="/" className="p-2 rounded-full bg-gray-100 text-gray-700" aria-label={t.mobilePage.ctaSecondary}>
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Logo Unlocky" className="h-8 w-8" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Unlocky</p>
              <p className="text-sm text-gray-800">{t.mobilePage.badge}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold"
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'fr' ? 'FR' : 'EN'}</span>
          </button>
          <Link
            to="/"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 text-gray-900 text-sm font-semibold"
          >
            {t.mobilePage.ctaSecondary}
          </Link>
        </div>
      </div>
    </header>
  );
}
