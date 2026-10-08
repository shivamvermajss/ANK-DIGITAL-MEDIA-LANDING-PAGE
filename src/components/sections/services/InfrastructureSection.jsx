import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { INFRASTRUCTURE_CATEGORY } from '../../../data/services';
import { InfrastructureCard } from './InfrastructureCard';

/**
 * InfrastructureSection Component (04 / POWER • DIGITAL FOUNDATION)
 * 
 * Digital foundation visual system:
 * - Ambient blue/indigo glow & subtle 24px dot-grid background
 * - 2-column infrastructure visual cards: Web Hosting (micro-dashboard) & Domain Registration (DNS mesh)
 * - Authentic capability badges & interactive button-link CTAs
 * - Clean transition into Selected Work section
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
      {/* 1. Subtle 24px Background Dot Grid */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-500"
        style={{
          backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.18) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.85,
        }}
        aria-hidden="true"
      />

      {/* 2. Soft Ambient Blue/Indigo Glow behind infrastructure cards */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[360px] rounded-full blur-[120px] opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.7), rgba(99, 102, 241, 0.5), transparent 70%)',
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
