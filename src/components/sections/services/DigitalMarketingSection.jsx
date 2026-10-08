import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { MARKETING_CATEGORY } from '../../../data/services';
import { GrowthAnalyticsVisual } from './GrowthAnalyticsVisual';
import { MarketingServiceCard } from './MarketingServiceCard';

/**
 * DigitalMarketingSection Component (02 / GROW)
 * 
 * Upgraded into a Premium Digital Growth System:
 * - Subtle technical background dot-grid and dual ambient lighting orbs
 * - Refined milestone header with blurred headline glow and aligned subtitle
 * - Left strategic centerpiece card with frosted glass depth and "LIVE DIGITAL GROWTH" micro-analytics visual
 * - 6 interactive right-side capability cards with cursor spotlight, gradient border sheen, icon capsules, and capability pills
 * - Zero fake statistics or marketing claims
 * - Fully responsive & respects prefers-reduced-motion
 */
export function DigitalMarketingSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mb-24 sm:mb-28 lg:mb-36 select-none">
      {/* ======================================================== */}
      {/* 1. BACKGROUND: SUBTLE DOT-GRID & DUAL AMBIENT GLOW ORBS  */}
      {/* ======================================================== */}
      <div
        className="pointer-events-none absolute -inset-x-6 sm:-inset-x-12 -inset-y-10 sm:-inset-y-14 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        {/* Subtle technical canvas dot grid (24px x 24px) */}
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              'radial-gradient(rgba(148, 163, 184, 0.18) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Ambient Orb 1: Behind Left Featured Card (Purple ~0.08) */}
        <div
          className="absolute top-1/4 left-10 w-[550px] h-[450px] rounded-full pointer-events-none"
          style={{
            backgroundColor: 'rgba(139, 92, 246, 0.08)',
            filter: 'blur(110px)',
          }}
        />

        {/* Ambient Orb 2: Behind Right Grid (Indigo/Blue ~0.05) */}
        <div
          className="absolute top-1/3 right-10 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            backgroundColor: 'rgba(99, 102, 241, 0.05)',
            filter: 'blur(120px)',
          }}
        />
      </div>

      {/* ======================================================== */}
      {/* 2. SUBSECTION HEADER: 02 / GROW                          */}
      {/* ======================================================== */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12"
      >
        <div className="max-w-2xl relative">
          {/* Eyebrow Milestone Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/90 border border-purple-200/80 text-purple-700 text-xs font-mono font-bold tracking-wider mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
            <span>02 / GROW</span>
            <span className="text-purple-300">•</span>
            <span className="text-purple-600/80">AUDIENCE &amp; EXPANSION</span>
          </div>

          {/* Heading with Ambient Glow behind 'DIGITAL GROWTH' */}
          <h3 className="font-heading font-black text-2xl sm:text-4xl lg:text-[2.75rem] text-[#0F172A] tracking-[-0.03em] leading-[1.08] relative">
            TURN DIGITAL PRODUCTS
            <span className="block mt-1">
              INTO DIGITAL{' '}
              <span
                className="bg-clip-text text-transparent inline-block"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #7C3AED 0%, #4F46E5 50%, #8B5CF6 100%)',
                }}
              >
                GROWTH.
              </span>
            </span>

            {/* Subtle headline ambient glow */}
            <div
              className="absolute -top-4 right-1/4 w-[360px] h-[130px] rounded-full pointer-events-none -z-10"
              style={{
                backgroundColor: 'rgba(124, 58, 237, 0.08)',
                filter: 'blur(80px)',
              }}
              aria-hidden="true"
            />
          </h3>
        </div>

        {/* Intentionally Aligned Subtitle */}
        <p className="text-sm sm:text-base text-slate-600 font-sans max-w-[360px] leading-relaxed self-start md:self-end">
          {MARKETING_CATEGORY.tagline}
        </p>
      </motion.div>

      {/* ======================================================== */}
      {/* 3. ASYMMETRIC GRID (Strategic Centerpiece Left, 6 Right) */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* ======================================================== */}
        {/* LEFT: STRATEGIC FEATURED CARD (~42%)                     */}
        {/* ======================================================== */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 backdrop-blur-xl"
          style={{
            background:
              'linear-gradient(145deg, rgba(255, 255, 255, 0.96) 0%, rgba(245, 243, 255, 0.82) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.14)',
            boxShadow: '0 24px 50px -28px rgba(99, 102, 241, 0.22)',
          }}
        >
          {/* Subtle Ambient Light Orb Inside Card */}
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-purple-400/12 rounded-full blur-3xl pointer-events-none -z-0"
            aria-hidden="true"
          />

          <div className="relative z-10 mb-6">
            {/* Top Icon Capsule */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-md mb-5">
              <TrendingUp className="w-6 h-6" />
            </div>

            {/* Eyebrow & Headline */}
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1.5">
              Strategic Visibility
            </span>
            <h4 className="font-heading font-black text-2xl sm:text-3xl text-[#0F172A] tracking-tight leading-snug mb-3">
              Multi-Channel Digital Reach
            </h4>
            <p className="text-sm text-[#475569] font-sans leading-relaxed mb-6">
              Strategic visibility across organic search, social platforms, local discoverability, and brand positioning to attract and retain your audience.
            </p>

            {/* LIVE DIGITAL GROWTH MICRO-ANALYTICS VISUAL */}
            <GrowthAnalyticsVisual />
          </div>

          {/* Refined Button-Link CTA */}
          <div className="relative z-10 pt-4 border-t border-slate-200/60 mt-2">
            <a
              href="#contact"
              aria-label="Inquire about Digital Marketing Campaign Strategy"
              className="group/cta w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-[10px] text-xs font-mono text-slate-700 transition-all duration-200 cursor-pointer select-none hover:text-purple-700 hover:bg-purple-50/80 hover:border-purple-200/80 hover:shadow-[0_6px_16px_-8px_rgba(139,92,246,0.25)]"
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                border: '1px solid rgba(226, 232, 240, 0.85)',
              }}
            >
              <span className="flex items-center gap-1.5 font-semibold">
                <span>Plan A Campaign</span>
                <span className="text-slate-400 font-normal">• Strategy Consultation</span>
              </span>
              <div className="flex items-center gap-1 group-hover/cta:translate-x-1.5 transition-transform duration-200">
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/cta:text-purple-700 transition-colors" />
              </div>
            </a>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* RIGHT: 6 AUTHENTIC MARKETING SERVICE CARDS (~58%)        */}
        {/* ======================================================== */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {MARKETING_CATEGORY.services.map((service, index) => (
            <MarketingServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
