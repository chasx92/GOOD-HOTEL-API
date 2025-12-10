import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function MobileSecurity() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 py-12 px-4" id="mobile-security">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#C3A36E]">{t.mobilePage.securityTitle}</p>
          <h2 className="text-2xl font-bold text-gray-900">{t.mobilePage.securitySubtitle}</h2>
        </div>

        <div className="space-y-3">
          {t.mobilePage.securityNotes.map((note) => (
            <div key={note} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-100">
              <div className="p-2 rounded-full bg-gray-900 text-white"><ShieldCheck className="w-5 h-5" /></div>
              <p className="text-sm text-gray-700 leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
