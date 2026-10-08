import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Floating glass badge around the Technology Ecosystem panel.
 * Adds subtle floating depth using gentle spring-like oscillations without layout triggers.
 */
export const TechnologyCapabilityBadge = React.memo(function TechnologyCapabilityBadge({
  text,
  className = '',
  duration = 5.0,
  delay = 0,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        shouldReduceMotion
          ? {}
          : {
              y: [0, -6, 0],
            }
      }
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay,
      }}
      className={`pointer-events-none select-none z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-indigo-100/90 shadow-sm shadow-indigo-500/5 text-xs font-mono font-medium text-slate-700 ${className}`}
      aria-hidden="true"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
      <span>{text}</span>
    </motion.div>
  );
});
