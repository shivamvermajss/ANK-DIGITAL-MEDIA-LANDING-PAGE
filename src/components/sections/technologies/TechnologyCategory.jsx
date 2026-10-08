import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Layout,
  Server,
  Database,
  GitBranch,
  Cpu,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

const CATEGORY_ICONS = {
  frontend: Layout,
  backend: Server,
  database: Database,
  integration: GitBranch,
  digital: Cpu,
};

/**
 * TechnologyCategory Component
 * 
 * Interactive left-hand domain selector.
 * Premium frosted-glass cards with active inspecting state,
 * pulsing green status pill, and responsive chevrons.
 */
export function TechnologyCategory({
  categories,
  activeCategoryId,
  onSelectCategory,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="tablist"
      aria-label="Technology Domains"
      className="flex flex-col gap-2.5 sm:gap-3"
    >
      {categories.map((cat) => {
        const isActive = cat.id === activeCategoryId;
        const IconComponent = CATEGORY_ICONS[cat.id] || Layout;

        return (
          <motion.button
            key={cat.id}
            id={`tech-tab-${cat.id}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`tech-panel-${cat.id}`}
            onClick={() => onSelectCategory(cat.id)}
            whileHover={shouldReduceMotion ? {} : { y: -2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
            className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer select-none group relative overflow-hidden ${
              isActive
                ? 'bg-white/95 border-2 border-indigo-500/80 shadow-[0_12px_28px_-8px_rgba(99,102,241,0.22)] ring-1 ring-indigo-500/30'
                : 'bg-white/75 hover:bg-white/90 border border-slate-200/80 hover:border-indigo-300/60 shadow-[0_8px_25px_-15px_rgba(15,23,42,0.15)] hover:shadow-[0_12px_25px_-10px_rgba(99,102,241,0.12)]'
            }`}
            style={{
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            {/* Subtle Active Rim Light */}
            {isActive && (
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-2xl"
                aria-hidden="true"
              />
            )}

            {/* Left Column: Number, Label, Icon & Title */}
            <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 relative z-10">
              {/* Icon Container */}
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 shadow-2xs ${
                  isActive
                    ? 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white shadow-[0_4px_12px_rgba(99,102,241,0.3)]'
                    : 'bg-slate-100/90 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                }`}
              >
                <IconComponent className="w-4 h-4 transition-transform group-hover:scale-105" />
              </div>

              {/* Title & Metadata */}
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className={`font-mono text-xs font-bold tracking-wider transition-colors ${
                      isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  >
                    {cat.number}
                  </span>
                  <span className="text-[10px] text-slate-300 font-mono select-none">•</span>
                  <span
                    className={`text-[10px] sm:text-[11px] font-mono tracking-wider uppercase transition-colors ${
                      isActive ? 'text-indigo-700 font-semibold' : 'text-slate-400 group-hover:text-slate-500'
                    }`}
                  >
                    {cat.label}
                  </span>
                </div>

                <h4
                  className={`font-heading font-black text-sm sm:text-base tracking-tight transition-colors truncate ${
                    isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                  }`}
                >
                  {cat.title}
                </h4>
              </div>
            </div>

            {/* Right Column: Active Status Pill / Arrow Indicator */}
            <div className="shrink-0 flex items-center gap-2 relative z-10">
              {isActive ? (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-emerald-700 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono font-bold tracking-wider uppercase">
                    INSPECTING
                  </span>
                </div>
              ) : null}

              {/* Arrow Indicator */}
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1'
                }`}
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
