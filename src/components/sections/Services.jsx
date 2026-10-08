import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { SERVICES_INTRO, FULL_SERVICE_PILLARS } from '../../data/services';
import { DevelopmentShowcase } from './services/DevelopmentShowcase';
import { DevelopmentCapabilities } from './services/DevelopmentCapabilities';
import { DigitalMarketingSection } from './services/DigitalMarketingSection';
import { CommunicationSection } from './services/CommunicationSection';
import { InfrastructureSection } from './services/InfrastructureSection';

/**
 * Services Section ("What We Do")
 * Complete Premium 2026 Redesign:
 * - Communicates "FULL-SERVICE DIGITAL PARTNER": DEVELOP → GROW → CONNECT → POWER
 * - Development receives dominant visual priority
 * - Reduced vertical whitespace with intentional editorial rhythm
 * - Compact 4-node visual architecture bento bridge
 * - Technical canvas dot grid + soft ambient indigo & blue orbs
 * - 100% authentic ANK services with zero fake claims
 */
export function Services() {
  const shouldReduceMotion = useReducedMotion();

  const primaryPillar = FULL_SERVICE_PILLARS.find((p) => p.isPrimary) || FULL_SERVICE_PILLARS[0];
  const secondaryPillars = FULL_SERVICE_PILLARS.filter((p) => !p.isPrimary);

  return (
    <section
      id="services"
      aria-label="ANK Digital Media Full Service Portfolio"
      className="relative py-20 sm:py-24 lg:py-32 bg-transparent text-brand-dark overflow-hidden scroll-mt-20 select-none"
    >
      {/* ======================================================== */}
      {/* 1. BACKGROUND ATMOSPHERE: TECHNICAL CANVAS & AMBIENT ORBS */}
      {/* ======================================================== */}
      {/* Subtle technical canvas dot grid (24px x 24px) */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-70"
        style={{
          backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.16) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Orb 1: Soft Indigo / Violet */}
      <div
        className="pointer-events-none absolute top-12 left-1/4 w-[750px] h-[650px] -translate-x-1/2 rounded-full -z-10"
        style={{
          backgroundColor: 'rgba(129, 140, 248, 0.12)',
          filter: 'blur(120px)',
        }}
        aria-hidden="true"
      />

      {/* Orb 2: Soft Blue / Cyan */}
      <div
        className="pointer-events-none absolute top-1/3 right-[-10%] w-[800px] h-[700px] rounded-full -z-10"
        style={{
          backgroundColor: 'rgba(96, 165, 250, 0.10)',
          filter: 'blur(120px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ======================================================== */}
        {/* 2. SECTION INTRO: EDITORIAL HEADLINE & CAPABILITY STRIP  */}
        {/* ======================================================== */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-700">
              {SERVICES_INTRO.eyebrow}
            </span>
          </div>

          {/* Main Editorial Display Heading */}
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-[3.5rem] text-[#0F172A] tracking-[-0.03em] leading-[1.06] mb-4">
            {SERVICES_INTRO.headlinePart1}
            <span className="block mt-1 sm:mt-1.5 text-slate-800">
              EVERYTHING YOUR BUSINESS
            </span>
            <span className="block mt-1 sm:mt-1.5">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 bg-clip-text text-transparent inline-block">
                NEEDS TO GROW.
              </span>
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#475569] font-sans leading-relaxed max-w-2xl mx-auto mb-5">
            {SERVICES_INTRO.description}
          </p>

          {/* Compact Capability Strip: WEB • DIGITAL • COMMUNICATION • INFRASTRUCTURE */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-1.5 px-3 rounded-full bg-white/60 backdrop-blur-xs border border-slate-200/70 shadow-2xs">
            {SERVICES_INTRO.capabilityStrip.map((item, index) => (
              <React.Fragment key={item}>
                {index > 0 && (
                  <span className="text-slate-300 font-bold select-none text-xs">
                    •
                  </span>
                )}
                <span className="text-xs font-mono font-bold tracking-wider text-slate-700">
                  {item}
                </span>
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 3. COMPACT "FULL-SERVICE" VISUAL SYSTEM (BENTO BRIDGE)   */}
        {/* Connects intro to showcase with clear hierarchy:         */}
        {/* 01 DEVELOP (Primary) → 02 GROW → 03 CONNECT → 04 POWER   */}
        {/* ======================================================== */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-14"
        >
          {/* Subtle progression bar label */}
          <div className="flex items-center justify-between gap-4 mb-3 px-1">
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>Full-Service Digital Architecture</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
              <span className="text-blue-600 font-bold">DEVELOP</span>
              <span>→</span>
              <span className="text-purple-600 font-bold">GROW</span>
              <span>→</span>
              <span className="text-cyan-600 font-bold">CONNECT</span>
              <span>→</span>
              <span className="text-slate-600 font-bold">POWER</span>
            </div>
          </div>

          {/* Asymmetric Bento Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
            {/* 01 DEVELOP — PRIMARY HERO CARD (~42% width) */}
            <a
              href="#development-showcase"
              className="group lg:col-span-5 relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/95 via-blue-50/40 to-indigo-50/30 border border-blue-400/40 shadow-[0_12px_30px_-8px_rgba(59,130,246,0.18)] hover:shadow-[0_16px_36px_-6px_rgba(59,130,246,0.25)] hover:border-blue-500/60 transition-all duration-200 cursor-pointer select-none"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-mono font-bold tracking-wider shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>{primaryPillar.code} — {primaryPillar.category}</span>
                  <span className="text-blue-200">•</span>
                  <span>PRIMARY</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-blue-600 group-hover:translate-y-0.5 transition-transform">
                  <span>Showcase</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </span>
              </div>

              <div>
                <h4 className="font-heading font-black text-lg sm:text-xl text-[#0F172A] tracking-tight mb-1 group-hover:text-blue-700 transition-colors">
                  {primaryPillar.title}
                </h4>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {primaryPillar.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-blue-100 flex items-center justify-between text-[11px] font-mono">
                <span className="text-blue-700 font-bold">Interactive 3D Pipeline Below</span>
                <span className="text-slate-400">8 Practices</span>
              </div>
            </a>

            {/* 02 GROW, 03 CONNECT, 04 POWER COMPACT CARDS (~58% width) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {secondaryPillars.map((pillar) => {
                const isGrow = pillar.category === 'GROW';
                const isConnect = pillar.category === 'CONNECT';

                const badgeBg = isGrow
                  ? 'bg-purple-50 text-purple-700 border-purple-200/70'
                  : isConnect
                  ? 'bg-cyan-50 text-cyan-700 border-cyan-200/70'
                  : 'bg-slate-100 text-slate-700 border-slate-200';

                const hoverBorder = isGrow
                  ? 'hover:border-purple-300 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.15)]'
                  : isConnect
                  ? 'hover:border-cyan-300 hover:shadow-[0_12px_24px_-6px_rgba(6,182,212,0.15)]'
                  : 'hover:border-slate-400 hover:shadow-[0_12px_24px_-6px_rgba(15,23,42,0.10)]';

                const footerText = isGrow
                  ? 'Visibility & Growth →'
                  : isConnect
                  ? 'Customer Reach →'
                  : 'Digital Backbone →';

                const footerColor = isGrow
                  ? 'text-purple-600'
                  : isConnect
                  ? 'text-cyan-600'
                  : 'text-slate-600';

                return (
                  <a
                    key={pillar.id}
                    href={pillar.href}
                    className={`group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-2xs hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(99,102,241,0.14)] transition-all duration-300 cursor-pointer select-none ${hoverBorder}`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span
                          className={`px-2 py-0.5 rounded-md border text-[10px] font-mono font-bold ${badgeBg}`}
                        >
                          {pillar.code} — {pillar.category}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1.5 transition-transform duration-300" />
                      </div>
                      <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 mb-1 group-hover:text-slate-950 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-sans leading-snug">
                        {pillar.desc}
                      </p>
                    </div>
                    <div className={`mt-3 pt-2 border-t border-slate-100 text-[10px] font-mono font-bold ${footerColor}`}>
                      {footerText}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 4. PROGRESSION 01: DEVELOP — PRIMARY SHOWCASE (~55%)     */}
        {/* ======================================================== */}
        <DevelopmentShowcase />

        {/* 5. SUPPORTING DEVELOPMENT CAPABILITIES (8 Services)      */}
        <DevelopmentCapabilities />

        {/* ======================================================== */}
        {/* 6. PROGRESSION 02: GROW — DIGITAL MARKETING (~20%)       */}
        {/* ======================================================== */}
        <div id="digital-marketing" className="scroll-mt-24">
          <DigitalMarketingSection />
        </div>

        {/* ======================================================== */}
        {/* 7. PROGRESSION 03: CONNECT — COMMUNICATION (~15%)        */}
        {/* ======================================================== */}
        <div id="communication" className="scroll-mt-24">
          <CommunicationSection />
        </div>

        {/* ======================================================== */}
        {/* 8. PROGRESSION 04: POWER — INFRASTRUCTURE (~10%)         */}
        {/* ======================================================== */}
        <div id="infrastructure" className="scroll-mt-24">
          <InfrastructureSection />
        </div>
      </div>
    </section>
  );
}

