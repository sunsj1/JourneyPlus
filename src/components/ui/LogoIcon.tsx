import { useId } from 'react';

interface LogoIconProps {
  className?: string;
  size?: number;
}

/** JourneyPlus — forward-route mark (origin point sweeping into a forward arrow) */
export function LogoIcon({ className = '', size = 36 }: LogoIconProps) {
  const clipId = useId().replace(/:/g, '');

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      aria-hidden
    >
      <clipPath id={clipId}>
        <rect width="100" height="100" rx="22" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <rect width="100" height="100" fill="#1B5E20" />
        <circle cx="31" cy="70" r="6.5" fill="#7FD88F" />
        <path
          d="M31 70 C34 52 44 43 58 39.5"
          stroke="#FFFFFF"
          strokeWidth="11.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M49.5 30 L70 31.5 L64.5 51"
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
