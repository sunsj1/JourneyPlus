import { useState, type FormEvent } from 'react';
import { Mail, Shield, Scale, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Seo } from '../components/layout/Seo';
import { Container } from '../components/layout/Container';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { SITE } from '../lib/constants';
import { fadeUp } from '../lib/animations';

const CONTACT_CHANNELS = [
  {
    icon: Mail,
    title: 'General support',
    detail: SITE.supportEmail,
    href: `mailto:${SITE.supportEmail}`,
  },
  {
    icon: Shield,
    title: 'Privacy requests',
    detail: SITE.privacyEmail,
    href: `mailto:${SITE.privacyEmail}`,
  },
  {
    icon: Scale,
    title: 'Legal',
    detail: SITE.legalEmail,
    href: `mailto:${SITE.legalEmail}`,
  },
];

const SUBJECTS = [
  'General',
  'Bug report',
  'Feature request',
  'Account deletion',
  'Partnership',
  'Press',
] as const;

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const subject = String(form.get('subject') ?? '');
    const message = String(form.get('message') ?? '').trim();

    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email || !email.includes('@')) newErrors.email = 'Valid email is required';
    if (!message || message.length < 20)
      newErrors.message = 'Message must be at least 20 characters';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const mailto = `mailto:${SITE.supportEmail}?subject=${encodeURIComponent(
      `[${subject}] JourneyPlus — ${name}`,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <>
      <Seo title="Contact" path="/contact" />
      <section className="gradient-hero py-20 md:py-28">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto max-w-3xl"
          >
            <h1 className="text-h1 text-text-primary">Contact us</h1>
            <p className="mt-4 text-body-lg text-text-secondary">
              Questions, feedback, partnership inquiries, or account deletion
              requests — we&apos;d love to hear from you.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-4"
            >
              {CONTACT_CHANNELS.map((channel) => (
                <Card key={channel.title} hover={false}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-surface">
                      <channel.icon
                        className="h-5 w-5 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="text-h4 text-text-primary">{channel.title}</p>
                      <a
                        href={channel.href}
                        className="text-body text-primary link-underline"
                      >
                        {channel.detail}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}

              <div className="flex gap-4 pt-4">
                {[
                  { icon: Twitter, label: 'Twitter/X' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Linkedin, label: 'LinkedIn' },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-light text-text-secondary transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </a>
                ))}
              </div>

              <p className="text-caption text-text-tertiary">
                We typically respond within 2 business days.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Card hover={false} className="p-8">
                {submitted ? (
                  <div className="py-8 text-center">
                    <p className="text-h3 text-text-primary">Thanks!</p>
                    <p className="mt-2 text-body-lg text-text-secondary">
                      We&apos;ll get back to you within 2 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <Field
                      label="Name"
                      name="name"
                      required
                      error={errors.name}
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      required
                      error={errors.email}
                    />
                    <div>
                      <label
                        htmlFor="subject"
                        className="text-caption font-semibold text-text-primary"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-body focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="text-caption font-semibold text-text-primary"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="mt-1.5 w-full resize-none rounded-2xl border border-border bg-surface px-4 py-3 text-body focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      {errors.message && (
                        <p className="mt-1 text-caption text-error">{errors.message}</p>
                      )}
                    </div>
                    <Button type="submit" className="w-full">
                      Send message
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-caption font-semibold text-text-primary">
        {label}
        {required && <span className="text-error"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-body focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
      {error && <p className="mt-1 text-caption text-error">{error}</p>}
    </div>
  );
}
