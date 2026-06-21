import { type ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'p';
}

export function GradientText({
  children,
  className = '',
  as: Tag = 'span',
}: GradientTextProps) {
  return (
    <Tag
      className={`bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent ${className}`}
    >
      {children}
    </Tag>
  );
}
