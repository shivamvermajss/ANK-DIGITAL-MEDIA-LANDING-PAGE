import React, { useState } from 'react';
import { motion, useReducedMotion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import {
  Layout,
  Server,
  Database,
  GitBranch,
  Cpu,
  Zap,
} from 'lucide-react';
import { TechLogoIcon } from './TechLogoIcon';
import { DOMAINS_DATA } from '../../../data/technologies';

const NODE_ICONS = {
  frontend: Layout,
  backend: Server,
  database: Database,
  api: GitBranch,
  integration: GitBranch,
  digital: Cpu,
};

// Explicit mapping from Domain ID to Ecosystem Canvas Node (Part 10)
const NODE_BY_DOMAIN = {
  frontend: 'frontend',
  backend: 'backend',
  database: 'database',
  api: 'integration',
  integration: 'integration',
  digital: 'digital',
};

// Reverse mapping when a diagram node is clicked
const DOMAIN_BY_NODE = {
  frontend: 'frontend',
  backend: 'backend',
  database: 'database',
  integration: 'api',
  api: 'api',
  digital: 'digital',
};

// Exact coordinates on a 540 x 460 SVG canvas
// Central Hub is positioned at (270, 230)
const CENTER_POINT = { x: 270, y: 230 };

const NODE_CONFIG = {
  frontend: {
    cx: 270,
    cy: 55,
    label: 'FRONTEND',
    fullPath: 'M 270,230 L 270,55',
  },
  backend: {
    cx: 440,
    cy: 135,
    label: 'BACKEND',
    fullPath: 'M 270,230 L 440,135',
  },
  database: {
    cx: 415,
    cy: 375,
    label: 'DATABASE',
    fullPath: 'M 270,230 L 415,375',
  },
  api: {
    cx: 125,
    cy: 375,
    label: 'INTEGRATION',
    fullPath: 'M 270,230 L 125,375',
  },
  integration: {
    cx: 125,
    cy: 375,
    label: 'INTEGRATION',
    fullPath: 'M 270,230 L 125,375',
  },
  digital: {
    cx: 95,
    cy: 135,
    label: 'DIGITAL',
    fullPath: 'M 270,230 L 95,135',
  },
};

/**
 * TechnologyEcosystem Component (Parts 2 - 15)
 * 
 * Upgraded interactive architecture system:
 * - Part 2: Active node aura (scale 1.15, 0 0 35px glow, dimmed inactive nodes)
 * - Part 3: Active concentric ripple rings (scale 0.7 -> 1.6, opacity 0.5 -> 0)
 * - Part 4: Animated SVG energy lasers with flowing particles from DIGITAL EXPERIENCE to active node
 * - Part 5: Active node tech badges revealed inside glossy node
 * - Part 6: Glossy frosted node styling with 135deg internal highlight
 * - Part 7: Central DIGITAL EXPERIENCE core with depth and breathing glow
 * - Part 8: Canvas 3D tilt with perspective: 1200px, rotateX/Y: -4deg -> +4deg
 * - Part 10: Explicit NODE_BY_DOMAIN synchronization
 * - Parts 13-15: Performance, accessibility, responsive, and reduced-motion handling
 */
export function TechnologyEcosystem({
  categories = [],
  selectedDomain = 'frontend',
  onSelectDomain = () => {},
}) {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredNodeId, setHoveredNodeId] = useState(null);

  // Part 8 & 13: Canvas 3D Tilt via MotionValues without React state re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Map mouse position to approximately rotateX: -4deg -> +4deg, rotateY: -4deg -> +4deg
  const rawRotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rawRotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);

  const springConfig = { stiffness: 120, damping: 20 };
  const rotateX = useSpring(rawRotateX, springConfig);
  const rotateY = useSpring(rawRotateY, springConfig);

  const handleCanvasMouseMove = (e) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleCanvasMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Determine active target node using explicit mapping (Part 10)
  const activeNodeKey = NODE_BY_DOMAIN[selectedDomain] || selectedDomain;

  return (
    <div
      onMouseMove={handleCanvasMouseMove}
      onMouseLeave={handleCanvasMouseLeave}
      style={{ perspective: 1200 }}
      className="rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.12),0_8px_20px_-6px_rgba(59,130,246,0.06)] p-5 sm:p-7 lg:p-8 relative overflow-hidden flex flex-col items-center justify-between select-none"
    >
      {/* Background Soft Atmospheric Radial Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(59,130,246,0.15) 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* 1. Header Bar */}
      <div className="w-full flex items-center justify-between pb-3.5 mb-2 border-b border-slate-200/80 text-xs font-mono relative z-10">
        <div className="flex items-center gap-2 text-slate-800">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="font-bold">Ecosystem Architecture Diagram</span>
        </div>
        <span className="text-[10px] text-slate-400 font-semibold hidden sm:inline">
          Connected Architecture • 2026 Engine
        </span>
      </div>

      {/* 2. Interactive 3D Perspective Canvas Container (Part 8) */}
      <motion.div
        style={
          shouldReduceMotion
            ? {}
            : {
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }
        }
        className="relative w-full max-w-[540px] aspect-[540/460] mx-auto z-10 flex items-center justify-center"
      >
        {/* SVG Drawing Layer: Concentric Rings, Connecting Lasers & Particles (Part 4) */}
        <svg
          viewBox="0 0 540 460"
          className="w-full h-full absolute inset-0 overflow-visible pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            {/* Active Path Indigo -> Violet Gradient (Part 4) */}
            <linearGradient id="activeLaserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="45%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>

            {/* Inactive Connection Gradient */}
            <linearGradient id="idleNodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.18" />
            </linearGradient>

            {/* Active Glow Filter (Part 4) */}
            <filter id="pathGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Concentric Architecture Orbit Rings */}
          <g transform={`translate(${CENTER_POINT.x}, ${CENTER_POINT.y})`}>
            {/* Inner Ring */}
            <circle
              r="115"
              fill="none"
              stroke="rgba(99, 102, 241, 0.14)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
            {/* Middle Ring */}
            <circle
              r="150"
              fill="none"
              stroke="rgba(139, 92, 246, 0.10)"
              strokeWidth="1"
              strokeDasharray="3 5"
            />
            {/* Outer Ring with subtle rotation */}
            <motion.circle
              r="185"
              fill="none"
              stroke="rgba(99, 102, 241, 0.12)"
              strokeWidth="1.2"
              strokeDasharray="6 8"
              animate={shouldReduceMotion ? {} : { rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            />
          </g>

          {/* Part 4: SVG Connection Paths & Animated Data Particles */}
          {categories.map((cat) => {
            const cfg = NODE_CONFIG[cat?.id];
            if (!cfg) return null;

            // Check if active according to explicit mapping
            const isActive =
              cat.id === selectedDomain ||
              cat.id === activeNodeKey ||
              (selectedDomain === 'api' && cat.id === 'integration') ||
              (selectedDomain === 'integration' && cat.id === 'api');

            return (
              <g key={`conn-${cat.id}`}>
                {/* Glow Underlay on Active Path (Part 4) */}
                {isActive && (
                  <path
                    d={cfg.fullPath}
                    stroke="rgba(99, 102, 241, 0.35)"
                    strokeWidth="6"
                    fill="none"
                    filter="url(#pathGlow)"
                  />
                )}

                {/* Primary Connection Line */}
                <path
                  d={cfg.fullPath}
                  stroke={isActive ? 'url(#activeLaserGrad)' : 'rgba(99, 102, 241, 0.16)'}
                  strokeWidth={isActive ? 2.4 : 1.2}
                  strokeDasharray={isActive ? 'none' : '4 4'}
                  fill="none"
                  className="transition-all duration-300"
                />

                {/* Animated Particles flowing along the ACTIVE path ONLY (Part 4) */}
                {isActive && !shouldReduceMotion && (
                  <g>
                    {/* Primary Particle */}
                    <circle r="4.5" fill="#38BDF8" opacity="0.4" filter="url(#pathGlow)">
                      <animateMotion
                        path={cfg.fullPath}
                        dur="2.2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle r="3" fill="#6366F1">
                      <animateMotion
                        path={cfg.fullPath}
                        dur="2.2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle r="1.5" fill="#FFFFFF">
                      <animateMotion
                        path={cfg.fullPath}
                        dur="2.2s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    {/* Secondary Staggered Particle */}
                    <circle r="4.5" fill="#818CF8" opacity="0.35" filter="url(#pathGlow)">
                      <animateMotion
                        path={cfg.fullPath}
                        dur="2.2s"
                        begin="1.1s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle r="3" fill="#8B5CF6">
                      <animateMotion
                        path={cfg.fullPath}
                        dur="2.2s"
                        begin="1.1s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle r="1.5" fill="#FFFFFF">
                      <animateMotion
                        path={cfg.fullPath}
                        dur="2.2s"
                        begin="1.1s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* Part 7: Central DIGITAL EXPERIENCE Node */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          className="z-20 w-44 sm:w-48 text-center pointer-events-none select-none"
        >
          {/* Subtle Breathing Glow Behind Core Node (Part 7) */}
          <motion.div
            animate={
              shouldReduceMotion
                ? { opacity: 0.85, scale: 1 }
                : {
                    scale: [1, 1.02, 1],
                    opacity: [0.8, 1, 0.8],
                  }
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="pointer-events-none absolute -inset-3 rounded-3xl blur-xl -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(99,102,241,0.22) 0%, rgba(59,130,246,0.12) 50%, transparent 75%)',
            }}
          />

          <div className="rounded-2xl bg-white/95 backdrop-blur-2xl border border-indigo-100 shadow-2xl shadow-indigo-500/10 p-3.5">
            {/* Top Window Accent Header */}
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100 text-[9px] font-mono text-slate-400">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[8.5px] font-mono text-indigo-600 font-bold uppercase tracking-wider">
                Core Engine
              </span>
            </div>

            {/* Central Title */}
            <h5 className="font-heading font-black text-xs sm:text-[13px] text-slate-900 tracking-tight leading-tight">
              DIGITAL EXPERIENCE
            </h5>
            <span className="text-[9px] font-mono text-slate-500 font-medium block my-1">
              WEB • APP • API
            </span>

            {/* Status Indicator */}
            <div className="mt-1.5 pt-1.5 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[9px] font-mono text-emerald-600 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>● Connected</span>
            </div>
          </div>
        </div>

        {/* 5 Peripheral Technology Nodes (Parts 2, 3, 5, 6 & 10) */}
        {categories.map((cat) => {
          const cfg = NODE_CONFIG[cat?.id];
          if (!cfg) return null;

          // Check if active according to explicit mapping
          const isActive =
            cat.id === selectedDomain ||
            cat.id === activeNodeKey ||
            (selectedDomain === 'api' && cat.id === 'integration') ||
            (selectedDomain === 'integration' && cat.id === 'api');

          const isHovered = cat.id === hoveredNodeId;
          const IconComponent = NODE_ICONS[cat.id] || Layout;

          const leftPercent = `${(cfg.cx / 540) * 100}%`;
          const topPercent = `${(cfg.cy / 460) * 100}%`;

          // Resolve domain technologies safely for badges (Part 5)
          const domainData = DOMAINS_DATA[cat.id] || DOMAINS_DATA.frontend;
          const technologies = domainData?.technologies ?? cat.technologies ?? cat.items ?? [];

          return (
            <div
              key={cat.id}
              className={`absolute transition-all duration-300 ${isActive ? 'z-40' : 'z-30'}`}
              style={{
                left: leftPercent,
                top: topPercent,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'auto',
              }}
            >
              {/* Part 3: Active Ripple / Orbit Concentric Rings */}
              {!shouldReduceMotion && isActive && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10" aria-hidden="true">
                  <motion.div
                    className="absolute inset-[-8px] rounded-[24px] border border-indigo-400/50 pointer-events-none"
                    initial={{ scale: 0.7, opacity: 0.5 }}
                    animate={{ scale: 1.6, opacity: 0 }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />
                  <motion.div
                    className="absolute inset-[-8px] rounded-[24px] border border-violet-400/40 pointer-events-none"
                    initial={{ scale: 0.7, opacity: 0.4 }}
                    animate={{ scale: 1.6, opacity: 0 }}
                    transition={{
                      duration: 2.2,
                      delay: 0.7,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />
                </div>
              )}

              {/* Part 2, 5 & 6: Glossy Frosted Node with Aura & Badges */}
              <motion.button
                type="button"
                id={`tech-node-${cat.id}`}
                onClick={() => {
                  const targetDomainId = DOMAIN_BY_NODE[cat.id] || cat.id;
                  onSelectDomain(targetDomainId);
                }}
                onMouseEnter={() => setHoveredNodeId(cat.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                animate={{
                  scale: shouldReduceMotion ? 1 : isActive ? [1.08, 1.15, 1.08] : isHovered ? 1.04 : 1,
                  opacity: isActive ? 1 : isHovered ? 0.95 : 0.65,
                }}
                transition={
                  isActive && !shouldReduceMotion
                    ? {
                        duration: 2.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                    : {
                        type: 'spring',
                        stiffness: 220,
                        damping: 18,
                      }
                }
                style={{
                  transformOrigin: 'center',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(238, 242, 255, 0.85))'
                    : undefined,
                  boxShadow: isActive
                    ? '0 0 35px rgba(99, 102, 241, 0.35), 0 20px 45px -12px rgba(99, 102, 241, 0.20)'
                    : undefined,
                }}
                className={`text-left cursor-pointer outline-none select-none transition-shadow duration-300 ${
                  isActive
                    ? 'p-2.5 sm:p-3 rounded-[20px] bg-white/95 backdrop-blur-2xl border-2 border-indigo-400/70 shadow-xl shadow-indigo-500/20'
                    : 'px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-white/90 backdrop-blur-xl text-slate-800 border border-slate-200/80 shadow-lg hover:bg-white hover:border-indigo-300'
                }`}
              >
                {isActive ? (
                  /* Part 5 & 6: Active Glass Node with Revealed Tech Badges */
                  <div className="flex flex-col min-w-[155px] sm:min-w-[170px]">
                    {/* Top Row: Icon, Domain Meta, Status Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                          <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div>
                          <span className="text-[8px] font-mono text-indigo-600 font-bold uppercase tracking-wider block leading-tight">
                            {cat?.number ?? '01'} • DOMAIN
                          </span>
                          <span className="text-xs font-heading font-black text-slate-900 tracking-tight leading-tight block">
                            {cfg.label}
                          </span>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[7.5px] font-mono font-bold uppercase tracking-wide bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-2xs">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                        Active
                      </span>
                    </div>

                    {/* Part 5: Active Node Tech Badges */}
                    <motion.div
                      initial={{ opacity: 0, y: 3 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: 0.05 }}
                      className="flex items-center gap-1 mt-2 pt-1.5 border-t border-indigo-100/70"
                    >
                      {technologies.slice(0, 3).map((item, idx) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.05 + idx * 0.04 }}
                          className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-indigo-50/90 border border-indigo-200/80 text-[8px] font-mono text-indigo-700 shadow-xs hover:bg-indigo-100/80 transition-colors"
                          title={item.name}
                        >
                          <TechLogoIcon name={item.name} className="w-2.5 h-2.5 shrink-0" />
                          <span className="truncate max-w-[50px] sm:max-w-[58px]">
                            {item.name.replace(' Applications', ' Apps').replace(' Services', '').replace(' Integration', '')}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                ) : (
                  /* Standard Inactive Capsule (Part 2: Dimmed 0.65, Clean & Light) */
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isHovered ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>

                    <div className="text-left">
                      <span className="text-[7.5px] sm:text-[8.5px] font-mono uppercase tracking-wider text-slate-400 block leading-none mb-0.5">
                        {cat?.number ?? '01'}
                      </span>
                      <span className="text-[11px] sm:text-xs font-heading font-black tracking-tight leading-none block text-slate-700">
                        {cfg.label}
                      </span>
                    </div>
                  </div>
                )}
              </motion.button>
            </div>
          );
        })}
      </motion.div>

      {/* 3. Bottom Ecosystem Status Strip */}
      <div className="w-full pt-3.5 mt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500 relative z-10">
        <span className="flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-indigo-500" />
          <span>Architecture:</span>
          <span className="text-slate-800 font-bold">Integrated Core Engine</span>
        </span>
        <span className="text-indigo-600 font-semibold hidden sm:inline">
          5 Connected Domains
        </span>
      </div>
    </div>
  );
}
