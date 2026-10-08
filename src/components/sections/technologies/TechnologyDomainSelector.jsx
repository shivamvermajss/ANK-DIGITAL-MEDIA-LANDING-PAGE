import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Layout, Cpu, Database, GitBranch, MessageSquare, ChevronRight } from 'lucide-react';
import { DOMAIN_KEYS, ECOSYSTEM_DATA } from '../../../data/technologies';

const ICON_MAP = {
  web: Layout,
  software: Cpu,
  data: Database,
  integration: GitBranch,
  digital: MessageSquare,
};

/**
 * TechnologyDomainSelector
 * Left column: 5 selectable domain cards.
 * Dynamic active state with Framer Motion layoutId="technologyActiveTab".
 * High-contrast visual hierarchy between floating active card and subtle inactive tabs.
 */
export const TechnologyDomainSelector = React.memo(function TechnologyDomainSelector({
  activeTabId = 'web',
  onSelectDomain,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="tablist"
      aria-label="Technology Domains"
      className="flex flex-col gap-3 w-full"
    >
      {DOMAIN_KEYS.map((key) => {
        const domain = ECOSYSTEM_DATA[key];
        const isActive = activeTabId === key;
        const IconComponent = ICON_MAP[key] || Layout;

        return (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`ecosystem-panel-${key}`}
            id={`domain-tab-${key}`}
            tabIndex={0}
            onClick={() => onSelectDomain(key)}
            className={`group relative w-full text-left p-4 sm:p-4.5 rounded-2xl transition-all duration-300 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 ${
              isActive
                ? 'bg-white/90 backdrop-blur-2xl border-2 border-indigo-500/80 shadow-xl shadow-indigo-500/10'
                : 'bg-white/50 backdrop-blur-xl border border-slate-200/60 hover:bg-white/80 hover:border-slate-300 hover:shadow-sm'
            }`}
          >
            {/* Smooth dynamic active highlight sliding transition */}
            {isActive && (
              <motion.div
                layoutId={shouldReduceMotion ? undefined : 'technologyActiveTab'}
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-purple-50/30 to-white/90 pointer-events-none -z-10"
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 32,
                }}
              />
            )}

            {/* Inner Content Layout */}
            <div className="relative z-10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5 min-w-0">
                {/* Icon Container */}
                <div
                  className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/30 scale-105'
                      : 'bg-slate-100/90 border border-slate-200/60 text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-200/70'
                  }`}
                >
                  <IconComponent className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
                </div>

                {/* Text Hierarchy */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span
                      className={`font-mono text-[11px] font-bold tracking-wider ${
                        isActive ? 'text-indigo-600' : 'text-slate-500'
                      }`}
                    >
                      {domain.index}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold tracking-widest uppercase ${
                        isActive ? 'text-indigo-600' : 'text-slate-500'
                      }`}
                    >
                      {domain.label}
                    </span>
                  </div>
                  <h3
                    className={`font-heading text-sm sm:text-base font-bold truncate transition-colors ${
                      isActive ? 'text-slate-900 font-black' : 'text-slate-700 group-hover:text-slate-900'
                    }`}
                  >
                    {domain.title}
                  </h3>
                </div>
              </div>

              {/* Right Arrow */}
              <div className="flex-shrink-0 flex items-center pl-2">
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 ${
                    isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'
                  }`}
                />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
});
