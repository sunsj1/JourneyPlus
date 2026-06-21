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

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/og-image.svg" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      {path && <link rel="canonical" href={`https://journeyplus.app${path}`} />}
    </Helmet>
  );
}
