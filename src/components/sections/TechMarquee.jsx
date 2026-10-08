import React from 'react';
import { useReducedMotion } from 'framer-motion';

const CORE_TECHNOLOGIES = [
  'REACT',
  'NEXT.JS',
  'NODE.JS',
  'REST APIS',
  'UI/UX DESIGN',
  'RESPONSIVE WEB',
  'CLOUD DEPLOYMENT',
  'TAILWIND CSS',
  'MONGODB',
  'POSTGRESQL',
  'AWS',
  'AND MORE',
];

export function TechMarquee() {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate items for infinite seamless scroll
  const marqueeItems = [...CORE_TECHNOLOGIES, ...CORE_TECHNOLOGIES, ...CORE_TECHNOLOGIES];

  return (
    <div
      aria-label="Core Engineering Technologies"
      className="relative w-full overflow-hidden border-t border-slate-200/80 py-5 sm:py-6 mt-8 sm:mt-12 lg:mt-14 bg-white/70 backdrop-blur-sm select-none"
    >
      {/* Edge gradient fade masks */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-brand-light via-brand-light/90 to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-brand-light via-brand-light/90 to-transparent z-10"
        aria-hidden="true"
      />

      {shouldReduceMotion ? (
        <div className="flex flex-wrap items-center justify-center gap-6 px-4 text-xs sm:text-sm font-mono tracking-widest text-slate-500 uppercase font-semibold">
          {CORE_TECHNOLOGIES.map((tech, idx) => (
            <React.Fragment key={idx}>
              <span>{tech}</span>
              {idx < CORE_TECHNOLOGIES.length - 1 && (
                <span className="text-slate-400">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className="flex w-max animate-marquee-infinite">
          {marqueeItems.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-6 sm:gap-9 mx-3 sm:mx-4.5">
              <span className="text-xs sm:text-sm font-mono tracking-[0.22em] text-slate-500 uppercase font-semibold hover:text-slate-800 transition-colors">
                {tech}
              </span>
              <span className="text-slate-400 text-xs sm:text-sm font-bold" aria-hidden="true">
                •
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
