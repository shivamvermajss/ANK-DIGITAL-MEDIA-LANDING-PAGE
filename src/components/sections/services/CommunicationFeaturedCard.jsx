import React, { useState, useRef, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ServiceIcon } from './ServiceIcon';
import { CapabilityPill } from './CapabilityPill';
import { WhatsAppPreview } from './WhatsAppPreview';
import { OTPPreview } from './OTPPreview';

/**
 * CommunicationFeaturedCard Component (Sections 1-5, 7, 9, 13, 14)
 * 
 * Visual anchor for primary communication channels (WhatsApp Marketing & OTP Service).
 * Desktop: Occupies 1.5 x 1 Bento presence with rich micro-previews:
 * - Dynamic cursor spotlight tracked with CSS variables (--mouse-x, --mouse-y)
 * - Dual-layer border sheen with mask exclusion
 * - Channel accent glow (emerald for WhatsApp, indigo/violet for OTP)
 * - Hover lift: translateY(-4px) with cubic-bezier(0.16, 1, 0.3, 1)
 * - Icon micro-motion: scale(1.06), rotate(1deg), and soft glow
 * - Interactive capability pills
 * - CTA arrow animation: translateX(8px)
 * - Preserves internal WhatsApp chat & OTP verification animations completely intact
 */
export function CommunicationFeaturedCard({ service, previewType = 'whatsapp' }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const isWhatsApp = previewType === 'whatsapp';

  const accentStyles = isWhatsApp
    ? {
        border: 'rgba(16, 185, 129, 0.22)',
        borderHover: 'rgba(16, 185, 129, 0.40)',
        borderSheen: 'rgba(16, 185, 129, 0.35)',
        shadow: '0 20px 48px -20px rgba(16, 185, 129, 0.14), 0 4px 14px rgba(15, 23, 42, 0.04)',
        shadowHover: '0 24px 50px -16px rgba(16, 185, 129, 0.18), 0 8px 24px rgba(16, 185, 129, 0.08)',
        badgeBg: 'rgba(236, 253, 245, 0.95)',
        badgeText: '#047857',
        badgeBorder: 'rgba(16, 185, 129, 0.3)',
        iconBgHover: 'rgba(236, 253, 245, 0.95)',
        iconColor: '#059669',
        iconGlow: '0 4px 16px rgba(16, 185, 129, 0.28)',
        ctaText: '#059669',
        ctaBgHover: 'rgba(236, 253, 245, 0.95)',
        ctaBorderHover: 'rgba(167, 243, 208, 0.8)',
        spotlight: 'rgba(16, 185, 129, 0.10)',
        accentName: 'emerald',
      }
    : {
        border: 'rgba(99, 102, 241, 0.22)',
        borderHover: 'rgba(99, 102, 241, 0.40)',
        borderSheen: 'rgba(99, 102, 241, 0.35)',
        shadow: '0 20px 48px -20px rgba(99, 102, 241, 0.14), 0 4px 14px rgba(15, 23, 42, 0.04)',
        shadowHover: '0 24px 50px -16px rgba(99, 102, 241, 0.18), 0 8px 24px rgba(99, 102, 241, 0.08)',
        badgeBg: 'rgba(238, 242, 255, 0.95)',
        badgeText: '#4338CA',
        badgeBorder: 'rgba(99, 102, 241, 0.3)',
        iconBgHover: 'rgba(238, 242, 255, 0.95)',
        iconColor: '#4F46E5',
        iconGlow: '0 4px 16px rgba(99, 102, 241, 0.28)',
        ctaText: '#4F46E5',
        ctaBgHover: 'rgba(238, 242, 255, 0.95)',
        ctaBorderHover: 'rgba(199, 210, 254, 0.8)',
        spotlight: 'rgba(99, 102, 241, 0.10)',
        accentName: 'indigo',
      };

  const handleMouseMove = useCallback(
    (e) => {
      if (shouldReduceMotion || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    },
    [shouldReduceMotion]
  );

  return (
    <motion.div
      ref={cardRef}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -4,
              transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
            }
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative p-6 sm:p-7 lg:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group overflow-hidden h-full select-none"
      style={{
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${isHovered ? accentStyles.borderHover : accentStyles.border}`,
        boxShadow: isHovered ? accentStyles.shadowHover : accentStyles.shadow,
      }}
    >
      {/* Dynamic Cursor Spotlight & Border Sheen (Sections 1 & 3) */}
      {!shouldReduceMotion && (
        <>
          <div
            className={`pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 hidden sm:block ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: `radial-gradient(420px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${accentStyles.spotlight}, transparent 42%)`,
            }}
            aria-hidden="true"
          />
          <div
            className={`pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 hidden sm:block ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: `radial-gradient(340px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${accentStyles.borderSheen}, transparent 60%)`,
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'destination-out',
              padding: '1px',
            }}
            aria-hidden="true"
          />
        </>
      )}

      {/* Top Section: Header & Capabilities */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          {/* Frosted Icon Capsule (Section 4) */}
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-[1.06] group-hover:rotate-1"
            style={{
              background: isHovered ? accentStyles.iconBgHover : 'rgba(248, 250, 252, 0.85)',
              border: `1px solid ${isHovered ? accentStyles.borderHover : 'rgba(226, 232, 240, 0.8)'}`,
              color: isHovered ? accentStyles.iconColor : '#334155',
              boxShadow: isHovered ? accentStyles.iconGlow : 'none',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <ServiceIcon name={service.icon} className="w-5 h-5 transition-transform" />
          </div>

          {/* Eyebrow Badge */}
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-mono font-bold tracking-wider uppercase border transition-colors duration-200"
            style={{
              background: accentStyles.badgeBg,
              color: accentStyles.badgeText,
              borderColor: accentStyles.badgeBorder,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: accentStyles.iconColor }}
            />
            <span>Featured Channel</span>
            <span className="opacity-40">•</span>
            <span className="font-semibold">{service.type}</span>
          </div>
        </div>

        {/* Heading (Section 10 Micro-Motion) */}
        <h4
          className="font-heading font-black text-xl sm:text-2xl text-[#0F172A] tracking-tight mb-2 leading-snug group-hover:-translate-y-0.5 transition-transform duration-300"
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          {service.title}
        </h4>

        {/* Description */}
        <p className="text-sm text-[#475569] font-sans leading-relaxed mb-4">
          {service.desc}
        </p>

        {/* Capability Pills (Sections 6 & 15) */}
        {service.capabilities && (
          <div className="flex flex-wrap gap-1.5">
            {service.capabilities.map((cap, i) => (
              <CapabilityPill key={i} text={cap} accent={accentStyles.accentName} />
            ))}
          </div>
        )}
      </div>

      {/* Middle Section: Micro Interactive Preview (Preserved completely) */}
      <div className="relative z-10 mb-6">
        {isWhatsApp ? (
          <WhatsAppPreview isHovered={isHovered} />
        ) : (
          <OTPPreview isHovered={isHovered} />
        )}
      </div>

      {/* Bottom Section: CTA Button-Link (Section 5) */}
      <div className="relative z-10 pt-4 border-t border-slate-100/90 flex items-center justify-between">
        <a
          href="#contact"
          className="group/cta inline-flex items-center gap-2 px-3.5 py-2 rounded-[12px] text-xs font-mono font-medium transition-all duration-300 select-none cursor-pointer hover:border-indigo-300/60"
          style={{
            background: isHovered ? accentStyles.ctaBgHover : 'rgba(248, 250, 252, 0.85)',
            border: `1px solid ${isHovered ? accentStyles.ctaBorderHover : 'rgba(226, 232, 240, 0.85)'}`,
            color: isHovered ? accentStyles.ctaText : '#475569',
          }}
        >
          <span className="transition-colors duration-300 group-hover/cta:font-semibold">Channel Integration</span>
          <ArrowRight
            className="w-3.5 h-3.5 transition-all duration-300 group-hover/cta:translate-x-2"
            style={{
              color: isHovered ? accentStyles.ctaText : '#94a3b8',
            }}
          />
        </a>

        <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: isHovered ? accentStyles.iconColor : '#94a3b8' }}
          />
          <span>{isWhatsApp ? 'Live Capability' : 'Zero-Persistence'}</span>
        </div>
      </div>
    </motion.div>
  );
}
