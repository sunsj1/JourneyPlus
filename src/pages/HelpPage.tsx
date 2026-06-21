import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Seo } from '../components/layout/Seo';
import { Container } from '../components/layout/Container';
import { AccordionItem } from '../components/ui/Accordion';
import { HELP_FAQ } from '../lib/help-content';
import { fadeUp } from '../lib/animations';

export function HelpPage() {
  return (
    <>
      <Seo
        title="Help centre"
        description="Quick answers about JourneyPlus — planning, discovery, alerts, community trust, and privacy."
        path="/help"
      />
      <section className="gradient-hero py-20 md:py-28">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto max-w-3xl"
          >
            <h1 className="text-h1 text-text-primary">Help centre</h1>
            <p className="mt-4 text-body-lg text-text-secondary">
              Quick answers about JourneyPlus. Can&apos;t find what you need?{' '}
              <Link to="/contact" className="font-semibold text-primary link-underline">
                Contact us
              </Link>
              .
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="mx-auto max-w-3xl space-y-16">
          {Object.entries(HELP_FAQ).map(([category, items]) => (
            <motion.div
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-h2 text-text-primary">{category}</h2>
              <div className="mt-6 rounded-2xl border border-border-light bg-surface px-6">
                {items.map((item) => (
                  <AccordionItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </Container>
      </section>
    </>
  );
}
