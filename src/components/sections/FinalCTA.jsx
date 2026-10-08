import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';

/**
 * FinalCTA Component
 * 
 * Standalone premium 2026 agency conversion section.
 * Positioned between Technologies and Contact.
 * Features:
 * - Subtle ambient light environment with soft indigo/purple orbs
 * - Animated slow gradient border (indigo -> blue -> purple -> cyan)
 * - Strategic gradient typography on "digital experience"
 * - Dominant primary CTA with subtle passing shimmer + secondary ghost CTA
 * - Authentic capability signals (Web Development, Digital Marketing, SMS & Communication, Hosting & Domains)
 * - Native abstract SVG connection paths (Idea -> Design -> Development -> Growth)
 * - Zero fake claims, zero fake stats, zero raster images
 * - Full prefers-reduced-motion support
 */
export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const capabilities = [
    'Web Development',
    'Digital Marketing',
    'SMS & Communication',
    'Hosting & Domains',
  ];

  return (
    <section
      id="cta"
      aria-label="Start Your Digital Project"
      className="relative py-14 sm:py-18 lg:py-24 bg-transparent text-brand-dark overflow-hidden scroll-mt-20 select-none"
    >
      {/* 1. Subtle 24px Background Dot Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(148, 163, 184, 0.22) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* 2. Atmospheric Ambient Orbs */}
      {/* Orb 1: Soft Indigo (Upper Left) */}
      <div
        className="pointer-events-none absolute top-4 left-[10%] w-[550px] sm:w-[700px] h-[450px] rounded-full blur-[130px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #6366F1 0%, #3B82F6 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Orb 2: Soft Purple (Lower Right) */}
      <div
        className="pointer-events-none absolute bottom-4 right-[10%] w-[550px] sm:w-[700px] h-[450px] rounded-full blur-[130px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #9333EA 0%, #A855F7 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Orb 3: Subtle Cyan Secondary Accent (Center) */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #06B6D4 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3. Outer Animated Gradient Border Wrapper */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative p-[1.5px] rounded-[32px] sm:rounded-[36px] transition-all duration-500 overflow-hidden group"
          style={{
            boxShadow: isHovered
              ? '0 36px 72px -16px rgba(99, 102, 241, 0.22), 0 0 35px rgba(99, 102, 241, 0.12)'
              : '0 30px 60px -15px rgba(99, 102, 241, 0.15), 0 10px 25px -5px rgba(15, 23, 42, 0.04)',
          }}
        >
          {/* Rotating Soft Conic Gradient Border Layer */}
          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: [0, 360] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-[100%] pointer-events-none transition-opacity duration-500"
            style={{
              background: 'conic-gradient(from 0deg, #3B82F6, #6366F1, #9333EA, #06B6D4, #3B82F6)',
              opacity: isHovered ? 0.85 : 0.45,
              filter: 'blur(16px)',
            }}
            aria-hidden="true"
          />

          {/* 4. Inner Floating Frosted Glass Card */}
          <div className="relative rounded-[30.5px] sm:rounded-[34.5px] bg-white/80 backdrop-blur-2xl border border-white/90 p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
            {/* Native Abstract Decorative Flow Visual (Corners/Edges, Opacity 8-12%) */}
            {/* Top-Left SVG Node Cluster: Idea -> Design */}
            <svg
              className="pointer-events-none absolute -top-4 -left-4 w-48 sm:w-64 h-48 sm:h-64 text-indigo-500/10"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="4" fill="currentColor" />
              <path d="M50 50 Q110 30 140 80" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="140" cy="80" r="3" fill="currentColor" />
              <line x1="140" y1="80" x2="180" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx="180" cy="120" r="5" stroke="currentColor" strokeWidth="1" />
            </svg>

            {/* Bottom-Right SVG Node Cluster: Development -> Growth */}
            <svg
              className="pointer-events-none absolute -bottom-6 -right-6 w-48 sm:w-64 h-48 sm:h-64 text-purple-500/10"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="150" cy="150" r="42" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="150" cy="150" r="4" fill="currentColor" />
              <path d="M150 150 Q90 170 60 120" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="60" cy="120" r="3" fill="currentColor" />
              <line x1="60" y1="120" x2="20" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx="20" cy="80" r="5" stroke="currentColor" strokeWidth="1" />
            </svg>

            {/* Content Container with Staggered Viewport Entrance */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
            >
              {/* Top Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/90 border border-indigo-200/80 text-indigo-700 text-xs font-mono font-bold tracking-widest uppercase mb-5 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
                <span>GET IN TOUCH</span>
              </div>

              {/* Main Headline */}
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-[-0.03em] leading-[1.12] sm:leading-[1.10] mb-5">
                Have a{' '}
                <span
                  className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent inline-block font-extrabold py-1 pb-2 -mb-2"
                >
                  digital experience
                </span>{' '}
                in mind?
              </h2>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-[620px] mb-8 sm:mb-10">
                Let's turn your digital idea into an experience people remember.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10">
                {/* Primary CTA: Start a Project */}
                <motion.a
                  href="#contact"
                  whileHover={shouldReduceMotion ? {} : { y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  className="relative group/btn inline-flex items-center justify-center gap-2.5 h-12 sm:h-14 px-8 sm:px-10 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-[0_12px_30px_-10px_rgba(99,102,241,0.38)] hover:shadow-[0_16px_36px_-10px_rgba(99,102,241,0.48)] transition-all duration-200 border border-white/25 overflow-hidden"
                >
                  {/* Subtle Shimmer Sheen Passing Across */}
                  {!shouldReduceMotion && (
                    <motion.div
                      animate={{ x: ['-120%', '220%'] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
                      className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none"
                    />
                  )}

                  <span className="relative z-10">Start a Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 duration-200 relative z-10" />
                </motion.a>

                {/* Secondary CTA: Talk to Us */}
                <motion.a
                  href="#contact"
                  whileHover={shouldReduceMotion ? {} : { y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2.5 h-12 sm:h-14 px-7 sm:px-8 rounded-full text-sm sm:text-base font-semibold text-slate-800 bg-white/85 hover:bg-indigo-50/60 backdrop-blur-md border border-slate-200/90 hover:border-indigo-300 shadow-[0_4px_16px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_rgba(99,102,241,0.12)] hover:text-indigo-600 transition-all duration-200 group/ghost"
                >
                  <MessageCircle className="w-4 h-4 text-slate-500 group-hover/ghost:text-indigo-600 transition-colors" />
                  <span>Talk to Us</span>
                </motion.a>
              </div>

              {/* Capability Signals Strip (Real ANK Service Categories) */}
              <div className="pt-6 border-t border-slate-200/70 w-full flex flex-col items-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3 block">
                  Core Practice Capabilities
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                  {capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50/90 border border-slate-200/80 text-slate-600 text-xs font-mono font-medium hover:bg-indigo-50/70 hover:border-indigo-200 hover:text-indigo-700 transition-all duration-200 cursor-default shadow-2xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/70" />
                      <span>{cap}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
