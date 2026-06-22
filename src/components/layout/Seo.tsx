import { Helmet } from 'react-helmet-async';
import { SITE } from '../../lib/constants';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
}

export function Seo({
  title,
  description = SITE.description,
  path = '',
}: SeoProps) {
  const fullTitle = title
    ? `${title} — ${SITE.name}`
    : `${SITE.name} — ${SITE.tagline}`;

  const canonical = `${SITE.url}${path}`;
  const ogImage = `${SITE.url}/og-image.png`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}
