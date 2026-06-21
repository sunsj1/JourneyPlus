import { motion } from 'framer-motion';
import { Section } from '../layout/Section';
import { HOW_IT_WORKS } from '../../lib/constants';
import { fadeUp, staggerContainer } from '../../lib/animations';

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-h1 text-text-primary">
          Three steps to a calmer drive
        </h2>
      </motion.div>

      <div className="relative mt-16">
        {/* Connecting line - desktop */}
        <div
          className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-border md:left-1/2 md:block md:-translate-x-px"
          aria-hidden
        >
          <motion.div
            className="h-full w-full origin-top bg-primary"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-12 md:space-y-20"
        >
          {HOW_IT_WORKS.map((step, i) => (
            <motion.div
              key={step.step}
              variants={fadeUp}
              className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 md:text-right">
                <div
                  className={`md:max-w-md ${
                    i % 2 === 1 ? 'md:ml-auto md:text-left' : 'md:mr-auto'
                  }`}
                >
                  <span className="text-caption font-semibold uppercase tracking-wider text-primary">
                    Step {step.step}
                  </span>
                  <h3 className="mt-2 text-h2 text-text-primary">{step.title}</h3>
                  <p className="mt-3 text-body-lg text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex shrink-0 justify-center md:w-16">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-green text-h2 font-extrabold text-white shadow-elevated">
                  {step.step}
                </div>
              </div>

              <div className="hidden flex-1 md:block" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
