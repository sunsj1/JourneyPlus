import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Section } from '../layout/Section';
import { COMPARISON } from '../../lib/constants';
import { fadeUp, staggerContainer } from '../../lib/animations';

export function Comparison() {
  return (
    <Section id="comparison" className="bg-primary-surface-light">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-h1 text-text-primary">Why JourneyPlus is different</h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-12 overflow-hidden rounded-2xl border border-border-light bg-surface shadow-card"
      >
        {/* Header */}
        <div className="grid grid-cols-2 border-b border-border-light bg-surface-elevated">
          <div className="px-6 py-4 text-caption font-semibold uppercase tracking-wider text-text-tertiary">
            Traditional maps
          </div>
          <div className="border-l-2 border-primary px-6 py-4 text-caption font-semibold uppercase tracking-wider text-primary">
            JourneyPlus
          </div>
        </div>

        {COMPARISON.map((row, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="grid grid-cols-2 border-b border-border-light last:border-b-0"
          >
            <div className="flex gap-3 px-6 py-5">
              <X
                className="mt-0.5 h-4 w-4 shrink-0 text-text-tertiary"
                strokeWidth={1.5}
              />
              <p className="text-body text-text-secondary">{row.traditional}</p>
            </div>
            <div className="relative flex gap-3 border-l-2 border-primary bg-primary-surface/30 px-6 py-5">
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                strokeWidth={1.5}
              />
              <p className="text-body font-medium text-text-primary">
                {row.journeyPlus}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-10 text-center text-body-lg font-medium text-text-secondary"
      >
        Google Maps gets you there. JourneyPlus makes sure you&apos;re prepared for
        every kilometer along the way.
      </motion.p>
    </Section>
  );
}
