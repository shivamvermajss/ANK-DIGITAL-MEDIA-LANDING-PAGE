import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ServiceIcon } from './ServiceIcon';
import { CapabilityPill } from './CapabilityPill';
import { VoiceWaveform } from './VoiceWaveform';

const ACCENT_STYLES = {
  emerald: {
    borderHover: 'rgba(16, 185, 129, 0.38)',
    shadowHover: '0 16px 36px -12px rgba(16, 185, 129, 0.16)',
    iconBgHover: 'rgba(236, 253, 245, 0.95)',
    iconBorderHover: 'rgba(16, 185, 129, 0.35)',
    iconColor: '#059669',
    badgeText: '#047857',
    badgeBg: 'rgba(236, 253, 245, 0.9)',
    badgeBorder: 'rgba(16, 185, 129, 0.25)',
    ctaText: '#059669',
    ctaBgHover: 'rgba(236, 253, 245, 0.9)',
    ctaBorderHover: 'rgba(16, 185, 129, 0.3)',
    spotlight: 'rgba(16, 185, 129, 0.08)',
  },
  sky: {
    borderHover: 'rgba(14, 165, 233, 0.38)',
    shadowHover: '0 16px 36px -12px rgba(14, 165, 233, 0.16)',
    iconBgHover: 'rgba(240, 249, 255, 0.95)',
    iconBorderHover: 'rgba(14, 165, 233, 0.35)',
    iconColor: '#0284C7',
    badgeText: '#0369A1',
    badgeBg: 'rgba(240, 249, 255, 0.9)',
    badgeBorder: 'rgba(14, 165, 233, 0.25)',
    ctaText: '#0284C7',
    ctaBgHover: 'rgba(240, 249, 255, 0.9)',
    ctaBorderHover: 'rgba(14, 165, 233, 0.3)',
    spotlight: 'rgba(14, 165, 233, 0.08)',
  },
  cyan: {
    borderHover: 'rgba(6, 182, 212, 0.38)',
    shadowHover: '0 16px 36px -12px rgba(6, 182, 212, 0.16)',
    iconBgHover: 'rgba(236, 254, 255, 0.95)',
    iconBorderHover: 'rgba(6, 182, 212, 0.35)',
    iconColor: '#0891B2',
    badgeText: '#0e7490',
    badgeBg: 'rgba(236, 254, 255, 0.9)',
    badgeBorder: 'rgba(6, 182, 212, 0.25)',
    ctaText: '#0891B2',
    ctaBgHover: 'rgba(236, 254, 255, 0.9)',
    ctaBorderHover: 'rgba(6, 182, 212, 0.3)',
    spotlight: 'rgba(6, 182, 212, 0.08)',
  },
  blue: {
    borderHover: 'rgba(59, 130, 246, 0.38)',
    shadowHover: '0 16px 36px -12px rgba(59, 130, 246, 0.16)',
    iconBgHover: 'rgba(239, 246, 255, 0.95)',
    iconBorderHover: 'rgba(59, 130, 246, 0.35)',
    iconColor: '#2563EB',
    badgeText: '#1D4ED8',
    badgeBg: 'rgba(239, 246, 255, 0.9)',
    badgeBorder: 'rgba(59, 130, 246, 0.25)',
    ctaText: '#2563EB',
    ctaBgHover: 'rgba(239, 246, 255, 0.9)',
    ctaBorderHover: 'rgba(59, 130, 246, 0.3)',
    spotlight: 'rgba(59, 130, 246, 0.08)',
  },
  indigo: {
    borderHover: 'rgba(99, 102, 241, 0.38)',
    shadowHover: '0 16px 36px -12px rgba(99, 102, 241, 0.16)',
    iconBgHover: 'rgba(238, 242, 255, 0.95)',
    iconBorderHover: 'rgba(99, 102, 241, 0.35)',
    iconColor: '#4F46E5',
    badgeText: '#4338CA',
    badgeBg: 'rgba(238, 242, 255, 0.9)',
    badgeBorder: 'rgba(99, 102, 241, 0.25)',
    ctaText: '#4F46E5',
    ctaBgHover: 'rgba(238, 242, 255, 0.9)',
    ctaBorderHover: 'rgba(99, 102, 241, 0.3)',
    spotlight: 'rgba(99, 102, 241, 0.08)',
  },
  violet: {
    borderHover: 'rgba(139, 92, 246, 0.38)',
    shadowHover: '0 16px 36px -12px rgba(139, 92, 246, 0.16)',
    iconBgHover: 'rgba(245, 243, 255, 0.95)',
    iconBorderHover: 'rgba(139, 92, 246, 0.35)',
    iconColor: '#7C3AED',
    badgeText: '#6D28D9',
    badgeBg: 'rgba(245, 243, 255, 0.9)',
    badgeBorder: 'rgba(139, 92, 246, 0.25)',
    ctaText: '#7C3AED',
    ctaBgHover: 'rgba(245, 243, 255, 0.9)',
    ctaBorderHover: 'rgba(139, 92, 246, 0.3)',
    spotlight: 'rgba(139, 92, 246, 0.08)',
  },
};

/**
 * CommunicationServiceCard Component
 * 
 * Compact card for secondary communication channels.
 * Features:
 * - 36-40px frosted icon capsule with channel hover accent
 * - Category badge and service title
 * - Subtle SVG waveform for voice services
 * - Compact capability pills
 * - Interactive button-link CTA
 * - Dynamic cursor spotlight
 */
export function CommunicationServiceCard({ service, index = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const accentKey = service.accent || 'blue';
  const style = ACCENT_STYLES[accentKey] || ACCENT_STYLES.blue;

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
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.3,
        delay: shouldReduceMotion ? 0 : index * 0.03,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={shouldReduceMotion ? {} : { y: -3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative p-5 sm:p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden h-full"
      style={{
        background: 'rgba(255, 255, 255, 0.78)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: `1px solid ${isHovered ? style.borderHover : 'rgba(226, 232, 240, 0.85)'}`,
        boxShadow: isHovered
          ? `${style.shadowHover}, 0 4px 12px rgba(15, 23, 42, 0.04)`
          : '0 12px 30px -18px rgba(30, 41, 59, 0.16)',
      }}
    >
      {/* Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 hidden sm:block"
        style={{
          opacity: isHovered && !shouldReduceMotion ? 1 : 0,
          background: `radial-gradient(350px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), ${style.spotlight}, transparent 45%)`,
        }}
        aria-hidden="true"
      />

      {/* Top Header & Icon */}
      <div>
        <div className="flex items-center justify-between mb-3.5">
          {/* Frosted Icon Capsule: 38px */}
          <div
            className="w-[38px] h-[38px] rounded-xl flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-105"
            style={{
              background: isHovered ? style.iconBgHover : 'rgba(248, 250, 252, 0.85)',
              border: `1px solid ${isHovered ? style.iconBorderHover : 'rgba(226, 232, 240, 0.8)'}`,
              color: isHovered ? style.iconColor : '#475569',
              boxShadow: isHovered ? `0 4px 14px -2px ${style.iconColor}25` : 'none',
            }}
          >
            <ServiceIcon name={service.icon} className="w-[18px] h-[18px] transition-transform" />
          </div>

          {/* Right badge: Voice waveform or category type */}
          <div className="flex items-center gap-2">
            {service.hasWaveform && (
              <VoiceWaveform isHovered={isHovered} accent={accentKey} />
            )}
            <span
              className="text-[9.5px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border transition-colors duration-200"
              style={{
                background: isHovered ? style.badgeBg : 'rgba(248, 250, 252, 0.85)',
                color: isHovered ? style.badgeText : '#64748b',
                borderColor: isHovered ? style.badgeBorder : 'rgba(226, 232, 240, 0.8)',
              }}
            >
              {service.type}
            </span>
          </div>
        </div>

        {/* Title */}
        <h5
          className="font-heading font-extrabold text-base text-[#0F172A] transition-colors duration-200 mb-1.5 leading-snug"
          style={{ color: isHovered ? style.iconColor : '#0F172A' }}
        >
          {service.title}
        </h5>

        {/* Description */}
        <p className="text-xs sm:text-[13px] text-[#475569] font-sans leading-relaxed mb-3.5">
          {service.desc}
        </p>

        {/* Capability Pills */}
        {service.capabilities && service.capabilities.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {service.capabilities.map((cap, i) => (
              <CapabilityPill key={i} text={cap} accent={accentKey} />
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA Arrow Link */}
      <div className="pt-3 border-t border-slate-100/90 flex items-center justify-between">
        <a
          href="#contact"
          className="group/cta inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] text-xs font-mono transition-all duration-200 select-none cursor-pointer"
          style={{
            background: isHovered ? style.ctaBgHover : 'rgba(248, 250, 252, 0.75)',
            border: `1px solid ${isHovered ? style.ctaBorderHover : 'rgba(226, 232, 240, 0.75)'}`,
            color: isHovered ? style.ctaText : '#64748b',
          }}
        >
          <span className="transition-all duration-200 group-hover/cta:font-semibold">Channel Integration</span>
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5 group-hover/cta:translate-x-1.5"
            style={{
              color: isHovered ? style.ctaText : '#94a3b8',
            }}
          />
        </a>

        <span className="text-[10px] font-mono text-slate-400 select-none">
          Ready
        </span>
      </div>
    </motion.div>
  );
}
