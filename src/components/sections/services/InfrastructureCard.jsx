import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Server, Globe } from 'lucide-react';
import { CapabilityPill } from './CapabilityPill';
import { HostingInfrastructureVisual } from './HostingInfrastructureVisual';
import { DomainInfrastructureVisual } from './DomainInfrastructureVisual';

/**
 * InfrastructureCard Component
 * 
 * Floating frosted-glass infrastructure visual card.
 * Replaces static checklists with rich live micro-dashboards.
 * Features:
 * - Dynamic cursor spotlight
 * - 42px frosted icon capsule with accent glow
 * - Inner visual surface (Hosting or Domain visual)
 * - Compact capability badges
 * - Interactive button-link CTA
 * - Respects prefers-reduced-motion
 */
export function InfrastructureCard({ service, index = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const isHosting = service.id === 'web-hosting';
  const accentKey = service.accent || (isHosting ? 'blue' : 'indigo');

  const accentStyles = isHosting
    ? {
        border: 'rgba(59, 130, 246, 0.22)',
        borderHover: 'rgba(59, 130, 246, 0.45)',
        shadow: '0 20px 48px -24px rgba(59, 130, 246, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.85)',
        shadowHover: '0 26px 56px -20px rgba(59, 130, 246, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
        badgeBg: 'rgba(239, 246, 255, 0.95)',
        badgeText: '#1D4ED8',
        badgeBorder: 'rgba(59, 130, 246, 0.3)',
        iconBgHover: 'rgba(239, 246, 255, 0.95)',
        iconBorderHover: 'rgba(59, 130, 246, 0.35)',
        iconColor: '#2563EB',
        ctaText: '#2563EB',
        ctaBgHover: 'rgba(239, 246, 255, 0.95)',
        ctaBorderHover: 'rgba(59, 130, 246, 0.35)',
        spotlight: 'rgba(59, 130, 246, 0.09)',
        sheenGradient: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(6,182,212,0.3), transparent 70%)',
      }
    : {
        border: 'rgba(99, 102, 241, 0.22)',
        borderHover: 'rgba(99, 102, 241, 0.45)',
        shadow: '0 20px 48px -24px rgba(99, 102, 241, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.85)',
        shadowHover: '0 26px 56px -20px rgba(99, 102, 241, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
        badgeBg: 'rgba(238, 242, 255, 0.95)',
        badgeText: '#4338CA',
        badgeBorder: 'rgba(99, 102, 241, 0.3)',
        iconBgHover: 'rgba(238, 242, 255, 0.95)',
        iconBorderHover: 'rgba(99, 102, 241, 0.35)',
        iconColor: '#4F46E5',
        ctaText: '#4F46E5',
        ctaBgHover: 'rgba(238, 242, 255, 0.95)',
        ctaBorderHover: 'rgba(99, 102, 241, 0.35)',
        spotlight: 'rgba(99, 102, 241, 0.09)',
        sheenGradient: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3), transparent 70%)',
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
      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative p-6 sm:p-7 lg:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group overflow-hidden h-full"
      style={{
        background: 'rgba(255, 255, 255, 0.78)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: `1px solid ${isHovered ? accentStyles.borderHover : accentStyles.border}`,
        boxShadow: isHovered ? accentStyles.shadowHover : accentStyles.shadow,
      }}
    >
      {/* 1. Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 hidden sm:block"
        style={{
          opacity: isHovered && !shouldReduceMotion ? 1 : 0,
          background: `radial-gradient(400px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), ${accentStyles.spotlight}, transparent 45%)`,
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

      {/* 3. Central Infrastructure Micro-Visual (Dashboard or Domain Search) */}
      <div className="relative z-10 mb-5">
        {isHosting ? (
          <HostingInfrastructureVisual isHovered={isHovered} />
        ) : (
          <DomainInfrastructureVisual isHovered={isHovered} />
        )}
      </div>

      {/* 4. Bottom Area: Capability Badges & Interactive CTA */}
      <div className="relative z-10 pt-4 border-t border-slate-100/90 flex flex-col gap-3.5">
        {/* Capability Pills */}
        {service.capabilities && service.capabilities.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {service.capabilities.map((cap, i) => (
              <CapabilityPill key={i} text={cap} accent={accentKey} />
            ))}
          </div>
        )}

        {/* Action Button-Link */}
        <div className="flex items-center justify-between pt-1">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] text-xs font-mono font-semibold transition-all duration-200 shadow-2xs"
            style={{
              background: isHovered ? accentStyles.ctaBgHover : 'rgba(248, 250, 252, 0.8)',
              border: `1px solid ${isHovered ? accentStyles.ctaBorderHover : 'rgba(226, 232, 240, 0.8)'}`,
              color: isHovered ? accentStyles.ctaText : '#475569',
            }}
          >
            <span>Setup & Configuration</span>
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform duration-200"
              style={{
                transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                color: isHovered ? accentStyles.ctaText : '#94a3b8',
              }}
            />
          </a>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 select-none">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: isHovered ? accentStyles.iconColor : '#94a3b8' }}
            />
            <span>{isHosting ? 'High Availability' : 'DNS Propagation'}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
