import React from 'react';
import { WorkspaceScreen } from './WorkspaceScreen';

/**
 * LaptopMockup Component
 * Realistic 3D angled MacBook development laptop resting on a sculpted, multi-faceted
 * dark crystalline bedrock pedestal with electric cyan & violet neon ribbons.
 * Directly recreates the reference image perspective, materials, and lighting.
 */
export function LaptopMockup() {
  return (
    <div className="relative flex flex-col items-center justify-center select-none pointer-events-none">
      
      {/* ======================================================== */}
      {/* 1. CHISELED BEDROCK PEDESTAL (Behind & Under Laptop)     */}
      {/* ======================================================== */}
      <div className="absolute -bottom-20 sm:-bottom-28 w-[540px] sm:w-[660px] md:w-[740px] lg:w-[800px] xl:w-[850px] h-60 sm:h-72 -z-10 flex items-center justify-center">
        {/* Soft realistic cast drop shadow onto floor */}
        <div className="absolute inset-x-8 bottom-2 h-36 bg-slate-950/70 blur-3xl rounded-full" />

        {/* Chiseled Faceted Bedrock Platform */}
        <svg
          viewBox="0 0 860 260"
          className="w-full h-full overflow-visible drop-shadow-[0_25px_45px_rgba(15,23,42,0.65)]"
        >
          <defs>
            {/* Rock Facet Gradients */}
            <linearGradient id="rockFacetTop1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="45%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="rockFacetTop2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#64748B" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#090D16" />
            </linearGradient>
            <linearGradient id="rockFacetSide1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="60%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#050811" />
            </linearGradient>
            <linearGradient id="rockFacetDeep" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E1B4B" />
              <stop offset="50%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            {/* Rear Neon Violet Streamer Gradient */}
            <linearGradient id="streamerVioletGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#818CF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
            </linearGradient>

            {/* Neon Glow Filter */}
            <filter id="neonGlowBack" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Faceted 3D Geometric Asteroid/Rock Polygons */}
          {/* Deep base underbody */}
          <polygon points="40,180 180,230 460,245 740,200 660,140 180,150" fill="#020617" opacity="0.95" />

          {/* Left Crag Horn */}
          <polygon points="30,130 170,70 270,90 180,165 40,180" fill="url(#rockFacetTop1)" opacity="0.98" />
          <polygon points="40,180 180,165 140,225 20,195" fill="url(#rockFacetDeep)" opacity="0.95" />

          {/* Upper Center Plateau (Supports the laptop base) */}
          <polygon points="170,70 500,55 680,105 480,150 270,90" fill="url(#rockFacetTop2)" opacity="0.99" />
          <polygon points="270,90 480,150 440,230 180,210" fill="url(#rockFacetSide1)" opacity="0.97" />

          {/* Right Crag Ridge */}
          <polygon points="500,55 760,115 680,105" fill="url(#rockFacetTop1)" opacity="0.92" />
          <polygon points="680,105 760,115 730,190 600,210 480,150" fill="url(#rockFacetTop2)" opacity="0.95" />
          <polygon points="480,150 600,210 540,240 440,230" fill="url(#rockFacetDeep)" opacity="0.9" />

          {/* Extra Jagged Shards for raw crystalline geological texture */}
          <polygon points="110,140 170,120 180,165" fill="#334155" opacity="0.8" />
          <polygon points="680,105 710,140 650,130" fill="#1E293B" opacity="0.85" />
          <polygon points="320,110 390,140 350,160" fill="#1E293B" opacity="0.75" />

          {/* Sharp Glowing Neon Ridge Highlights */}
          <line x1="170" y1="70" x2="270" y2="90" stroke="#93C5FD" strokeWidth="2.2" opacity="0.9" />
          <line x1="270" y1="90" x2="480" y2="150" stroke="#C084FC" strokeWidth="2.6" opacity="0.95" />
          <line x1="170" y1="70" x2="500" y2="55" stroke="#60A5FA" strokeWidth="1.8" opacity="0.8" />
          <line x1="480" y1="150" x2="680" y2="105" stroke="#818CF8" strokeWidth="2.2" opacity="0.85" />
          <line x1="480" y1="150" x2="440" y2="230" stroke="#38BDF8" strokeWidth="1.8" opacity="0.8" />

          {/* Rear Flowing Violet Neon Ribbon (weaves behind laptop screen) */}
          <path
            d="M 140,80 Q 360,25 580,125 T 780,170"
            fill="none"
            stroke="url(#streamerVioletGrad)"
            strokeWidth="5.5"
            filter="url(#neonGlowBack)"
            opacity="0.95"
          />
          <path
            d="M 140,80 Q 360,25 580,125 T 780,170"
            fill="none"
            stroke="#F5D0FE"
            strokeWidth="2"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* ======================================================== */}
      {/* 2. REALISTIC 3D PERSPECTIVE LAPTOP (Turned 3/4 angle)    */}
      {/* ======================================================== */}
      <div
        className="relative flex flex-col items-center z-10 transition-transform duration-500"
        style={{
          transform: 'perspective(1400px) rotateY(-18deg) rotateX(13deg) rotateZ(1deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* UPPER DISPLAY (Screen Lid) */}
        <div className="relative w-[330px] sm:w-[410px] md:w-[470px] lg:w-[490px] xl:w-[530px] h-[210px] sm:h-[260px] md:h-[295px] lg:h-[310px] xl:h-[335px] rounded-t-2xl bg-[#0F172A] p-2 sm:p-2.5 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.6),0_0_50px_rgba(59,130,246,0.25)] border-t border-x border-slate-700/80 flex flex-col">
          {/* Top Bezel with Webcam Dot */}
          <div className="h-2 w-full flex items-center justify-center shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900 ring-1 ring-slate-700 flex items-center justify-center">
              <div className="w-0.5 h-0.5 rounded-full bg-cyan-400" />
            </div>
          </div>

          {/* Screen Content */}
          <div className="relative flex-1 rounded-lg overflow-hidden border border-slate-800 shadow-inner">
            <WorkspaceScreen />

            {/* Diagonal Glossy Glass Specular Sheen */}
            <div
              className="absolute -top-1/2 -left-1/4 w-[160%] h-[160%] pointer-events-none opacity-20"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 32%, transparent 60%)',
              }}
            />
          </div>
        </div>

        {/* HINGE CYLINDER */}
        <div className="w-[320px] sm:w-[400px] md:w-[460px] lg:w-[480px] xl:w-[520px] h-1.5 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 rounded-sm shadow-xs" />

        {/* LOWER DECK (Silver Anodized Aluminum MacBook Base) */}
        <div className="relative w-[350px] sm:w-[435px] md:w-[500px] lg:w-[525px] xl:w-[565px] h-22 sm:h-26 md:h-28 rounded-b-2xl bg-gradient-to-b from-[#F8FAFC] via-[#E2E8F0] to-[#CBD5E1] border-b-[3px] border-x border-slate-400/90 p-2 sm:p-2.5 shadow-[0_35px_60px_rgba(0,0,0,0.65)] flex flex-col justify-between">
          
          {/* Chiclet Keyboard Well (Realistic 5-row MacBook keyboard) */}
          <div className="w-[92%] h-11 sm:h-13 mx-auto rounded-md bg-[#0B0F19] border border-slate-400/60 p-1 sm:p-1.5 flex flex-col justify-between shadow-inner">
            {/* Row 1: Function keys */}
            <div className="flex gap-1 h-1.5 sm:h-2 w-full">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className="flex-1 bg-slate-800/95 rounded-[1.5px] shadow-2xs border-t border-slate-700/60" />
              ))}
            </div>
            {/* Row 2: Numbers */}
            <div className="flex gap-1 h-1.5 sm:h-2 w-full">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className="flex-1 bg-slate-800/90 rounded-[1.5px] shadow-2xs border-t border-slate-700/50" />
              ))}
            </div>
            {/* Row 3: QWERTY */}
            <div className="flex gap-1 h-1.5 sm:h-2 w-full">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className="flex-1 bg-slate-800/90 rounded-[1.5px] shadow-2xs border-t border-slate-700/50" />
              ))}
            </div>
            {/* Row 4: ASDF */}
            <div className="flex gap-1 h-1.5 sm:h-2 w-full">
              {Array.from({ length: 13 }).map((_, i) => (
                <div key={i} className="flex-1 bg-slate-800/90 rounded-[1.5px] shadow-2xs border-t border-slate-700/50" />
              ))}
            </div>
            {/* Row 5: Spacebar & Modifiers */}
            <div className="flex gap-1 h-1.5 sm:h-2 w-full">
              <div className="w-4 sm:w-5 bg-slate-800/85 rounded-[1.5px]" />
              <div className="w-4 sm:w-5 bg-slate-800/85 rounded-[1.5px]" />
              <div className="flex-1 bg-slate-800/95 rounded-[1.5px] border-t border-slate-700/60" />
              <div className="w-4 sm:w-5 bg-slate-800/85 rounded-[1.5px]" />
              <div className="w-4 sm:w-5 bg-slate-800/85 rounded-[1.5px]" />
            </div>
          </div>

          {/* Smooth Glass Trackpad & Front Lip Notch */}
          <div className="flex flex-col items-center">
            {/* Trackpad */}
            <div className="w-24 sm:w-28 h-5 sm:h-6 rounded-sm bg-[#F8FAFC]/95 border border-slate-300 shadow-inner" />
            
            {/* MacBook Center Notch */}
            <div className="w-14 h-1 bg-slate-300 rounded-b-sm border-b border-slate-400/80 mt-0.5" />
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. FOREGROUND LUMINOUS NEON CYAN RIBBON (In front of deck) */}
      {/* ======================================================== */}
      <div className="absolute -bottom-8 sm:-bottom-10 w-[480px] sm:w-[580px] md:w-[640px] lg:w-[680px] xl:w-[720px] h-30 sm:h-38 z-30 pointer-events-none">
        <svg viewBox="0 0 720 150" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="frontCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#00F0FF" stopOpacity="0.98" />
              <stop offset="80%" stopColor="#818CF8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0.1" />
            </linearGradient>
            <filter id="frontNeonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Wide Glowing Cyan Neon Ribbon sweeping across front edge of laptop */}
          <path
            d="M 30,110 Q 220,145 400,95 T 700,35"
            fill="none"
            stroke="url(#frontCyanGrad)"
            strokeWidth="6"
            filter="url(#frontNeonGlow)"
            opacity="0.98"
          />
          {/* Razor-sharp White Core Light Filament */}
          <path
            d="M 30,110 Q 220,145 400,95 T 700,35"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            opacity="0.98"
          />

          {/* Traveling Photon Energy Bead on the ribbon */}
          <circle cx="310" cy="118" r="5" fill="#FFFFFF" filter="url(#frontNeonGlow)" />
          <circle cx="310" cy="118" r="8.5" fill="none" stroke="#00F0FF" strokeWidth="2" opacity="0.9" />
        </svg>
      </div>
    </div>
  );
}
