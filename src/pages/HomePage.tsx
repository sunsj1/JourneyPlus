import { Seo } from '../components/layout/Seo';
import { Hero } from '../components/sections/Hero';
import { StatsBar } from '../components/sections/StatsBar';
import { Features } from '../components/sections/Features';
import { Comparison } from '../components/sections/Comparison';
import { HowItWorks } from '../components/sections/HowItWorks';
import { ForEveryTraveler } from '../components/sections/ForEveryTraveler';
import { DownloadCta } from '../components/sections/DownloadCta';
import { FaqPreview } from '../components/sections/FaqPreview';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'JourneyPlus',
  applicationCategory: 'TravelApplication',
  operatingSystem: 'Android, iOS',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
  description:
    'Plan smarter Indian highway trips. Route-aware POI discovery, predictive alerts, and community trust on every stop.',
};

export function HomePage() {
  return (
    <>
      <Seo />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <StatsBar />
      <Features />
      <Comparison />
      <HowItWorks />
      <ForEveryTraveler />
      <DownloadCta />
      <FaqPreview />
    </>
  );
}
