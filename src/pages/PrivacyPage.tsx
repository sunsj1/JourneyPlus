import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Seo } from '../components/layout/Seo';
import { Container } from '../components/layout/Container';
import { fadeUp } from '../lib/animations';

export function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy policy" path="/privacy" />
      <section className="py-20 md:py-28">
        <Container className="mx-auto max-w-3xl">
          <motion.article
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="prose-legal"
          >
            <h1 className="text-h1 text-text-primary">Privacy policy</h1>
            <p className="mt-2 text-caption text-text-tertiary">Last updated: June 2026</p>
            <p className="mt-6 text-body-lg text-text-secondary">
              JourneyPlus (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the JourneyPlus mobile
              application and this website. This policy explains what data we collect,
              why, and your choices.
            </p>

            <LegalSection title="1. Our promise">
              <p>
                JourneyPlus is a highway companion — not a location tracker. We help you
                plan routes and surface predictive stops using intelligence for your
                current drive.{' '}
                <strong className="font-semibold text-text-primary">
                  We do not build or sell a history of where you have been.
                </strong>
              </p>
            </LegalSection>

            <LegalSection title="2. Information we collect">
              <h3 className="text-h4 text-text-primary">Account information</h3>
              <p>
                Google account identifier and basic profile (name, email) when you sign
                in. Vehicle type, travel preferences, and app settings you choose in
                Profile.
              </p>
              <h3 className="mt-4 text-h4 text-text-primary">Community reports</h3>
              <p>
                If you submit a community pulse: rating, condition, amenities, optional
                photo, optional notes, timestamp, and a stable key for the place — not
                a continuous location log. Reports are public-read and immutable.
              </p>
              <h3 className="mt-4 text-h4 text-text-primary">Trip summaries (local only)</h3>
              <p>
                When you end a trip, a summary is saved on your phone: origin/destination
                city names, distance, duration, vehicle type, alert counts. No GPS path
                or coordinate trail is stored.
              </p>
            </LegalSection>

            <LegalSection title="3. Location data">
              <p>
                When you start an active trip, the app reads GPS on your device to power
                predictive alerts. That position is used in real time and may be sent to
                Google Maps Platform APIs during the session.{' '}
                <strong className="font-semibold text-text-primary">
                  We do not upload GPS coordinates or location trails to JourneyPlus servers.
                </strong>
              </p>
            </LegalSection>

            <LegalSection title="4. Third-party services">
              <ul className="list-disc space-y-2 pl-5">
                <li>Google Maps Platform — routing, geocoding, places</li>
                <li>Google Sign-In / Firebase Auth — authentication</li>
                <li>Cloud Firestore — profile, preferences, community reports</li>
                <li>Firebase Crashlytics — crash reporting</li>
                <li>Open Charge Map — EV charger data</li>
                <li>Open-Meteo — weather along route segments</li>
              </ul>
            </LegalSection>

            <LegalSection title="5. Your rights & controls">
              <ul className="list-disc space-y-2 pl-5">
                <li>Deny location permission — planning still works</li>
                <li>End trip anytime — stops live location use</li>
                <li>Sign out — clears session</li>
                <li>Uninstall — removes on-device data</li>
                <li>
                  Account deletion — email{' '}
                  <a href="mailto:support@journeyplus.in" className="text-primary">
                    support@journeyplus.in
                  </a>
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="6. Contact">
              <p>
                Questions about privacy:{' '}
                <a href="mailto:privacy@journeyplus.in" className="text-primary">
                  privacy@journeyplus.in
                </a>
              </p>
            </LegalSection>

            <p className="mt-12 text-body text-text-secondary">
              See also our{' '}
              <Link to="/terms" className="font-semibold text-primary">
                Terms & conditions
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
