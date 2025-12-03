import { motion } from 'motion/react';
import { ArrowRight, Quote } from 'lucide-react';

export function TestimonialCard() {
  return (
    <motion.div
      className="relative max-w-[680px] w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Card Container */}
      <div 
        className="relative rounded-[18px] p-5 md:p-6 backdrop-blur-md overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(14, 27, 43, 0.3) 0%, rgba(11, 13, 14, 0.2) 100%)',
          border: '1px solid rgba(247, 244, 238, 0.12)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(247, 244, 238, 0.08)',
        }}
      >
        {/* Quote icon */}
        <div className="absolute top-4 right-4 opacity-10">
          <Quote className="w-12 h-12 md:w-16 md:h-16 text-[var(--champagne)]" fill="currentColor" />
        </div>

        {/* Quote text */}
        <p 
          className="text-[15px] leading-[1.7] mb-5"
          style={{
            color: '#E8E8ED',
            fontFamily: '-apple-system, SF Pro Display, sans-serif',
          }}
        >
          "Keylessly a transformé l'expérience de nos clients. Plus de file d'attente à la réception, 
          plus de cartes perdues. Le taux de satisfaction a augmenté de 34 % en 3 mois."
        </p>

        {/* Author section */}
        <div className="flex items-center gap-3 mb-4">
          {/* Avatar */}
          <div 
            className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, rgba(195, 163, 110, 0.2), rgba(195, 163, 110, 0.05))',
              border: '1px solid rgba(195, 163, 110, 0.3)',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-[var(--champagne)] text-lg">
              PD
            </div>
          </div>

          {/* Author info */}
          <div>
            <p 
              className="text-[var(--ivory)] text-sm md:text-[15px]"
              style={{ fontWeight: 600 }}
            >
              Pierre Delacroix
            </p>
            <p className="text-[var(--slate)] opacity-70 text-xs md:text-[13px]">
              Directeur Général — Hôtel Le Bristol Paris
            </p>
          </div>
        </div>

        {/* CTA Link */}
        <motion.button
          className="group inline-flex items-center gap-2 text-xs md:text-[13px] px-3 py-2 rounded-lg btn-gradient"
          whileHover={{ x: 4 }}
        >
          <span
            className="border-b border-white/0 group-hover:border-white/100 transition-all text-white"
            style={{ fontWeight: 500 }}
          >
            Voir l'étude de cas
          </span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-white" strokeWidth={2} />
        </motion.button>
      </div>
    </motion.div>
  );
}