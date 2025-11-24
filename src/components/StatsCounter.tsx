import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';

interface StatProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

function AnimatedCounter({ end, duration = 2, suffix = '' }: Omit<StatProps, 'label'>) {
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 50, damping: 30 });
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      count.set(end);
    }
  }, [isInView, end, count]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toLocaleString() + suffix;
      }
    });
    return () => unsubscribe();
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function StatsCounter() {
  const stats: StatProps[] = [
    { end: 50000, suffix: '+', label: 'Check-ins sans contact' },
    { end: 99, suffix: '%', label: 'Satisfaction client' },
    { end: 2, suffix: 's', label: 'Temps d\'accès moyen' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mt-8 md:mt-12 lg:mt-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          {/* Content minimaliste */}
          <div className="relative p-4 md:p-5 lg:p-6 rounded-[12px] md:rounded-xl border border-[var(--champagne)]/15 bg-[var(--nocturne)]/30 backdrop-blur-sm hover:border-[var(--champagne)]/25 transition-colors duration-300 hover:scale-[1.02] active:scale-[0.98] transition-transform">
            <p 
              className="text-[32px] md:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-[var(--champagne)]"
              style={{
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              <AnimatedCounter end={stat.end} suffix={stat.suffix} />
            </p>
            <p className="mt-1.5 md:mt-2 text-[11px] md:text-xs lg:text-sm text-[var(--ivory)]/50">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
