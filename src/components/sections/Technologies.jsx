import React, { useState, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TECHNOLOGIES_INTRO, DOMAIN_KEYS } from '../../data/technologies';
import { TechnologyDomainSelector } from './technologies/TechnologyDomainSelector';
import { TechnologyEcosystem } from './technologies/TechnologyEcosystem';

/**
 * Technologies Section ("Technology Ecosystem")
 * Complete Premium 2026 Redesign:
 * - Light premium theme (#F8FAFC / white foundation, frosted glass, soft indigo/blue/violet glows)
 * - 100% verified ANK capabilities (zero fake stats, zero unverified tech stack claims)
 * - Two-column responsive layout: Left 40% Domain Selector / Right 60% Live Ecosystem Showcase
 * - Sliding Framer Motion layoutId="technologyActivePill" active indicator
 * - Central "DIGITAL EXPERIENCE" technology core with delicate energy lines & orbiting satellites
 * - Performance optimized: rAF-throttled CSS variable spotlight, React.memo, reduced-motion support
 */
export function Technologies() {
  const [activeTabId, setActiveTabId] = useState('web');
  const shouldReduceMotion = useReducedMotion();

  const handleSelectDomain = useCallback((id) => {
    if (DOMAIN_KEYS.includes(id)) {
      setActiveTabId(id);
    }
  }, []);

  return (
    <section
      id="technologies"
      aria-label="ANK Digital Media Technology Ecosystem"
      className="relative py-20 sm:py-24 lg:py-28 bg-transparent text-brand-dark overflow-hidden scroll-mt-20 select-none"
    >
      {/* ======================================================== */}
      {/* 1. BACKGROUND DEPTH: TECHNICAL DOT GRID & AMBIENT ORBS  */}
      {/* ======================================================== */}
      {/* LAYER 1: Subtle technical canvas dot grid (20px x 20px) */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />

      {/* Orb 1: Soft Indigo / Blue */}
      <div
        className="pointer-events-none absolute top-10 left-1/4 w-[700px] h-[600px] -translate-x-1/2 rounded-full -z-10"
        style={{
          backgroundColor: 'rgba(129, 140, 248, 0.10)',
          filter: 'blur(120px)',
        }}
        aria-hidden="true"
      />

      {/* Orb 2: Soft Purple / Violet */}
      <div
        className="pointer-events-none absolute top-1/2 right-[-5%] w-[650px] h-[550px] rounded-full -z-10"
        style={{
          backgroundColor: 'rgba(168, 85, 247, 0.08)',
          filter: 'blur(120px)',
        }}
        aria-hidden="true"
      />

      {/* Orb 3: Extremely subtle Cyan highlight */}
      <div
        className="pointer-events-none absolute bottom-10 left-1/3 w-[500px] h-[400px] rounded-full -z-10"
        style={{
          backgroundColor: 'rgba(6, 182, 212, 0.06)',
          filter: 'blur(100px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ======================================================== */}
        {/* 2. SECTION HEADER: EDITORIAL TITLE & GRADIENT HIGHLIGHT   */}
        {/* ======================================================== */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-700">
              {TECHNOLOGIES_INTRO.eyebrow}
            </span>
          </div>

          {/* Main Editorial Display Heading */}
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-[3.25rem] text-[#0F172A] tracking-[-0.03em] leading-[1.08] mb-4">
            {TECHNOLOGIES_INTRO.headlinePart1}
            <span className="block mt-1 sm:mt-1.5">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">
                {TECHNOLOGIES_INTRO.headlinePart2}
              </span>
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#475569] font-sans leading-relaxed max-w-2xl mx-auto">
            {TECHNOLOGIES_INTRO.supporting}
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* 3. TWO-COLUMN MAIN LAYOUT: ~40% SELECTOR / ~60% SHOWCASE  */}
        {/* ======================================================== */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
        >
          {/* Left Column: Domain Selector Cards (~40% desktop) */}
          <div className="lg:col-span-5 w-full">
            <div className="mb-3 px-1">
              <span className="text-xs font-mono font-bold tracking-wider text-slate-600 uppercase">
                CAPABILITY DOMAINS
              </span>
            </div>
            <TechnologyDomainSelector
              activeTabId={activeTabId}
              onSelectDomain={handleSelectDomain}
            />
          </div>

          {/* Right Column: Live Ecosystem Showcase (~60% desktop) */}
          <div className="lg:col-span-7 w-full">
            <TechnologyEcosystem
              activeTabId={activeTabId}
              onSelectDomain={handleSelectDomain}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
