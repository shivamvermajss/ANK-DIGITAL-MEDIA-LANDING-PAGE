import React, { useContext } from 'react';
import { useReducedMotion } from 'framer-motion';
import {
  Laptop,
  Cpu,
  ShieldCheck,
  Layers,
  GitBranch,
  Globe,
  Database,
} from 'lucide-react';
import { CardHoverContext } from './DevelopmentCapabilities';

/**
 * SystemArchitectureVisual Component
 * 
 * Redesigned light 3D system architecture / technical blueprint visual.
 * Features:
 * - Frosted-glass container with 1px border and layered shadow separation
 * - Technical blueprint background with subtle coordinate grid, crosshairs, and corner brackets
 * - Flow: CLIENT -> API GATEWAY -> SERVICES / LOGIC -> DATABASE with AUTH & INTEGRATION
 * - Animated data-flow particles traveling along the actual SVG connection paths
 * - Hover acceleration: faster particle speed, brighter lines, and strengthened node glow on card hover
 * - Zero fake claims or percentages
 * - Respects prefers-reduced-motion with graceful fallback
 */
export function SystemArchitectureVisual({ isCardHovered: propHover }) {
  const shouldReduceMotion = useReducedMotion();
  const contextHover = useContext(CardHoverContext);
  const isCardHovered = propHover !== undefined ? propHover : contextHover;

  // Particle speed: 4.6s default (slow & elegant), 1.8s on card hover (live & responsive)
  const particleDur = isCardHovered ? '1.8s' : '4.6s';
  const particleOpacity = isCardHovered ? 0.95 : 0.65;
  const lineStroke = isCardHovered ? 'rgba(99, 102, 241, 0.38)' : 'rgba(99, 102, 241, 0.20)';

  return (
    <div
      className="my-4 sm:my-5 rounded-2xl relative overflow-hidden p-3 sm:p-4 select-none transition-all duration-300"
      style={{
        background: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(226, 232, 240, 0.8)',
        boxShadow: isCardHovered
          ? '0 16px 36px -10px rgba(99, 102, 241, 0.16), 0 4px 12px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
          : '0 12px 30px -10px rgba(99, 102, 241, 0.12), 0 4px 12px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      }}
    >
      {/* 1. Ambient Background Lighting */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-full transition-all duration-500 opacity-60 group-hover:opacity-95 group-hover:scale-105"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.14), rgba(139, 92, 246, 0.07) 40%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* 2. Technical Blueprint Grid & Coordinate Dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(99, 102, 241, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.08) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />

      {/* Technical Blueprint Corner Alignment Brackets */}
      <span className="pointer-events-none absolute top-2 left-2 text-[9px] font-mono text-indigo-300/60 select-none">
        ┌
      </span>
      <span className="pointer-events-none absolute top-2 right-2 text-[9px] font-mono text-indigo-300/60 select-none">
        ┐
      </span>
      <span className="pointer-events-none absolute bottom-2 left-2 text-[9px] font-mono text-indigo-300/60 select-none">
        └
      </span>
      <span className="pointer-events-none absolute bottom-2 right-2 text-[9px] font-mono text-indigo-300/60 select-none">
        ┘
      </span>

      {/* Blueprint System Watermark */}
      <div className="absolute top-2.5 right-3.5 flex items-center gap-1.5 text-[8px] font-mono tracking-wider text-slate-400/80">
        <span className={`w-1 h-1 rounded-full transition-colors ${isCardHovered ? 'bg-indigo-600' : 'bg-indigo-400'}`} />
        <span>SYS.ARCH // BLUEPRINT</span>
      </div>

      <div className="absolute bottom-2.5 left-3.5 hidden sm:flex items-center gap-2 text-[7.5px] font-mono text-slate-400/70">
        <span>TOPOLOGY: DECOUPLED</span>
        <span>•</span>
        <span>BUS: EVENT-DRIVEN</span>
      </div>

      {/* 3. 3D Architectural Stage */}
      <div
        className="relative w-full h-[180px] sm:h-[195px] flex items-center justify-center"
        style={{
          perspective: shouldReduceMotion ? 'none' : '1100px',
        }}
      >
        {/* Central 3D Blueprint Canvas */}
        <div
          className="relative w-full h-full transition-all duration-300 ease-out"
          style={{
            transform: shouldReduceMotion
              ? 'none'
              : isCardHovered
              ? 'translateY(-1px) rotateX(6deg) rotateY(3deg)'
              : 'translateY(0px) rotateX(8deg) rotateY(4deg)',
            transformStyle: shouldReduceMotion ? 'flat' : 'preserve-3d',
          }}
        >
          {/* ============================================================== */}
          {/* SVG CONNECTION PATH CIRCUITRY & DATA FLOW PARTICLES           */}
          {/* ============================================================== */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="blueprintBeam" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={isCardHovered ? 0.38 : 0.20} />
                <stop offset="50%" stopColor="#6366F1" stopOpacity={isCardHovered ? 0.42 : 0.24} />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity={isCardHovered ? 0.38 : 0.20} />
              </linearGradient>

              <linearGradient id="horizontalBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#818CF8" stopOpacity={isCardHovered ? 0.30 : 0.16} />
                <stop offset="50%" stopColor="#6366F1" stopOpacity={isCardHovered ? 0.40 : 0.22} />
                <stop offset="100%" stopColor="#818CF8" stopOpacity={isCardHovered ? 0.30 : 0.16} />
              </linearGradient>

              {/* Particle Glow Filter for soft halo */}
              <filter id="particleGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="0.75" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Line Glow Filter */}
              <filter id="subtleLineGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="0.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Glowing underlay paths */}
            <g
              stroke="#6366F1"
              strokeWidth="2.5"
              fill="none"
              opacity={isCardHovered ? 0.18 : 0.08}
              className="transition-opacity duration-300"
            >
              {/* Client -> API Gateway */}
              <line x1="50" y1="18" x2="50" y2="35" vectorEffect="non-scaling-stroke" />
              {/* Auth -> API Gateway */}
              <line x1="24" y1="42" x2="36" y2="42" vectorEffect="non-scaling-stroke" />
              {/* API Gateway -> Integration */}
              <line x1="64" y1="42" x2="76" y2="42" vectorEffect="non-scaling-stroke" />
              {/* API Gateway -> Services */}
              <path d="M 50,48 C 50,56 28,56 28,62" vectorEffect="non-scaling-stroke" />
              {/* API Gateway -> Logic */}
              <path d="M 50,48 C 50,56 72,56 72,62" vectorEffect="non-scaling-stroke" />
              {/* Services -> Logic */}
              <line x1="36" y1="68" x2="64" y2="68" vectorEffect="non-scaling-stroke" />
              {/* Services -> Database */}
              <path d="M 28,74 C 28,82 50,82 50,86" vectorEffect="non-scaling-stroke" />
              {/* Logic -> Database */}
              <path d="M 72,74 C 72,82 50,82 50,86" vectorEffect="non-scaling-stroke" />
            </g>

            {/* Crisp primary connection lines */}
            <g
              stroke={lineStroke}
              strokeWidth="1.2"
              fill="none"
              filter="url(#subtleLineGlow)"
              className="transition-colors duration-300"
            >
              {/* 1. Client down to API Gateway */}
              <line x1="50" y1="18" x2="50" y2="35" vectorEffect="non-scaling-stroke" />

              {/* 2. Lateral: Auth to API Gateway */}
              <line
                x1="24"
                y1="42"
                x2="36"
                y2="42"
                strokeDasharray="2 2"
                vectorEffect="non-scaling-stroke"
              />

              {/* 3. Lateral: API Gateway to Integration */}
              <line
                x1="64"
                y1="42"
                x2="76"
                y2="42"
                strokeDasharray="2 2"
                vectorEffect="non-scaling-stroke"
              />

              {/* 4. API Gateway down-branch to Services */}
              <path d="M 50,48 C 50,56 28,56 28,62" vectorEffect="non-scaling-stroke" />

              {/* 5. API Gateway down-branch to Logic */}
              <path d="M 50,48 C 50,56 72,56 72,62" vectorEffect="non-scaling-stroke" />

              {/* 6. Lateral: Services to Logic */}
              <line
                x1="36"
                y1="68"
                x2="64"
                y2="68"
                strokeDasharray="2 2"
                vectorEffect="non-scaling-stroke"
              />

              {/* 7. Services converge to Database */}
              <path d="M 28,74 C 28,82 50,82 50,86" vectorEffect="non-scaling-stroke" />

              {/* 8. Logic converge to Database */}
              <path d="M 72,74 C 72,82 50,82 50,86" vectorEffect="non-scaling-stroke" />
            </g>

            {/* ============================================================== */}
            {/* ANIMATED SVG DATA FLOW PARTICLES                               */}
            {/* ============================================================== */}
            {!shouldReduceMotion && (
              <g key={isCardHovered ? 'hover-active' : 'default-passive'}>
                {/* Particle 1: Client -> API Gateway (Main Ingress) */}
                <circle r="1.6" fill="#4F46E5" filter="url(#particleGlow)" opacity={particleOpacity}>
                  <animateMotion
                    path="M 50,18 L 50,35"
                    dur={particleDur}
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Soft trailing halo */}
                <circle r="2.8" fill="#6366F1" filter="url(#particleGlow)" opacity={particleOpacity * 0.35}>
                  <animateMotion
                    path="M 50,18 L 50,35"
                    dur={particleDur}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Particle 2: Auth -> API Gateway */}
                <circle r="1.4" fill="#3B82F6" filter="url(#particleGlow)" opacity={particleOpacity * 0.9}>
                  <animateMotion
                    path="M 24,42 L 36,42"
                    dur={particleDur}
                    begin="0.25s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Particle 3: API Gateway -> Integration */}
                <circle r="1.4" fill="#8B5CF6" filter="url(#particleGlow)" opacity={particleOpacity * 0.9}>
                  <animateMotion
                    path="M 64,42 L 76,42"
                    dur={particleDur}
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Particle 4: API Gateway -> Services */}
                <circle r="1.6" fill="#4F46E5" filter="url(#particleGlow)" opacity={particleOpacity}>
                  <animateMotion
                    path="M 50,48 C 50,56 28,56 28,62"
                    dur={particleDur}
                    begin="0.3s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Particle 5: API Gateway -> Logic */}
                <circle r="1.6" fill="#6366F1" filter="url(#particleGlow)" opacity={particleOpacity}>
                  <animateMotion
                    path="M 50,48 C 50,56 72,56 72,62"
                    dur={particleDur}
                    begin="0.65s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Particle 6: Services -> Logic (Horizontal sync) */}
                <circle r="1.3" fill="#8B5CF6" filter="url(#particleGlow)" opacity={particleOpacity * 0.85}>
                  <animateMotion
                    path="M 36,68 L 64,68"
                    dur={particleDur}
                    begin="0.85s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Particle 7: Services -> Database */}
                <circle r="1.6" fill="#4F46E5" filter="url(#particleGlow)" opacity={particleOpacity}>
                  <animateMotion
                    path="M 28,74 C 28,82 50,82 50,86"
                    dur={particleDur}
                    begin="0.95s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Particle 8: Logic -> Database */}
                <circle r="1.6" fill="#6366F1" filter="url(#particleGlow)" opacity={particleOpacity}>
                  <animateMotion
                    path="M 72,74 C 72,82 50,82 50,86"
                    dur={particleDur}
                    begin="1.2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            )}

            {/* Circuit Terminal Junction Points */}
            <g fill="#4F46E5" stroke="#FFFFFF" strokeWidth="1">
              <circle cx="50" cy="18" r="2" />
              <circle cx="50" cy="35" r="2" />
              <circle cx="50" cy="48" r="2.2" />
              <circle cx="28" cy="62" r="2" />
              <circle cx="72" cy="62" r="2" />
              <circle cx="28" cy="74" r="2" />
              <circle cx="72" cy="74" r="2" />
              <circle cx="50" cy="86" r="2.2" />
            </g>
          </svg>

          {/* ============================================================== */}
          {/* TIER 1: CLIENT NODE                                            */}
          {/* ============================================================== */}
          <div
            className="absolute top-[4px] left-1/2 -translate-x-1/2 z-10 transition-all duration-300"
            style={{
              transform: shouldReduceMotion
                ? 'translateX(-50%)'
                : isCardHovered
                ? 'translateX(-50%) translateY(-1px) translateZ(12px)'
                : 'translateX(-50%) translateZ(12px)',
            }}
          >
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border transition-all duration-200 ${
              isCardHovered
                ? 'border-indigo-300/80 shadow-[0_6px_16px_-2px_rgba(99,102,241,0.18)]'
                : 'border-slate-200/90 shadow-[0_4px_12px_-2px_rgba(99,102,241,0.10)]'
            }`}>
              <div className="w-4 h-4 rounded-md bg-blue-50 border border-blue-200/70 flex items-center justify-center text-blue-600">
                <Laptop className="w-2.5 h-2.5" />
              </div>
              <div className="leading-tight">
                <span className="text-[8px] font-mono font-bold text-slate-800 block">
                  CLIENT
                </span>
                <span className="text-[6.5px] font-mono text-slate-400 block -mt-0.5">
                  Web &amp; Mobile
                </span>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* TIER 2: API GATEWAY (Center), AUTH (Left), INTEGRATION (Right) */}
          {/* ============================================================== */}
          {/* Left Supporting: AUTH */}
          <div
            className="absolute top-[48px] left-[3%] sm:left-[6%] z-10 transition-all duration-300"
            style={{
              transform: shouldReduceMotion
                ? 'none'
                : isCardHovered
                ? 'translateX(-1px) translateZ(14px)'
                : 'translateZ(14px)',
            }}
          >
            <div className={`flex items-center gap-1 px-2 py-1 rounded-lg bg-white/92 backdrop-blur-md border transition-all duration-200 ${
              isCardHovered
                ? 'border-indigo-300/70 shadow-[0_6px_14px_-2px_rgba(99,102,241,0.16)]'
                : 'border-slate-200/80 shadow-[0_4px_10px_-2px_rgba(99,102,241,0.08)]'
            }`}>
              <div className="w-3.5 h-3.5 rounded bg-indigo-50 border border-indigo-200/60 flex items-center justify-center text-indigo-600">
                <ShieldCheck className="w-2.5 h-2.5" />
              </div>
              <div className="leading-tight">
                <span className="text-[7.5px] font-mono font-bold text-slate-700 block">
                  AUTH
                </span>
                <span className="text-[6px] font-mono text-slate-400 block -mt-0.5">
                  Security
                </span>
              </div>
            </div>
          </div>

          {/* Center Key Module: API GATEWAY (Elevated Forward) */}
          <div
            className="absolute top-[46px] left-1/2 -translate-x-1/2 z-20 transition-all duration-300"
            style={{
              transform: shouldReduceMotion
                ? 'translateX(-50%)'
                : isCardHovered
                ? 'translateX(-50%) scale(1.03) translateZ(26px)'
                : 'translateX(-50%) translateZ(26px)',
            }}
          >
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-white via-white to-indigo-50/70 backdrop-blur-md border transition-all duration-200 ${
              isCardHovered
                ? 'border-indigo-400 shadow-[0_10px_24px_-4px_rgba(99,102,241,0.26),0_2px_8px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,1)]'
                : 'border-indigo-300/80 shadow-[0_8px_20px_-4px_rgba(99,102,241,0.20),0_2px_6px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,1)]'
            }`}>
              <div className="w-4 h-4 rounded-md bg-indigo-600 flex items-center justify-center text-white shadow-2xs">
                <Cpu className="w-2.5 h-2.5" />
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-1">
                  <span className="text-[8.5px] font-mono font-black text-indigo-950 block">
                    API GATEWAY
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full bg-emerald-500 ${isCardHovered ? 'animate-ping' : 'animate-pulse'}`} />
                </div>
                <span className="text-[6.5px] font-mono text-indigo-600/80 block -mt-0.5">
                  Edge Routing &amp; Proxy
                </span>
              </div>
            </div>
          </div>

          {/* Right Supporting: INTEGRATION */}
          <div
            className="absolute top-[48px] right-[3%] sm:right-[6%] z-10 transition-all duration-300"
            style={{
              transform: shouldReduceMotion
                ? 'none'
                : isCardHovered
                ? 'translateX(1px) translateZ(14px)'
                : 'translateZ(14px)',
            }}
          >
            <div className={`flex items-center gap-1 px-2 py-1 rounded-lg bg-white/92 backdrop-blur-md border transition-all duration-200 ${
              isCardHovered
                ? 'border-purple-300/70 shadow-[0_6px_14px_-2px_rgba(139,92,246,0.16)]'
                : 'border-slate-200/80 shadow-[0_4px_10px_-2px_rgba(99,102,241,0.08)]'
            }`}>
              <div className="w-3.5 h-3.5 rounded bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-600">
                <Globe className="w-2.5 h-2.5" />
              </div>
              <div className="leading-tight">
                <span className="text-[7.5px] font-mono font-bold text-slate-700 block">
                  INTEGRATION
                </span>
                <span className="text-[6px] font-mono text-slate-400 block -mt-0.5">
                  Webhooks
                </span>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* TIER 3: SERVICES (Left-Center) & LOGIC (Right-Center)          */}
          {/* ============================================================== */}
          {/* Left-Center: SERVICES */}
          <div
            className="absolute top-[96px] left-[28%] -translate-x-1/2 z-10 transition-all duration-300"
            style={{
              transform: shouldReduceMotion
                ? 'translateX(-50%)'
                : isCardHovered
                ? 'translateX(-50%) translateY(-1px) translateZ(10px)'
                : 'translateX(-50%) translateZ(10px)',
            }}
          >
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border transition-all duration-200 ${
              isCardHovered
                ? 'border-indigo-300/80 shadow-[0_6px_16px_-2px_rgba(99,102,241,0.18)]'
                : 'border-slate-200/90 shadow-[0_4px_12px_-2px_rgba(99,102,241,0.10)]'
            }`}>
              <div className="w-4 h-4 rounded-md bg-indigo-50 border border-indigo-200/70 flex items-center justify-center text-indigo-600">
                <Layers className="w-2.5 h-2.5" />
              </div>
              <div className="leading-tight">
                <span className="text-[8px] font-mono font-bold text-slate-800 block">
                  SERVICES
                </span>
                <span className="text-[6.5px] font-mono text-slate-400 block -mt-0.5">
                  Micro-Logic
                </span>
              </div>
            </div>
          </div>

          {/* Right-Center: BUSINESS LOGIC */}
          <div
            className="absolute top-[96px] left-[72%] -translate-x-1/2 z-10 transition-all duration-300"
            style={{
              transform: shouldReduceMotion
                ? 'translateX(-50%)'
                : isCardHovered
                ? 'translateX(-50%) translateY(-1px) translateZ(10px)'
                : 'translateX(-50%) translateZ(10px)',
            }}
          >
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border transition-all duration-200 ${
              isCardHovered
                ? 'border-violet-300/80 shadow-[0_6px_16px_-2px_rgba(139,92,246,0.18)]'
                : 'border-slate-200/90 shadow-[0_4px_12px_-2px_rgba(99,102,241,0.10)]'
            }`}>
              <div className="w-4 h-4 rounded-md bg-violet-50 border border-violet-200/70 flex items-center justify-center text-violet-600">
                <GitBranch className="w-2.5 h-2.5" />
              </div>
              <div className="leading-tight">
                <span className="text-[8px] font-mono font-bold text-slate-800 block">
                  LOGIC
                </span>
                <span className="text-[6.5px] font-mono text-slate-400 block -mt-0.5">
                  Event Bus
                </span>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* TIER 4: DATABASE (Center Bottom)                              */}
          {/* ============================================================== */}
          <div
            className="absolute bottom-[6px] left-1/2 -translate-x-1/2 z-10 transition-all duration-300"
            style={{
              transform: shouldReduceMotion
                ? 'translateX(-50%)'
                : isCardHovered
                ? 'translateX(-50%) translateY(1px) translateZ(4px)'
                : 'translateX(-50%) translateZ(4px)',
            }}
          >
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border transition-all duration-200 ${
              isCardHovered
                ? 'border-blue-300/80 shadow-[0_8px_18px_-3px_rgba(59,130,246,0.18)]'
                : 'border-slate-200/90 shadow-[0_6px_16px_-3px_rgba(99,102,241,0.12)]'
            }`}>
              <div className="w-4 h-4 rounded-md bg-blue-50 border border-blue-200/70 flex items-center justify-center text-blue-600">
                <Database className="w-2.5 h-2.5" />
              </div>
              <div className="leading-tight">
                <span className="text-[8px] font-mono font-bold text-slate-800 block">
                  DATABASE
                </span>
                <span className="text-[6.5px] font-mono text-slate-400 block -mt-0.5">
                  Distributed Cluster
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
