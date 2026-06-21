import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Seo } from '../components/layout/Seo';
import { Container } from '../components/layout/Container';
import { fadeUp } from '../lib/animations';

export function TermsPage() {
  return (
    <>
      <Seo title="Terms & conditions" path="/terms" />
      <section className="py-20 md:py-28">
        <Container className="mx-auto max-w-3xl">
          <motion.article
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="text-h1 text-text-primary">Terms & conditions</h1>
            <p className="mt-2 text-caption text-text-tertiary">Last updated: June 2026</p>
            <p className="mt-6 text-body-lg text-text-secondary">
              By downloading or using JourneyPlus, you agree to these terms. Please read
              them carefully.
            </p>

            <LegalSection title="1. Description of service">
              <p>
                JourneyPlus provides route planning, corridor-aware point-of-interest
                discovery, predictive travel alerts, and community-sourced information
                for road trips worldwide. JourneyPlus is{' '}
                <strong className="font-semibold text-text-primary">
                  not a navigation replacement
                </strong>
                . You remain responsible for safe driving and compliance with traffic
                laws.
              </p>
            </LegalSection>

            <LegalSection title="2. Acceptable use">
              <p>You agree not to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Submit false or misleading community reports</li>
                <li>Use the App while driving in a distracting way</li>
                <li>Reverse-engineer, scrape, or abuse our APIs</li>
                <li>Upload illegal, offensive, or infringing content</li>
              </ul>
            </LegalSection>

            <LegalSection title="3. Community content">
              <p>
                Community pulses are user-generated content published to a public-read
                collection. Reports are immutable — submit carefully. JourneyPlus does not
                guarantee the accuracy of community reports.
              </p>
            </LegalSection>

            <LegalSection title="4. Location & safety disclaimer">
              <p>
                <strong className="font-semibold text-text-primary">IMPORTANT:</strong>{' '}
                JourneyPlus alerts and recommendations are aids only. They are not
                guaranteed. Road conditions, fuel availability, charger status, and
                safety can change without notice. Never rely solely on the App for
                safety-critical decisions. Pull over safely before interacting with
                the App.
              </p>
            </LegalSection>

            <LegalSection title="5. Disclaimers">
              <p>
                THE APP AND SITE ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY
                KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </LegalSection>

            <LegalSection title="6. Governing law">
              <p>
                These Terms are governed by the laws of India. Disputes shall be subject
                to the exclusive jurisdiction of courts in Pune, Maharashtra.
              </p>
            </LegalSection>

            <LegalSection title="7. Contact">
              <p>
                Legal questions:{' '}
                <a href="mailto:legal@journeyplus.app" className="text-primary">
                  legal@journeyplus.app
                </a>
              </p>
            </LegalSection>

            <p className="mt-12 text-body text-text-secondary">
              See also our{' '}
              <Link to="/privacy" className="font-semibold text-primary">
                Privacy policy
              </Link>
              .
            </p>
          </motion.article>
        </Container>
      </section>
    </>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-h2 text-text-primary">{title}</h2>
      <div className="mt-4 space-y-3 text-body text-text-secondary">{children}</div>
    </section>
  );
}
