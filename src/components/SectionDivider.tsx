import { motion } from 'motion/react';

interface SectionDividerProps {
  variant?: 'light' | 'dark' | 'gradient' | 'blue';
}

export function SectionDivider({ variant = 'light' }: SectionDividerProps) {
  const backgrounds = {
    light: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.04) 50%, transparent 100%)',
    dark: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 50%, transparent 100%)',
    gradient: 'linear-gradient(90deg, transparent 0%, rgba(195, 163, 110, 0.15) 50%, transparent 100%)',
    blue: 'linear-gradient(90deg, transparent 0%, rgba(0, 122, 255, 0.35) 30%, rgba(90, 200, 250, 0.5) 50%, rgba(0, 122, 255, 0.35) 70%, transparent 100%)',
  };

  return (
    <motion.div
      className="w-full"
      style={{
        height: variant === 'blue' ? '2px' : '1px',
        background: backgrounds[variant],
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    />
  );
}
