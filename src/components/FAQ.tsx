import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { FONT_BODY, FONT_HEADING } from '../styles/typography';

export function FAQ() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = t.faq.questions;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden scroll-mt-16"
      ref={ref}
      style={{ 
        background: '#F2F2F7',
        paddingTop: 'calc(var(--spacing) * 14)', // Réduit de 80px à 56px
        paddingBottom: 'calc(var(--spacing) * 12)', // Réduit de 80px à 48px
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-24">
        {/* Header */}
        <motion.div
          className="text-center px-4"
          style={{ marginBottom: 'calc(var(--spacing) * 16)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p
            className="text-[11px] md:text-xs tracking-[0.12em] uppercase"
            style={{
              color: '#0A84FF',
              fontFamily: FONT_HEADING,
              fontWeight: 600,
              marginBottom: 'calc(var(--spacing) * 3)',
            }}
          >
            {t.faq.eyebrow}
          </p>
          <h2
            id="faq-heading"
            className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl text-balance"
            style={{
              color: '#1C1C1E',
              fontFamily: FONT_HEADING,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 'calc(var(--spacing) * 4)',
            }}
          >
            {t.faq.title}
          </h2>
          <p
            className="max-w-[650px] mx-auto text-[15px] md:text-base lg:text-lg px-4"
            style={{
              color: '#3C3C43',
              fontFamily: FONT_BODY,
              fontWeight: 400,
            }}
          >
            {t.faq.subtitle}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-[900px] mx-auto">
          <div className="space-y-2.5 md:space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="relative rounded-[14px] md:rounded-[16px] overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #005FC4 0%, #007AFF 50%, #4DA3FF 100%)',
                  border: '1px solid rgba(0, 122, 255, 0.35)',
                  boxShadow: openIndex === index
                    ? '0 10px 36px rgba(0, 122, 255, 0.32)'
                    : '0 6px 20px rgba(0, 122, 255, 0.24)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.005,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-45"
                  style={{
                    background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.28) 50%, transparent 70%)',
                  }}
                  animate={{ x: ['-120%', '120%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  aria-hidden
                />

                <div className="relative z-10">
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full px-4 md:px-5 lg:px-6 py-3.5 md:py-4 lg:py-5 flex items-start justify-between gap-3 md:gap-4 text-left cursor-pointer transition-colors"
                    style={{
                      background: 'transparent',
                      borderBottom: '1px solid rgba(0, 122, 255, 0.28)',
                    }}
                  >
                    <span
                      className="flex-1 pr-2 text-[15px] md:text-[16px]"
                      style={{
                        color: '#FFFFFF',
                        fontFamily: FONT_HEADING,
                        fontWeight: 600,
                        lineHeight: '1.5',
                      }}
                    >
                      {faq.question}
                    </span>

                    <motion.div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: openIndex === index
                          ? 'rgba(255, 255, 255, 0.22)'
                          : 'rgba(255, 255, 255, 0.16)',
                      }}
                      animate={{
                        rotate: openIndex === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      {openIndex === index ? (
                        <Minus className="w-4 h-4" style={{ color: '#FFFFFF' }} strokeWidth={2.5} />
                      ) : (
                        <Plus className="w-4 h-4" style={{ color: '#FFFFFF' }} strokeWidth={2.5} />
                      )}
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
                        transition={{
                          duration: 0.3,
                          ease: [0.25, 0.1, 0.25, 1]
                        }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          className="px-5 md:px-6 pb-5 md:pb-6 pt-1"
                          style={{
                            background: '#FFFFFF',
                          }}
                        >
                          <p
                            className="leading-relaxed"
                            style={{
                              color: '#3C3C43',
                              fontFamily: FONT_BODY,
                              fontSize: '15px',
                              fontWeight: 400,
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-10 md:mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p
            className="mb-4"
            style={{
              color: '#3C3C43',
              fontFamily: FONT_BODY,
              fontSize: '15px',
            }}
          >
            {t.faq.contactPrompt}
          </p>
          <motion.a
            href="#form"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] text-white overflow-hidden btn-gradient"
            style={{
              fontFamily: FONT_HEADING,
              fontSize: '15px',
              fontWeight: 600,
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 8px 24px rgba(0, 122, 255, 0.25), 0 4px 8px rgba(0, 122, 255, 0.15)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">{t.faq.contactCta}</span>
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.28) 50%, transparent 70%)',
              }}
              animate={{ x: ['-120%', '120%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
              aria-hidden
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
