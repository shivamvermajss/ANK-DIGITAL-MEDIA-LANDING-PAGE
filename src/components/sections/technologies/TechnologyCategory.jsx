import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Layout,
  Server,
  Database,
  GitBranch,
  Cpu,
  ArrowRight,
} from 'lucide-react';

const CATEGORY_ICONS = {
  frontend: Layout,
  backend: Server,
  database: Database,
  api: GitBranch,
  integration: GitBranch,
  digital: Cpu,
};

/**
 * TechnologyCategory Component
 * 
 * Domain selector tabs with:
 * - Framer Motion layoutId="activePill" for smooth sliding active indicator
 * - Safe state resolution and click handler
 * - Explicit keyboard accessibility (role="tab", aria-selected, Enter/Space support)
 * - Visible focus states
 * - Reduced motion support
 */
export function TechnologyCategory({
  categories = [],
  selectedDomain = 'frontend',
  onSelectDomain = () => {},
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="tablist"
      aria-label="Technology Domains"
      className="flex flex-col gap-2.5 sm:gap-3"
    >
      {categories.map((cat) => {
        const IconComponent = CATEGORY_ICONS[cat?.id] || Layout;
        const isActive = cat?.id === selectedDomain;

        return (
          <button
            key={cat?.id || 'default'}
            id={`tech-domain-${cat?.id}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`tech-panel-${cat?.id}`}
            tabIndex={0}
            onClick={() => {
              if (cat?.id && onSelectDomain) {
                onSelectDomain(cat.id);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (cat?.id && onSelectDomain) {
                  onSelectDomain(cat.id);
                }
              }
            }}
            className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer select-none group relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
              isActive
                ? 'shadow-[0_8px_24px_-8px_rgba(99,102,241,0.18)]'
                : 'bg-white/75 hover:bg-white/95 border border-slate-200/85 hover:border-indigo-200 hover:translate-x-0.5 shadow-[0_4px_16px_-8px_rgba(15,23,42,0.06)]'
            }`}
            style={{
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            {/* Part 9: Smooth Sliding Active Pill with layoutId="activePill" */}
            {isActive && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 rounded-2xl bg-indigo-50/90 border-2 border-indigo-500/40 pointer-events-none"
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }
                }
              />
            )}

            {/* Left Column: Number, Label, Icon & Title */}
            <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 relative z-10">
              {/* Icon Container */}
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white shadow-sm scale-105'
                    : 'bg-slate-100/90 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:scale-105'
                }`}
              >
                <IconComponent className="w-4 h-4" />
              </div>

              {/* Title & Metadata */}
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className={`font-mono text-xs font-bold tracking-wider transition-colors ${
                      isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-indigo-500'
                    }`}
                  >
                    {cat?.number ?? '01'}
                  </span>
                  <span className="text-[10px] text-slate-300 font-mono select-none">•</span>
                  <span
                    className={`text-[10px] sm:text-[11px] font-mono tracking-wider uppercase transition-colors ${
                      isActive ? 'text-indigo-700 font-semibold' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  >
                    {cat?.label ?? 'DOMAIN'}
                  </span>
                </div>

                <h4
                  className={`font-heading text-sm sm:text-base tracking-tight transition-colors truncate ${
                    isActive ? 'font-black text-slate-900' : 'font-bold text-slate-700 group-hover:text-slate-900'
                  }`}
                >
                  {cat?.title ?? 'Engineering Domain'}
                </h4>
              </div>
            </div>

            {/* Right Column: Active Status Indicator / Arrow */}
            <div className="shrink-0 flex items-center gap-2 relative z-10">
              {isActive && (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wide uppercase bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active
                </span>
              )}

              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? 'text-indigo-600 translate-x-1'
                    : 'text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-0.5'
                }`}
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
