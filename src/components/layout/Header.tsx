import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { NAV_LINKS } from '../../lib/constants';
import { MobileNav } from './MobileNav';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? 'border-border-light bg-surface/80 py-4 shadow-sm backdrop-blur-lg'
            : 'border-transparent bg-transparent py-6'
        }`}
      >
        <Container className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
            aria-label="JourneyPlus home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-green">
              <span className="text-sm font-extrabold text-white">T+</span>
            </div>
            <span className="text-h4 font-bold tracking-tight text-text-primary">
              JourneyPlus
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-body font-medium text-text-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/#download" className="hidden h-11 px-6 text-body sm:inline-flex">
              Get the app
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-light bg-surface md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </Container>
      </motion.header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
