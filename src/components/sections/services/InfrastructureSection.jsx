import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { INFRASTRUCTURE_CATEGORY } from '../../../data/services';
import { InfrastructureCard } from './InfrastructureCard';

/**
 * InfrastructureSection Component (04 / POWER • DIGITAL FOUNDATION)
 * 
 * Digital foundation visual system:
 * - 24px subtle dot-grid canvas behind content, cards, and text (-z-10, opacity 0.28)
 * - Atmospheric ambient radial glow (soft indigo biased toward Web Hosting + secondary weak violet glow)
 * - 2-column infrastructure visual cards: Web Hosting (micro-dashboard) & Domain Registration (DNS mesh)
 * - Authentic capability badges & interactive button-link CTAs
 * - Respects prefers-reduced-motion
 */
export function InfrastructureSection() {
  const shouldReduceMotion = useReducedMotion();

  const hostingService = INFRASTRUCTURE_CATEGORY.services.find(
    (s) => s.id === 'web-hosting'
  );
  const domainService = INFRASTRUCTURE_CATEGORY.services.find(
    (s) => s.id === 'domain-registration'
  );

  return (
    <section className="relative mb-0 rounded-3xl p-4 sm:p-6 lg:p-8 overflow-hidden">
      {/* 1. Subtle 24px Background Dot Grid (strictly behind content & cards) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl -z-10"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.28,
        }}
        aria-hidden="true"
      />

      {/* 2. Ambient Radial Glow: Primary soft indigo biased toward Web Hosting */}
      <div
        className="pointer-events-none absolute top-28 left-[35%] -translate-x-1/2 w-[600px] sm:w-[800px] h-[400px] rounded-full blur-[120px] -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.16), transparent 65%)',
          opacity: 0.85,
        }}
        aria-hidden="true"
      />

      {/* Secondary weak violet/blue glow behind Domain Registration card */}
      <div
        className="pointer-events-none absolute top-36 left-[72%] -translate-x-1/2 w-[450px] sm:w-[650px] h-[360px] rounded-full blur-[120px] -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.10), transparent 65%)',
          opacity: 0.75,
        }}
        aria-hidden="true"
      />

      {/* 3. SUBSECTION HEADER: 04 / POWER */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10"
      >
        <div className="max-w-2xl">
          {/* Eyebrow Milestone Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/90 border border-indigo-200/80 text-indigo-700 text-xs font-mono font-bold tracking-wider mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span>04 / POWER</span>
            <span className="text-indigo-300">•</span>
            <span className="text-indigo-600/80">DIGITAL FOUNDATION</span>
          </div>

          {/* Heading with smooth Blue -> Indigo -> Violet gradient on FOUNDATION. */}
          <h3 className="font-heading font-black text-2xl sm:text-4xl lg:text-[2.75rem] text-[#0F172A] tracking-[-0.03em] leading-[1.08]">
            THE DIGITAL{' '}
            <span className="relative inline-block">
              <span
                className="bg-clip-text text-transparent inline-block font-black"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #2563EB 0%, #4F46E5 50%, #7C3AED 100%)',
                }}
              >
                FOUNDATION.
              </span>
              {/* Subtle back-glow */}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-indigo-500/10 blur-xl pointer-events-none -z-10"
              />
            </span>
          </h3>
        </div>

        {/* Supporting description aligned with visual center of heading */}
        <p className="text-sm sm:text-base text-[#475569] font-sans max-w-md leading-relaxed self-start md:self-end pb-1">
          {INFRASTRUCTURE_CATEGORY.tagline}
        </p>
      </motion.div>

      {/* 4. TWO MAIN INFRASTRUCTURE VISUAL CARDS */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {hostingService && (
          <InfrastructureCard
            service={hostingService}
            index={0}
          />
        )}
        {domainService && (
          <InfrastructureCard
            service={domainService}
            index={1}
          />
        )}
      </div>
    </section>
  );
}
