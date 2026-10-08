import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  TECHNOLOGIES_INTRO,
  TECHNOLOGY_CATEGORIES,
} from '../../data/technologies';
import { TechnologyCategory } from './technologies/TechnologyCategory';
import { TechnologyDetail } from './technologies/TechnologyDetail';
import { TechnologyEcosystem } from './technologies/TechnologyEcosystem';

/**
 * Technologies Section Component (2026 Premium Digital Studio Redesign)
 * 
 * Living technology ecosystem architecture:
 * - Subtle 22px technical dot-grid canvas
 * - Large ambient radial glows (indigo, purple, cyan)
 * - Capsule badge: [ ● // TECHNOLOGY ECOSYSTEM ]
 * - High-impact centered typography with animated gradient text
 * - Left static domain display cards (Frontend, Backend, Database, Integration, Digital)
 * - Bottom floating tech detail card with vector logos
 * - Right live SVG ecosystem canvas with animated data packet particles
 * - Full prefers-reduced-motion support
 */
export function Technologies() {
  const shouldReduceMotion = useReducedMotion();
  const defaultCategory = TECHNOLOGY_CATEGORIES[0];

  return (
    <section
      id="technologies"
      aria-label="ANK Digital Media Technology Ecosystem"
      className="relative py-20 sm:py-24 lg:py-32 bg-transparent text-brand-dark overflow-hidden scroll-mt-20 select-none"
    >
      {/* 1. Subtle 22px Technical Dot Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(148, 163, 184, 0.18) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden="true"
      />

      {/* 2. Large Drifting Ambient Radial Glows */}
      {/* Primary Orb: Soft Indigo (Positioned behind ecosystem canvas) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 25, -20, 0],
                y: [0, -20, 15, 0],
              }
        }
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-1/4 right-[5%] w-[650px] sm:w-[800px] h-[650px] sm:h-[800px] rounded-full blur-[140px] opacity-[0.16]"
        style={{
          background: 'radial-gradient(circle, #6366F1 0%, #3B82F6 40%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Secondary Orb: Soft Purple (Positioned toward left) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -25, 20, 0],
                y: [0, 20, -15, 0],
              }
        }
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-1/3 left-[-5%] w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] rounded-full blur-[130px] opacity-[0.12]"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, #A855F7 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Tertiary Orb: Subtle Cyan Accent (Center Bottom) */}
      <div
        className="pointer-events-none absolute bottom-12 left-1/3 w-[500px] h-[400px] rounded-full blur-[130px] opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, #06B6D4 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3. SECTION INTRO */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 lg:mb-20"
        >
          {/* Upgraded Capsule Badge: [ ● // TECHNOLOGY ECOSYSTEM ] */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-xl border border-indigo-200/60 shadow-[0_4px_16px_rgba(99,102,241,0.08)] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-700 uppercase">
              // TECHNOLOGY ECOSYSTEM
            </span>
          </div>

          {/* High-Impact Centered Display Headline */}
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] text-[#0F172A] tracking-[-0.03em] leading-[1.06] mb-5">
            {TECHNOLOGIES_INTRO.headlinePart1}
            <span
              className="block mt-1 bg-clip-text text-transparent font-black"
              style={{
                backgroundImage: 'linear-gradient(90deg, #2563EB 0%, #6366F1 35%, #8B5CF6 70%, #EC4899 100%)',
              }}
            >
              {TECHNOLOGIES_INTRO.headlinePart2}
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-[650px] mx-auto">
            {TECHNOLOGIES_INTRO.supporting}
          </p>
        </motion.div>

        {/* 4. PRIMARY ASYMMETRIC TECHNOLOGY ARCHITECTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-0">
          {/* LEFT: Category Navigation & Active Detail (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-200/80">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                Technology Domains
              </span>
              <span className="text-xs font-mono text-indigo-600 font-semibold">
                TECHNOLOGY ECOSYSTEM
              </span>
            </div>

            {/* Left Static Domain Display Cards */}
            <TechnologyCategory categories={TECHNOLOGY_CATEGORIES} />

            {/* Default Technology Detail Panel */}
            <TechnologyDetail category={defaultCategory} />
          </div>

          {/* RIGHT: Interactive Technology Ecosystem Visualization (7 cols on desktop) */}
          <div className="lg:col-span-7">
            <TechnologyEcosystem categories={TECHNOLOGY_CATEGORIES} />
          </div>
        </div>
      </div>
    </section>
  );
}
