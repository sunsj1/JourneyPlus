import { Users, Zap, Bike, Moon, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { PERSONAS } from '../../lib/constants';
import { fadeUp, staggerContainer } from '../../lib/animations';

const iconMap: Record<string, LucideIcon> = {
  Users,
  Zap,
  Bike,
  Moon,
};

export function ForEveryTraveler() {
  return (
    <Section id="for-every-traveler" className="bg-primary-surface-light">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-h1 text-text-primary">For every traveler</h2>
        <p className="mt-4 text-body-lg text-text-secondary">
          Whether you&apos;re crossing ghats with family, pushing EV range, or
          riding solo at night — JourneyPlus adapts to how you travel.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-16 grid gap-6 sm:grid-cols-2"
      >
        {PERSONAS.map((persona) => {
          const Icon = iconMap[persona.icon] ?? Users;
          return (
            <motion.div key={persona.title} variants={fadeUp}>
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-ev">
                    <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-h3 text-text-primary">{persona.title}</h3>
                    <p className="mt-2 text-body text-text-secondary">
                      {persona.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
