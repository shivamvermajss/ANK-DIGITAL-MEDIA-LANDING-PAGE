import React from 'react';
import { useReducedMotion } from 'framer-motion';
import { Sparkles, Layers, Cpu, Database, GitBranch, MessageSquare, Globe } from 'lucide-react';

const SATELLITE_NODES = [
  { id: 'web', label: 'WEB', icon: Globe },
  { id: 'software', label: 'SOFTWARE', icon: Cpu },
  { id: 'data', label: 'DATA', icon: Database },
  { id: 'integration', label: 'INTEGRATION', icon: GitBranch },
  { id: 'digital', label: 'DIGITAL', icon: MessageSquare },
];

/**
 * TechnologyCore
 * Central technology hub representing "DIGITAL EXPERIENCE".
 * Upgraded with:
 * - Dark frosted-glass central node (bg-slate-900/90 backdrop-blur-xl)
 * - Subtle ambient indigo/purple depth glow
 * - Verified "CORE ENGINE ACTIVE" status indicator with CSS pulsing emerald dot
 * - Upgraded gradient active category pills inside showcase
 */
export const TechnologyCore = React.memo(function TechnologyCore({ activeTabId = 'web', onSelectDomain }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full py-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Ambient Radial Depth Aura behind Central Core */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10"
        aria-hidden="true"
      >
        <div className="w-80 h-48 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/15 to-blue-500/15 blur-3xl" />
      </div>

      {/* Subtle SVG Connecting Energy Lines */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full -z-10 select-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="coreLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Subtle connecting arcs from central hub */}
        <path
          d="M 50% 50% Q 25% 20% 12% 45%"
          fill="none"
          stroke="url(#coreLineGrad)"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        <path
          d="M 50% 50% Q 30% 15% 32% 18%"
          fill="none"
          stroke="url(#coreLineGrad)"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        <path
          d="M 50% 50% Q 70% 15% 68% 18%"
          fill="none"
          stroke="url(#coreLineGrad)"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        <path
          d="M 50% 50% Q 75% 20% 88% 45%"
          fill="none"
          stroke="url(#coreLineGrad)"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        <path
          d="M 50% 50% L 50% 88%"
          fill="none"
          stroke="url(#coreLineGrad)"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />

        {/* Restrained animated energy pulses */}
        {!shouldReduceMotion && (
          <>
            <circle r="2" fill="#6366F1" opacity="0.65">
              <animateMotion
                path="M 50% 50% Q 25% 20% 12% 45%"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="2" fill="#818CF8" opacity="0.65">
              <animateMotion
                path="M 50% 50% Q 75% 20% 88% 45%"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </circle>
          </>
        )}
      </svg>

      {/* Satellite Category Pills around the core */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-5 sm:mb-6 max-w-lg z-10">
        {SATELLITE_NODES.map((node) => {
          const isActive = node.id === activeTabId;
          const IconComponent = node.icon;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => onSelectDomain && onSelectDomain(node.id)}
              className={`group inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                  : 'bg-white/80 border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 shadow-2xs'
              }`}
              aria-label={`View ${node.label} technology domain`}
            >
              <IconComponent
                className={`w-3 h-3 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-indigo-500'} transition-colors`}
              />
              <span className="tracking-wider">{node.label}</span>
            </button>
          );
        })}
      </div>

      {/* Central Visual Hub: DARK FROSTED GLASS "DIGITAL EXPERIENCE" NODE */}
      <div className="relative group max-w-full">
        {/* Soft Ambient Depth Glow behind Central Node */}
        <div
          className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-indigo-500/20 rounded-3xl blur-2xl -z-10 group-hover:opacity-100 opacity-80 transition-opacity"
          aria-hidden="true"
        />

        <div className="relative z-10 px-5 sm:px-7 py-4 sm:py-4.5 rounded-2xl bg-slate-900/90 text-white backdrop-blur-xl border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-5">
          {/* Left Icon Emblem */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-950/80 border border-indigo-500/30 shadow-inner">
              <span className="absolute w-2 h-2 rounded-full bg-indigo-400 animate-ping opacity-60" />
              <Layers className="w-4 h-4 text-indigo-300 relative z-10" />
            </div>

            <div className="text-left">
              {/* Eyebrow */}
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-300 uppercase">
                  CENTRAL HUB • CONNECTED
                </span>
              </div>
              {/* Main Title */}
              <h4 className="text-sm sm:text-base font-heading font-black tracking-tight text-white">
                DIGITAL EXPERIENCE
              </h4>
            </div>
          </div>

          {/* Right Status Block: CORE ENGINE ACTIVE & Unified Core */}
          <div className="flex items-center gap-3 sm:pl-4 sm:border-l sm:border-slate-700/80">
            {/* Core Engine Status */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-300 uppercase">
                CORE ENGINE ACTIVE
              </span>
            </div>

            {/* Supporting Unified Core */}
            <div className="hidden md:flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
              <span className="text-[11px] font-mono text-slate-300">Unified Core</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
