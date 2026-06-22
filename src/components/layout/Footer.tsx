import { Container } from './Container';
import { Logo } from '../ui/Logo';
import { FOOTER_LINKS, SITE } from '../../lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-light bg-surface py-16">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-body text-text-secondary">
              {SITE.tagline}
            </p>
            <p className="mt-2 text-caption text-text-tertiary">
              <a
                href={SITE.url}
                className="link-underline hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                journeyplus.in
              </a>
              {' · '}
              Not a maps app — your smart companion for every kilometer.
            </p>
          </div>

          <FooterColumn title="Product" links={FOOTER_LINKS.product} />
          <FooterColumn title="Company" links={FOOTER_LINKS.company} />
          <div>
            <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
            <div className="mt-8">
              <h3 className="text-caption font-semibold uppercase tracking-wider text-text-tertiary">
                Connect
              </h3>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.connect.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="link-underline text-body text-text-secondary hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border-light pt-8 sm:flex-row">
          <p className="text-caption text-text-tertiary">
            © {year} JourneyPlus. All rights reserved.
          </p>
          <p className="text-caption text-text-tertiary">
            Built for road travelers everywhere
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-caption font-semibold uppercase tracking-wider text-text-tertiary">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="link-underline text-body text-text-secondary hover:text-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
