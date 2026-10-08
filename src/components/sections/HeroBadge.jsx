import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function HeroBadge() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06)] select-none"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-slate-700 font-sans">
        Next-Gen Web Engineering Agency
      </span>
    </motion.div>
  );
}
