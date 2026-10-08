import React, { useContext } from 'react';
import { useReducedMotion } from 'framer-motion';
import {
  Activity,
  Cpu,
  Globe,
  Database,
  Sparkles,
  Layers,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { CardHoverContext } from './DevelopmentCapabilities';

/**
 * WebPlatformVisual Component
 * 
 * Redesigned light 3D digital product / web platform visual.
 * Features:
 * - Frosted-glass container with 1px border and layered shadow separation
 * - Floating glass product surface with subtle 3D perspective
 * - Calm, polished micro-interactions on featured-card hover:
 *   - Main UI surface shifts upward by ~2px
 *   - Secondary floating panel shifts ~2px horizontally
 *   - Status indicators subtly brighten
 *   - Graph line indicator smoothly transitions
 * - Real UI elements: Title bar, navigation rail, micro-metrics, abstract vector spline chart
 * - Curated neutral interface labels: Overview, Analytics, Users, Activity, Data, API, Platform
 * - Zero fake claims or percentages
 * - Respects prefers-reduced-motion with graceful fallback
 */
export function WebPlatformVisual({ isCardHovered: propHover }) {
  const shouldReduceMotion = useReducedMotion();
  const contextHover = useContext(CardHoverContext);
  const isCardHovered = propHover !== undefined ? propHover : contextHover;

  return (
    <div
      className="my-4 sm:my-5 rounded-2xl relative overflow-hidden p-3 sm:p-4 select-none transition-all duration-300"
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(226, 232, 240, 0.90)',
        boxShadow: isCardHovered
          ? '0 20px 45px -10px rgba(99, 102, 241, 0.18), 0 4px 14px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.95)'
          : '0 16px 35px -10px rgba(99, 102, 241, 0.12), 0 4px 12px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
      }}
    >
      {/* 1. Ambient Background Glow (intensifies subtly on card hover) */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-full transition-all duration-500 opacity-60 group-hover:opacity-95 group-hover:scale-105"
        style={{
          background:
            'radial-gradient(circle at 62% 42%, rgba(99, 102, 241, 0.13), rgba(59, 130, 246, 0.07) 35%, transparent 68%)',
        }}
        aria-hidden="true"
      />

      {/* 2. Delicate Technical Background Grid & Blueprint Watermark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'radial-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
        aria-hidden="true"
      />

      {/* Background System Tag */}
      <div className="absolute top-2.5 right-3.5 flex items-center gap-1.5 text-[8px] font-mono tracking-wider text-slate-400/80">
        <span className="w-1 h-1 rounded-full bg-indigo-400" />
        <span>PLATFORM // UI.CORE</span>
      </div>

      {/* 3. 3D Perspective Stage */}
      <div
        className="relative w-full h-[180px] sm:h-[195px] flex items-center justify-center"
        style={{
          perspective: shouldReduceMotion ? 'none' : '1100px',
        }}
      >
        {/* SVG Connecting Circuit Paths linking floating nodes to main surface */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="webConnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="areaCurveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#818CF8" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#EEF2FF" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Connection line from Main Platform to Floating API Capsule */}
          <path
            d="M 280,110 C 310,110 325,140 345,148"
            fill="none"
            stroke="url(#webConnGrad)"
            strokeWidth="1.25"
            strokeDasharray="3 3"
            className="transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:stroke-indigo-500"
          />

          {/* Connection line from Main Platform to Floating Activity Module */}
          <path
            d="M 270,45 C 295,45 315,35 335,28"
            fill="none"
            stroke="url(#webConnGrad)"
            strokeWidth="1.25"
            strokeDasharray="3 3"
            className="transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:stroke-indigo-500"
          />
        </svg>

        {/* ============================================================== */}
        {/* PRIMARY FLOATING GLASS PRODUCT SURFACE                         */}
        {/* ============================================================== */}
        <div
          className="relative z-10 w-[88%] sm:w-[86%] max-w-[390px] rounded-xl p-2.5 sm:p-3 transition-all duration-300 ease-out"
          style={{
            transform: shouldReduceMotion
              ? 'none'
              : isCardHovered
              ? 'translateY(-2px) rotateX(5.5deg) rotateY(-4.5deg) rotateZ(0.5deg)'
              : 'translateY(0px) rotateX(7deg) rotateY(-6deg) rotateZ(0.5deg)',
            transformStyle: shouldReduceMotion ? 'flat' : 'preserve-3d',
            background:
              'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.92) 100%)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(203, 213, 225, 0.95)',
            boxShadow: isCardHovered
              ? '0 20px 45px -12px rgba(99, 102, 241, 0.22), 0 6px 14px -2px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.95)'
              : '0 14px 34px -12px rgba(99, 102, 241, 0.15), 0 4px 10px -2px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
          }}
        >
          {/* A. Platform Window Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200/90">
            {/* Window Controls */}
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-300/90" />
              <span className="w-2 h-2 rounded-full bg-indigo-300/80" />
              <span className="w-2 h-2 rounded-full bg-blue-300/80" />
              <span className="ml-2 text-[9px] font-mono font-semibold text-slate-600 hidden xs:inline-block">
                platform / overview
              </span>
            </div>

            {/* Platform Status Badge */}
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[8px] font-mono font-bold text-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>ACTIVE</span>
            </div>
          </div>

          {/* B. Platform Workspace: Mini Nav Rail + Interactive Content */}
          <div className="grid grid-cols-12 gap-2 items-stretch">
            {/* Left Mini Nav Rail */}
            <div className="col-span-3 flex flex-col justify-between py-0.5 pr-1.5 border-r border-slate-200/90">
              <div className="space-y-1">
                {/* Active Tab: Overview */}
                <div className="px-1.5 py-1 rounded-md bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200/90 text-indigo-700 text-[9px] font-mono font-bold flex items-center gap-1 shadow-2xs">
                  <Layers className="w-2.5 h-2.5 text-indigo-600 shrink-0" />
                  <span className="truncate">Overview</span>
                </div>
                {/* Inactive Tab: Analytics */}
                <div className="px-1.5 py-0.5 rounded text-slate-600 text-[8.5px] font-mono flex items-center gap-1 hover:text-slate-800 transition-colors">
                  <Activity className="w-2 h-2 text-slate-500 shrink-0" />
                  <span className="truncate">Analytics</span>
                </div>
                {/* Inactive Tab: Users */}
                <div className="px-1.5 py-0.5 rounded text-slate-600 text-[8.5px] font-mono flex items-center gap-1 hover:text-slate-800 transition-colors">
                  <Users className="w-2 h-2 text-slate-500 shrink-0" />
                  <span className="truncate">Users</span>
                </div>
              </div>

              {/* Mini Health Status Indicator */}
              <div className="pt-1.5 mt-1 border-t border-slate-200/80">
                <div className="flex items-center justify-between text-[7.5px] font-mono text-slate-500 mb-0.5">
                  <span>Pipeline</span>
                  <span className="text-indigo-600 font-semibold">Active</span>
                </div>
                <div className="h-1 w-full bg-slate-200/70 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                </div>
              </div>
            </div>

            {/* Right Main Dashboard Workspace */}
            <div className="col-span-9 flex flex-col justify-between pl-1">
              {/* Mini Metrics Tiles */}
              <div className="grid grid-cols-2 gap-1.5 mb-1.5">
                {/* Metric 1: Activity */}
                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200/90 flex items-center justify-between">
                  <div>
                    <span className="text-[8px] font-mono text-slate-600 block leading-tight">
                      Activity
                    </span>
                    <span className="text-[9.5px] font-mono font-bold text-slate-900">
                      Synchronized
                    </span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-blue-600" />
                  </div>
                </div>

                {/* Metric 2: Data Flow */}
                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200/90 flex items-center justify-between">
                  <div>
                    <span className="text-[8px] font-mono text-slate-600 block leading-tight">
                      Data
                    </span>
                    <span className="text-[9.5px] font-mono font-bold text-slate-900">
                      Streaming
                    </span>
                  </div>
                  <div className="flex items-end gap-0.5 h-3">
                    <span className={`w-0.5 rounded-2xs transition-all duration-300 ${isCardHovered ? 'h-2 bg-indigo-500' : 'h-1.5 bg-indigo-400'}`} />
                    <span className={`w-0.5 rounded-2xs transition-all duration-300 ${isCardHovered ? 'h-3.5 bg-indigo-700' : 'h-3 bg-indigo-600'}`} />
                    <span className={`w-0.5 rounded-2xs transition-all duration-300 ${isCardHovered ? 'h-2.5 bg-indigo-600' : 'h-2 bg-indigo-500'}`} />
                  </div>
                </div>
              </div>

              {/* Abstract Area Chart Visualization */}
              <div className="rounded-lg bg-slate-50 border border-slate-200/90 p-1.5 relative overflow-hidden">
                <div className="flex items-center justify-between text-[8px] font-mono text-slate-600 mb-0.5">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-2 h-2 text-indigo-500" />
                    <span>Interface Flow</span>
                  </span>
                  <span className="text-indigo-600 font-semibold text-[7.5px]">REALTIME</span>
                </div>

                {/* SVG Spline Curve with Area Fill */}
                <svg
                  viewBox="0 0 200 36"
                  className="w-full h-8 overflow-visible"
                  preserveAspectRatio="none"
                >
                  {/* Subtle horizontal reference lines */}
                  <line
                    x1="0"
                    y1="10"
                    x2="200"
                    y2="10"
                    stroke="#E2E8F0"
                    strokeWidth="0.75"
                    strokeDasharray="2 2"
                  />
                  <line
                    x1="0"
                    y1="24"
                    x2="200"
                    y2="24"
                    stroke="#E2E8F0"
                    strokeWidth="0.75"
                    strokeDasharray="2 2"
                  />

                  {/* Gradient Area Fill */}
                  <path
                    d="M 0,26 C 30,12 55,22 85,8 C 115,16 145,5 175,12 C 188,15 195,10 200,8 L 200,36 L 0,36 Z"
                    fill="url(#areaCurveGrad)"
                  />

                  {/* Clean Indigo Spline Stroke */}
                  <path
                    d="M 0,26 C 30,12 55,22 85,8 C 115,16 145,5 175,12 C 188,15 195,10 200,8"
                    fill="none"
                    stroke={isCardHovered ? '#4338CA' : '#4F46E5'}
                    strokeWidth={isCardHovered ? '2' : '1.75'}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />

                  {/* High point indicator dot with smooth movement on hover */}
                  <circle
                    cx={isCardHovered ? 86.5 : 85}
                    cy={isCardHovered ? 7.2 : 8}
                    r="2.5"
                    fill="#4F46E5"
                    className="transition-all duration-300"
                  />
                  <circle
                    cx={isCardHovered ? 86.5 : 85}
                    cy={isCardHovered ? 7.2 : 8}
                    r={isCardHovered ? 5 : 4.5}
                    fill="none"
                    stroke="#818CF8"
                    strokeWidth="1"
                    opacity={isCardHovered ? 0.8 : 0.6}
                    className="transition-all duration-300"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* FLOATING LAYER 1: Activity Stream Module (Top-Right Depth)    */}
        {/* ============================================================== */}
        <div
          className="absolute top-0 right-1 sm:right-3 z-20 rounded-xl p-2 transition-all duration-300 ease-out"
          style={{
            transform: shouldReduceMotion
              ? 'none'
              : isCardHovered
              ? 'translateZ(26px) translateX(2px) translateY(-1px) rotateX(5.5deg) rotateY(-4.5deg)'
              : 'translateZ(26px) translateX(0px) translateY(0px) rotateX(7deg) rotateY(-6deg)',
            background:
              'linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(240, 244, 255, 0.90) 100%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(203, 213, 225, 0.95)',
            boxShadow: isCardHovered
              ? '0 14px 32px -6px rgba(99, 102, 241, 0.22), 0 4px 10px -2px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.95)'
              : '0 12px 28px -6px rgba(99, 102, 241, 0.18), 0 3px 8px -2px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
          }}
        >
          <div className="flex items-center gap-1.5 mb-1 pb-1 border-b border-indigo-100/70">
            <Activity className={`w-2.5 h-2.5 transition-colors duration-200 ${isCardHovered ? 'text-indigo-700' : 'text-indigo-600'}`} />
            <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-slate-600">
              Activity
            </span>
          </div>
          {/* Mini Real-Time Multi-Bar Equalizer */}
          <div className="flex items-end gap-1 h-4 px-0.5">
            <span className={`w-1 rounded-2xs transition-all duration-300 ${isCardHovered ? 'h-2.5 bg-indigo-400' : 'h-2 bg-indigo-300'}`} />
            <span className={`w-1 rounded-2xs transition-all duration-300 ${isCardHovered ? 'h-4 bg-indigo-600' : 'h-3.5 bg-indigo-500'}`} />
            <span className={`w-1 rounded-2xs transition-all duration-300 ${isCardHovered ? 'h-3 bg-blue-600' : 'h-2.5 bg-blue-500'}`} />
            <span className={`w-1 rounded-2xs transition-all duration-300 ${isCardHovered ? 'h-4.5 bg-indigo-700' : 'h-4 bg-indigo-600'}`} />
            <span className={`w-1 rounded-2xs transition-all duration-300 ${isCardHovered ? 'h-3.5 bg-purple-600' : 'h-3 bg-purple-500'}`} />
          </div>
        </div>

        {/* ============================================================== */}
        {/* FLOATING LAYER 2: API Runtime Node (Bottom-Right Depth)       */}
        {/* ============================================================== */}
        <div
          className="absolute bottom-0 right-0 sm:right-2 z-20 rounded-xl px-2.5 py-1.5 flex items-center gap-2 transition-all duration-300 ease-out"
          style={{
            transform: shouldReduceMotion
              ? 'none'
              : isCardHovered
              ? 'translateZ(34px) translateX(1.5px) translateY(1px) rotateX(5.5deg) rotateY(-4.5deg)'
              : 'translateZ(34px) translateX(0px) translateY(0px) rotateX(7deg) rotateY(-6deg)',
            background:
              'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(245, 248, 255, 0.92) 100%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(203, 213, 225, 0.95)',
            boxShadow: isCardHovered
              ? '0 16px 34px -6px rgba(99, 102, 241, 0.24), 0 5px 12px -2px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.95)'
              : '0 14px 30px -6px rgba(99, 102, 241, 0.20), 0 4px 10px -2px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
          }}
        >
          <div className="w-5 h-5 rounded-lg bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-600">
            <Cpu className="w-3 h-3" />
          </div>
          <div>
            <span className="text-[8.5px] font-mono font-bold text-slate-800 block leading-tight">
              API Runtime
            </span>
            <span className="text-[7.5px] font-mono text-emerald-600 flex items-center gap-1 leading-tight">
              <span className={`w-1 h-1 rounded-full bg-emerald-500 ${isCardHovered ? 'animate-ping' : 'animate-pulse'}`} />
              Connected
            </span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* FLOATING LAYER 3: Data Node (Bottom-Left Depth)               */}
        {/* ============================================================== */}
        <div
          className="absolute bottom-1 left-1 sm:left-2 z-20 rounded-lg px-2 py-1 flex items-center gap-1.5 transition-all duration-300 ease-out"
          style={{
            transform: shouldReduceMotion
              ? 'none'
              : isCardHovered
              ? 'translateZ(20px) translateX(-1px) translateY(1px) rotateX(5.5deg) rotateY(-4.5deg)'
              : 'translateZ(20px) translateX(0px) translateY(0px) rotateX(7deg) rotateY(-6deg)',
            background:
              'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.90) 100%)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(203, 213, 225, 0.95)',
            boxShadow:
              '0 8px 18px -4px rgba(99, 102, 241, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
          }}
        >
          <Database className="w-2.5 h-2.5 text-blue-600" />
          <span className="text-[8px] font-mono font-medium text-slate-600">
            Data Node
          </span>
          <span className="w-1 h-1 rounded-full bg-emerald-500" />
        </div>
      </div>
    </div>
  );
}
