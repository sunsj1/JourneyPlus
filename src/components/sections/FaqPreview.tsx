import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '../layout/Section';
import { Accordion } from '../ui/Accordion';
import { FAQ_PREVIEW } from '../../lib/constants';
import { fadeUp } from '../../lib/animations';

export function FaqPreview() {
  return (
    <Section id="faq-preview" className="bg-surface">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-h1 text-text-primary">Common questions</h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="mx-auto mt-12 max-w-3xl"
      >
        <Accordion items={FAQ_PREVIEW} />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-8 text-center"
      >
        <Link
          to="/help"
          className="link-underline inline-flex items-center gap-2 text-body-lg font-semibold text-primary"
        >
          View all help topics
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </Link>
      </motion.div>
    </Section>
  );
}
