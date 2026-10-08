import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { COMMUNICATION_CATEGORY } from '../../../data/services';
import { CommunicationFeaturedCard } from './CommunicationFeaturedCard';
import { CommunicationServiceCard } from './CommunicationServiceCard';

/**
 * CommunicationSection Component (03 / CONNECT • COMMUNICATION CHANNELS)
 * 
 * Asymmetric Bento composition featuring:
 * - Ambient sky/cyan static glow & subtle 24px dot-grid background
 * - Two visual anchors (WhatsApp Marketing & OTP Service) with rich micro-previews
 * - 7 supporting communication capabilities with icon capsules, waveform activity,
 *   capability pills, and cursor spotlights
 * - Respects prefers-reduced-motion
 */
export function CommunicationSection() {
  const shouldReduceMotion = useReducedMotion();

  // Extract primary visual anchors and secondary supporting channels
  const whatsappService = COMMUNICATION_CATEGORY.services.find(
    (s) => s.id === 'whatsapp-marketing'
  );
  const otpService = COMMUNICATION_CATEGORY.services.find(
    (s) => s.id === 'otp-service'
  );
  const secondaryServices = COMMUNICATION_CATEGORY.services.filter(
    (s) => s.id !== 'whatsapp-marketing' && s.id !== 'otp-service'
  );

  return (
    <section className="relative mb-24 sm:mb-28 lg:mb-36 rounded-3xl p-4 sm:p-6 lg:p-8 overflow-hidden select-none">
      {/* 1. Subtle 24px Background Dot Grid Canvas (behind all content) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl -z-10"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.28,
        }}
        aria-hidden="true"
      />

      {/* 2. Soft Ambient Background Glows */}
      {/* 2a. Ambient Headline Glow - positioned primarily behind 'HAPPEN.' */}
      <div
        className="pointer-events-none absolute top-10 left-1/4 sm:left-1/3 w-[550px] sm:w-[680px] h-[360px] -translate-x-1/2 rounded-full blur-[120px] opacity-25 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.22), rgba(99, 102, 241, 0.12), transparent 68%)',
        }}
        aria-hidden="true"
      />

      {/* 2b. Ambient Right Accent Glow */}
      <div
        className="pointer-events-none absolute top-1/2 right-[-5%] w-[500px] sm:w-[650px] h-[350px] rounded-full blur-[130px] opacity-15 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.14), rgba(59, 130, 246, 0.10), transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* 3. SUBSECTION HEADER: 03 / CONNECT */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12"
      >
        <div className="max-w-2xl">
          {/* Eyebrow Milestone Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50/90 border border-cyan-200/80 text-cyan-700 text-xs font-mono font-bold tracking-wider mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span>03 / CONNECT</span>
            <span className="text-cyan-300">•</span>
            <span className="text-cyan-600/80">COMMUNICATION CHANNELS</span>
          </div>

          {/* Heading with smooth cyan -> blue gradient on HAPPEN. with subtle ambient back-glow */}
          <h3 className="font-heading font-black text-2xl sm:text-4xl lg:text-[2.75rem] text-[#0F172A] tracking-[-0.03em] leading-[1.08]">
            REACH PEOPLE WHERE
            <span className="block mt-1">
              CONVERSATIONS{' '}
              <span className="relative inline-block">
                <span
                  className="pointer-events-none absolute -inset-x-8 -inset-y-4 rounded-full bg-sky-200/20 blur-[50px] -z-10"
                  aria-hidden="true"
                />
                <span
                  className="bg-clip-text text-transparent inline-block font-black"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #06B6D4 0%, #3B82F6 50%, #2563EB 100%)',
                  }}
                >
                  HAPPEN.
                </span>
              </span>
            </span>
          </h3>
        </div>

        {/* Supporting description aligned with lower half of heading */}
        <p className="text-sm sm:text-base text-[#475569] font-sans max-w-md leading-relaxed self-start md:self-end pb-1">
          {COMMUNICATION_CATEGORY.tagline}
        </p>
      </motion.div>

      {/* 4. ASYMMETRIC BENTO GRID (ALL 9 COMMUNICATION SERVICES) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Tier 1: Asymmetric Featured Split (WhatsApp ~7 cols, OTP ~5 cols) */}
        {whatsappService && (
          <div className="relative md:col-span-2 lg:col-span-7 flex flex-col">
            {/* Ambient depth behind WhatsApp card (soft emerald tint) */}
            <div
              className="pointer-events-none absolute -inset-4 sm:-inset-6 rounded-3xl blur-[90px] -z-10 opacity-70"
              style={{
                background: 'radial-gradient(circle at 60% 40%, rgba(16, 185, 129, 0.12), transparent 70%)',
              }}
              aria-hidden="true"
            />
            <CommunicationFeaturedCard
              service={whatsappService}
              previewType="whatsapp"
            />
          </div>
        )}
        {otpService && (
          <div className="relative md:col-span-2 lg:col-span-5 flex flex-col">
            {/* Ambient depth behind OTP card (soft indigo tint) */}
            <div
              className="pointer-events-none absolute -inset-4 sm:-inset-6 rounded-3xl blur-[90px] -z-10 opacity-70"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.12), transparent 70%)',
              }}
              aria-hidden="true"
            />
            <CommunicationFeaturedCard
              service={otpService}
              previewType="otp"
            />
          </div>
        )}

        {/* Tier 2: 3 Supporting Channels (4 cols each on lg) */}
        {secondaryServices.slice(0, 3).map((service, index) => (
          <div
            key={service.id}
            className="md:col-span-1 lg:col-span-4 flex flex-col"
          >
            <CommunicationServiceCard
              service={service}
              index={index}
            />
          </div>
        ))}

        {/* Tier 3: 4 Supporting Channels (3 cols each on lg) */}
        {secondaryServices.slice(3).map((service, index) => (
          <div
            key={service.id}
            className="md:col-span-1 lg:col-span-3 flex flex-col"
          >
            <CommunicationServiceCard
              service={service}
              index={index + 3}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
