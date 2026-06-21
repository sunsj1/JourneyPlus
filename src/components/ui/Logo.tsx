import { Link } from 'react-router-dom';
import { LogoIcon } from './LogoIcon';

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function Logo({ className = '', showWordmark = true }: LogoProps) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg ${className}`}
      aria-label="JourneyPlus home"
    >
      <LogoIcon className="h-9 w-9" size={36} />
      {showWordmark && (
        <span className="text-h4 font-bold tracking-tight">
          <span className="text-text-primary">Journey</span>
          <span className="text-primary">Plus</span>
        </span>
      )}
    </Link>
  );
}
