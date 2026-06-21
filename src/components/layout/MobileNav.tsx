import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../lib/constants';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <motion.div
            className="absolute inset-0 bg-text-primary/20 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-surface p-6 shadow-elevated"
          >
            <div className="flex items-center justify-between">
              <span className="text-h4 font-bold">Menu</span>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <div className="mt-10 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="rounded-2xl px-4 py-4 text-h4 font-semibold text-text-primary transition-colors hover:bg-primary-surface"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/contact"
                onClick={onClose}
                className="rounded-2xl px-4 py-4 text-h4 font-semibold text-text-primary transition-colors hover:bg-primary-surface"
              >
                Contact
              </Link>
            </div>

            <div className="mt-auto pt-8">
              <a
                href="/#download"
                onClick={onClose}
                className="inline-flex h-14 w-full items-center justify-center rounded-2xl bg-primary text-body-lg font-semibold text-white transition-all hover:bg-primary-light"
              >
                Get the app
              </a>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
