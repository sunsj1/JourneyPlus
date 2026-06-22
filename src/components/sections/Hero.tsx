import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { GradientText } from '../ui/GradientText';
import { PhoneMockup } from '../ui/PhoneMockup';
import { SITE } from '../../lib/constants';
import { fadeUp, staggerContainer, wordFade, wordStagger } from '../../lib/animations';

const headline = 'Your smart companion for every highway'.split(' ');

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero pt-8 pb-16 md:pt-12 md:pb-24">
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B5E20' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <Badge>Now available on Android</Badge>
            </motion.div>

            <motion.h1
              variants={wordStagger}
              className="mt-6 text-display text-balance text-text-primary md:text-[3.5rem]"
            >
              {headline.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordFade}
                  className="mr-[0.25em] inline-block"
                >
                  {i === 3 ? (
                    <GradientText as="span">{word} </GradientText>
                  ) : (
                    <>{word} </>
                  )}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-body-lg text-text-secondary md:text-lg"
            >
              JourneyPlus plans your route, discovers trusted stops along the corridor,
              and warns you before fuel runs low, chargers disappear, or tough
              terrain begins — so you can focus on the drive.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                href={SITE.androidApkUrl}
                download={SITE.androidApkFileName}
              >
                Download JourneyPlus
              </Button>
              <Button href="/#how-it-works" variant="secondary">
                See how it works
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Button>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-caption font-medium text-text-tertiary"
            >
              {[
                'Not a maps app',
                'Route-aware',
                'Community-powered',
                'Works offline on active trips',
              ].map((item, i) => (
                <span key={item}>
                  {i > 0 && <span className="mr-3">·</span>}
                  {item}
                </span>
              ))}
            </motion.p>
          </motion.div>

          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}
