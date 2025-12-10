import { useLanguage } from '../../contexts/LanguageContext';

export function MobileSteps() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-12 px-4" id="mobile-steps">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#C3A36E]">{t.mobilePage.stepsTitle}</p>
          <h2 className="text-2xl font-bold text-gray-900">{t.mobilePage.stepsSubtitle}</h2>
        </div>

        <div className="space-y-3">
          {t.mobilePage.steps.map((step, index) => (
            <div key={step.title} className="p-4 rounded-2xl border border-gray-100 bg-gray-50/70">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-8 w-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
