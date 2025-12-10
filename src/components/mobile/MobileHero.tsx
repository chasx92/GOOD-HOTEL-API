import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { ChevronRight } from 'lucide-react';

export function MobileHero() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-[#0B0B0F] via-[#111] to-[#0B0B0F] text-white py-14 px-4" id="mobile-hero">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm font-semibold">
          {t.mobilePage.badge}
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-bold leading-tight">{t.mobilePage.title}</h1>
          <p className="text-base text-gray-200 leading-relaxed">{t.mobilePage.subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#mobile-contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold shadow-lg"
          >
            {t.mobilePage.ctaPrimary}
            <ChevronRight className="w-4 h-4" />
          </a>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white font-semibold"
          >
            {t.mobilePage.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
