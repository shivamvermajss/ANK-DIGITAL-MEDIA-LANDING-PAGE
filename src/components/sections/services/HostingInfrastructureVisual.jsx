import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Server, Cloud, Activity, CheckCircle2, Zap } from 'lucide-react';

/**
 * HostingInfrastructureVisual Component
 * 
 * High-contrast, sharp, and premium infrastructure micro-dashboard for Web Hosting.
 * Communicates: Active Digital Infrastructure, Cloud & Server Availability, SSL Security, Server Flow.
 * Features:
 * - Elevated floating container: bg-white/96, border-slate-400/30, layered indigo/slate shadows
 * - transform: translateZ(0) for anti-aliasing and artifact prevention
 * - Darkened high-contrast typography (#172033 primary, #475569 secondary, #64748B small labels)
 * - Distinct, elevated status metric cards (bg-[#F8FAFC]/95, border-[#94A3B8]/35)
 * - Server Flow Hero Visual: #818CF8 stroke (1.8px) with drop-shadow(0 0 5px rgba(99,102,241,0.55)) particle glow
 * - Center Host Server focal point with subtle pulse ring and distinct dual-shadow glow
 * - Hover acceleration and intensity increase on card hover
 * - Full prefers-reduced-motion support
 */
export function HostingInfrastructureVisual({ isHovered = false }) {
  const shouldReduceMotion = useReducedMotion();

  // Particle flow duration: ~2.8s resting, ~1.5s on card hover
  const flowDur = isHovered ? '1.5s' : '2.8s';

  return (
    <div
      className="relative rounded-2xl p-4 sm:p-5 select-none overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(148, 163, 184, 0.30)',
        boxShadow: isHovered
          ? '0 20px 42px -12px rgba(79, 70, 229, 0.24), 0 10px 24px -10px rgba(15, 23, 42, 0.10)'
          : '0 16px 35px -12px rgba(79, 70, 229, 0.18), 0 8px 20px -10px rgba(15, 23, 42, 0.08)',
        transform: 'translateZ(0)',
        transition: 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Background soft ambient radial glow behind animated visual */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at 50% 55%, rgba(99, 102, 241, 0.10), transparent 55%)',
          opacity: isHovered ? 1 : 0.75,
        }}
        aria-hidden="true"
      />

      {/* 1. Header Bar: Status & Mode */}
      <div className="relative z-10 flex items-center justify-between pb-3 mb-3.5 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full bg-emerald-500 transition-all duration-300 ${
              isHovered ? 'ring-4 ring-emerald-400/30 scale-110' : 'animate-pulse'
            }`}
          />
          <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#172033]">
            Infrastructure Status
          </span>
          <span className="text-[9px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300 shadow-2xs">
            Active
          </span>
        </div>

        <span className="text-[9.5px] font-mono text-[#64748B] font-semibold">
          Hosting Architecture
        </span>
      </div>

      {/* 2. 3 Strong High-Contrast Status Cards */}
      <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-2.5 mb-4">
        {/* Module 1: Availability */}
        <div
          className="p-2 sm:p-2.5 rounded-xl transition-all duration-200"
          style={{
            background: 'rgba(248, 250, 252, 0.95)',
            border: '1px solid rgba(148, 163, 184, 0.35)',
            boxShadow: '0 6px 16px -10px rgba(15, 23, 42, 0.15)',
          }}
        >
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 shadow-xs" />
            <span className="text-[9px] font-mono text-[#475569] truncate font-semibold">
              Availability
            </span>
          </div>
          <div className="text-xs sm:text-[13px] font-heading font-black text-[#172033] leading-tight">
            Stable
          </div>
          <span className="text-[8.5px] font-mono text-emerald-700 font-bold block mt-0.5">
            Continuous
          </span>
        </div>

        {/* Module 2: Network */}
        <div
          className="p-2 sm:p-2.5 rounded-xl transition-all duration-200"
          style={{
            background: 'rgba(248, 250, 252, 0.95)',
            border: '1px solid rgba(148, 163, 184, 0.35)',
            boxShadow: '0 6px 16px -10px rgba(15, 23, 42, 0.15)',
          }}
        >
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 shadow-xs" />
            <span className="text-[9px] font-mono text-[#475569] truncate font-semibold">
              Network
            </span>
          </div>
          <div className="text-xs sm:text-[13px] font-heading font-black text-[#172033] leading-tight">
            Connected
          </div>
          <span className="text-[8.5px] font-mono text-blue-700 font-bold block mt-0.5">
            Active Pipe
          </span>
        </div>

        {/* Module 3: Security */}
        <div
          className="p-2 sm:p-2.5 rounded-xl transition-all duration-200"
          style={{
            background: 'rgba(248, 250, 252, 0.95)',
            border: '1px solid rgba(148, 163, 184, 0.35)',
            boxShadow: '0 6px 16px -10px rgba(15, 23, 42, 0.15)',
          }}
        >
          <div className="flex items-center gap-1.5 mb-1">
            <CheckCircle2 className="w-2.5 h-2.5 text-[#4F46E5] shrink-0" />
            <span className="text-[9px] font-mono text-[#475569] truncate font-semibold">
              SSL Security
            </span>
          </div>
          <div className="text-xs sm:text-[13px] font-heading font-black text-[#172033] leading-tight">
            Protected
          </div>
          <span className="text-[8.5px] font-mono text-indigo-700 font-bold block mt-0.5">
            TLS Enabled
          </span>
        </div>
      </div>

      {/* 3. HERO VISUAL: Server & Cloud Request Flow Visual with Native SVG Data Particles */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: isHovered ? -1.5 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative z-10 p-3 sm:p-3.5 rounded-xl"
        style={{
          background: 'rgba(248, 250, 252, 0.95)',
          border: '1px solid rgba(148, 163, 184, 0.35)',
          boxShadow: '0 6px 16px -10px rgba(15, 23, 42, 0.15)',
        }}
      >
        <div className="flex items-center justify-between text-[9px] font-mono text-[#475569] mb-2 font-bold">
          <span>Request / Server Flow</span>
          <span className="text-indigo-600 font-bold flex items-center gap-1">
            <Zap className="w-2.5 h-2.5 text-[#4F46E5]" />
            <span>Active Routing</span>
          </span>
        </div>

        {/* Architectural Path SVG / Elements */}
        <div className="relative py-2 flex items-center justify-between px-1 sm:px-2">
          {/* Node 1: Cloud Edge */}
          <div className="flex flex-col items-center gap-1 z-10">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 shadow-2xs"
              style={{
                background: '#FFFFFF',
                border: isHovered ? '1.5px solid #6366F1' : '1px solid #CBD5E1',
                color: '#4F46E5',
              }}
            >
              <Cloud className="w-4 h-4 text-[#4F46E5]" />
            </div>
            <span className="text-[8.5px] font-mono text-[#172033] font-bold">Cloud Edge</span>
          </div>

          {/* Connection Line 1: Cloud Edge -> Host Server (SVG Beam with Particles) */}
          <div className="flex-1 mx-2 relative h-4 flex items-center">
            <svg
              className="w-full h-4 overflow-visible"
              viewBox="0 0 100 16"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <filter id="serverParticleGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="2.2" floodColor="rgba(99,102,241,0.65)" />
                </filter>
              </defs>

              {/* Guide path line: stroke #818CF8, stroke-width 1.8px */}
              <line
                x1="0"
                y1="8"
                x2="100"
                y2="8"
                stroke={isHovered ? '#6366F1' : '#818CF8'}
                strokeWidth="1.8"
                strokeDasharray="3.5 3"
                className="transition-colors duration-300"
              />

              {/* Animated data particle traveling from Cloud Edge to Host Server */}
              {!shouldReduceMotion && (
                <circle
                  r="2.5"
                  fill="#4F46E5"
                  filter="url(#serverParticleGlow)"
                  style={{
                    filter: 'drop-shadow(0 0 5px rgba(99,102,241,0.55))',
                  }}
                >
                  <animateMotion
                    path="M 0,8 L 100,8"
                    dur={flowDur}
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </svg>
          </div>

          {/* Node 2: Server Host (Primary Focal Point with Pulse & Glow) */}
          <div className="flex flex-col items-center gap-1 z-10 relative">
            {/* Subtle animated pulse ring around Host Server */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: isHovered ? [1, 1.15, 1] : [1, 1.08, 1],
                      opacity: [0.35, 0.15, 0.35],
                    }
              }
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute -inset-1 rounded-xl bg-indigo-500/15"
              aria-hidden="true"
            />

            <div
              className="w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-0.5 p-1 transition-all duration-300 relative z-10"
              style={{
                background: 'rgba(238, 242, 255, 0.98)',
                border: isHovered ? '1.5px solid #6366F1' : '1.5px solid rgba(99, 102, 241, 0.65)',
                boxShadow: isHovered
                  ? '0 0 0 4px rgba(99,102,241,0.12), 0 8px 22px -6px rgba(99,102,241,0.40)'
                  : '0 0 0 4px rgba(99,102,241,0.06), 0 8px 20px -8px rgba(99,102,241,0.30)',
              }}
            >
              {/* Mini Server Slots with LED lights */}
              <div className="w-full flex items-center justify-between px-1.5 py-0.5 rounded bg-white border border-indigo-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-xs" />
                <span className="w-3 h-[1.5px] bg-slate-400 rounded" />
              </div>
              <div className="w-full flex items-center justify-between px-1.5 py-0.5 rounded bg-white border border-indigo-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shadow-xs" />
                <span className="w-3 h-[1.5px] bg-slate-400 rounded" />
              </div>
            </div>
            <span className="text-[9px] font-mono text-indigo-900 font-extrabold tracking-tight">Host Server</span>
          </div>

          {/* Connection Line 2: Host Server -> Database (SVG Beam with Particles) */}
          <div className="flex-1 mx-2 relative h-4 flex items-center">
            <svg
              className="w-full h-4 overflow-visible"
              viewBox="0 0 100 16"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Guide path line: stroke #818CF8, stroke-width 1.8px */}
              <line
                x1="0"
                y1="8"
                x2="100"
                y2="8"
                stroke={isHovered ? '#6366F1' : '#818CF8'}
                strokeWidth="1.8"
                strokeDasharray="3.5 3"
                className="transition-colors duration-300"
              />

              {/* Animated data particle traveling from Host Server to Database */}
              {!shouldReduceMotion && (
                <circle
                  r="2.5"
                  fill="#4F46E5"
                  filter="url(#serverParticleGlow)"
                  style={{
                    filter: 'drop-shadow(0 0 5px rgba(99,102,241,0.55))',
                  }}
                >
                  <animateMotion
                    path="M 0,8 L 100,8"
                    dur={flowDur}
                    begin={isHovered ? '0.7s' : '1.4s'}
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </svg>
          </div>

          {/* Node 3: Database & Storage */}
          <div className="flex flex-col items-center gap-1 z-10">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 shadow-2xs"
              style={{
                background: '#FFFFFF',
                border: isHovered ? '1.5px solid #6366F1' : '1px solid #CBD5E1',
                color: '#4F46E5',
              }}
            >
              <Server className="w-4 h-4 text-[#4F46E5]" />
            </div>
            <span className="text-[8.5px] font-mono text-[#172033] font-bold">Database</span>
          </div>
        </div>
      </motion.div>

      {/* 4. Footer Architecture Status */}
      <div className="relative z-10 pt-3 mt-3 border-t border-[#CBD5E1] flex items-center justify-between text-[8px] sm:text-[8.5px] font-mono text-[#64748B]">
        <span className="flex items-center gap-1 text-[#172033] font-bold">
          <Activity className="w-2.5 h-2.5 text-[#4F46E5]" />
          <span>Multi-Core Compute</span>
        </span>
        <span className="text-[#475569] font-semibold">Automated Provisioning</span>
      </div>
    </div>
  );
}
