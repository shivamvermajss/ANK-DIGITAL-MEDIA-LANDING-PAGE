import React, { useRef, useState, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ServiceIcon } from './ServiceIcon';

/**
 * MarketingServiceCard Component
 * 
 * Individual service card inside the 2 x 3 right-side grid.
 * Features:
 * - Dynamic cursor spotlight tracked with CSS variables (--mouse-x, --mouse-y)
 * - Interactive gradient border sheen on pointer interaction (indigo -> violet)
 * - Hover lift: translateY(-4px) with soft ambient shadow
 * - Premium icon capsule with scale and color transitions
 * - Capability descriptor pills (no fake claims)
 * - Interactive arrow CTA with circular background reveal
 * - Respects prefers-reduced-motion
 */
export function MarketingServiceCard({ service, index = 0 }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

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
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      className="group relative p-5 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-[0_12px_28px_-6px_rgba(15,23,42,0.06),0_4px_12px_rgba(168,85,247,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(168,85,247,0.12),0_4px_12px_rgba(15,23,42,0.04)] hover:border-slate-300/90 transition-all duration-300 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* 1. Dynamic Cursor Spotlight (Follows mouse position) */}
      {!shouldReduceMotion && isHovered && (
        <>
          {/* Subtle Radial Light Glow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
            style={{
              background:
                'radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.10), transparent 45%)',
            }}
            aria-hidden="true"
          />
          {/* Interactive Gradient Border Sheen (Indigo -> Violet) */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
            style={{
              background:
                'radial-gradient(280px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.35), rgba(168, 85, 247, 0.25) 40%, transparent 65%)',
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
            {/* Premium Icon Capsule */}
            <div className="w-10 h-10 rounded-xl bg-slate-50/90 text-purple-600 flex items-center justify-center border border-slate-200/90 shadow-2xs group-hover:bg-indigo-50/90 group-hover:text-indigo-600 group-hover:scale-105 group-hover:border-indigo-200/70 transition-all duration-200">
              <ServiceIcon name={service.icon} className="w-5 h-5 transition-transform" />
            </div>

            {/* Interactive Arrow CTA with subtle circular background */}
            <a
              href="#contact"
              aria-label={`Inquire about ${service.title}`}
              className="w-7 h-7 rounded-full flex items-center justify-center text-slate-300 group-hover:text-indigo-600 group-hover:bg-indigo-50/90 group-hover:border group-hover:border-indigo-200/60 transition-all duration-200"
            >
              <div className="group-hover:translate-x-1 transition-transform duration-200">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>

          {/* Service Title */}
          <h5 className="font-heading font-extrabold text-base text-[#0F172A] group-hover:text-indigo-950 transition-colors mb-1.5 leading-snug">
            {service.title}
          </h5>

          {/* Service Description */}
          <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed mb-4">
            {service.desc}
          </p>
        </div>

        {/* Capability Pills */}
        {service.capabilities && service.capabilities.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100/80">
            {service.capabilities.map((cap) => (
              <span
                key={cap}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-[10.5px] font-mono font-medium text-slate-500 bg-slate-50/85 border border-slate-200/80 hover:bg-indigo-50/90 hover:border-indigo-300/40 hover:text-indigo-600 transition-all duration-200 cursor-default"
              >
                {cap}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
