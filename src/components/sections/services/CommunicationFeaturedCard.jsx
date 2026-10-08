import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { ServiceIcon } from './ServiceIcon';
import { CapabilityPill } from './CapabilityPill';
import { WhatsAppPreview } from './WhatsAppPreview';
import { OTPPreview } from './OTPPreview';

/**
 * CommunicationFeaturedCard Component
 * 
 * Visual anchor for primary communication channels (WhatsApp Marketing & OTP Service).
 * Desktop: Occupies 1.5 x 1 Bento presence with rich micro-previews.
 * Features:
 * - Dynamic cursor spotlight
 * - Channel accent glow (emerald for WhatsApp, indigo for OTP)
 * - Coordinated micro-interaction on card hover
 * - Capability pills
 * - Interactive button-link CTA
 */
export function CommunicationFeaturedCard({ service, previewType = 'whatsapp' }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const isWhatsApp = previewType === 'whatsapp';

  const accentStyles = isWhatsApp
    ? {
        border: 'rgba(16, 185, 129, 0.22)',
        borderHover: 'rgba(167, 243, 208, 0.8)',
        shadow: '0 20px 48px -20px rgba(16, 185, 129, 0.14), 0 4px 14px rgba(15, 23, 42, 0.04)',
        shadowHover: '0 18px 40px -16px rgba(16, 185, 129, 0.14), 0 8px 24px rgba(16, 185, 129, 0.06)',
        badgeBg: 'rgba(236, 253, 245, 0.95)',
        badgeText: '#047857',
        badgeBorder: 'rgba(16, 185, 129, 0.3)',
        iconBgHover: 'rgba(236, 253, 245, 0.95)',
        iconColor: '#059669',
        ctaText: '#059669',
        ctaBgHover: 'rgba(236, 253, 245, 0.95)',
        ctaBorderHover: 'rgba(167, 243, 208, 0.8)',
        spotlight: 'rgba(16, 185, 129, 0.08)',
        accentName: 'emerald',
      }
    : {
        border: 'rgba(99, 102, 241, 0.22)',
        borderHover: 'rgba(199, 210, 254, 0.8)',
        shadow: '0 20px 48px -20px rgba(99, 102, 241, 0.14), 0 4px 14px rgba(15, 23, 42, 0.04)',
        shadowHover: '0 18px 40px -16px rgba(99, 102, 241, 0.14), 0 8px 24px rgba(99, 102, 241, 0.06)',
        badgeBg: 'rgba(238, 242, 255, 0.95)',
        badgeText: '#4338CA',
        badgeBorder: 'rgba(99, 102, 241, 0.3)',
        iconBgHover: 'rgba(238, 242, 255, 0.95)',
        iconColor: '#4F46E5',
        ctaText: '#4F46E5',
        ctaBgHover: 'rgba(238, 242, 255, 0.95)',
        ctaBorderHover: 'rgba(199, 210, 254, 0.8)',
        spotlight: 'rgba(99, 102, 241, 0.08)',
        accentName: 'indigo',
      };

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.005 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative p-6 sm:p-7 lg:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group overflow-hidden h-full select-none"
      style={{
        background: 'rgba(255, 255, 255, 0.82)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${isHovered ? accentStyles.borderHover : accentStyles.border}`,
        boxShadow: isHovered ? accentStyles.shadowHover : accentStyles.shadow,
      }}
    >
      {/* Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 hidden sm:block"
        style={{
          opacity: isHovered && !shouldReduceMotion ? 1 : 0,
          background: `radial-gradient(420px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), ${accentStyles.spotlight}, transparent 45%)`,
        }}
        aria-hidden="true"
      />

      {/* Top Section: Header & Capabilities */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          {/* Frosted Icon Capsule: 42px */}
          <div
            className="w-[42px] h-[42px] rounded-2xl flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-105"
            style={{
              background: isHovered ? accentStyles.iconBgHover : 'rgba(248, 250, 252, 0.85)',
              border: `1px solid ${isHovered ? accentStyles.borderHover : 'rgba(226, 232, 240, 0.8)'}`,
              color: isHovered ? accentStyles.iconColor : '#334155',
              boxShadow: isHovered ? `0 4px 16px -2px ${accentStyles.iconColor}30` : 'none',
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

        {/* Heading */}
        <h4 className="font-heading font-black text-xl sm:text-2xl text-[#0F172A] tracking-tight mb-2 leading-snug">
          {service.title}
        </h4>

        {/* Description */}
        <p className="text-sm text-[#475569] font-sans leading-relaxed mb-4">
          {service.desc}
        </p>

        {/* Capability Pills */}
        {service.capabilities && (
          <div className="flex flex-wrap gap-2">
            {service.capabilities.map((cap, i) => (
              <CapabilityPill key={i} text={cap} accent={accentStyles.accentName} />
            ))}
          </div>
        )}
      </div>

      {/* Middle Section: Micro Interactive Preview */}
      <div className="relative z-10 mb-6">
        {isWhatsApp ? (
          <WhatsAppPreview isHovered={isHovered} />
        ) : (
          <OTPPreview isHovered={isHovered} />
        )}
      </div>

      {/* Bottom Section: CTA Button-Link */}
      <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between">
        <a
          href="#contact"
          className="group/cta inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] text-xs font-mono font-medium transition-all duration-200 select-none cursor-pointer"
          style={{
            background: isHovered ? accentStyles.ctaBgHover : 'rgba(248, 250, 252, 0.75)',
            border: `1px solid ${isHovered ? accentStyles.ctaBorderHover : 'rgba(226, 232, 240, 0.75)'}`,
            color: isHovered ? accentStyles.ctaText : '#475569',
          }}
        >
          <span className="transition-all duration-200 group-hover/cta:font-semibold">Channel Integration</span>
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5 group-hover/cta:translate-x-1.5"
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
