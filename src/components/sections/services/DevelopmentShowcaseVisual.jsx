import React from 'react';
import {
  Sparkles,
  Code2,
  Cloud,
  PenTool,
  TrendingUp,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';

/**
 * 6 Supporting Capability Cards from the reference image
 */
const CAPABILITY_CARDS = [
  {
    id: 'strategy',
    title: 'Strategy & Research',
    desc: 'Turn ideas into clear product direction.',
    icon: Sparkles,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50 border-blue-200/70',
    desktopPos: 'left-[2%] top-[12%]',
  },
  {
    id: 'development',
    title: 'Development',
    desc: 'Scalable & high performance.',
    icon: Code2,
    iconColor: 'text-white',
    iconBg: 'bg-gradient-to-tr from-blue-600 to-indigo-600 border-transparent shadow-sm',
    desktopPos: 'left-[1%] top-[44%]',
  },
  {
    id: 'deployment',
    title: 'Deployment',
    desc: 'Cloud-ready and secure.',
    icon: Cloud,
    iconColor: 'text-sky-500',
    iconBg: 'bg-sky-50 border-sky-200/70',
    desktopPos: 'left-[4%] top-[74%]',
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    desc: 'Modern, intuitive and user-focused.',
    icon: PenTool,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50 border-purple-200/70',
    desktopPos: 'right-[2%] top-[20%]',
  },
  {
    id: 'optimization',
    title: 'Optimization',
    desc: 'Better speed, better results.',
    icon: TrendingUp,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50 border-indigo-200/70',
    desktopPos: 'right-[1%] top-[50%]',
  },
  {
    id: 'support',
    title: 'Ongoing Support',
    desc: 'Always here as you grow.',
    icon: ShieldCheck,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-200/70',
    desktopPos: 'right-[4%] top-[76%]',
  },
];

/**
 * DevelopmentShowcaseVisual
 * Static 3D futuristic product-architecture composition matching the reference image.
 * Features:
 * - Isometric 3D layered glass & metallic pedestal with central </> monument
 * - 6 clickable floating frosted glass capability cards
 * - Illuminated connecting data beam from active node to right details panel
 * - 3D Figma rounded cube, wireframe globe, database stack, and growth arrow cube
 * - High-specular polished chrome spheres
 */
export function DevelopmentShowcaseVisual({ activeNode = 'development', onSelectNode = () => {} }) {
  return (
    <div className="relative w-full h-full min-h-[580px] sm:min-h-[620px] lg:min-h-[640px] flex items-center justify-center overflow-hidden select-none">
      {/* 1. SECTION AMBIENT BACKLIGHTS */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {/* Soft cyan aura around left/center */}
        <div
          className="absolute top-1/4 left-1/3 w-[500px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] opacity-70"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(99, 102, 241, 0.16) 45%, transparent 70%)',
          }}
        />
        {/* Soft violet/indigo aura around right */}
        <div
          className="absolute bottom-1/4 right-1/4 w-[450px] h-[380px] rounded-full blur-[100px] opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, rgba(59, 130, 246, 0.12) 50%, transparent 70%)',
          }}
        />
        {/* Subtle technical dot matrix patch */}
        <div
          className="absolute top-8 right-6 w-56 h-56 opacity-35"
          style={{
            backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.35) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />
      </div>

      {/* 2. CENTRAL 3D PRODUCT ARCHITECTURE SVG COMPOSITION */}
      <div className="relative w-full max-w-[560px] h-[460px] sm:h-[500px] flex items-center justify-center">
        <svg
          viewBox="0 0 600 500"
          className="w-full h-full overflow-visible pointer-events-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients for Glowing Neon Foundation Rings */}
            <linearGradient id="neonOuterRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#818CF8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="neonInnerRing" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9" />
            </linearGradient>

            {/* Platform Disc Gradients */}
            <radialGradient id="discSurfaceGrad" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#E2E8F0" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.75" />
            </radialGradient>

            <linearGradient id="discRimGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            {/* Lower Dark Metallic Block Faces */}
            <linearGradient id="darkBlockTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="50%" stopColor="#151D2F" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            <linearGradient id="darkBlockLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0B0F19" />
            </linearGradient>

            <linearGradient id="darkBlockRightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#162033" />
              <stop offset="100%" stopColor="#070A12" />
            </linearGradient>

            {/* Middle Structural Layer Gradients */}
            <linearGradient id="midBlockTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E2433" />
              <stop offset="100%" stopColor="#0F1420" />
            </linearGradient>
            <linearGradient id="midBlockLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1C2333" />
              <stop offset="100%" stopColor="#0B0E17" />
            </linearGradient>
            <linearGradient id="midBlockRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#131926" />
              <stop offset="100%" stopColor="#07090F" />
            </linearGradient>

            {/* Top Ice-Glass Slab Gradients */}
            <linearGradient id="glassTopFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.82" />
              <stop offset="40%" stopColor="#E0F2FE" stopOpacity="0.75" />
              <stop offset="75%" stopColor="#DBEAFE" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.70" />
            </linearGradient>

            <linearGradient id="glassLeftFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.70" />
              <stop offset="100%" stopColor="#818CF8" stopOpacity="0.55" />
            </linearGradient>

            <linearGradient id="glassRightFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.60" />
              <stop offset="50%" stopColor="#4F46E5" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#9333EA" stopOpacity="0.60" />
            </linearGradient>

            {/* Central </> Code Symbol Gradient */}
            <linearGradient id="codeSymbolGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="45%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>

            {/* Chrome Sphere Radial Shading */}
            <radialGradient id="chromeSphereGrad" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#E2E8F0" />
              <stop offset="55%" stopColor="#94A3B8" />
              <stop offset="85%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1E293B" />
            </radialGradient>

            {/* Wireframe Globe Sphere Gradient */}
            <radialGradient id="blueGlobeGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#67E8F9" />
              <stop offset="35%" stopColor="#38BDF8" />
              <stop offset="70%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E1B4B" />
            </radialGradient>

            {/* Curved Ambient Energy Ribbon Gradient */}
            <linearGradient id="energyRibbonGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#818CF8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0.7" />
            </linearGradient>

            {/* Drop Shadows and Glow Filters */}
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="glassDepthShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0F172A" floodOpacity="0.22" />
            </filter>

            <filter id="codeGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#4F46E5" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* ======================================================== */}
          {/* A. BACKGROUND LIGHT CONDUIT RIBBONS & CONNECTIONS        */}
          {/* ======================================================== */}
          {/* Sweeping Cyan/Purple Light Streamer */}
          <path
            d="M 20,280 C 100,380 240,430 480,360 C 580,330 620,240 590,160"
            stroke="url(#energyRibbonGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.65"
            filter="url(#softGlow)"
          />
          <path
            d="M 20,280 C 100,380 240,430 480,360 C 580,330 620,240 590,160"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Conduit Connections linking Nodes to Central Architecture */}
          {/* Conduit 1: Top-Left (Strategy) -> Central Platform */}
          <path
            d="M 120,120 C 160,140 200,210 250,225"
            stroke="url(#energyRibbonGrad)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.5"
          />
          <circle cx="250" cy="225" r="2.5" fill="#38BDF8" opacity="0.8" />

          {/* Conduit 2: Top-Center (Figma Cube) -> Platform */}
          <path
            d="M 270,90 C 285,110 295,150 298,185"
            stroke="#A855F7"
            strokeWidth="1.2"
            opacity="0.5"
          />
          <circle cx="298" cy="185" r="2.5" fill="#C084FC" opacity="0.8" />

          {/* Conduit 3: Mid-Left (Globe) -> Platform Base */}
          <path
            d="M 180,210 C 200,220 210,270 230,290"
            stroke="#38BDF8"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <circle cx="230" cy="290" r="2.5" fill="#38BDF8" opacity="0.8" />

          {/* Conduit 4: Top-Right (UI/UX) -> Platform */}
          <path
            d="M 470,140 C 430,160 380,180 345,210"
            stroke="url(#energyRibbonGrad)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.5"
          />
          <circle cx="345" cy="210" r="2.5" fill="#818CF8" opacity="0.8" />

          {/* Conduit 5: Mid-Right (Database Stack) -> Platform Base */}
          <path
            d="M 420,245 C 400,260 380,290 365,305"
            stroke="#06B6D4"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <circle cx="365" cy="305" r="2.5" fill="#06B6D4" opacity="0.8" />

          {/* ======================================================== */}
          {/* ACTIVE NODE CONNECTING BEAMS TO RIGHT DETAILS PANEL      */}
          {/* Subtle illuminated data pathways                         */}
          {/* ======================================================== */}
          <g className="transition-all duration-300">
            {/* Beam 1: Strategy (top-left) to right edge */}
            <path
              d="M 120,100 C 260,80 440,160 600,210"
              stroke="url(#codeSymbolGrad)"
              strokeWidth={activeNode === 'strategy' ? '2.5' : '1'}
              strokeDasharray={activeNode === 'strategy' ? 'none' : '3 3'}
              opacity={activeNode === 'strategy' ? 0.85 : 0.12}
              filter={activeNode === 'strategy' ? 'url(#softGlow)' : undefined}
            />
            {/* Beam 2: Development (mid-left) to right edge */}
            <path
              d="M 120,240 C 260,230 440,245 600,250"
              stroke="url(#codeSymbolGrad)"
              strokeWidth={activeNode === 'development' ? '2.5' : '1'}
              strokeDasharray={activeNode === 'development' ? 'none' : '3 3'}
              opacity={activeNode === 'development' ? 0.85 : 0.12}
              filter={activeNode === 'development' ? 'url(#softGlow)' : undefined}
            />
            {/* Beam 3: Deployment (bottom-left) to right edge */}
            <path
              d="M 120,390 C 280,380 440,320 600,285"
              stroke="url(#codeSymbolGrad)"
              strokeWidth={activeNode === 'deployment' ? '2.5' : '1'}
              strokeDasharray={activeNode === 'deployment' ? 'none' : '3 3'}
              opacity={activeNode === 'deployment' ? 0.85 : 0.12}
              filter={activeNode === 'deployment' ? 'url(#softGlow)' : undefined}
            />
            {/* Beam 4: UI/UX Design (top-right) to right edge */}
            <path
              d="M 480,120 C 520,130 560,180 600,215"
              stroke="url(#codeSymbolGrad)"
              strokeWidth={activeNode === 'design' ? '2.5' : '1'}
              strokeDasharray={activeNode === 'design' ? 'none' : '3 3'}
              opacity={activeNode === 'design' ? 0.85 : 0.12}
              filter={activeNode === 'design' ? 'url(#softGlow)' : undefined}
            />
            {/* Beam 5: Optimization (mid-right) to right edge */}
            <path
              d="M 490,260 C 530,255 570,252 600,250"
              stroke="url(#codeSymbolGrad)"
              strokeWidth={activeNode === 'optimization' ? '2.5' : '1'}
              strokeDasharray={activeNode === 'optimization' ? 'none' : '3 3'}
              opacity={activeNode === 'optimization' ? 0.85 : 0.12}
              filter={activeNode === 'optimization' ? 'url(#softGlow)' : undefined}
            />
            {/* Beam 6: Ongoing Support (bottom-right) to right edge */}
            <path
              d="M 480,400 C 520,380 560,330 600,290"
              stroke="url(#codeSymbolGrad)"
              strokeWidth={activeNode === 'support' ? '2.5' : '1'}
              strokeDasharray={activeNode === 'support' ? 'none' : '3 3'}
              opacity={activeNode === 'support' ? 0.85 : 0.12}
              filter={activeNode === 'support' ? 'url(#softGlow)' : undefined}
            />
          </g>

          {/* Secondary Faint Light Arcs */}
          <path
            d="M 60,180 C 160,260 260,280 400,240"
            stroke="url(#energyRibbonGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.35"
          />

          {/* ======================================================== */}
          {/* B. FOUNDATION: CONCENTRIC NEON RINGS & BASE PEDESTAL     */}
          {/* ======================================================== */}
          {/* Outermost Faint Cyan Track */}
          <ellipse
            cx="300"
            cy="375"
            rx="215"
            ry="75"
            stroke="url(#neonOuterRing)"
            strokeWidth="1.5"
            opacity="0.55"
          />

          {/* Middle Glowing Cyan Neon Track */}
          <ellipse
            cx="300"
            cy="370"
            rx="180"
            ry="62"
            stroke="url(#neonInnerRing)"
            strokeWidth="2.5"
            filter="url(#softGlow)"
            opacity="0.85"
          />
          <ellipse
            cx="300"
            cy="370"
            rx="180"
            ry="62"
            stroke="#FFFFFF"
            strokeWidth="1"
            opacity="0.75"
          />

          {/* Pedestal Foundation Disc (Beveled Edge) */}
          <path
            d="M 155,365 C 155,395 445,395 445,365 L 445,375 C 445,405 155,405 155,375 Z"
            fill="url(#discRimGrad)"
            opacity="0.8"
          />
          <ellipse
            cx="300"
            cy="365"
            rx="145"
            ry="50"
            fill="url(#discSurfaceGrad)"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="1.5"
          />
          {/* Inner Light Ring On Pedestal */}
          <ellipse
            cx="300"
            cy="363"
            rx="125"
            ry="42"
            fill="none"
            stroke="rgba(56, 189, 248, 0.55)"
            strokeWidth="1.5"
          />

          {/* ======================================================== */}
          {/* C. LAYER 1: LOWER DARK METALLIC BLOCK                    */}
          {/* ======================================================== */}
          {/* Left Extrusion Face */}
          <path
            d="M 205,320 L 300,355 L 300,380 L 205,345 Z"
            fill="url(#darkBlockLeftGrad)"
            stroke="#38BDF8"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />
          {/* Right Extrusion Face */}
          <path
            d="M 300,355 L 395,320 L 395,345 L 300,380 Z"
            fill="url(#darkBlockRightGrad)"
            stroke="#6366F1"
            strokeWidth="0.8"
            strokeOpacity="0.3"
          />
          {/* Bottom Edge Neon Glow Trace */}
          <path
            d="M 205,345 L 300,380 L 395,345"
            stroke="#38BDF8"
            strokeWidth="2"
            filter="url(#softGlow)"
            opacity="0.8"
          />
          {/* Top Diamond Face of Layer 1 */}
          <path
            d="M 300,285 L 395,320 L 300,355 L 205,320 Z"
            fill="url(#darkBlockTopGrad)"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1"
          />

          {/* ======================================================== */}
          {/* D. LAYER 2: MIDDLE STRUCTURAL LAYER WITH CYAN LIGHT GAP  */}
          {/* ======================================================== */}
          {/* Cyan Light Gap under Layer 2 */}
          <ellipse
            cx="300"
            cy="282"
            rx="75"
            ry="24"
            fill="#38BDF8"
            opacity="0.35"
            filter="url(#softGlow)"
          />

          {/* Middle Slab - Left Face */}
          <path
            d="M 215,280 L 300,312 L 300,328 L 215,296 Z"
            fill="url(#midBlockLeft)"
            stroke="#38BDF8"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />
          {/* Middle Slab - Right Face */}
          <path
            d="M 300,312 L 385,280 L 385,296 L 300,328 Z"
            fill="url(#midBlockRight)"
            stroke="#818CF8"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />
          {/* Middle Slab - Top Diamond Face with Cyan Illuminated Rim */}
          <path
            d="M 300,248 L 385,280 L 300,312 L 215,280 Z"
            fill="url(#midBlockTop)"
            stroke="#38BDF8"
            strokeWidth="1.2"
            strokeOpacity="0.85"
            filter="url(#softGlow)"
          />
          <path
            d="M 300,248 L 385,280 L 300,312 L 215,280 Z"
            fill="url(#midBlockTop)"
            stroke="#E0F2FE"
            strokeWidth="0.8"
          />

          {/* ======================================================== */}
          {/* E. LAYER 3: TOP BEVELED ICE-GLASS SLAB                   */}
          {/* ======================================================== */}
          {/* Electric Violet Light Underglow */}
          <ellipse
            cx="300"
            cy="242"
            rx="70"
            ry="22"
            fill="#818CF8"
            opacity="0.35"
            filter="url(#softGlow)"
          />

          {/* Glass Left Extrusion Face */}
          <path
            d="M 220,215 L 300,245 L 300,265 L 220,235 Z"
            fill="url(#glassLeftFaceGrad)"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth="1"
          />
          {/* Glass Right Extrusion Face */}
          <path
            d="M 300,245 L 380,215 L 380,235 L 300,265 Z"
            fill="url(#glassRightFaceGrad)"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="1"
          />
          {/* Glass Bottom Rim Specular Highlight */}
          <path
            d="M 220,235 L 300,265 L 380,235"
            stroke="#38BDF8"
            strokeWidth="2"
            filter="url(#softGlow)"
            opacity="0.9"
          />

          {/* Top Glass Diamond Surface */}
          <path
            d="M 300,185 L 380,215 L 300,245 L 220,215 Z"
            fill="url(#glassTopFaceGrad)"
            stroke="rgba(255, 255, 255, 0.95)"
            strokeWidth="1.8"
            filter="url(#glassDepthShadow)"
          />
          {/* Inner Cyan Glass Bevel Stroke */}
          <path
            d="M 300,188 L 376,215 L 300,242 L 224,215 Z"
            fill="none"
            stroke="rgba(56, 189, 248, 0.65)"
            strokeWidth="1"
          />

          {/* Etched Glass Circuitry Traces */}
          <path
            d="M 245,215 L 275,226 L 285,222"
            stroke="#38BDF8"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.8"
          />
          <circle cx="285" cy="222" r="2" fill="#38BDF8" />
          <path
            d="M 355,215 L 325,226 L 315,222"
            stroke="#818CF8"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.8"
          />
          <circle cx="315" cy="222" r="2" fill="#818CF8" />
          <path
            d="M 300,196 L 300,205"
            stroke="#38BDF8"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.8"
          />
          <circle cx="300" cy="205" r="2" fill="#38BDF8" />

          {/* ======================================================== */}
          {/* F. CENTRAL </> DEVELOPMENT MONUMENT                      */}
          {/* ======================================================== */}
          {/* Monument Base Glow */}
          <ellipse
            cx="300"
            cy="216"
            rx="40"
            ry="14"
            fill="#3B82F6"
            opacity="0.4"
            filter="url(#softGlow)"
          />

          {/* Bold 3D </> Symbol */}
          <g filter="url(#codeGlow)">
            {/* Left Bracket < */}
            <path
              d="M 284,204 L 273,214 L 284,224"
              stroke="url(#codeSymbolGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Center Slash / */}
            <path
              d="M 296,227 L 304,201"
              stroke="url(#codeSymbolGrad)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Right Bracket > */}
            <path
              d="M 316,204 L 327,214 L 316,224"
              stroke="url(#codeSymbolGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Specular White Line Inside Slash for 3D Shimmer */}
            <path
              d="M 296,227 L 304,201"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M 284,204 L 273,214 L 284,224"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.7"
            />
          </g>

          {/* ======================================================== */}
          {/* G. DECORATIVE FLOATING 3D CHROME SPHERES                 */}
          {/* ======================================================== */}
          {/* Sphere 1: Top Left */}
          <g>
            <ellipse cx="140" cy="85" rx="11" ry="4" fill="rgba(15, 23, 42, 0.15)" />
            <circle cx="140" cy="75" r="11" fill="url(#chromeSphereGrad)" />
            <circle cx="137" cy="71" r="3" fill="#FFFFFF" opacity="0.8" />
          </g>

          {/* Sphere 2: Mid Left */}
          <g>
            <ellipse cx="230" cy="225" rx="9" ry="3" fill="rgba(15, 23, 42, 0.12)" />
            <circle cx="230" cy="218" r="9" fill="url(#chromeSphereGrad)" />
            <circle cx="227" cy="215" r="2.5" fill="#FFFFFF" opacity="0.8" />
          </g>

          {/* Sphere 3: Lower Left */}
          <g>
            <ellipse cx="135" cy="425" rx="10" ry="3.5" fill="rgba(15, 23, 42, 0.12)" />
            <circle cx="135" cy="417" r="10" fill="url(#chromeSphereGrad)" />
            <circle cx="132" cy="413" r="2.5" fill="#FFFFFF" opacity="0.8" />
          </g>

          {/* Sphere 4: Mid Right */}
          <g>
            <ellipse cx="460" cy="335" rx="9" ry="3" fill="rgba(15, 23, 42, 0.12)" />
            <circle cx="460" cy="328" r="9" fill="url(#chromeSphereGrad)" />
            <circle cx="457" cy="325" r="2.5" fill="#FFFFFF" opacity="0.8" />
          </g>

          {/* Sphere 5: Far Right */}
          <g>
            <ellipse cx="580" cy="370" rx="8" ry="3" fill="rgba(15, 23, 42, 0.1)" />
            <circle cx="580" cy="364" r="8" fill="url(#chromeSphereGrad)" />
            <circle cx="578" cy="361" r="2" fill="#FFFFFF" opacity="0.8" />
          </g>
        </svg>
      </div>

      {/* ======================================================== */}
      {/* 3. FLOATING 3D ICON OBJECTS (Figma, Globe, DB, Arrow)    */}
      {/* ======================================================== */}

      {/* A. 3D FIGMA CUBE (Top Center-Left) */}
      <div
        className="absolute top-[8%] left-[45%] z-20 hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1E112A] via-[#2A1740] to-[#3B1D5A] border border-purple-400/40 shadow-[0_14px_30px_rgba(76,29,149,0.35),0_0_15px_rgba(168,85,247,0.25)]"
        title="Figma Design Integration"
      >
        {/* Authentic Figma 5-pill logo */}
        <div className="flex flex-col gap-[2px]">
          <div className="flex gap-[2px]">
            <div className="w-2.5 h-2.5 rounded-l-full bg-[#F24E1E]" />
            <div className="w-2.5 h-2.5 rounded-r-full bg-[#FF7262]" />
          </div>
          <div className="flex gap-[2px]">
            <div className="w-2.5 h-2.5 rounded-l-full bg-[#A259FF]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#1ABCFE]" />
          </div>
          <div className="w-2.5 h-2.5 rounded-bl-full rounded-tl-full bg-[#0ACF83]" />
        </div>
        {/* Subtle glass reflection highlight on cube */}
        <div className="absolute top-1 left-1.5 right-1.5 h-2.5 rounded-t-xl bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
      </div>

      {/* B. 3D GLOWING WIREFRAME GLOBE (Mid-Left) */}
      <div
        className="absolute top-[35%] left-[29%] z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#0F172A] via-[#1D4ED8] to-[#38BDF8] border border-cyan-300/50 shadow-[0_10px_25px_rgba(56,189,248,0.35)]"
        title="Global Web Network"
      >
        <svg viewBox="0 0 40 40" className="w-7 h-7 stroke-cyan-200/90 fill-none" strokeWidth="1.2">
          <circle cx="20" cy="20" r="13" />
          <ellipse cx="20" cy="20" rx="6.5" ry="13" />
          <line x1="7" y1="20" x2="33" y2="20" />
          <line x1="10" y1="13" x2="30" y2="13" />
          <line x1="10" y1="27" x2="30" y2="27" />
        </svg>
        {/* Specular White Dot */}
        <div className="absolute top-1.5 left-2 w-2 h-2 rounded-full bg-white/70 blur-[0.5px]" />
      </div>

      {/* C. 3D DATABASE CYLINDER STACK (Mid-Right) */}
      <div
        className="absolute top-[43%] right-[29%] z-20 hidden md:flex flex-col items-center justify-center gap-1 w-9 h-11 p-1 rounded-xl bg-gradient-to-b from-[#1E293B] to-[#0F172A] border border-cyan-400/35 shadow-[0_10px_25px_rgba(6,182,212,0.25)]"
        title="Scalable Cloud Data Architecture"
      >
        <div className="w-7 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border border-white/40 shadow-xs" />
        <div className="w-7 h-2 rounded-full bg-slate-700/80 border border-cyan-400/40" />
        <div className="w-7 h-2 rounded-full bg-slate-800/90 border border-indigo-400/40" />
      </div>

      {/* D. 3D PURPLE GROWTH ARROW CUBE (Bottom Center) */}
      <div
        className="absolute bottom-[8%] left-[43%] z-20 hidden sm:flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#6D28D9] via-[#8B5CF6] to-[#C026D3] border border-white/40 shadow-[0_12px_28px_rgba(139,92,246,0.45)]"
        title="High-Growth Performance"
      >
        <ArrowUpRight className="w-6 h-6 text-white stroke-[2.5]" />
        {/* Beveled Specular Rim */}
        <div className="absolute inset-0 rounded-2xl border-t border-white/50 pointer-events-none" />
      </div>

      {/* ======================================================== */}
      {/* 4. 6 FLOATING GLASS CAPABILITY CARDS (CLICKABLE NODES)   */}
      {/* ======================================================== */}
      {CAPABILITY_CARDS.map((card) => {
        const IconComponent = card.icon;
        const isActive = activeNode === card.id;
        return (
          <button
            type="button"
            key={card.id}
            onClick={() => onSelectNode(card.id)}
            aria-label={`Select ${card.title} architecture pillar`}
            className={`absolute ${card.desktopPos} z-30 hidden lg:flex items-center justify-between gap-3 w-[215px] xl:w-[230px] p-3 rounded-2xl backdrop-blur-xl border transition-all duration-300 text-left cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              isActive
                ? 'bg-white/95 border-indigo-500/80 shadow-[0_16px_36px_-6px_rgba(99,102,241,0.28)] ring-2 ring-indigo-500/30'
                : 'bg-white/92 border-slate-200/90 shadow-[0_12px_28px_-6px_rgba(99,102,241,0.12),0_4px_12px_rgba(15,23,42,0.04)] hover:bg-white hover:border-indigo-300/80 hover:shadow-[0_16px_36px_-6px_rgba(99,102,241,0.20)]'
            }`}
          >
            {/* Left: Icon & Text */}
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                  isActive ? 'scale-105' : 'group-hover:scale-105'
                } ${card.iconBg} ${card.iconColor}`}
              >
                <IconComponent className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span
                  className={`font-heading font-extrabold text-xs text-[#0F172A] leading-tight block truncate transition-colors ${
                    isActive ? 'text-indigo-600' : 'group-hover:text-blue-600'
                  }`}
                >
                  {card.title}
                </span>
                <span className="text-[10px] text-[#64748B] font-sans leading-tight mt-0.5 block line-clamp-1">
                  {card.desc}
                </span>
              </div>
            </div>

            {/* Right: Circular Arrow Action Indicator */}
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
                  : 'bg-blue-50 border border-blue-200/60 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
              }`}
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </button>
        );
      })}

      {/* ======================================================== */}
      {/* 5. RESPONSIVE FALLBACK: TABLET & MOBILE CARDS GRID       */}
      {/* ======================================================== */}
      <div className="lg:hidden absolute bottom-2 left-2 right-2 grid grid-cols-2 gap-2 z-30">
        {CAPABILITY_CARDS.slice(0, 4).map((card) => {
          const IconComponent = card.icon;
          const isActive = activeNode === card.id;
          return (
            <button
              type="button"
              key={`mob-${card.id}`}
              onClick={() => onSelectNode(card.id)}
              className={`flex items-center justify-between gap-2 p-2.5 rounded-xl backdrop-blur-md border shadow-sm transition-all text-left cursor-pointer ${
                isActive
                  ? 'bg-white border-blue-500 ring-2 ring-blue-500/20'
                  : 'bg-white/92 border-slate-200/90 shadow-xs hover:bg-white hover:border-indigo-300/60'
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border ${card.iconBg} ${card.iconColor}`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="font-heading font-bold text-[11px] text-[#0F172A] leading-none block truncate">
                    {card.title}
                  </span>
                </div>
              </div>
              <ArrowUpRight
                className={`w-3 h-3 shrink-0 ${
                  isActive ? 'text-indigo-600' : 'text-blue-600'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
