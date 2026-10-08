import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Search,
  Users,
  Sparkles,
  MapPin,
  TrendingUp,
  Activity,
  ArrowUpRight,
} from 'lucide-react';

/**
 * GrowthAnalyticsVisual Component
 * 
 * Replaces the static checklist inside "Multi-Channel Digital Reach"
 * with a conceptual "LIVE DIGITAL GROWTH" micro-analytics visual.
 * 
 * Communicates: SEARCH -> SOCIAL -> LOCAL -> BRAND -> GROWTH
 * Strictly avoids fake numerical claims (no fake 240%, no fake reach numbers).
 * Uses conceptual non-numeric capability labels only.
 * Respects prefers-reduced-motion.
 */
export function GrowthAnalyticsVisual() {
  const shouldReduceMotion = useReducedMotion();

  // Upward-trending conceptual growth curve coordinates
  const curvePath =
    'M 12,88 C 45,86 65,72 95,74 C 130,76 155,54 185,56 C 215,58 240,34 270,36 C 300,38 322,18 348,16';
  const areaPath = `${curvePath} L 348,102 L 12,102 Z`;

  return (
    <div
      className="relative rounded-2xl p-4 sm:p-5 select-none transition-all duration-300"
      style={{
        background: 'rgba(255, 255, 255, 0.90)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(226, 232, 240, 0.90)',
        boxShadow:
          '0 12px 30px -10px rgba(99, 102, 241, 0.12), 0 4px 12px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
      }}
    >
      {/* 1. Micro-Analytics Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100/90">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-800">
            Live Digital Growth
          </span>
          <span className="text-[9px] font-mono text-slate-400 hidden xs:inline-block">
            • Conceptual Model
          </span>
        </div>
        <span className="text-[9px] font-mono font-medium text-purple-700 bg-purple-50/90 border border-purple-200/80 px-2 py-0.5 rounded-full">
          Full Spectrum
        </span>
      </div>

      {/* 2. Floating Conceptual Metric Pills (Top Layer) */}
      <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-2xs text-[10px] font-mono text-slate-600">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <Search className="w-2.5 h-2.5 text-slate-400" />
          <span>Search Visibility</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-2xs text-[10px] font-mono text-slate-600">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <Users className="w-2.5 h-2.5 text-slate-400" />
          <span>Audience Reach</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-2xs text-[10px] font-mono text-slate-600">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
          <Sparkles className="w-2.5 h-2.5 text-slate-400" />
          <span>Engagement</span>
        </div>
      </div>

      {/* 3. The SVG Live Growth Canvas */}
      <div className="relative w-full h-[105px] sm:h-[115px] overflow-hidden rounded-xl bg-gradient-to-b from-slate-50/60 to-purple-50/20 border border-slate-100 p-1">
        {/* Subtle background horizontal grid guidelines */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="w-full h-1/3 border-b border-dashed border-slate-200" />
          <div className="w-full h-1/3 border-b border-dashed border-slate-200" />
        </div>

        <svg
          viewBox="0 0 360 110"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            {/* Area gradient fading downward */}
            <linearGradient id="growthAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.20" />
              <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
            </linearGradient>

            {/* Stroke gradient along curve */}
            <linearGradient id="growthStrokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="45%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>

            {/* Point glow filter */}
            <filter id="pointGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Area fill beneath curve */}
          <motion.path
            d={areaPath}
            fill="url(#growthAreaGrad)"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Upward-trending curve */}
          <motion.path
            d={curvePath}
            fill="none"
            stroke="url(#growthStrokeGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Key milestone indicator dots along trajectory */}
          <circle cx="95" cy="74" r="2.2" fill="#3B82F6" />
          <circle cx="185" cy="56" r="2.2" fill="#6366F1" />
          <circle cx="270" cy="36" r="2.2" fill="#8B5CF6" />
          
          {/* Peak point at top right */}
          <circle cx="348" cy="16" r="3.2" fill="#8B5CF6" />
          <circle cx="348" cy="16" r="5.5" fill="none" stroke="#C084FC" strokeWidth="1" opacity="0.6" className="animate-ping" />

          {/* Traveling Active Data Point */}
          {!shouldReduceMotion && (
            <g>
              <circle r="2.6" fill="#7C3AED" filter="url(#pointGlow)">
                <animateMotion
                  path={curvePath}
                  dur="6s"
                  repeatCount="indefinite"
                />
              </circle>
              {/* Outer soft halo */}
              <circle r="5" fill="#A855F7" opacity="0.25" filter="url(#pointGlow)">
                <animateMotion
                  path={curvePath}
                  dur="6s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          )}
        </svg>
      </div>

      {/* 4. Bottom Progression Baseline: SEARCH -> SOCIAL -> LOCAL -> BRAND -> GROWTH */}
      <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-[8px] sm:text-[8.5px] font-mono font-bold tracking-wider text-slate-500 uppercase">
        <span className="text-blue-600">Search</span>
        <span className="text-slate-300">→</span>
        <span className="text-indigo-600">Social</span>
        <span className="text-slate-300">→</span>
        <span className="text-purple-600">Local</span>
        <span className="text-slate-300">→</span>
        <span className="text-violet-600">Brand</span>
        <span className="text-slate-300">→</span>
        <span className="text-emerald-600 flex items-center gap-0.5">
          <TrendingUp className="w-2.5 h-2.5 inline" />
          Growth
        </span>
      </div>
    </div>
  );
}
