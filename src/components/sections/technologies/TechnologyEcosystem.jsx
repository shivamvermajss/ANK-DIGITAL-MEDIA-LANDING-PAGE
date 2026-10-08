import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Layout,
  Server,
  Database,
  GitBranch,
  Cpu,
  Sparkles,
  Zap,
} from 'lucide-react';

const NODE_ICONS = {
  frontend: Layout,
  backend: Server,
  database: Database,
  integration: GitBranch,
  digital: Cpu,
};

/**
 * TechnologyEcosystem Component
 * 
 * Living interactive ecosystem visualization for the right-hand panel.
 * Features:
 * - 5 peripheral floating glass node capsules (Frontend, Backend, Database, Integration, Digital)
 * - Central Digital Experience anchor hub
 * - Rotating subtle orbital concentric rings
 * - Native SVG connection paths with animated glowing data packets
 * - Active node breathing aura glow and illuminated connection line
 * - Synchronized two-way selection with left domain selector
 * - Fully responsive across mobile, tablet, and desktop
 * - Full prefers-reduced-motion support
 */
export function TechnologyEcosystem({
  categories,
  activeCategoryId,
  onSelectCategory,
}) {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredNodeId, setHoveredNodeId] = useState(null);

  // Exact coordinates on a 540 x 460 SVG canvas
  // Central Hub is at (270, 230)
  const centerPt = { x: 270, y: 230 };

  const NODE_CONFIG = {
    frontend: {
      cx: 270,
      cy: 62,
      leftPct: '50%',
      topPct: '13.5%',
      label: 'FRONTEND',
      path: 'M 270,185 L 270,88',
      fullPath: 'M 270,230 L 270,62',
    },
    backend: {
      cx: 440,
      cy: 145,
      leftPct: '81.5%',
      topPct: '31.5%',
      label: 'BACKEND',
      path: 'M 320,205 L 400,165',
      fullPath: 'M 270,230 L 440,145',
    },
    database: {
      cx: 405,
      cy: 370,
      leftPct: '75%',
      topPct: '80.5%',
      label: 'DATABASE',
      path: 'M 315,265 L 375,340',
      fullPath: 'M 270,230 L 405,370',
    },
    integration: {
      cx: 135,
      cy: 370,
      leftPct: '25%',
      topPct: '80.5%',
      label: 'INTEGRATION',
      path: 'M 225,265 L 165,340',
      fullPath: 'M 270,230 L 135,370',
    },
    digital: {
      cx: 100,
      cy: 145,
      leftPct: '18.5%',
      topPct: '31.5%',
      label: 'DIGITAL',
      path: 'M 220,205 L 140,165',
      fullPath: 'M 270,230 L 100,145',
    },
  };

  const activeCategory = categories.find((c) => c.id === activeCategoryId) || categories[0];

  return (
    <div className="rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.12),0_8px_20px_-6px_rgba(59,130,246,0.06)] p-5 sm:p-7 lg:p-8 relative overflow-hidden flex flex-col items-center justify-between select-none">
      {/* Background Soft Atmospheric Radial Glows */}
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
          Interactive Node System
        </span>
      </div>

      {/* 2. Interactive SVG Canvas & Connected Nodes Viewport */}
      <div className="relative w-full max-w-[540px] aspect-[540/460] mx-auto z-10 flex items-center justify-center">
        {/* SVG Drawing Layer: Background Rings, Connector Lines & Flow Particles */}
        <svg
          viewBox="0 0 540 460"
          className="w-full h-full absolute inset-0 overflow-visible pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            {/* Active Highlight Connection Gradient */}
            <linearGradient id="activeNodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#9333EA" stopOpacity="0.95" />
            </linearGradient>

            {/* Inactive Connection Gradient */}
            <linearGradient id="idleNodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.25" />
            </linearGradient>

            {/* Active Glow Filter */}
            <filter id="pathGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Concentric Subtle Architecture Orbit Rings */}
          <g transform={`translate(${centerPt.x}, ${centerPt.y})`}>
            {/* Inner Ring */}
            <circle
              r="115"
              fill="none"
              stroke="rgba(99, 102, 241, 0.12)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
            {/* Outer Ring with Slow Subtle Rotation */}
            <motion.circle
              r="185"
              fill="none"
              stroke="rgba(148, 163, 184, 0.12)"
              strokeWidth="1"
              strokeDasharray="6 8"
              animate={shouldReduceMotion ? {} : { rotate: 360 }}
              transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
            />
          </g>

          {/* SVG Connection Paths & Glowing Flow Particles */}
          {categories.map((cat, idx) => {
            const cfg = NODE_CONFIG[cat.id];
            if (!cfg) return null;
            const isActive = cat.id === activeCategoryId;
            const isHovered = cat.id === hoveredNodeId;
            const isEmphasized = isActive || isHovered;

            return (
              <g key={cat.id}>
                {/* Glow Underlay on Active Path */}
                {isEmphasized && (
                  <path
                    d={cfg.fullPath}
                    stroke="rgba(99, 102, 241, 0.35)"
                    strokeWidth="5"
                    fill="none"
                    filter="url(#pathGlow)"
                  />
                )}

                {/* Primary Connection Line */}
                <path
                  d={cfg.fullPath}
                  stroke={isEmphasized ? 'url(#activeNodeGrad)' : 'url(#idleNodeGrad)'}
                  strokeWidth={isEmphasized ? 2.5 : 1.2}
                  strokeDasharray={isEmphasized ? 'none' : '4 4'}
                  fill="none"
                  className="transition-all duration-300"
                />

                {/* Animated Data Packet Particle along path */}
                {!shouldReduceMotion && (
                  <circle
                    r={isEmphasized ? 4.5 : 3}
                    fill={isEmphasized ? '#6366F1' : '#94A3B8'}
                    className="transition-all duration-300"
                  >
                    <animateMotion
                      path={cfg.fullPath}
                      dur={isEmphasized ? '2.2s' : `${3.2 + idx * 0.4}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* Central Core: Digital Experience Product Hub */}
        <div
          style={{
            left: `${centerPt.x}px`,
            top: `${centerPt.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
          className="absolute z-20 w-44 sm:w-48 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_20px_45px_-12px_rgba(59,130,246,0.22)] p-3.5 text-center pointer-events-none select-none"
        >
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

        {/* 5 Peripheral Interactive Floating Glass Node Capsules */}
        {categories.map((cat) => {
          const cfg = NODE_CONFIG[cat.id];
          if (!cfg) return null;
          const isActive = cat.id === activeCategoryId;
          const IconComponent = NODE_ICONS[cat.id] || Layout;

          return (
            <motion.button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              onMouseEnter={() => setHoveredNodeId(cat.id)}
              onMouseLeave={() => setHoveredNodeId(null)}
              whileHover={shouldReduceMotion ? {} : { scale: 1.06, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              style={{
                left: `${cfg.cx}px`,
                top: `${cfg.cy}px`,
                transform: 'translate(-50%, -50%)',
              }}
              className={`absolute z-30 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl border transition-all duration-300 flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white border-white/40 shadow-[0_0_25px_rgba(99,102,241,0.35),0_12px_28px_-6px_rgba(59,130,246,0.35)]'
                  : 'bg-white/85 hover:bg-white text-slate-800 border-slate-200/90 hover:border-indigo-300 shadow-[0_12px_30px_-15px_rgba(15,23,42,0.18)]'
              }`}
            >
              {/* Node Icon */}
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-indigo-600 group-hover:bg-indigo-50'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* Node Label */}
              <div className="text-left">
                <span
                  className={`text-[7.5px] sm:text-[8.5px] font-mono uppercase tracking-wider block leading-none mb-0.5 ${
                    isActive ? 'text-indigo-100' : 'text-slate-400'
                  }`}
                >
                  {cat.number}
                </span>
                <span className="text-[11px] sm:text-xs font-heading font-black tracking-tight leading-none block">
                  {cat.label}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* 3. Bottom Ecosystem Status Strip */}
      <div className="w-full pt-3.5 mt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500 relative z-10">
        <span className="flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-indigo-500" />
          <span>Active Domain:</span>
          <span className="text-slate-800 font-bold">{activeCategory.title}</span>
        </span>
        <span className="text-indigo-600 font-semibold hidden sm:inline">
          5 Connected Domains
        </span>
      </div>
    </div>
  );
}
