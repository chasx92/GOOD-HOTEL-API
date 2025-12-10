import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { PhoneCall, Monitor } from 'lucide-react';

export function MobileCTA() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-900 text-white py-12 px-4" id="mobile-contact">
      <div className="max-w-3xl mx-auto space-y-5">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#C3A36E]">{t.mobilePage.contactTitle}</p>
          <h2 className="text-2xl font-bold leading-tight">{t.mobilePage.contactSubtitle}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="tel:+33000000000"
            className="flex items-center justify-between gap-3 px-5 py-4 rounded-xl bg-white text-gray-900 font-semibold shadow-lg"
          >
            <span className="flex items-center gap-2"><PhoneCall className="w-5 h-5" />{t.mobilePage.contactCTA}</span>
            <span className="text-sm text-gray-600">15 min</span>
          </a>
          <Link
            to="/"
            className="flex items-center justify-between gap-3 px-5 py-4 rounded-xl bg-white/10 border border-white/10 text-white font-semibold"
          >
            <span className="flex items-center gap-2"><Monitor className="w-5 h-5" />{t.mobilePage.desktopCTA}</span>
            <span className="text-sm text-gray-200">Desktop</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
