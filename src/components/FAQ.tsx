import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { Plus } from 'lucide-react';

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Comment fonctionne Openli avec nos serrures actuelles ?',
      answer:
        "Openli s'intègre avec tous les principaux fabricants de serrures connectées (ASSA ABLOY, dormakaba, SALTO, OpenKey, etc.). Notre équipe technique réalise un audit de compatibilité gratuit et l'installation se fait généralement en moins de 24h.",
    },
    {
      question: "Que se passe-t-il si un client n'a pas de smartphone ?",
      answer:
        "Votre système de cartes-clés traditionnel reste pleinement opérationnel. Openli s'ajoute comme option premium pour vos clients équipés, sans remplacer vos processus existants.",
    },
    {
      question: 'Comment gérez-vous la sécurité des données clients ?',
      answer:
        "Nous utilisons un chiffrement AES-256 de niveau bancaire, nos serveurs sont hébergés en Europe (conformité RGPD), et nous sommes certifiés ISO 27001. Aucune donnée personnelle n'est stockée sur les appareils.",
    },
    {
      question: 'Quel est le délai de mise en place ?',
      answer:
        "Après l'audit de compatibilité (48h), l'installation technique prend 4 à 8 heures selon la taille de l'établissement. La formation de votre équipe se fait en 2h. Vous pouvez être opérationnel en moins d'une semaine.",
    },
    {
      question: "Y a-t-il des frais cachés ou d'engagement longue durée ?",
      answer:
        "Non. Notre tarification est transparente : uniquement le coût par chambre/mois selon la formule choisie. Pas de frais d'installation, pas d'engagement minimum. Vous pouvez annuler à tout moment.",
    },
    {
      question: 'Quels PMS sont compatibles ?',
      answer:
        "Nous sommes intégrés avec les principaux PMS : Opera, Mews, Cloudbeds, Protel, Apaleo, et bien d'autres. Si votre PMS dispose d'une API, nous pouvons réaliser l'intégration rapidement.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#0b0a09] via-[#0d0b0a] to-[#0b0a09] px-5 py-16 md:py-24 lg:py-28"
    >
      <div className="absolute inset-x-12 -top-32 h-64 bg-gradient-to-b from-[#d4af37]/15 via-transparent to-transparent blur-3xl" />
      <div className="relative z-10 mx-auto max-w-5xl space-y-12 md:space-y-14 lg:space-y-16">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/60 bg-black/40 px-4 py-2 text-[11px] tracking-[0.18em] text-[#d4af37]">
            QUESTIONS FRÉQUENTES
          </div>
          <h2
            id="faq-heading"
            className="text-balance text-[28px] font-semibold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            Tout ce que vous devez savoir
          </h2>
          <p className="mt-4 text-balance text-base text-[#e8e1cf] md:text-lg">
            Des réponses claires à vos questions techniques et commerciales.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="overflow-hidden rounded-2xl border border-[#d4af37]/25 bg-gradient-to-br from-black/60 via-[#0f0c0a]/90 to-black/70 shadow-[0_18px_45px_-28px_rgba(0,0,0,0.75)]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
              >
                <span className="flex-1 text-[15px] font-semibold leading-relaxed text-[#f5f0e6] md:text-lg">
                  {faq.question}
                </span>
                <motion.div
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/50 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] shadow-[0_0_0_1px_rgba(212,175,55,0.18)]"
                  animate={{ rotate: openIndex === index ? 45 : 0, backgroundColor: openIndex === index ? '#d4af37' : undefined }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Plus
                    className={`h-4 w-4 transition-colors ${openIndex === index ? 'text-black' : 'text-[#d4af37]'}`}
                    strokeWidth={2.5}
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden border-t border-[#d4af37]/20"
                  >
                    <div className="bg-black/40 px-5 pb-5 pt-2 text-[#e6ddc7] md:px-6 md:pb-6">
                      <p className="text-sm leading-relaxed text-[#d9d0bb] md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
