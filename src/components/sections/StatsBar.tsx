import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '../layout/Container';
import { STATS } from '../../lib/constants';
import { fadeUp, staggerContainer } from '../../lib/animations';

function CountUp({
  value,
  suffix,
  isSymbol,
}: {
  value: number | string;
  suffix: string;
  isSymbol?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(isSymbol ? '∞' : '0');

  useEffect(() => {
    if (!inView || isSymbol || typeof value !== 'number') return;

    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(String(Math.round(eased * value)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value, isSymbol]);

  if (isSymbol) {
    return (
      <span ref={ref} className="text-stat text-primary">
        ∞
      </span>
    );
  }

  return (
    <span ref={ref} className="text-stat text-primary">
      {display}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="border-y border-border-light bg-surface py-12">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                isSymbol={'isSymbol' in stat && stat.isSymbol}
              />
              <p className="mt-2 text-body text-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
