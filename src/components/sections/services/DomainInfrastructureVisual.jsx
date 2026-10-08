import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Globe, Search, Check, Shield, Network, Sparkles } from 'lucide-react';

/**
 * DomainInfrastructureVisual Component
 * 
 * Miniature domain search interface and global DNS architecture visual for Domain Registration.
 * Communicates: Global Digital Identity, DNS Routing, Domain Availability, Anycast Resolution.
 * Strictly conceptual preview; does not submit live searches.
 * Respects prefers-reduced-motion.
 */
export function DomainInfrastructureVisual({ isHovered = false }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="relative rounded-2xl p-4 sm:p-5 select-none overflow-hidden transition-all duration-300"
      style={{
        background: 'rgba(248, 250, 252, 0.72)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(226, 232, 240, 0.9)',
        boxShadow: isHovered
          ? '0 16px 36px -12px rgba(99, 102, 241, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
          : '0 12px 30px -12px rgba(99, 102, 241, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.85)',
      }}
    >
      {/* Background ambient indigo glow */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 w-44 h-44 rounded-full transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.14), transparent 70%)',
          opacity: isHovered ? 1 : 0.6,
        }}
        aria-hidden="true"
      />

      {/* 1. Header Bar: Status & Mode */}
      <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full bg-indigo-500 transition-all duration-300 ${
              isHovered ? 'ring-4 ring-indigo-400/25 scale-110' : 'animate-pulse'
            }`}
          />
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-800">
            Domain Search & DNS
          </span>
          <span className="text-[9px] font-mono font-semibold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200/70">
            Resolver Ready
          </span>
        </div>

        <span className="text-[9px] font-mono text-slate-400">
          Global Name Service
        </span>
      </div>

      {/* 2. Conceptual Domain Search Bar */}
      <div className="mb-3.5">
        <div
          className="relative flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 shadow-2xs"
          style={{
            background: isHovered ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.90)',
            border: `1px solid ${isHovered ? 'rgba(99, 102, 241, 0.45)' : 'rgba(226, 232, 240, 0.95)'}`,
            boxShadow: isHovered ? '0 4px 14px rgba(99, 102, 241, 0.12)' : 'none',
          }}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-slate-800 font-semibold">
            <Search className="w-3.5 h-3.5 text-indigo-500" />
            <span>yourbrand</span>
            <span className="text-indigo-600 font-bold">.com</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[9px] font-mono font-bold">
              <Check className="w-2.5 h-2.5" />
              <span>Available</span>
            </span>
          </div>
        </div>

        {/* Extensions Strip */}
        <div className="flex items-center justify-between px-1 mt-1.5 text-[9px] font-mono text-slate-400">
          <span className="text-indigo-600 font-semibold">.com • Primary Identity</span>
          <span className="hidden xs:inline">.io • .in • .org Ready</span>
          <span className="text-slate-500 font-medium">Instant Allocation</span>
        </div>
      </div>

      {/* 3. Global Minimal DNS / Grid Mesh Visual */}
      <div className="p-3 rounded-xl bg-white/70 border border-slate-200/70 shadow-2xs">
        <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mb-2">
          <span>Global Anycast DNS Mesh</span>
          <span className="text-indigo-600 font-semibold flex items-center gap-1">
            <Network className="w-2.5 h-2.5" />
            <span>Low Latency Propagation</span>
          </span>
        </div>

        {/* Minimal SVG Globe & Lat/Long Network */}
        <div className="relative h-20 flex items-center justify-center overflow-hidden">
          <svg
            className="w-full h-full max-w-[260px] text-slate-300"
            viewBox="0 0 260 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Subtle Globe Outlines */}
            <circle
              cx="130"
              cy="40"
              r="34"
              stroke={isHovered ? 'rgba(99, 102, 241, 0.35)' : 'rgba(203, 213, 225, 0.8)'}
              strokeWidth="1.2"
              strokeDasharray="3 3"
              className="transition-colors duration-300"
            />
            {/* Horizontal Equator Ellipse */}
            <ellipse
              cx="130"
              cy="40"
              rx="34"
              ry="12"
              stroke={isHovered ? 'rgba(99, 102, 241, 0.45)' : 'rgba(203, 213, 225, 0.7)'}
              strokeWidth="1"
              className="transition-colors duration-300"
            />
            {/* Vertical Arc 1 */}
            <path
              d="M130 6 C115 18 115 62 130 74"
              stroke={isHovered ? 'rgba(99, 102, 241, 0.4)' : 'rgba(226, 232, 240, 0.9)'}
              strokeWidth="1"
              className="transition-colors duration-300"
            />
            {/* Vertical Arc 2 */}
            <path
              d="M130 6 C145 18 145 62 130 74"
              stroke={isHovered ? 'rgba(99, 102, 241, 0.4)' : 'rgba(226, 232, 240, 0.9)'}
              strokeWidth="1"
              className="transition-colors duration-300"
            />

            {/* Connecting DNS Propagation Lines */}
            <line
              x1="30"
              y1="40"
              x2="96"
              y2="40"
              stroke="rgba(99, 102, 241, 0.25)"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            <line
              x1="164"
              y1="40"
              x2="230"
              y2="40"
              stroke="rgba(99, 102, 241, 0.25)"
              strokeWidth="1"
              strokeDasharray="2 2"
            />

            {/* DNS Node 1: West Node */}
            <circle cx="30" cy="40" r="3.5" fill="#6366F1" opacity={isHovered ? 0.9 : 0.7} />
            <circle cx="30" cy="40" r="7" stroke="#6366F1" strokeWidth="0.8" opacity="0.25" />

            {/* DNS Node 2: Central Authority Node */}
            <circle cx="130" cy="40" r="4.5" fill="#4F46E5" />
            <circle
              cx="130"
              cy="40"
              r="9"
              stroke="#4F46E5"
              strokeWidth="1"
              opacity={isHovered ? 0.35 : 0.2}
              className="transition-opacity"
            />

            {/* DNS Node 3: East Node */}
            <circle cx="230" cy="40" r="3.5" fill="#8B5CF6" opacity={isHovered ? 0.9 : 0.7} />
            <circle cx="230" cy="40" r="7" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.25" />

            {/* Small Node Satellites on Globe */}
            <circle cx="112" cy="34" r="2" fill="#3B82F6" />
            <circle cx="148" cy="46" r="2" fill="#06B6D4" />
          </svg>
        </div>
      </div>

      {/* 4. Footer Architecture Status */}
      <div className="pt-3 mt-3 border-t border-slate-200/80 flex items-center justify-between text-[8px] sm:text-[8.5px] font-mono text-slate-500">
        <span className="flex items-center gap-1 text-slate-700 font-medium">
          <Shield className="w-2.5 h-2.5 text-indigo-500" />
          <span>DNSSEC Supported</span>
        </span>
        <span className="text-slate-400">Automated Renewal Guard</span>
      </div>
    </div>
  );
}
