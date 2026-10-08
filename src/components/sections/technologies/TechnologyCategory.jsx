import React from 'react';
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
  integration: GitBranch,
  digital: Cpu,
};

/**
 * TechnologyCategory Component
 * 
 * Informational display cards for Technology Domains.
 * Non-interactive / unclickable cards with subtle cosmetic hover polish.
 * Features:
 * - Semantic non-button elements (cursor-default)
 * - Zero click / selection / routing handlers
 * - Subtle background tint, border highlight, icon glow on hover
 * - Displays all 5 core architecture domains
 */
export function TechnologyCategory({ categories }) {
  return (
    <div
      aria-label="Technology Domains"
      className="flex flex-col gap-2.5 sm:gap-3"
    >
      {categories.map((cat) => {
        const IconComponent = CATEGORY_ICONS[cat.id] || Layout;

        return (
          <div
            key={cat.id}
            id={`tech-domain-${cat.id}`}
            className="w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 flex items-center justify-between gap-3 cursor-default select-none group relative overflow-hidden bg-white/80 hover:bg-white/95 border border-slate-200/85 hover:border-indigo-300/70 shadow-[0_4px_18px_-8px_rgba(15,23,42,0.08)] hover:shadow-[0_8px_24px_-8px_rgba(99,102,241,0.12)]"
            style={{
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            {/* Left Column: Number, Label, Icon & Title */}
            <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 relative z-10">
              {/* Icon Container with subtle hover glow */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 shadow-2xs bg-slate-100/90 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600">
                <IconComponent className="w-4 h-4 transition-transform group-hover:scale-105" />
              </div>

              {/* Title & Metadata */}
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-mono text-xs font-bold tracking-wider text-slate-400 group-hover:text-indigo-600 transition-colors">
                    {cat.number}
                  </span>
                  <span className="text-[10px] text-slate-300 font-mono select-none">•</span>
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-slate-400 group-hover:text-slate-600 transition-colors">
                    {cat.label}
                  </span>
                </div>

                <h4 className="font-heading font-black text-sm sm:text-base tracking-tight text-slate-800 group-hover:text-slate-900 transition-colors truncate">
                  {cat.title}
                </h4>
              </div>
            </div>

            {/* Right Column: Subtle Arrow Indicator */}
            <div className="shrink-0 flex items-center gap-2 relative z-10">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
