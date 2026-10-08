import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Authentic React vector icon
 */
function ReactIcon({ className }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
      <g stroke="#00D8FF" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

/**
 * Authentic Next.js vector icon
 */
function NextJsIcon({ className }) {
  return (
    <svg viewBox="0 0 180 180" className={className} fill="none">
      <mask id="nextMask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="white" />
      </mask>
      <g mask="url(#nextMask)">
        <circle cx="90" cy="90" r="90" fill="#000000" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#nextGrad)"
        />
        <rect x="115" y="54" width="12" height="72" fill="white" />
      </g>
      <defs>
        <linearGradient id="nextGrad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Authentic Node.js vector icon (green hexagon with Node mark)
 */
function NodeJsIcon({ className }) {
  return (
    <svg viewBox="0 0 256 289" className={className} fill="none">
      <path
        d="M128 0L256 73.9V215.1L128 289L0 215.1V73.9L128 0Z"
        fill="#22C55E"
        opacity="0.15"
      />
      <path
        d="M128 0L256 73.9V215.1L128 289L0 215.1V73.9L128 0Z"
        stroke="#22C55E"
        strokeWidth="16"
      />
      <path
        d="M85 95V195M85 135C85 110 115 110 128 110C141 110 171 110 171 135V195"
        stroke="#22C55E"
        strokeWidth="20"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Authentic Tailwind CSS vector icon (twin cyan wave)
 */
function TailwindIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  );
}

const BRAND_ICONS = {
  React: ReactIcon,
  NextJs: NextJsIcon,
  NodeJs: NodeJsIcon,
  Tailwind: TailwindIcon,
};

/**
 * FloatingTechIcon Component
 * Dark glossy squircles with glowing borders and brand logos matching reference image.
 */
export function FloatingTechIcon({ item, isMobile }) {
  const shouldReduceMotion = useReducedMotion();
  const IconComponent = BRAND_ICONS[item.icon] || ReactIcon;
  const activeFloatRange = isMobile
    ? item.mobileFloatRange || [-1.5, 1.5, -1.5]
    : item.floatRange || [-3, 3, -3];

  return (
    <div
      className={`absolute ${item.pos} z-[22] select-none pointer-events-none hidden sm:block`}
    >
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        animate={
          shouldReduceMotion
            ? { opacity: 1, scale: 1, y: 0 }
            : {
                opacity: 1,
                scale: 1,
                y: activeFloatRange,
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0.4 }
            : {
                y: {
                  repeat: Infinity,
                  duration: item.duration,
                  ease: 'easeInOut',
                  delay: item.delay,
                },
                opacity: { duration: 0.5, delay: item.delay },
                scale: { duration: 0.5, delay: item.delay },
              }
        }
      >
        <div
          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr ${item.bg} ${item.border} ${item.glow} border backdrop-blur-md flex items-center justify-center shadow-lg transition-transform hover:scale-105 p-2 sm:p-2.5`}
        >
          <IconComponent className={`w-full h-full ${item.color}`} />
        </div>
      </motion.div>
    </div>
  );
}
