import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Server, Cloud, ShieldCheck, Activity, CheckCircle2, Zap } from 'lucide-react';

/**
 * HostingInfrastructureVisual Component
 * 
 * Compact live infrastructure micro-dashboard for Web Hosting.
 * Communicates: Active Digital Infrastructure, Cloud & Server Availability, SSL Security.
 * Avoids unverified performance guarantees by using neutral operational indicators.
 * Respects prefers-reduced-motion.
 */
export function HostingInfrastructureVisual({ isHovered = false }) {
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
          ? '0 16px 36px -12px rgba(59, 130, 246, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
          : '0 12px 30px -12px rgba(59, 130, 246, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.85)',
      }}
    >
      {/* Background ambient blue glow */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 w-44 h-44 rounded-full transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.14), transparent 70%)',
          opacity: isHovered ? 1 : 0.6,
        }}
        aria-hidden="true"
      />

      {/* 1. Header Bar: Status & Mode */}
      <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full bg-emerald-500 transition-all duration-300 ${
              isHovered ? 'ring-4 ring-emerald-400/25 scale-110' : 'animate-pulse'
            }`}
          />
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-800">
            Infrastructure Status
          </span>
          <span className="text-[9px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/70">
            Active
          </span>
        </div>

        <span className="text-[9px] font-mono text-slate-400">
          Illustrative Architecture
        </span>
      </div>

      {/* 2. 3 Compact Glass Metric Modules */}
      <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-4">
        {/* Module 1: Availability */}
        <div className="p-2 sm:p-2.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-2xs transition-all duration-200">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="text-[9px] font-mono text-slate-500 truncate">
              Availability
            </span>
          </div>
          <div className="text-xs sm:text-[13px] font-heading font-extrabold text-slate-900 leading-tight">
            Stable
          </div>
          <span className="text-[8.5px] font-mono text-emerald-600 block mt-0.5">
            Continuous
          </span>
        </div>

        {/* Module 2: Network */}
        <div className="p-2 sm:p-2.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-2xs transition-all duration-200">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
            <span className="text-[9px] font-mono text-slate-500 truncate">
              Network
            </span>
          </div>
          <div className="text-xs sm:text-[13px] font-heading font-extrabold text-slate-900 leading-tight">
            Connected
          </div>
          <span className="text-[8.5px] font-mono text-blue-600 block mt-0.5">
            Optimized
          </span>
        </div>

        {/* Module 3: Security */}
        <div className="p-2 sm:p-2.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-2xs transition-all duration-200">
          <div className="flex items-center gap-1.5 mb-1">
            <CheckCircle2 className="w-2.5 h-2.5 text-indigo-600 shrink-0" />
            <span className="text-[9px] font-mono text-slate-500 truncate">
              SSL Security
            </span>
          </div>
          <div className="text-xs sm:text-[13px] font-heading font-extrabold text-slate-900 leading-tight">
            Protected
          </div>
          <span className="text-[8.5px] font-mono text-indigo-600 block mt-0.5">
            TLS Enabled
          </span>
        </div>
      </div>

      {/* 3. Server & Cloud Request Flow Visual */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: isHovered ? -2 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="p-3 sm:p-3.5 rounded-xl bg-white/70 border border-slate-200/70 shadow-2xs"
      >
        <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mb-2">
          <span>Request / Server Flow</span>
          <span className="text-blue-600 font-semibold flex items-center gap-1">
            <Zap className="w-2.5 h-2.5" />
            <span>Low Latency</span>
          </span>
        </div>

        {/* Architectural Path SVG / Elements */}
        <div className="relative py-2 flex items-center justify-between px-2">
          {/* Node 1: Cloud Edge */}
          <div className="flex flex-col items-center gap-1 z-10">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
              style={{
                background: isHovered ? 'rgba(239, 246, 255, 0.95)' : 'rgba(248, 250, 252, 0.95)',
                border: `1px solid ${isHovered ? 'rgba(59, 130, 246, 0.35)' : 'rgba(226, 232, 240, 0.9)'}`,
                color: isHovered ? '#2563EB' : '#475569',
              }}
            >
              <Cloud className="w-4 h-4" />
            </div>
            <span className="text-[8.5px] font-mono text-slate-600 font-medium">Cloud Edge</span>
          </div>

          {/* Connection Line 1 */}
          <div className="flex-1 mx-2 relative h-[2px] bg-slate-200/90 overflow-hidden">
            <motion.div
              animate={shouldReduceMotion ? {} : { x: ['-100%', '100%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full"
            />
          </div>

          {/* Node 2: Server Host (Primary) */}
          <div className="flex flex-col items-center gap-1 z-10">
            <div
              className="w-9 h-9 rounded-lg flex flex-col items-center justify-center gap-0.5 p-1 transition-all duration-200 shadow-2xs"
              style={{
                background: isHovered ? 'rgba(238, 242, 255, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                border: `1px solid ${isHovered ? 'rgba(99, 102, 241, 0.45)' : 'rgba(99, 102, 241, 0.25)'}`,
                boxShadow: isHovered ? '0 4px 12px rgba(99, 102, 241, 0.15)' : 'none',
              }}
            >
              {/* Mini Server Slots with LED lights */}
              <div className="w-full flex items-center justify-between px-1 py-0.5 rounded bg-slate-100/90 border border-slate-200/80">
                <span className="w-1 h-1 rounded-full bg-blue-500" />
                <span className="w-2.5 h-[1.5px] bg-slate-300 rounded" />
              </div>
              <div className="w-full flex items-center justify-between px-1 py-0.5 rounded bg-slate-100/90 border border-slate-200/80">
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                <span className="w-2.5 h-[1.5px] bg-slate-300 rounded" />
              </div>
            </div>
            <span className="text-[8.5px] font-mono text-indigo-700 font-bold">Host Server</span>
          </div>

          {/* Connection Line 2 */}
          <div className="flex-1 mx-2 relative h-[2px] bg-slate-200/90 overflow-hidden">
            <motion.div
              animate={shouldReduceMotion ? {} : { x: ['-100%', '100%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'linear', delay: 0.8 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-full"
            />
          </div>

          {/* Node 3: Database & Storage */}
          <div className="flex flex-col items-center gap-1 z-10">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
              style={{
                background: isHovered ? 'rgba(238, 242, 255, 0.95)' : 'rgba(248, 250, 252, 0.95)',
                border: `1px solid ${isHovered ? 'rgba(99, 102, 241, 0.35)' : 'rgba(226, 232, 240, 0.9)'}`,
                color: isHovered ? '#4F46E5' : '#475569',
              }}
            >
              <Server className="w-4 h-4" />
            </div>
            <span className="text-[8.5px] font-mono text-slate-600 font-medium">Database</span>
          </div>
        </div>
      </motion.div>

      {/* 4. Footer Architecture Status */}
      <div className="pt-3 mt-3 border-t border-slate-200/80 flex items-center justify-between text-[8px] sm:text-[8.5px] font-mono text-slate-500">
        <span className="flex items-center gap-1 text-slate-700 font-medium">
          <Activity className="w-2.5 h-2.5 text-blue-500" />
          <span>Multi-Core Compute</span>
        </span>
        <span className="text-slate-400">Automated Provisioning</span>
      </div>
    </div>
  );
}
