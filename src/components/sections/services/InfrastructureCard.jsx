import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Server, Globe } from 'lucide-react';
import { InfrastructureBadge } from './InfrastructureBadge';
import { HostingInfrastructureVisual } from './HostingInfrastructureVisual';
import { DomainInfrastructureVisual } from './DomainInfrastructureVisual';

/**
 * InfrastructureCard Component
 * 
 * Elevated infrastructure visual card for Power / Digital Foundation.
 * Features:
 * - Premium hover lift (translateY -4px, scale 1.005, duration 0.3s cubic-bezier(0.16, 1, 0.3, 1))
 * - Cursor-following border sheen masked strictly to the 1px card border
 * - High-contrast inner mockup separation
 * - Interactive capability badges with tailored domain hover effects
 * - Subtle CTA link with smooth translateX(5-6px) arrow transition
 * - Strictly avoids fake metrics and unverified vendor claims
 * - Respects prefers-reduced-motion
 */
export function InfrastructureCard({ service, index = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const isHosting = service.id === 'web-hosting';

  const accentStyles = isHosting
    ? {
        border: 'rgba(226, 232, 240, 0.90)',
        borderHover: 'rgba(59, 130, 246, 0.45)',
        borderSheen: 'rgba(59, 130, 246, 0.40)',
        shadow: '0 20px 48px -24px rgba(59, 130, 246, 0.10), 0 2px 8px rgba(15, 23, 42, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.90)',
        shadowHover: '0 26px 56px -20px rgba(59, 130, 246, 0.18), 0 4px 14px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
        badgeBg: 'rgba(239, 246, 255, 0.95)',
        badgeText: '#1D4ED8',
        badgeBorder: 'rgba(59, 130, 246, 0.30)',
        iconBgHover: 'rgba(239, 246, 255, 0.98)',
        iconBorderHover: 'rgba(59, 130, 246, 0.35)',
        iconColor: '#2563EB',
        ctaText: '#2563EB',
        ctaBgHover: 'rgba(239, 246, 255, 0.95)',
        ctaBorderHover: 'rgba(59, 130, 246, 0.35)',
      }
    : {
        border: 'rgba(226, 232, 240, 0.90)',
        borderHover: 'rgba(99, 102, 241, 0.45)',
        borderSheen: 'rgba(99, 102, 241, 0.40)',
        shadow: '0 20px 48px -24px rgba(99, 102, 241, 0.10), 0 2px 8px rgba(15, 23, 42, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.90)',
        shadowHover: '0 26px 56px -20px rgba(99, 102, 241, 0.18), 0 4px 14px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
        badgeBg: 'rgba(238, 242, 255, 0.95)',
        badgeText: '#4338CA',
        badgeBorder: 'rgba(99, 102, 241, 0.30)',
        iconBgHover: 'rgba(238, 242, 255, 0.98)',
        iconBorderHover: 'rgba(99, 102, 241, 0.35)',
        iconColor: '#4F46E5',
        ctaText: '#4F46E5',
        ctaBgHover: 'rgba(238, 242, 255, 0.95)',
        ctaBorderHover: 'rgba(99, 102, 241, 0.35)',
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
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.005 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative p-6 sm:p-7 lg:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group overflow-hidden h-full"
      style={{
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: `1px solid ${isHovered ? accentStyles.borderHover : accentStyles.border}`,
        boxShadow: isHovered ? accentStyles.shadowHover : accentStyles.shadow,
        transition: 'border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* 1. Cursor-Following Border Sheen (180px circle masked strictly to 1px border) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] p-[1px] transition-opacity duration-300 hidden sm:block"
        style={{
          opacity: isHovered && !shouldReduceMotion ? 1 : 0,
          background: `radial-gradient(180px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), ${accentStyles.borderSheen}, transparent 70%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
        aria-hidden="true"
      />

      {/* 2. Top Header & Metadata */}
      <div className="relative z-10 mb-5">
        <div className="flex items-center justify-between gap-3 mb-4">
          {/* Frosted Icon Capsule: 42px */}
          <div
            className="w-[42px] h-[42px] rounded-xl flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-105"
            style={{
              background: isHovered ? accentStyles.iconBgHover : 'rgba(248, 250, 252, 0.9)',
              border: `1px solid ${isHovered ? accentStyles.iconBorderHover : 'rgba(226, 232, 240, 0.85)'}`,
              color: isHovered ? accentStyles.iconColor : '#334155',
              boxShadow: isHovered ? `0 4px 16px -2px ${accentStyles.iconColor}30` : 'none',
            }}
          >
            {isHosting ? (
              <Server className="w-5 h-5 transition-transform" />
            ) : (
              <Globe className="w-5 h-5 transition-transform" />
            )}
          </div>

          {/* Category Pill */}
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
            <span>{service.type || (isHosting ? 'Cloud & Web Hosting' : 'Identity & DNS')}</span>
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
      </div>

      {/* 3. Central Infrastructure Micro-Visual (Hosting Dashboard or Domain Search) */}
      <div className="relative z-10 mb-5">
        {isHosting ? (
          <HostingInfrastructureVisual isHovered={isHovered} />
        ) : (
          <DomainInfrastructureVisual isHovered={isHovered} />
        )}
      </div>

      {/* 4. Bottom Area: Capability Badges & Interactive CTA */}
      <div className="relative z-10 pt-4 border-t border-slate-100/90 flex flex-col gap-3.5">
        {/* Capability Badges with Interactive Tints */}
        {service.capabilities && service.capabilities.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {service.capabilities.map((cap, i) => (
              <InfrastructureBadge key={i} text={cap} />
            ))}
          </div>
        )}

        {/* Action Button-Link & Status Indicator */}
        <div className="flex items-center justify-between pt-1">
          <a
            href="#contact"
            className="group/cta inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] text-xs font-mono font-medium transition-all duration-300 select-none shadow-2xs hover:shadow-xs"
            style={{
              background: isHovered ? accentStyles.ctaBgHover : 'rgba(248, 250, 252, 0.85)',
              border: `1px solid ${isHovered ? accentStyles.ctaBorderHover : 'rgba(226, 232, 240, 0.85)'}`,
              color: isHovered ? accentStyles.ctaText : '#475569',
            }}
          >
            <span className="transition-colors duration-200 group-hover/cta:font-semibold">
              Setup & Configuration
            </span>
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5 group-hover/cta:translate-x-1.5"
              style={{
                color: isHovered ? accentStyles.ctaText : '#94a3b8',
              }}
            />
          </a>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 select-none">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: isHovered ? accentStyles.iconColor : '#94a3b8' }}
            />
            <span>{isHosting ? 'Active Infrastructure' : 'DNS Resolution'}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
