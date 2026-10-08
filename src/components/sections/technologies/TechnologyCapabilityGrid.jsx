import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * CapabilityCardItem
 * Single capsule/card in the 2-column capability grid.
 * Polished with:
 * - bg-white/90 backdrop-blur-xl border border-slate-200/80
 * - hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1
 * - Arrow: group-hover:translate-x-1.5 group-hover:text-indigo-600
 * - Icon container: bg-indigo-50 border border-indigo-100 group-hover:bg-indigo-100 group-hover:border-indigo-200 group-hover:scale-105
 * - Verified compact capability tag capsule: px-2.5 py-1 rounded-full text-[10px] font-medium bg-indigo-50 text-indigo-600 border border-indigo-100
 */
const CapabilityCardItem = React.memo(function CapabilityCardItem({ capability }) {
  return (
    <div
      tabIndex={0}
      role="article"
      aria-label={`${capability.name}: ${capability.sub}`}
      className="group relative p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-2xs hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 transform-gpu hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 select-none cursor-default flex flex-col justify-between"
    >
      <div>
        {/* Top Row: Diamond Icon & Hover Arrow */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 group-hover:bg-indigo-100 group-hover:border-indigo-200 group-hover:scale-105 transition-all duration-300">
            <span className="text-xs font-mono select-none font-bold">◇</span>
          </div>

          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1.5 transition-all duration-300" />
        </div>

        {/* Main Capability Title */}
        <h4 className="text-sm sm:text-base font-heading font-bold text-slate-900 group-hover:text-indigo-950 transition-colors">
          {capability.name}
        </h4>

        {/* Supporting Subtitle */}
        <p className="text-xs text-slate-500 mt-1 font-sans leading-relaxed">
          {capability.sub}
        </p>
      </div>

      {/* Compact Premium Capability Capsule Tag */}
      {capability.tag && (
        <div className="mt-3.5 pt-2.5 border-t border-slate-100/80 flex items-center">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-indigo-50 text-indigo-600 border border-indigo-100">
            {capability.tag}
          </span>
        </div>
      )}

      {/* Subtle indicator bar on bottom */}
      <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-blue-500/0 via-indigo-500/40 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
    </div>
  );
});

/**
 * TechnologyCapabilityGrid
 * 2-column capability grid for the active domain.
 */
export const TechnologyCapabilityGrid = React.memo(function TechnologyCapabilityGrid({
  capabilities = [],
  activeDomainId = 'web',
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key={activeDomainId}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 w-full"
    >
      {capabilities.map((cap) => (
        <CapabilityCardItem key={cap.name} capability={cap} />
      ))}
    </motion.div>
  );
});
