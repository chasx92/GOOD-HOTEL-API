import { useLanguage } from '../../contexts/LanguageContext';

export function MobileFeatures() {
  const { t } = useLanguage();

  return (
    <section className="py-12 px-4" id="mobile-features">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#C3A36E]">{t.mobilePage.featuresTitle}</p>
          <h2 className="text-2xl font-bold text-gray-900">{t.mobilePage.featuresSubtitle}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.mobilePage.features.map((feature) => (
            <div
              key={feature.title}
              className="p-4 rounded-2xl border border-gray-100 shadow-sm bg-gradient-to-br from-white to-gray-50"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
