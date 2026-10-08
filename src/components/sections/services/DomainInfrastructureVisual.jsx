import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Globe, Search, Check, Shield, Network } from 'lucide-react';

/**
 * DomainInfrastructureVisual Component
 * 
 * Premium high-contrast miniature domain search interface and live DNS architecture visual.
 * Features:
 * - Elevated floating container: bg-white/98, border rgba(99,102,241,0.20), layered indigo/slate shadows
 * - Soft interior indigo radial glow: radial-gradient(circle at 50% 60%, rgba(99,102,241,0.08), transparent 60%)
 * - High-impact domain search bar: #FFFFFF, 1.5px border rgba(99,102,241,0.35), text #1E293B, .com #4F46E5
 * - Saturated Available badge: rgba(16,185,129,0.08), text #047857, border rgba(16,185,129,0.35), pulsing dot
 * - Global DNS Architecture Visual (Focal Hero):
 *   - Central Authority Node: enlarged 10%, #4F46E5, white/98 backing, 2px border, layered 22px glow
 *   - Darker & sharper orbit rings: rgba(99,102,241,0.28) primary, rgba(129,140,248,0.20) secondary
 *   - Surrounding regional nodes: white/98 backing, 1.5px border, shadow, #6366F1 node, hover scale(1.04)
 *   - Horizontal connection line: rgba(99,102,241,0.45) with animated live resolution particles (#6366F1)
 *   - Compact top-right "DNS Resolution" status indicator with pulsing dot (#4F46E5 text, #6366F1 icon)
 * - transform: translateZ(0) for anti-aliasing
 * - Full prefers-reduced-motion support
 */
export function DomainInfrastructureVisual({ isHovered = false }) {
  const shouldReduceMotion = useReducedMotion();

  // Particle flow duration: ~2.8s resting, ~1.4s on card hover
  const particleDur = isHovered ? '1.4s' : '2.8s';

  return (
    <div
      className="relative rounded-2xl p-4 sm:p-5 select-none overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(99, 102, 241, 0.20)',
        boxShadow: isHovered
          ? '0 22px 46px -14px rgba(79, 70, 229, 0.26), 0 10px 24px -10px rgba(15, 23, 42, 0.12)'
          : '0 18px 40px -14px rgba(79, 70, 229, 0.20), 0 8px 20px -10px rgba(15, 23, 42, 0.10)',
        transform: 'translateZ(0)',
        transition: 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Background soft ambient radial glow inside panel */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at 50% 60%, rgba(99, 102, 241, 0.08), transparent 60%)',
          opacity: isHovered ? 1 : 0.8,
        }}
        aria-hidden="true"
      />

      {/* 1. Header Bar: Status & Mode */}
      <div className="relative z-10 flex items-center justify-between pb-3 mb-3.5 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full bg-indigo-500 transition-all duration-300 ${
              isHovered ? 'ring-4 ring-indigo-400/35 scale-110' : 'animate-pulse'
            }`}
          />
          <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#1E293B]">
            Domain Search & DNS
          </span>
          <span className="text-[9px] font-mono font-bold text-indigo-800 bg-indigo-50/90 px-2.5 py-0.5 rounded-full border border-indigo-200 shadow-2xs">
            Active Resolver
          </span>
        </div>

        <span className="text-[9.5px] font-mono text-[#64748B] font-semibold">
          Global Name Service
        </span>
      </div>

      {/* 2. Prominent High-Contrast Domain Search Bar */}
      <div className="relative z-10 mb-3.5">
        <div
          className="relative flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-300"
          style={{
            background: '#FFFFFF',
            border: isHovered ? '1.5px solid rgba(99, 102, 241, 0.65)' : '1.5px solid rgba(99, 102, 241, 0.35)',
            boxShadow: isHovered
              ? '0 0 0 3px rgba(99, 102, 241, 0.06), 0 10px 25px -10px rgba(99, 102, 241, 0.25)'
              : '0 8px 22px -10px rgba(79, 70, 229, 0.20)',
          }}
        >
          {/* Search Icon & Domain typography */}
          <div className="flex items-center gap-2 text-xs sm:text-[13px] font-mono">
            <Search className="w-3.5 h-3.5 text-[#4F46E5] shrink-0" />
            <span className="text-[#1E293B] font-semibold tracking-tight">yourbrand</span>
            <span className="text-[#4F46E5] font-bold">.com</span>
          </div>

          {/* Saturated Available Badge with Pulsing Green Dot */}
          <div className="flex items-center gap-2">
            <motion.span
              animate={
                isHovered && !shouldReduceMotion
                  ? { scale: [1, 1.04, 1] }
                  : { scale: 1 }
              }
              transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, ease: 'easeInOut' }}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9.5px] font-mono font-bold transition-all duration-300"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                color: '#047857',
                boxShadow: '0 0 12px rgba(16, 185, 129, 0.12)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <Check className="w-2.5 h-2.5 text-[#047857] stroke-[2.5]" />
              <span>Available</span>
            </motion.span>
          </div>
        </div>

        {/* Extensions Strip */}
        <div className="flex items-center justify-between px-1 mt-1.5 text-[9px] font-mono">
          <span className="text-[#4F46E5] font-bold">.com • Primary Identity</span>
          <span className="hidden xs:inline text-[#64748B] font-medium">.io • .in • .org Support</span>
          <span className="text-[#475569] font-bold">Verified Registry</span>
        </div>
      </div>

      {/* 3. Global DNS Architecture (Main Focus) */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: isHovered ? -1.5 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative z-10 p-3 sm:p-3.5 rounded-xl transition-all duration-300"
        style={{
          background: 'rgba(248, 250, 252, 0.95)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          boxShadow: isHovered
            ? '0 8px 20px -8px rgba(79, 70, 229, 0.22)'
            : '0 6px 16px -10px rgba(15, 23, 42, 0.12)',
        }}
      >
        {/* Visual Header with Upgraded DNS Resolution Status */}
        <div className="flex items-center justify-between text-[9px] font-mono text-[#475569] mb-2 font-bold">
          <span>Global DNS Architecture</span>
          <span className="text-[#4F46E5] font-semibold text-[10px] flex items-center gap-1.5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] shadow-2xs animate-pulse" />
            <Network className="w-3 h-3 text-[#6366F1]" />
            <span>DNS Resolution</span>
          </span>
        </div>

        {/* Sharp SVG Canvas with Live Resolution Data Flow */}
        <div className="relative h-20 flex items-center justify-center overflow-hidden">
          <svg
            className="w-full h-full max-w-[260px] text-slate-300 overflow-visible"
            viewBox="0 0 260 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Central DNS Node Drop Shadow Filter */}
              <filter id="dnsHubShadow" x="-100%" y="-100%" width="300%" height="300%">
                <feDropShadow dx="0" dy="0" stdDeviation="5.5" floodColor="rgba(99,102,241,0.38)" />
                <feDropShadow dx="0" dy="4" stdDeviation="4.5" floodColor="rgba(79,70,229,0.30)" />
              </filter>

              {/* Regional Node Drop Shadow */}
              <filter id="regionalNodeShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="3" stdDeviation="3.5" floodColor="rgba(79,70,229,0.22)" />
              </filter>

              {/* Particle Glow Filter */}
              <filter id="particleGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="rgba(99,102,241,0.55)" />
              </filter>
            </defs>

            {/* Static Globe Outlines & Grid */}
            <circle
              cx="130"
              cy="40"
              r="34"
              stroke={isHovered ? 'rgba(99, 102, 241, 0.35)' : 'rgba(148, 163, 184, 0.45)'}
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
              stroke={isHovered ? 'rgba(99, 102, 241, 0.38)' : 'rgba(148, 163, 184, 0.45)'}
              strokeWidth="1"
              className="transition-colors duration-300"
            />
            {/* Vertical Arc 1 */}
            <path
              d="M130 6 C115 18 115 62 130 74"
              stroke={isHovered ? 'rgba(99, 102, 241, 0.35)' : 'rgba(203, 213, 225, 0.85)'}
              strokeWidth="1"
              className="transition-colors duration-300"
            />
            {/* Vertical Arc 2 */}
            <path
              d="M130 6 C145 18 145 62 130 74"
              stroke={isHovered ? 'rgba(99, 102, 241, 0.35)' : 'rgba(203, 213, 225, 0.85)'}
              strokeWidth="1"
              className="transition-colors duration-300"
            />

            {/* Horizontal Connection Lines: Node -> DNS Hub -> Node (Connection line: rgba(99,102,241,0.45), stroke-width: 1.5px) */}
            <line
              x1="32"
              y1="40"
              x2="130"
              y2="40"
              stroke={isHovered ? 'rgba(99, 102, 241, 0.65)' : 'rgba(99, 102, 241, 0.45)'}
              strokeWidth="1.5"
              strokeDasharray="3 3"
              className="transition-colors duration-300"
            />
            <line
              x1="130"
              y1="40"
              x2="228"
              y2="40"
              stroke={isHovered ? 'rgba(99, 102, 241, 0.65)' : 'rgba(99, 102, 241, 0.45)'}
              strokeWidth="1.5"
              strokeDasharray="3 3"
              className="transition-colors duration-300"
            />

            {/* LIVE DNS RESOLUTION PARTICLES */}
            {!shouldReduceMotion && (
              <>
                {/* Particle 1: Traveling from Left Regional Node to Central DNS Hub */}
                <circle
                  r="2.4"
                  fill="#6366F1"
                  filter="url(#particleGlow)"
                  style={{
                    filter: 'drop-shadow(0 0 6px rgba(99,102,241,0.45))',
                  }}
                >
                  <animateMotion
                    path="M 32,40 L 130,40"
                    dur={particleDur}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Particle 2: Traveling from Central DNS Hub to Right Regional Node */}
                <circle
                  r="2.4"
                  fill="#6366F1"
                  filter="url(#particleGlow)"
                  style={{
                    filter: 'drop-shadow(0 0 6px rgba(99,102,241,0.45))',
                  }}
                >
                  <animateMotion
                    path="M 130,40 L 228,40"
                    dur={particleDur}
                    begin={isHovered ? '0.7s' : '1.4s'}
                    repeatCount="indefinite"
                  />
                </circle>
              </>
            )}

            {/* SURROUNDING REGIONAL DNS NODES (Left: 32, 40 & Right: 228, 40) */}
            {/* Regional Node 1: Left Node */}
            <motion.g
              animate={shouldReduceMotion ? {} : { scale: isHovered ? 1.04 : 1 }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: '32px 40px' }}
              filter="url(#regionalNodeShadow)"
            >
              <circle
                cx="32"
                cy="40"
                r="7.5"
                fill="rgba(255, 255, 255, 0.98)"
                stroke={isHovered ? 'rgba(99, 102, 241, 0.60)' : 'rgba(99, 102, 241, 0.30)'}
                strokeWidth="1.5"
                className="transition-colors duration-300"
              />
              <circle cx="32" cy="40" r="3.5" fill="#6366F1" />
              <circle cx="32" cy="40" r="1.2" fill="#FFFFFF" opacity="0.9" />
            </motion.g>

            {/* Regional Node 2: Right Node */}
            <motion.g
              animate={shouldReduceMotion ? {} : { scale: isHovered ? 1.04 : 1 }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: '228px 40px' }}
              filter="url(#regionalNodeShadow)"
            >
              <circle
                cx="228"
                cy="40"
                r="7.5"
                fill="rgba(255, 255, 255, 0.98)"
                stroke={isHovered ? 'rgba(99, 102, 241, 0.60)' : 'rgba(99, 102, 241, 0.30)'}
                strokeWidth="1.5"
                className="transition-colors duration-300"
              />
              <circle cx="228" cy="40" r="3.5" fill="#6366F1" />
              <circle cx="228" cy="40" r="1.2" fill="#FFFFFF" opacity="0.9" />
            </motion.g>

            {/* ROTATING GLOBAL ORBITAL SYSTEM (Darker, more visible orbital rings) */}
            <motion.g
              style={{ transformOrigin: '130px 40px' }}
              animate={shouldReduceMotion ? {} : { rotate: 360 }}
              transition={{
                duration: isHovered ? 6 : 12,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {/* Primary Orbital Ring (Orbit: rgba(99,102,241,0.28), stroke-width: 1.3px) */}
              <ellipse
                cx="130"
                cy="40"
                rx="31"
                ry="12.5"
                stroke={isHovered ? 'rgba(99, 102, 241, 0.38)' : 'rgba(99, 102, 241, 0.28)'}
                strokeWidth="1.3"
                strokeDasharray="4 3"
                className="transition-colors duration-300"
              />
              {/* Secondary Inclined Orbital Ring (Secondary orbit: rgba(129,140,248,0.20), stroke-width: 1.2px) */}
              <ellipse
                cx="130"
                cy="40"
                rx="35"
                ry="13.5"
                transform="rotate(-25 130 40)"
                stroke={isHovered ? 'rgba(129, 140, 248, 0.30)' : 'rgba(129, 140, 248, 0.20)'}
                strokeWidth="1.2"
                className="transition-colors duration-300"
              />

              {/* 4 Satellite Orbit Nodes: Secondary nodes: #6366F1, Outer nodes: #818CF8 */}
              <circle cx="161" cy="40" r="2.6" fill="#6366F1" />
              <circle cx="99" cy="40" r="2.6" fill="#818CF8" />
              <circle cx="130" cy="26.5" r="2.2" fill="#818CF8" />
              <circle cx="130" cy="53.5" r="2.2" fill="#6366F1" />

              {/* Traveling Pulse Halo along Orbit */}
              <circle
                cx="161"
                cy="40"
                r="5.5"
                fill="#6366F1"
                opacity={isHovered ? 0.45 : 0.25}
              />
            </motion.g>

            {/* CENTRAL DNS NODE: THE VISUAL FOCAL POINT (Enlarged 10%, #4F46E5, white/98 backing, 2px border, layered 22px glow) */}
            {/* Ambient outer halo ring: 0 0 0 5px rgba(99,102,241,0.06) */}
            <circle
              cx="130"
              cy="40"
              r="13"
              fill="none"
              stroke="rgba(99, 102, 241, 0.08)"
              strokeWidth="4"
            />

            {/* Animated Pulsing Ring */}
            <motion.circle
              cx="130"
              cy="40"
              r="11.5"
              stroke="#4F46E5"
              strokeWidth="1.2"
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: isHovered ? [1, 1.40, 1] : [1, 1.22, 1],
                      opacity: isHovered ? [0.75, 0.25, 0.75] : [0.55, 0.18, 0.55],
                    }
              }
              transition={{
                duration: isHovered ? 1.4 : 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ transformOrigin: '130px 40px' }}
            />

            {/* Central Node Base with Drop Shadow & Border */}
            <circle
              cx="130"
              cy="40"
              r="7.5"
              fill="rgba(255, 255, 255, 0.98)"
              stroke={isHovered ? 'rgba(99, 102, 241, 0.75)' : 'rgba(99, 102, 241, 0.55)'}
              strokeWidth="2"
              filter="url(#dnsHubShadow)"
              className="transition-colors duration-300"
            />

            {/* Central Authority Core Fill (#4F46E5) with White Center Dot */}
            <circle
              cx="130"
              cy="40"
              r="4.6"
              fill="#4F46E5"
            />
            <circle cx="130" cy="40" r="1.6" fill="#FFFFFF" opacity="0.95" />
          </svg>
        </div>
      </motion.div>

      {/* 4. Footer Architecture Status */}
      <div className="relative z-10 pt-3 mt-3 border-t border-slate-200 flex items-center justify-between text-[8px] sm:text-[8.5px] font-mono text-[#475569]">
        <span className="flex items-center gap-1.5 text-[#475569] font-bold">
          <Shield className="w-2.5 h-2.5 text-[#6366F1]" />
          <span>DNSSEC Supported</span>
        </span>
        <span className="text-[#64748B] font-semibold">Automated Renewal Guard</span>
      </div>
    </div>
  );
}
