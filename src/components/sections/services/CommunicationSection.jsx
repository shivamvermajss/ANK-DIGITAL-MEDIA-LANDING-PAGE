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
    <section className="relative mb-24 sm:mb-28 lg:mb-36 rounded-3xl p-4 sm:p-6 lg:p-8 overflow-hidden">
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

      {/* 2. Soft Ambient Sky/Cyan Orb behind top featured area */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[650px] sm:w-[850px] h-[350px] rounded-full blur-[110px] opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.9), rgba(59, 130, 246, 0.6), transparent 70%)',
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

          {/* Heading with smooth cyan -> blue gradient on HAPPEN. */}
          <h3 className="font-heading font-black text-2xl sm:text-4xl lg:text-[2.75rem] text-[#0F172A] tracking-[-0.03em] leading-[1.08]">
            REACH PEOPLE WHERE
            <span className="block mt-1">
              CONVERSATIONS{' '}
              <span
                className="bg-clip-text text-transparent inline-block font-black"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #06B6D4 0%, #3B82F6 50%, #2563EB 100%)',
                }}
              >
                HAPPEN.
              </span>
            </span>
          </h3>
        </div>

        {/* Supporting description aligned with lower half of heading */}
        <p className="text-sm sm:text-base text-[#475569] font-sans max-w-md leading-relaxed self-start md:self-end pb-1">
          {COMMUNICATION_CATEGORY.tagline}
        </p>
      </motion.div>

      {/* 4. PRIMARY FEATURED CHANNELS (ASYMMETRIC BENTO TOP TIER) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {whatsappService && (
          <CommunicationFeaturedCard
            service={whatsappService}
            previewType="whatsapp"
          />
        )}
        {otpService && (
          <CommunicationFeaturedCard
            service={otpService}
            previewType="otp"
          />
        )}
      </div>

      {/* 5. SECONDARY SUPPORTING COMMUNICATION SERVICES */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
        {/* Row 1: Bulk SMS, Voice Call, IVR (3 columns on lg -> 4 cols each) */}
        {secondaryServices.slice(0, 3).map((service, index) => (
          <div
            key={service.id}
            className="sm:col-span-1 lg:col-span-4 flex flex-col"
          >
            <CommunicationServiceCard
              service={service}
              index={index}
            />
          </div>
        ))}

        {/* Row 2: Missed Call, Transactional SMS, Promotional SMS, RCS (4 columns on lg -> 3 cols each) */}
        {secondaryServices.slice(3).map((service, index) => (
          <div
            key={service.id}
            className={`sm:col-span-1 ${
              index === 3 ? 'sm:col-span-2 lg:col-span-3' : 'lg:col-span-3'
            } flex flex-col`}
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
