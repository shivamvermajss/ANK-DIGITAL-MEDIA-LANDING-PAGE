import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  CheckCircle2,
  Layers,
  Activity,
  Smartphone,
  Sparkles,
  Cloud,
  PenTool,
  TrendingUp,
  ShieldCheck,
  Cpu,
} from 'lucide-react';
import { DEVELOPMENT_CATEGORY, DEVELOPMENT_PIPELINE_NODES } from '../../../data/services';
import { DevelopmentShowcaseVisual } from './DevelopmentShowcaseVisual';

const PRODUCT_MODES = [
  { id: 'web', label: 'Web Platform', tag: 'Responsive Web' },
  { id: 'app', label: 'Web Application', tag: 'SaaS & Portals' },
  { id: 'mobile', label: 'Mobile App', tag: 'iOS & Android' },
  { id: 'ecommerce', label: 'E-Commerce', tag: 'Digital Store' },
];

const PIPELINE_NODES_LIST = [
  { id: 'strategy', label: 'Strategy & Research', icon: Sparkles },
  { id: 'design', label: 'UI/UX Design', icon: PenTool },
  { id: 'development', label: 'Development', icon: Code2, isPrimary: true },
  { id: 'optimization', label: 'Optimization', icon: TrendingUp },
  { id: 'deployment', label: 'Deployment', icon: Cloud },
  { id: 'support', label: 'Ongoing Support', icon: ShieldCheck },
];

/**
 * MicroPreview: Renders authentic, concept-labeled visual micro-previews
 * Strictly avoids fake numerical claims (no fake LCP numbers, no fake 99.9% uptime).
 */
function FeatureMicroPreview({ previewType }) {
  switch (previewType) {
    case 'architecture':
      return (
        <div className="mt-3 p-3.5 rounded-xl bg-slate-900/90 text-white border border-slate-700/80 shadow-inner">
          <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-800">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400">
              <Layers className="w-3 h-3 text-blue-400" />
              ARCHITECTURE PREVIEW
            </span>
            <span className="text-[9px] font-mono text-slate-400">Decoupled Modules</span>
          </div>

          {/* Isometric / Visual Node Tree */}
          <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono">
            <div className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 text-blue-300">
              Core Engine
            </div>
            <div className="p-1.5 rounded-lg bg-indigo-900/50 border border-indigo-700 text-indigo-300">
              API Bridge
            </div>
            <div className="p-1.5 rounded-lg bg-purple-900/50 border border-purple-700 text-purple-300">
              UI System
            </div>
          </div>
          <div className="mt-2 text-[10px] text-slate-400 font-mono text-center flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Independent lifecycle & zero-dependency coupling</span>
          </div>
        </div>
      );

    case 'performance':
      return (
        <div className="mt-3 p-3.5 rounded-xl bg-slate-900/90 text-white border border-slate-700/80 shadow-inner">
          <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-800">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400">
              <Activity className="w-3 h-3 text-indigo-400" />
              CONCEPT PREVIEW
            </span>
            <span className="text-[9px] font-mono text-emerald-400">60 FPS Target</span>
          </div>

          {/* Smooth execution waveform */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Frame Budget</span>
              <span className="text-emerald-400">Fluid Execution</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden p-0.5">
              <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400" />
            </div>
            <svg viewBox="0 0 200 24" className="w-full h-5 text-indigo-400 stroke-current fill-none">
              <path
                d="M 0,16 Q 25,6 50,14 T 100,10 T 150,15 T 200,8"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      );

    case 'design':
    case 'responsive':
      return (
        <div className="mt-3 p-3.5 rounded-xl bg-slate-900/90 text-white border border-slate-700/80 shadow-inner">
          <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-800">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400">
              <Smartphone className="w-3 h-3 text-purple-400" />
              LAYOUT PREVIEW
            </span>
            <span className="text-[9px] font-mono text-slate-400">Adaptive Grid</span>
          </div>

          {/* Responsive Viewport concept */}
          <div className="flex items-center justify-center gap-3 py-1">
            <div className="w-14 h-9 rounded border border-purple-400/50 bg-purple-950/40 flex flex-col p-1 gap-0.5">
              <div className="h-1 w-full bg-purple-400/40 rounded-2xs" />
              <div className="grid grid-cols-2 gap-0.5 flex-1">
                <div className="bg-purple-400/20 rounded-2xs" />
                <div className="bg-purple-400/20 rounded-2xs" />
              </div>
            </div>
            <div className="w-9 h-9 rounded border border-indigo-400/50 bg-indigo-950/40 flex flex-col p-1 gap-0.5">
              <div className="h-1 w-full bg-indigo-400/40 rounded-2xs" />
              <div className="h-3 w-full bg-indigo-400/20 rounded-2xs mt-auto" />
            </div>
            <div className="w-5 h-9 rounded border border-blue-400/50 bg-blue-950/40 flex flex-col p-0.5 gap-0.5">
              <div className="h-1 w-full bg-blue-400/40 rounded-2xs" />
              <div className="h-4 w-full bg-blue-400/20 rounded-2xs mt-auto" />
            </div>
          </div>
          <p className="text-[9px] font-mono text-slate-400 text-center mt-1">
            Seamless layout adaptation across Desktop, Tablet & Mobile
          </p>
        </div>
      );

    default:
      return (
        <div className="mt-3 p-3 rounded-xl bg-slate-900/90 text-white border border-slate-700/80 shadow-inner">
          <div className="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-slate-800">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400">
              <Cpu className="w-3 h-3 text-blue-400" />
              PIPELINE WORKFLOW
            </span>
            <span className="text-[9px] font-mono text-emerald-400">Continuous Integration</span>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-300 pt-1">
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Audit</span>
            <span className="text-slate-500">→</span>
            <span className="px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-700 text-indigo-300">Engine</span>
            <span className="text-slate-500">→</span>
            <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-700 text-emerald-300">Deploy</span>
          </div>
        </div>
      );
  }
}

/**
 * DevelopmentShowcase Component (01 / DEVELOP)
 * Features:
 * - Interactive left-side 3D product-architecture visual with 6 clickable capability nodes
 * - Active illuminated connecting beams linking the active node to the right details card
 * - Premium sliding segmented control tabs with Framer Motion layoutId
 * - Glassmorphic right details card with dynamic node context
 * - Interactive micro-previews with zero fake claims
 */
export function DevelopmentShowcase() {
  const [activeMode, setActiveMode] = useState('web');
  const [activeNode, setActiveNode] = useState('development');
  const [activePillarHover, setActivePillarHover] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const currentNodeData =
    DEVELOPMENT_PIPELINE_NODES[activeNode] || DEVELOPMENT_PIPELINE_NODES.development;

  return (
    <div id="development-showcase" className="relative scroll-mt-24 mb-20 sm:mb-24 lg:mb-32">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[500px] rounded-full bg-gradient-to-tr from-blue-400/15 via-indigo-400/12 to-purple-400/15 blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* 1. SUBSECTION HEADER: 01 / DEVELOP */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10"
      >
        <div className="max-w-2xl">
          {/* Eyebrow Milestone Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs font-mono font-bold tracking-wider mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>01 / DEVELOP</span>
            <span className="text-blue-300">•</span>
            <span className="text-blue-600/80">PRIMARY FOCUS</span>
          </div>

          {/* Heading */}
          <h3 className="font-heading font-black text-2xl sm:text-4xl lg:text-[2.75rem] text-[#0F172A] tracking-[-0.03em] leading-[1.08]">
            WE BUILD DIGITAL PRODUCTS
            <span className="block mt-1">THAT WORK AS BEAUTIFULLY</span>
            <span className="block mt-1">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 bg-clip-text text-transparent inline-block">
                AS THEY LOOK.
              </span>
            </span>
          </h3>
        </div>

        {/* Sliding Segmented Control Tabs using layoutId */}
        <div className="relative flex items-center gap-1 p-1 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-2xs self-start md:self-end overflow-x-auto max-w-full">
          {PRODUCT_MODES.map((mode) => {
            const isActive = activeMode === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveMode(mode.id)}
                className="relative px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-tight transition-colors duration-200 shrink-0 cursor-pointer select-none"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProductModePill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xs"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-150 ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {mode.label}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Interactive Node Quick Switcher (Mobile & Tablet Friendly Bar) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 sm:mb-8 lg:hidden scrollbar-none">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1">
          Pipeline:
        </span>
        {PIPELINE_NODES_LIST.map((node) => {
          const NodeIcon = node.icon;
          const isActive = activeNode === node.id;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveNode(node.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold shrink-0 transition-all cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white/80 border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <NodeIcon className="w-3 h-3" />
              <span>{node.label}</span>
            </button>
          );
        })}
      </div>

      {/* 2. MAIN ASYMMETRIC SHOWCASE (3D Architecture Left ~60%, Feature Right ~40%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* ======================================================== */}
        {/* LEFT: 3D DIGITAL PRODUCT ARCHITECTURE VISUAL (~60%)      */}
        {/* ======================================================== */}
        <div className="lg:col-span-7 xl:col-span-7 relative w-full flex items-center justify-center">
          <DevelopmentShowcaseVisual
            activeNode={activeNode}
            onSelectNode={(nodeId) => setActiveNode(nodeId)}
          />
        </div>

        {/* ======================================================== */}
        {/* RIGHT: PRIMARY FEATURE SPOTLIGHT (~40%)                  */}
        {/* Glassmorphic details card with dynamic pipeline state     */}
        {/* ======================================================== */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between rounded-3xl relative overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(99, 102, 241, 0.15)',
            boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.12)',
            padding: '1.75rem',
          }}
        >
          {/* Subtle decorative glow ring */}
          <div
            className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br from-blue-400/20 via-indigo-400/15 to-purple-400/20 blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {/* Category Tag & Pipeline Node Indicator */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-md">
                  <Code2 className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50/90 px-3 py-1 rounded-full border border-blue-200/80">
                    {currentNodeData.badge}
                  </span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h4 className="font-heading font-black text-2xl sm:text-3xl text-[#0F172A] tracking-tight leading-snug mb-2.5">
                {currentNodeData.title}
              </h4>
              <p className="text-sm sm:text-base text-[#475569] font-sans leading-relaxed mb-6">
                {currentNodeData.tagline}
              </p>

              {/* Interactive Feature Checklist with Micro-Previews */}
              <div className="space-y-3 pt-1 mb-6">
                {currentNodeData.pillars.map((pillar, idx) => {
                  const isHoveredOrActive = activePillarHover === idx;
                  return (
                    <div
                      key={pillar.id || idx}
                      onMouseEnter={() => setActivePillarHover(idx)}
                      onFocus={() => setActivePillarHover(idx)}
                      tabIndex={0}
                      role="button"
                      aria-expanded={isHoveredOrActive}
                      className={`p-3.5 rounded-2xl border transition-all duration-200 text-left outline-none cursor-pointer ${
                        isHoveredOrActive
                          ? 'bg-white/95 border-indigo-300/80 shadow-[0_8px_20px_-6px_rgba(99,102,241,0.18)]'
                          : 'bg-white/60 border-slate-200/80 hover:bg-white/80 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 transition-colors ${
                            isHoveredOrActive ? 'text-indigo-600' : 'text-blue-500'
                          }`}
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-heading font-bold text-slate-900 block">
                              {pillar.title}
                            </span>
                            <span
                              className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider transition-colors ${
                                isHoveredOrActive
                                  ? 'bg-indigo-100 text-indigo-700'
                                  : 'text-slate-400 bg-slate-100'
                              }`}
                            >
                              {isHoveredOrActive ? 'Active Preview' : 'Interactive'}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-500 font-sans block mt-0.5">
                            {pillar.desc}
                          </span>

                          {/* Expandable Micro-Preview Container */}
                          <AnimatePresence>
                            {isHoveredOrActive && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <FeatureMicroPreview previewType={pillar.previewType} />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA Link to Contact / Work */}
          <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-bold text-white bg-cta-primary shadow-[0_10px_25px_-5px_rgba(59,130,246,0.35)] hover:shadow-[0_14px_30px_-5px_rgba(139,92,246,0.45)] transition-all select-none cursor-pointer"
            >
              <span>{currentNodeData.ctaText || DEVELOPMENT_CATEGORY.ctaText || 'Explore Development'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#development-capabilities"
              className="text-xs font-mono text-slate-500 hover:text-blue-600 font-medium transition-colors"
            >
              8 Capabilities Below ↓
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

