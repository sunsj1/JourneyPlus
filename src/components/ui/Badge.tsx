import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-primary-surface px-3 py-1 text-caption font-semibold uppercase tracking-wider text-primary ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
      {children}
    </span>
  );
}
