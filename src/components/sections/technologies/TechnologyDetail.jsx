import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TechLogoIcon } from './TechLogoIcon';
import { DOMAINS_DATA } from '../../../data/technologies';

const BRAND_ACCENT_HOVER = {
  MongoDB: 'hover:border-emerald-300 hover:bg-emerald-50/60 hover:text-emerald-900 group-hover:text-emerald-600',
  PostgreSQL: 'hover:border-blue-300 hover:bg-blue-50/60 hover:text-blue-900 group-hover:text-blue-600',
  MySQL: 'hover:border-cyan-300 hover:bg-cyan-50/60 hover:text-cyan-900 group-hover:text-cyan-600',
  React: 'hover:border-sky-300 hover:bg-sky-50/60 hover:text-sky-900 group-hover:text-sky-600',
  'Node.js': 'hover:border-emerald-300 hover:bg-emerald-50/60 hover:text-emerald-900 group-hover:text-emerald-600',
  'Tailwind CSS': 'hover:border-cyan-300 hover:bg-cyan-50/60 hover:text-cyan-900 group-hover:text-cyan-600',
  Express: 'hover:border-indigo-300 hover:bg-indigo-50/60 hover:text-indigo-900 group-hover:text-indigo-600',
  JavaScript: 'hover:border-amber-300 hover:bg-amber-50/60 hover:text-amber-900 group-hover:text-amber-600',
};

/**
 * TechnologyDetail Component (Part 1 & Part 11)
 * 
 * Floating frosted glass panel showcasing selected technology domain details
 * and technology capsules with vector logos.
 * Defensively renders with guaranteed fallbacks to prevent any possible crash.
 */
export function TechnologyDetail({ activeDomain, category }) {
  const shouldReduceMotion = useReducedMotion();

  // Defensive domain resolution (Part 1 & 11)
  const domain = activeDomain || category || DOMAINS_DATA.frontend;
  const domainId = domain?.id ?? 'frontend';
  const number = domain?.number ?? '01';
  const label = domain?.label ?? 'FRONTEND';
  const title = domain?.title ?? DOMAINS_DATA.frontend.title;
  const description = domain?.description ?? domain?.desc ?? DOMAINS_DATA.frontend.description;
  const technologies = domain?.technologies ?? domain?.items ?? [];

  return (
    <div
      id={`tech-panel-${domainId}`}
      role="tabpanel"
      aria-labelledby={`tech-domain-${domainId}`}
      className="mt-4 sm:mt-5 p-5 sm:p-6 rounded-2xl bg-white/85 backdrop-blur-xl border border-slate-200/85 shadow-[0_16px_40px_-20px_rgba(15,23,42,0.18)] relative overflow-hidden"
    >
      {/* Subtle Upper-Right Gradient Wash */}
      <div
        className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-br from-indigo-400/15 via-purple-400/10 to-transparent blur-2xl"
        aria-hidden="true"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={domainId}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative z-10"
        >
          {/* Eyebrow & Domain Meta */}
          <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/90 border border-indigo-200/80 text-indigo-700 text-xs font-mono font-semibold tracking-wide shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              <span>{number} • {label}</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              Selected Architecture Domain
            </span>
          </div>

          {/* Title & Description */}
          <h4 className="font-heading font-black text-lg sm:text-xl text-slate-900 tracking-tight mb-1.5">
            {title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-5">
            {description}
          </p>

          {/* Premium Technology Capsules Grid */}
          <div className="pt-3 border-t border-slate-100">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2.5">
              Domain Tooling & Frameworks
            </span>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {technologies.map((tech) => {
                const hoverClass =
                  BRAND_ACCENT_HOVER[tech.name] ||
                  'hover:border-indigo-300 hover:bg-indigo-50/60 hover:text-indigo-900';

                return (
                  <div
                    key={tech.name}
                    className={`group px-3.5 py-2 rounded-xl bg-slate-50/90 border border-slate-200/85 shadow-2xs flex items-center gap-2.5 transition-all duration-200 cursor-default ${hoverClass}`}
                  >
                    {/* Technology Icon */}
                    <div className="w-5 h-5 rounded-md flex items-center justify-center text-slate-700 group-hover:scale-105 transition-transform shrink-0">
                      <TechLogoIcon name={tech.name} className="w-4 h-4" />
                    </div>

                    {/* Tech Name & Type */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-heading font-bold text-slate-800 transition-colors">
                        {tech.name}
                      </span>
                      {tech.type && (
                        <span className="text-[9.5px] font-mono text-slate-600 bg-white/80 px-1.5 py-0.5 rounded border border-slate-200/70 hidden xs:inline-block">
                          {tech.type}
                        </span>
                      )}
                    </div>

                    <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-transform duration-300 shrink-0 ml-0.5" />
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
