import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-8 h-8 shrink-0 group-hover:scale-105 transition-transform duration-300", className)}
      {...props}
    >
      <title>Matryo Finance Logo</title>
      {/* Outer Doll (Indigo) */}
      <path
        d="M20 50C20 30 33 10 50 10C67 10 80 30 80 50C80 60 75 70 70 80C65 90 58 95 50 95C42 95 35 90 30 80C25 70 20 60 20 50Z"
        fill="url(#outer-grad)"
        className="opacity-90"
      />
      
      {/* Middle Doll (Violet) */}
      <path
        d="M32 55C32 40 40 25 50 25C60 25 68 40 68 55C68 62 65 68 61 75C57 82 54 85 50 85C46 85 43 82 39 75C35 68 32 62 32 55Z"
        fill="url(#middle-grad)"
        className="opacity-95 shadow-lg"
      />

      {/* Inner Doll (Cyan/Accent) */}
      <path
        d="M42 60C42 50 46 40 50 40C54 40 58 50 58 60C58 65 56 68 54 72C52 76 51 77 50 77C49 77 48 76 46 72C44 68 42 65 42 60Z"
        fill="url(#inner-grad)"
        className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
      />

      {/* Decorative minimalistic circuits/lines for DeFi aesthetic */}
      <path d="M50 10V25" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-indigo-200/50" />
      <path d="M50 85V95" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-indigo-200/50" />
      <circle cx="50" cy="32" r="2" fill="#fff" opacity="0.8" />
      <circle cx="50" cy="46" r="1.5" fill="#fff" opacity="0.9" />

      <defs>
        <linearGradient id="outer-grad" x1="20" y1="10" x2="80" y2="95" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F46E5" /> {/* indigo-600 */}
          <stop offset="1" stopColor="#312E81" /> {/* indigo-900 */}
        </linearGradient>
        <linearGradient id="middle-grad" x1="32" y1="25" x2="68" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" /> {/* violet-500 */}
          <stop offset="1" stopColor="#5B21B6" /> {/* violet-900 */}
        </linearGradient>
        <linearGradient id="inner-grad" x1="42" y1="40" x2="58" y2="77" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22D3EE" /> {/* cyan-400 */}
          <stop offset="1" stopColor="#0891B2" /> {/* cyan-600 */}
        </linearGradient>
      </defs>
    </svg>
  );
};
