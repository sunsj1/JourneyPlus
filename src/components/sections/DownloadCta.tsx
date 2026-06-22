import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { SITE } from '../../lib/constants';
import { fadeUp } from '../../lib/animations';

export function DownloadCta() {
  return (
    <Section id="download">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="relative overflow-hidden rounded-3xl gradient-green px-8 py-16 text-center md:px-16 md:py-20"
      >
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5"
          aria-hidden
        />

        <h2 className="relative text-h1 text-white">
          Ready for your next road trip?
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-body-lg text-white/80">
          Download JourneyPlus free on Android. Plan your first route in under a
          minute.
        </p>

        <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={SITE.androidApkUrl}
            download={SITE.androidApkFileName}
            className="opacity-90 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-lg"
            aria-label="Download JourneyPlus APK for Android"
          >
            <img
              src="/play-store-badge.svg"
              alt="Download JourneyPlus APK for Android"
              className="h-14"
            />
          </a>
          {SITE.appStoreUrl !== '#' ? (
            <a
              href={SITE.appStoreUrl}
              className="opacity-90 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-lg"
              aria-label="Download on the App Store"
            >
              <img
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                className="h-14"
              />
            </a>
          ) : (
            <span className="inline-flex h-14 items-center rounded-xl border border-white/20 bg-white/10 px-6 text-body font-medium text-white/70">
              iOS coming soon
            </span>
          )}
        </div>

        <div className="relative mt-8 flex flex-col items-center gap-3">
          <Button
            href={SITE.androidApkUrl}
            download={SITE.androidApkFileName}
            variant="secondary"
            className="border-white/20 bg-white text-primary hover:bg-white/90"
            pulse
          >
            <Download className="h-5 w-5" strokeWidth={1.5} />
            Download APK (Android)
          </Button>
          <p className="text-caption text-white/70">
            Direct install for testing · v1.0
          </p>
        </div>

        <p className="relative mt-8 text-caption text-white/60">
          Free to download. Requires Google account for sign-in. Location
          permission optional — needed for live trip alerts and tracking. On
          Android, allow installs from your browser if prompted.
        </p>
      </motion.div>
    </Section>
  );
}
