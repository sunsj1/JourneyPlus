import { motion } from 'framer-motion';
import { Seo } from '../components/layout/Seo';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { fadeUp } from '../lib/animations';

const beliefs = [
  'Route-aware beats nearby-always.',
  'Predictive beats reactive.',
  'Trust signals (sample size + freshness) beat anonymous star ratings.',
  'Traveler-first features — family, women-safe, terrain-aware modes — are essentials, not extras.',
  'Drivers deserve calm UX, especially when they\'re tired on a highway.',
];

export function AboutPage() {
  return (
    <>
      <Seo title="About" path="/about" />
      <section className="gradient-hero py-20 md:py-28">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto max-w-3xl"
          >
            <h1 className="text-h1 text-text-primary">About JourneyPlus</h1>
            <p className="mt-6 text-body-lg text-text-secondary">
              JourneyPlus started from a simple frustration: planning a long highway
              trip means juggling maps, fuel apps, food reviews, charger finders,
              and WhatsApp tips from friends — none of them aware of your actual
              route or vehicle.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="mx-auto max-w-3xl space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-h2 text-text-primary">Our mission</h2>
            <p className="mt-4 text-body-lg text-text-secondary">
              We built JourneyPlus to be the calm, intelligent companion for road
              trips everywhere. Not another map. A trip control center that plans ahead,
              discovers what&apos;s on your corridor, and warns you before problems
              happen — backed by real community trust signals from travelers like you.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-h2 text-text-primary">What we believe</h2>
            <ul className="mt-4 space-y-3">
              {beliefs.map((belief) => (
                <li
                  key={belief}
                  className="flex gap-3 text-body-lg text-text-secondary"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {belief}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-h2 text-text-primary">What JourneyPlus is today</h2>
            <p className="mt-4 text-body-lg text-text-secondary">
              The app supports multi-vehicle route planning, a 16-category Smart
              Intelligence Grid, predictive alerts (fuel, EV, food, terrain, night,
              fatigue, weather), personalized POI ranking, family/women-safe/bike
              modes, curated hidden gems, trip history, and community pulses on
              every stop.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-h2 text-text-primary">What&apos;s coming</h2>
            <p className="mt-4 text-body-lg text-text-secondary">
              We&apos;re building JourneyPlus in phases based on user feedback.
              Conversational AI assistant, voice mode, and expanded corridor
              coverage will come when they genuinely help travelers — not before.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-2xl border border-border-light bg-primary-surface p-8"
          >
            <p className="text-body-lg text-text-secondary">
              JourneyPlus is built by a small team passionate about road
              travel. We&apos;re travelers first, engineers second.
            </p>
          </motion.div>

          <div className="pt-4">
            <Button href="/#download">Download the app</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
