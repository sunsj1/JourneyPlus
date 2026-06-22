import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  pulse?: boolean;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  external?: boolean;
  download?: string | boolean;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-light focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
  secondary:
    'border border-border bg-surface text-primary hover:bg-primary-surface focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
  ghost:
    'text-primary hover:bg-primary-surface focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
};

const base =
  'inline-flex h-14 items-center justify-center gap-2 rounded-2xl px-8 text-body-lg font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]';

function isStaticAssetHref(href: string) {
  return /\.[a-z0-9]+$/i.test(href);
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', children, className = '', pulse = false } = props;
  const classes = `${base} ${variants[variant]} ${pulse ? 'animate-pulse-soft' : ''} ${className}`;

  if ('href' in props && props.href) {
    const { href, external, download } = props;

    if (
      external ||
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      isStaticAssetHref(href)
    ) {
      return (
        <a
          href={href}
          className={classes}
          download={download}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    }

    if (href.startsWith('/#') || href.startsWith('#')) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = 'button', ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
