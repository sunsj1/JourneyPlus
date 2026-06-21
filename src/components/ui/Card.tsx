import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  accent?: boolean;
  hover?: boolean;
}

export function Card({
  children,
  className = '',
  accent = false,
  hover = true,
}: CardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border-light bg-surface p-6 shadow-card md:p-8 ${
        hover ? 'transition-all duration-200 md:hover:-translate-y-0.5 md:hover:shadow-elevated' : ''
      } ${className}`}
    >
      {accent && (
        <div
          className="absolute inset-x-0 top-0 h-[3px] gradient-green"
          aria-hidden
        />
      )}
      {children}
    </div>
  );
}
