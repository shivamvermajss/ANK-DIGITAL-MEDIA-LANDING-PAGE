import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Atom,
  Layers,
  Server,
  Code2,
  Database,
  Palette,
  Smartphone,
  ShoppingBag,
  CreditCard,
  FileText,
} from 'lucide-react';
import { DEVELOPMENT_CATEGORY } from '../../../data/services';
import { ServiceIcon } from './ServiceIcon';
import { WebPlatformVisual } from './WebPlatformVisual';
import { SystemArchitectureVisual } from './SystemArchitectureVisual';
import { CardHoverContext } from './CardHoverContext';
export { CardHoverContext };

/**
 * Technology Pill Configuration:
 * Brand-aware subtle accents, icons, and soft colored glows on hover.
 * Zero neon, authentic and restrained for every service capability.
 */
const TECH_PILL_CONFIG = {
  // Frontend & UI
  react: {
    icon: Atom,
    hoverBorder: 'rgba(6, 182, 212, 0.40)', // cyan
    hoverBg: 'rgba(236, 254, 255, 0.95)',
    hoverText: '#0891b2',
    hoverShadow: '0 4px 14px -2px rgba(6, 182, 212, 0.16)',
    iconColor: '#06b6d4',
  },
  'react native': {
    icon: Smartphone,
    hoverBorder: 'rgba(6, 182, 212, 0.40)', // cyan
    hoverBg: 'rgba(236, 254, 255, 0.95)',
    hoverText: '#0891b2',
    hoverShadow: '0 4px 14px -2px rgba(6, 182, 212, 0.16)',
    iconColor: '#06b6d4',
  },
  flutter: {
    icon: Smartphone,
    hoverBorder: 'rgba(14, 165, 233, 0.40)', // sky
    hoverBg: 'rgba(240, 249, 255, 0.95)',
    hoverText: '#0284c7',
    hoverShadow: '0 4px 14px -2px rgba(14, 165, 233, 0.16)',
    iconColor: '#0ea5e9',
  },
  javascript: {
    icon: Code2,
    hoverBorder: 'rgba(245, 158, 11, 0.40)', // amber
    hoverBg: 'rgba(254, 252, 232, 0.95)',
    hoverText: '#b45309',
    hoverShadow: '0 4px 14px -2px rgba(245, 158, 11, 0.16)',
    iconColor: '#d97706',
  },
  html: {
    icon: Code2,
    hoverBorder: 'rgba(249, 115, 22, 0.40)', // orange
    hoverBg: 'rgba(255, 247, 237, 0.95)',
    hoverText: '#c2410c',
    hoverShadow: '0 4px 14px -2px rgba(249, 115, 22, 0.16)',
    iconColor: '#ea580c',
  },
  css: {
    icon: Palette,
    hoverBorder: 'rgba(14, 165, 233, 0.40)', // blue
    hoverBg: 'rgba(240, 249, 255, 0.95)',
    hoverText: '#0284c7',
    hoverShadow: '0 4px 14px -2px rgba(14, 165, 233, 0.16)',
    iconColor: '#0ea5e9',
  },
  'ui/ux': {
    icon: Sparkles,
    hoverBorder: 'rgba(139, 92, 246, 0.40)', // purple
    hoverBg: 'rgba(245, 243, 255, 0.95)',
    hoverText: '#7c3aed',
    hoverShadow: '0 4px 14px -2px rgba(139, 92, 246, 0.16)',
    iconColor: '#8b5cf6',
  },
  tailwind: {
    icon: Palette,
    hoverBorder: 'rgba(6, 182, 212, 0.40)',
    hoverBg: 'rgba(236, 254, 255, 0.95)',
    hoverText: '#0891b2',
    hoverShadow: '0 4px 14px -2px rgba(6, 182, 212, 0.16)',
    iconColor: '#06b6d4',
  },

  // Backend & Architecture
  'next.js': {
    icon: Layers,
    hoverBorder: 'rgba(100, 116, 139, 0.40)', // slate
    hoverBg: 'rgba(241, 245, 249, 0.95)',
    hoverText: '#0f172a',
    hoverShadow: '0 4px 14px -2px rgba(100, 116, 139, 0.14)',
    iconColor: '#334155',
  },
  'node.js': {
    icon: Server,
    hoverBorder: 'rgba(16, 185, 129, 0.40)', // emerald
    hoverBg: 'rgba(236, 253, 245, 0.95)',
    hoverText: '#059669',
    hoverShadow: '0 4px 14px -2px rgba(16, 185, 129, 0.16)',
    iconColor: '#10b981',
  },
  apis: {
    icon: Code2,
    hoverBorder: 'rgba(99, 102, 241, 0.40)', // indigo
    hoverBg: 'rgba(238, 242, 255, 0.95)',
    hoverText: '#4f46e5',
    hoverShadow: '0 4px 14px -2px rgba(99, 102, 241, 0.16)',
    iconColor: '#6366f1',
  },
  api: {
    icon: Code2,
    hoverBorder: 'rgba(99, 102, 241, 0.40)',
    hoverBg: 'rgba(238, 242, 255, 0.95)',
    hoverText: '#4f46e5',
    hoverShadow: '0 4px 14px -2px rgba(99, 102, 241, 0.16)',
    iconColor: '#6366f1',
  },
  database: {
    icon: Database,
    hoverBorder: 'rgba(59, 130, 246, 0.40)', // blue
    hoverBg: 'rgba(239, 246, 255, 0.95)',
    hoverText: '#2563eb',
    hoverShadow: '0 4px 14px -2px rgba(59, 130, 246, 0.16)',
    iconColor: '#3b82f6',
  },

  // E-Commerce & Business
  shopify: {
    icon: ShoppingBag,
    hoverBorder: 'rgba(22, 163, 74, 0.40)', // soft green
    hoverBg: 'rgba(240, 253, 244, 0.95)',
    hoverText: '#15803d',
    hoverShadow: '0 4px 14px -2px rgba(22, 163, 74, 0.16)',
    iconColor: '#16a34a',
  },
  stripe: {
    icon: CreditCard,
    hoverBorder: 'rgba(99, 102, 241, 0.40)', // violet / indigo
    hoverBg: 'rgba(238, 242, 255, 0.95)',
    hoverText: '#4f46e5',
    hoverShadow: '0 4px 14px -2px rgba(99, 102, 241, 0.16)',
    iconColor: '#6366f1',
  },

  // CMS & Creative
  cms: {
    icon: Database,
    hoverBorder: 'rgba(99, 102, 241, 0.40)',
    hoverBg: 'rgba(238, 242, 255, 0.95)',
    hoverText: '#4f46e5',
    hoverShadow: '0 4px 14px -2px rgba(99, 102, 241, 0.16)',
    iconColor: '#6366f1',
  },
  content: {
    icon: FileText,
    hoverBorder: 'rgba(59, 130, 246, 0.40)',
    hoverBg: 'rgba(239, 246, 255, 0.95)',
    hoverText: '#2563eb',
    hoverShadow: '0 4px 14px -2px rgba(59, 130, 246, 0.16)',
    iconColor: '#3b82f6',
  },
  'visual design': {
    icon: Palette,
    hoverBorder: 'rgba(139, 92, 246, 0.40)',
    hoverBg: 'rgba(245, 243, 255, 0.95)',
    hoverText: '#7c3aed',
    hoverShadow: '0 4px 14px -2px rgba(139, 92, 246, 0.16)',
    iconColor: '#8b5cf6',
  },
  branding: {
    icon: Sparkles,
    hoverBorder: 'rgba(244, 63, 94, 0.40)',
    hoverBg: 'rgba(255, 241, 242, 0.95)',
    hoverText: '#e11d48',
    hoverShadow: '0 4px 14px -2px rgba(244, 63, 94, 0.16)',
    iconColor: '#f43f5e',
  },
};

/**
 * Premium Interactive Technology Capsule (Sections 5 & 6)
 * - 14-16px aligned icons
 * - Subtle brand tint on hover
 * - translateY(-1px) micro-lift
 * - Group hover icon scale
 */
function TechBadge({ text }) {
  const [isHovered, setIsHovered] = useState(false);
  const key = text.toLowerCase();
  const config = TECH_PILL_CONFIG[key] || {
    icon: Sparkles,
    hoverBorder: 'rgba(99, 102, 241, 0.40)',
    hoverBg: 'rgba(238, 242, 255, 0.95)',
    hoverText: '#4f46e5',
    hoverShadow: '0 4px 14px -2px rgba(99, 102, 241, 0.16)',
    iconColor: '#6366f1',
  };
  const IconComponent = config.icon;

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group/pill inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 select-none cursor-default shadow-2xs hover:-translate-y-px"
      style={{
        background: isHovered ? config.hoverBg : 'rgba(255, 255, 255, 0.85)',
        border: `1px solid ${isHovered ? config.hoverBorder : 'rgba(226, 232, 240, 0.90)'}`,
        color: isHovered ? config.hoverText : '#475569',
        boxShadow: isHovered ? config.hoverShadow : '0 1px 2px 0 rgba(0, 0, 0, 0.02)',
      }}
    >
      <IconComponent
        className="w-3.5 h-3.5 transition-transform duration-200 group-hover/pill:scale-110 shrink-0"
        style={{
          color: isHovered ? config.iconColor : '#64748b',
        }}
      />
      <span>{text}</span>
    </span>
  );
}

/**
 * Reusable SpotlightCard with Dynamic Cursor Tracking & Subtle Border Sheen (Sections 1, 2 & 3)
 * - Exposes --mouse-x and --mouse-y CSS variables directly for peak performance
 * - Smooth -4px translateY lift on hover with cubic-bezier(0.16, 1, 0.3, 1)
 * - Subtle border sheen and indigo-tinted shadow
 */
function SpotlightCard({
  children,
  className = '',
  isFeatured = false,
  cardKey = '',
  reducedMotion = false,
  ...props
}) {
  const cardRef = useRef(null);
  const rectRef = useRef(null);
  const rafRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (reducedMotion || !cardRef.current) return;
      const clientX = e.clientX;
      const clientY = e.clientY;
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        if (!cardRef.current) return;
        if (!rectRef.current) {
          rectRef.current = cardRef.current.getBoundingClientRect();
        }
        const rect = rectRef.current;
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
      });
    },
    [reducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    rectRef.current = null;
    setIsHovered(false);
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <CardHoverContext.Provider value={isHovered}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={
          reducedMotion
            ? {}
            : {
                y: -4,
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
              }
        }
        className={`group relative rounded-3xl overflow-hidden transition-all duration-300 select-none ${
          isFeatured
            ? 'p-6 sm:p-8 bg-gradient-to-br from-white/95 via-white/90 to-indigo-50/40 border border-slate-200/80 shadow-[0_20px_50px_-25px_rgba(99,102,241,0.18)] hover:shadow-xl hover:shadow-indigo-500/12 hover:border-indigo-200/90 backdrop-blur-[20px]'
            : cardKey === 'web-designing'
            ? 'p-6 bg-gradient-to-br from-white/95 via-white/90 to-indigo-50/25 backdrop-blur-xl border border-indigo-200/70 shadow-[0_16px_40px_-25px_rgba(99,102,241,0.15)] hover:shadow-xl hover:shadow-indigo-500/14 hover:border-indigo-300/80'
            : cardKey === 'mobile-application'
            ? 'p-6 bg-gradient-to-br from-white/95 via-white/90 to-blue-50/20 backdrop-blur-xl border border-blue-200/60 shadow-[0_16px_40px_-25px_rgba(59,130,246,0.12)] hover:shadow-xl hover:shadow-blue-500/12 hover:border-blue-300/80'
            : 'p-6 bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-[0_16px_40px_-25px_rgba(15,23,42,0.10)] hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200/80'
        } ${className}`}
        {...props}
      >
        {/* 1. Dynamic Cursor Spotlight (Follows mouse position subtly, Section 1) */}
        {!reducedMotion && (
          <>
            {/* Subtle Radial Light Glow inside card only */}
            <div
              className={`pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 hidden sm:block ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                background:
                  'radial-gradient(420px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.12), transparent 42%)',
              }}
              aria-hidden="true"
            />
            {/* Subtle Radial Border Sheen (Section 3) */}
            <div
              className={`pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 hidden sm:block ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                background:
                  'radial-gradient(340px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.28), rgba(139, 92, 246, 0.16) 35%, transparent 60%)',
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

        {/* Ambient decorative corner glow for featured practice cards */}
        {isFeatured && (
          <div
            className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br from-blue-400/15 via-indigo-400/12 to-purple-400/15 blur-2xl group-hover:scale-110 transition-transform duration-500"
            aria-hidden="true"
          />
        )}

        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          {children}
        </div>
      </motion.div>
    </CardHoverContext.Provider>
  );
}

/**
 * DevelopmentCapabilities Component
 * Specialized Development Practices:
 * - Row 1: Primary Featured Practice Cards (Web Application & Software Development)
 * - Rows 2 & 3: 6 Capability Cards in a refined 3-column responsive grid
 * - Sections 1-18: Cursor spotlight, card hover lift, tech pill micro-interactions, CTA animations,
 *   and subtle asymmetric bento hierarchy (Web Designing & Mobile Application badges).
 */
export function DevelopmentCapabilities() {
  const shouldReduceMotion = useReducedMotion();

  // Exclude 'web-development' which is highlighted in the primary showcase above
  const allServices = DEVELOPMENT_CATEGORY.services.filter(
    (s) => s.id !== 'web-development'
  );

  // Group into featured (Web Application & Software Development) and secondary
  const featuredServices = allServices.filter((s) => s.featured);
  const secondaryServices = allServices.filter((s) => !s.featured);

  return (
    <div
      id="development-capabilities"
      className="relative scroll-mt-28 mb-24 sm:mb-28 lg:mb-36 select-none"
    >
      {/* ======================================================== */}
      {/* 1. SECTION BACKGROUND: DOT GRID & AMBIENT INDIGO MESH    */}
      {/* ======================================================== */}
      <div
        className="pointer-events-none absolute -inset-x-6 sm:-inset-x-12 -inset-y-12 sm:-inset-y-16 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        {/* Subtle technical canvas dot grid (24px x 24px) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            opacity: 0.28,
          }}
        />

        {/* Ambient Orb 1: Soft Indigo Mesh */}
        <div
          className="absolute top-16 left-1/4 w-[600px] sm:w-[750px] h-[450px] -translate-x-1/2 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.16), rgba(165, 180, 252, 0.10), transparent 65%)',
            filter: 'blur(120px)',
            opacity: 0.8,
          }}
        />

        {/* Ambient Orb 2: Weaker Violet Mesh */}
        <div
          className="absolute top-24 right-1/4 w-[500px] sm:w-[620px] h-[380px] translate-x-1/2 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.10), rgba(196, 181, 253, 0.05), transparent 65%)',
            filter: 'blur(130px)',
            opacity: 0.6,
          }}
        />

        {/* Section 12: Subtle Ambient Mesh Behind Capability Grid */}
        <div
          className="pointer-events-none absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[800px] sm:w-[950px] h-[450px] rounded-full blur-[130px] opacity-[0.14]"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(139, 92, 246, 0.14) 40%, transparent 70%)',
          }}
        />
      </div>

      {/* ======================================================== */}
      {/* 2. REFINED SECTION HEADER                                */}
      {/* ======================================================== */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 sm:mb-12 pb-5 border-b border-slate-200/80">
        <div className="max-w-xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs font-mono font-bold tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>ENGINEERED CAPABILITIES</span>
          </div>

          {/* Headline */}
          <h4 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] tracking-tight leading-tight mb-2">
            Specialized Development Practices
          </h4>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#475569] font-sans leading-relaxed">
            Purpose-built digital products, platforms and experiences designed around real business needs.
          </p>
        </div>

        {/* Right-side subtle label */}
        <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold self-start sm:self-end">
          Tailored Architecture For Every Platform
        </span>
      </div>

      {/* ======================================================== */}
      {/* 3. ASYMMETRIC BENTO ARCHITECTURE                         */}
      {/* ======================================================== */}
      <div className="space-y-6 sm:space-y-6">
        {/* ====================================================== */}
        {/* ROW 1: PRIMARY FEATURED HERO CARDS                     */}
        {/* Web Application & Software Development                 */}
        {/* ====================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {featuredServices.map((service) => {
            const isWebApp = service.id === 'web-application';

            return (
              <SpotlightCard
                key={service.id}
                cardKey={service.id}
                isFeatured={true}
                reducedMotion={shouldReduceMotion}
                className="lg:col-span-6 flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Icon Capsule & Category Eyebrow */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl bg-indigo-50/90 border border-indigo-200/60 text-indigo-600 flex items-center justify-center shadow-xs group-hover:scale-[1.06] group-hover:rotate-1 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(99,102,241,0.25)] transition-all duration-300"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    >
                      <ServiceIcon name={service.icon} className="w-6 h-6 transition-colors" />
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50/90 px-3 py-1 rounded-full border border-indigo-200/80 shadow-2xs">
                      {service.eyebrow || 'Featured Practice'}
                    </span>
                  </div>

                  {/* Title (Section 10 Micro-Motion) */}
                  <h5
                    className="font-heading font-black text-2xl sm:text-3xl text-[#0F172A] mb-2 tracking-tight group-hover:text-indigo-900 group-hover:-translate-y-0.5 transition-all duration-300"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                  >
                    {service.title}
                  </h5>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#475569] font-sans leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {/* Light 3D Centerpiece Visual */}
                  {isWebApp ? <WebPlatformVisual /> : <SystemArchitectureVisual />}

                  {/* Technology Badges (Sections 5 & 6) */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-3 mb-5">
                    {service.technologies?.map((tech) => (
                      <TechBadge key={tech} text={tech} />
                    ))}
                  </div>
                </div>

                {/* Explore Capability CTA (Section 4) */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    aria-label={`Inquire about ${service.title}`}
                    className="group/cta w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-[12px] text-xs font-mono text-slate-600 transition-all duration-300 cursor-pointer select-none hover:text-indigo-600 hover:bg-indigo-50/85 hover:border-indigo-300/60 hover:shadow-[0_6px_16px_-8px_rgba(99,102,241,0.25)]"
                    style={{
                      background: 'rgba(248, 250, 252, 0.85)',
                      border: '1px solid rgba(226, 232, 240, 0.85)',
                    }}
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="font-semibold group-hover/cta:text-indigo-600 transition-colors duration-300">
                        Explore Capability
                      </span>
                      <span className="text-slate-400 font-normal">• Consultation</span>
                    </span>
                    <div className="flex items-center gap-1">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/cta:text-indigo-600 group-hover/cta:translate-x-2 transition-all duration-300" />
                    </div>
                  </a>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* ====================================================== */}
        {/* ROW 2 & ROW 3: SECONDARY SUPPORTING CAPABILITIES       */}
        {/* 6 cards in a responsive 3-column asymmetric layout      */}
        {/* Target Cards: Web Designing, Mobile App, Desktop App,  */}
        {/* E-Commerce, Graphics Design, CMS                        */}
        {/* ====================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {secondaryServices.map((service) => {
            const isWebDesign = service.id === 'web-designing';
            const isMobileApp = service.id === 'mobile-application';

            return (
              <SpotlightCard
                key={service.id}
                cardKey={service.id}
                isFeatured={false}
                reducedMotion={shouldReduceMotion}
                className="flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Icon Capsule & Tag / Hierarchy Badge (Sections 7, 8 & 9) */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    {/* Main Service Icon Container with Section 9 hover scale & soft glow */}
                    <div
                      className="w-10 h-10 rounded-xl bg-slate-100/90 border border-slate-200/80 text-blue-600 flex items-center justify-center shadow-2xs group-hover:scale-[1.06] group-hover:rotate-1 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_4px_14px_rgba(99,102,241,0.25)] transition-all duration-300"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    >
                      <ServiceIcon name={service.icon} className="w-5 h-5 transition-colors" />
                    </div>

                    {/* Section 7 & 8: Asymmetric Bento Status Badges */}
                    {isWebDesign ? (
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-50/90 text-emerald-700 border border-emerald-200/80 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Popular Capability
                        </span>
                      </div>
                    ) : isMobileApp ? (
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-50/90 text-blue-700 border border-blue-200/80 shadow-2xs">
                          <span className="text-blue-500">⚡</span>
                          High Demand
                        </span>
                      </div>
                    ) : (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-100/80 px-2.5 py-0.5 rounded-md border border-slate-200/70">
                        {service.tag}
                      </span>
                    )}
                  </div>

                  {/* Service Title (Section 10 Micro-Motion) */}
                  <h5
                    className="font-heading font-extrabold text-lg sm:text-xl text-[#0F172A] mb-2 leading-snug group-hover:text-indigo-900 group-hover:-translate-y-0.5 transition-all duration-300"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                  >
                    {service.title}
                  </h5>

                  {/* Concise supporting description */}
                  <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {/* Technology Badges (Sections 5 & 6) */}
                  {service.technologies && service.technologies.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 mb-5">
                      {service.technologies.map((tech) => (
                        <TechBadge key={tech} text={tech} />
                      ))}
                    </div>
                  )}
                </div>

                {/* Explore Capability CTA (Section 4) */}
                <div className="pt-3.5 border-t border-slate-100/90">
                  <a
                    href="#contact"
                    aria-label={`Inquire about ${service.title}`}
                    className="group/cta flex items-center justify-between text-xs font-mono font-bold text-slate-600 hover:text-indigo-600 transition-colors duration-300 cursor-pointer select-none"
                  >
                    <span className="transition-colors duration-300 group-hover/cta:text-indigo-600">
                      Explore Capability
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/cta:text-indigo-600 group-hover/cta:translate-x-2 transition-all duration-300" />
                  </a>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
