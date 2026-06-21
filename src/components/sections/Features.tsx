import {
  Route,
  LayoutGrid,
  Bell,
  HeartHandshake,
  Shield,
  WifiOff,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { FEATURES } from '../../lib/constants';
import { fadeUp, staggerContainer } from '../../lib/animations';

const iconMap: Record<string, LucideIcon> = {
  Route,
  LayoutGrid,
  Bell,
  HeartHandshake,
  Shield,
  WifiOff,
};

export function Features() {
  return (
    <Section id="features">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-h1 text-text-primary">
          Built for the journey, not just the destination
        </h2>
        <p className="mt-4 text-body-lg text-text-secondary">
          Maps show you the road. JourneyPlus understands your trip — your vehicle,
          your preferences, what&apos;s ahead on the corridor, and what other
          travelers actually experienced at each stop.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {FEATURES.map((feature) => {
          const Icon = iconMap[feature.icon] ?? Route;
          return (
            <motion.div key={feature.title} variants={fadeUp}>
              <Card accent hover>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-surface">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-h3 text-text-primary">{feature.title}</h3>
                <p className="mt-3 text-body text-text-secondary">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
