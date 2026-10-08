import React, { useRef, useState, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ServiceIcon } from './ServiceIcon';
import { CapabilityPill } from './CapabilityPill';

const MARKETING_ACCENT_STYLES = {
  indigo: {
    borderHover: 'rgba(99, 102, 241, 0.35)',
    shadowHover: '0 20px 45px -12px rgba(99, 102, 241, 0.16)',
    spotlight: 'rgba(99, 102, 241, 0.10)',
    borderSheen: 'rgba(99, 102, 241, 0.30)',
    iconBgHover: 'rgba(238, 242, 255, 0.95)',
    iconColor: '#4F46E5',
    iconGlow: '0 4px 14px rgba(99, 102, 241, 0.25)',
    ctaTextHover: '#4F46E5',
    accentKey: 'indigo',
  },
  violet: {
    borderHover: 'rgba(139, 92, 246, 0.35)',
    shadowHover: '0 20px 45px -12px rgba(139, 92, 246, 0.16)',
    spotlight: 'rgba(139, 92, 246, 0.10)',
    borderSheen: 'rgba(139, 92, 246, 0.30)',
    iconBgHover: 'rgba(245, 243, 255, 0.95)',
    iconColor: '#7C3AED',
    iconGlow: '0 4px 14px rgba(139, 92, 246, 0.25)',
    ctaTextHover: '#7C3AED',
    accentKey: 'violet',
  },
  purple: {
    borderHover: 'rgba(168, 85, 247, 0.35)',
    shadowHover: '0 20px 45px -12px rgba(168, 85, 247, 0.16)',
    spotlight: 'rgba(168, 85, 247, 0.10)',
    borderSheen: 'rgba(168, 85, 247, 0.30)',
    iconBgHover: 'rgba(250, 245, 255, 0.95)',
    iconColor: '#9333EA',
    iconGlow: '0 4px 14px rgba(168, 85, 247, 0.25)',
    ctaTextHover: '#9333EA',
    accentKey: 'purple',
  },
  blue: {
    borderHover: 'rgba(59, 130, 246, 0.35)',
    shadowHover: '0 20px 45px -12px rgba(59, 130, 246, 0.16)',
    spotlight: 'rgba(59, 130, 246, 0.10)',
    borderSheen: 'rgba(59, 130, 246, 0.30)',
    iconBgHover: 'rgba(239, 246, 255, 0.95)',
    iconColor: '#2563EB',
    iconGlow: '0 4px 14px rgba(59, 130, 246, 0.25)',
    ctaTextHover: '#2563EB',
    accentKey: 'blue',
  },
};

const SERVICE_ACCENT_MAP = {
  'digital-marketing-overview': 'indigo',
  seo: 'indigo',
  'social-media': 'violet',
  'influencer-marketing': 'purple',
  gmb: 'blue',
  'brand-building': 'violet',
};

/**
 * MarketingServiceCard Component (Sections 1-7, 10, 11)
 * 
 * Individual service card inside the 2 x 3 right-side grid:
 * - Dynamic cursor spotlight tracked with CSS variables (--mouse-x, --mouse-y)
 * - Interactive gradient border sheen on pointer interaction
 * - Refined -4px hover lift with cubic-bezier(0.16, 1, 0.3, 1) and tinted shadow
 * - Premium icon capsule with scale(1.06), rotate(1deg), and soft colored glow
 * - Title micro-motion: translateY(-0.5px)
 * - Interactive capability pills with brand accents & icons
 * - Coordinated CTA arrow translate (+8px) and text color shift
 */
export function MarketingServiceCard({ service, index = 0 }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const accentName = SERVICE_ACCENT_MAP[service.id] || 'indigo';
  const style = MARKETING_ACCENT_STYLES[accentName] || MARKETING_ACCENT_STYLES.indigo;

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

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.45,
        delay: shouldReduceMotion ? 0 : index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -4,
              transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
            }
      }
      className="group relative p-5 sm:p-6 rounded-2xl bg-white/82 backdrop-blur-xl border border-slate-200/85 shadow-[0_12px_28px_-6px_rgba(15,23,42,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden select-none"
      style={{
        borderColor: isHovered ? style.borderHover : 'rgba(226, 232, 240, 0.85)',
        boxShadow: isHovered
          ? `${style.shadowHover}, 0 4px 12px rgba(15, 23, 42, 0.04)`
          : '0 12px 28px -6px rgba(15, 23, 42, 0.06)',
      }}
    >
      {/* 1. Dynamic Cursor Spotlight (Follows mouse position subtly, Section 1) */}
      {!shouldReduceMotion && (
        <>
          {/* Subtle Radial Light Glow */}
          <div
            className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 hidden sm:block ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: `radial-gradient(360px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${style.spotlight}, transparent 42%)`,
            }}
            aria-hidden="true"
          />
          {/* Section 3: Interactive Gradient Border Sheen */}
          <div
            className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 hidden sm:block ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: `radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${style.borderSheen}, transparent 60%)`,
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

      {/* 2. Card Content Wrapper */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          {/* Header Row: Icon Capsule + Interactive Arrow CTA */}
          <div className="flex items-center justify-between mb-3.5">
            {/* Premium Icon Capsule (Section 4) */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 shadow-2xs group-hover:scale-[1.06] group-hover:rotate-1"
              style={{
                background: isHovered ? style.iconBgHover : 'rgba(248, 250, 252, 0.85)',
                borderColor: isHovered ? style.borderHover : 'rgba(226, 232, 240, 0.85)',
                color: isHovered ? style.iconColor : '#475569',
                boxShadow: isHovered ? style.iconGlow : 'none',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <ServiceIcon name={service.icon} className="w-5 h-5 transition-transform" />
            </div>

            {/* Interactive Arrow CTA with group/cta translation (Section 5) */}
            <a
              href="#contact"
              aria-label={`Inquire about ${service.title}`}
              className="group/cta w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:text-indigo-600 hover:bg-indigo-50/90 hover:border hover:border-indigo-200/60 transition-all duration-200 cursor-pointer"
            >
              <div className="group-hover/cta:translate-x-2 transition-transform duration-300">
                <ArrowRight
                  className="w-4 h-4 transition-colors duration-300"
                  style={{ color: isHovered ? style.ctaTextHover : undefined }}
                />
              </div>
            </a>
          </div>

          {/* Service Title (Section 10 Micro-Motion) */}
          <h5
            className="font-heading font-extrabold text-base text-[#0F172A] transition-all duration-300 mb-1.5 leading-snug group-hover:-translate-y-0.5"
            style={{
              color: isHovered ? '#0F172A' : '#0F172A',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {service.title}
          </h5>

          {/* Service Description */}
          <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed mb-4">
            {service.desc}
          </p>
        </div>

        {/* Capability Pills (Sections 6 & 15) */}
        {service.capabilities && service.capabilities.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-slate-100/90">
            {service.capabilities.map((cap) => (
              <CapabilityPill key={cap} text={cap} accent={style.accentKey} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
