import React from 'react';
import { Files, Search, GitBranch, Settings } from 'lucide-react';

/**
 * WorkspaceScreen Component
 * Detailed development workspace rendered inside the laptop screen bezel.
 * Displays macOS window controls, a dark syntax-highlighted IDE code editor on the left,
 * and a live interactive-styled web application preview card on the right.
 */
export function WorkspaceScreen() {
  return (
    <div className="w-full h-full bg-[#0B0F19] text-slate-200 flex flex-col font-sans select-none overflow-hidden relative">
      {/* 1. TOP WINDOW TOOLBAR */}
      <div className="h-7 sm:h-8 bg-[#0F172A]/90 border-b border-slate-800/80 px-3 flex items-center justify-between shrink-0">
        {/* macOS Traffic Light Buttons */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444] shadow-[0_0_6px_rgba(239,68,68,0.6)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
        </div>

        {/* Center Title Pill */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-[10px] sm:text-[11px] font-mono text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-semibold text-white">ANK DIGITAL</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300">DigitalExperience.jsx</span>
        </div>

        {/* Right Status Badge */}
        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
          <span className="hidden sm:inline-flex items-center gap-1 text-emerald-400 text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Live
          </span>
          <span className="text-[10px] text-slate-500">v2.4</span>
        </div>
      </div>

      {/* 2. MAIN WORKSPACE BODY (Editor Left, Live Preview Right) */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left IDE Sidebar Strip (VS Code style activity bar) */}
        <div className="w-7 sm:w-8 bg-[#090D16] border-r border-slate-800/70 flex flex-col items-center py-2.5 gap-3 shrink-0 text-slate-500">
          <Files className="w-3.5 h-3.5 text-blue-400" />
          <Search className="w-3.5 h-3.5 hover:text-slate-300 transition-colors" />
          <GitBranch className="w-3.5 h-3.5 hover:text-slate-300 transition-colors" />
          <div className="mt-auto">
            <Settings className="w-3.5 h-3.5 hover:text-slate-300 transition-colors" />
          </div>
        </div>

        {/* CODE EDITOR PANE */}
        <div className="flex-1 bg-[#0B0F19]/95 p-2 sm:p-2.5 overflow-hidden flex font-mono text-[9px] sm:text-[10px] leading-relaxed border-r border-slate-800/60">
          {/* Line Numbers */}
          <div className="text-slate-600 select-none pr-2 text-right flex flex-col shrink-0 font-light">
            {Array.from({ length: 13 }, (_, i) => (
              <span key={i + 1}>{i + 1}</span>
            ))}
          </div>

          {/* Syntax-Highlighted Real React Code */}
          <div className="text-slate-300 whitespace-pre overflow-hidden flex-1 font-mono">
            <div>
              <span className="text-purple-400">import</span> React{' '}
              <span className="text-purple-400">from</span>{' '}
              <span className="text-emerald-400">'react'</span>;
            </div>
            <div>
              <span className="text-purple-400">import</span> &#123; motion &#125;{' '}
              <span className="text-purple-400">from</span>{' '}
              <span className="text-emerald-400">'framer-motion'</span>;
            </div>
            <div className="text-slate-500 mt-0.5">// ANK Digital Engineering</div>
            <div>
              <span className="text-purple-400">export default function</span>{' '}
              <span className="text-cyan-400 font-semibold">Hero</span>() &#123;
            </div>
            <div className="pl-2.5">
              <span className="text-purple-400">return</span> (
            </div>
            <div className="pl-4">
              &lt;<span className="text-pink-400">div</span>{' '}
              <span className="text-sky-300">className</span>=
              <span className="text-emerald-400">"hero"</span>&gt;
            </div>
            <div className="pl-6">
              &lt;<span className="text-pink-400">h1</span>&gt;
              <span className="text-white font-medium">Build Digital</span>
            </div>
            <div className="pl-8">
              <span className="text-cyan-300">Experiences</span>
              &lt;/<span className="text-pink-400">h1</span>&gt;
            </div>
            <div className="pl-6">
              &lt;<span className="text-pink-400">p</span>&gt;
              <span className="text-slate-400">That Move Business.</span>
              &lt;/<span className="text-pink-400">p</span>&gt;
            </div>
            <div className="pl-4">
              &lt;/<span className="text-pink-400">div</span>&gt;
            </div>
            <div className="pl-2.5">);</div>
            <div>&#125;</div>
          </div>
        </div>

        {/* RIGHT PANE: LIVE APPLICATION PREVIEW */}
        <div className="w-[140px] sm:w-[170px] md:w-[185px] bg-[#0E1526]/80 p-2 sm:p-2.5 flex flex-col justify-center shrink-0">
          <div className="w-full rounded-xl bg-white text-slate-900 shadow-[0_10px_25px_rgba(0,0,0,0.5)] overflow-hidden border border-white/90 flex flex-col">
            {/* Live Card Header Artwork (Mountain Sunset Horizon) */}
            <div className="h-14 sm:h-16 bg-gradient-to-tr from-indigo-700 via-purple-600 to-pink-500 relative overflow-hidden flex items-end p-2">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_70%)]" />
              {/* Geometric Mountains Silhouette */}
              <svg viewBox="0 0 100 40" className="w-full h-8 absolute bottom-0 left-0 opacity-90" preserveAspectRatio="none">
                <polygon points="0,40 25,16 50,40" fill="#1E1B4B" opacity="0.8" />
                <polygon points="20,40 55,8 90,40" fill="#0F172A" opacity="0.95" />
                <polygon points="60,40 85,20 100,40" fill="#312E81" opacity="0.85" />
              </svg>
              <span className="relative z-1 text-[8px] sm:text-[9px] font-mono text-white/95 bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-xs">
                UI / UX Preview
              </span>
            </div>

            {/* Live Card Content */}
            <div className="p-2 sm:p-2.5 flex flex-col gap-1">
              <span className="font-heading font-extrabold text-[10px] sm:text-[11px] leading-tight text-slate-900 block">
                Modern Web Experiences
              </span>
              <span className="text-[7.5px] sm:text-[8.5px] text-slate-500 font-sans leading-tight block">
                Engineered with performance and precision.
              </span>
              {/* Mini CTA Button */}
              <div className="mt-1 w-full py-1 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-[8px] sm:text-[9px] text-center shadow-xs">
                Explore Services →
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
