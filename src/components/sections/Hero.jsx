import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { HeroBadge } from './HeroBadge';
import { HeroSocialProof } from './HeroSocialProof';
import { TechMarquee } from './TechMarquee';
import { HeroDigitalWorkspace } from './hero/HeroDigitalWorkspace';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Controlled stagger sequence for editorial entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      aria-label="Web Engineering Studio Hero"
      className="relative min-h-[760px] lg:min-h-screen flex flex-col justify-between bg-transparent text-brand-dark overflow-hidden pt-16 sm:pt-20 lg:pt-22"
    >

      {/* Faint Cosmic Elliptical Orbital Lines from reference */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center opacity-45">
        <svg viewBox="0 0 1200 800" className="w-full h-full" fill="none">
          <ellipse cx="600" cy="400" rx="560" ry="320" stroke="rgba(192, 132, 252, 0.3)" strokeWidth="1" strokeDasharray="6 8" />
          <ellipse cx="600" cy="400" rx="430" ry="240" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" />
        </svg>
      </div>

      {/* Aurora Glow 1: Top-Right / Behind 3D Showcase (Electric Blue & Cyan) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 25, -15, 0],
                y: [0, -18, 12, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 22,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
        className="absolute top-8 right-[2%] w-[520px] sm:w-[650px] h-[520px] sm:h-[650px] rounded-full bg-gradient-to-br from-blue-400/22 via-indigo-400/18 to-cyan-300/25 blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Aurora Glow 2: Top-Left / Above Headline (Pastel Purple & Indigo) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -20, 15, 0],
                y: [0, 15, -15, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 26,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }
        }
        className="absolute -top-16 left-[5%] w-[480px] sm:w-[580px] h-[480px] sm:h-[580px] rounded-full bg-gradient-to-tr from-purple-400/20 via-indigo-300/22 to-blue-200/20 blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Aurora Glow 3: Center-Bottom (Icy Blue & Light Indigo) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 15, -20, 0],
                y: [0, -10, 15, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 28,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 4,
              }
        }
        className="absolute bottom-12 left-[25%] w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] rounded-full bg-gradient-to-tr from-cyan-300/18 via-blue-300/20 to-purple-300/18 blur-[110px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* 2. EDITORIAL ASYMMETRIC CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center py-2 sm:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 xl:gap-6 items-center w-full py-2 sm:py-4">
          {/* LEFT COLUMN: Content / Headline / CTA / Proof (~45% on desktop) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 xl:col-span-5 flex flex-col z-20"
          >
            {/* 1. TOP MICRO BADGE (Compact on mobile) */}
            <motion.div variants={itemVariants} className="mb-3 sm:mb-4">
              <HeroBadge />
            </motion.div>

            {/* 2. DISPLAY HEADLINE (Enlarged scale, tight leading) */}
            <div className="mb-4 sm:mb-5">
              <h1 className="font-heading font-black text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-[4.2rem] leading-[0.92] tracking-[-0.035em] text-[#0F172A]">
                <motion.span variants={itemVariants} className="block relative">
                  BUILD
                  {/* Subtle purple accent slashes // from reference */}
                  <span className="inline-block ml-3 text-purple-400 font-mono text-2xl sm:text-3xl font-light select-none">
                    //
                  </span>
                </motion.span>
                <motion.span variants={itemVariants} className="block mt-0.5 sm:mt-1 text-[#0F172A]">
                  DIGITAL
                </motion.span>
                <motion.span variants={itemVariants} className="block mt-0.5 sm:mt-1">
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 bg-clip-text text-transparent inline-block">
                    EXPERIENCES
                  </span>
                </motion.span>
                <motion.span variants={itemVariants} className="block mt-0.5 sm:mt-1 text-[#0F172A]">
                  THAT MOVE
                </motion.span>
                <motion.span variants={itemVariants} className="block mt-0.5 sm:mt-1 relative inline-block">
                  <span className="bg-gradient-to-r from-sky-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block">
                    BUSINESS.
                  </span>
                  {/* Subtle purple sketched squiggle wave from reference */}
                  <svg
                    viewBox="0 0 100 20"
                    className="absolute -bottom-2 -right-16 sm:-right-20 w-16 sm:w-22 text-purple-400/90 pointer-events-none"
                    fill="none"
                  >
                    <path
                      d="M 2,10 C 20,2 35,16 55,8 C 70,2 85,14 98,6"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 65,14 C 76,8 88,16 97,11"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                  </svg>
                </motion.span>
              </h1>
            </div>

            {/* 3. SUPPORTING COPY */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-lg text-[#475569] font-sans leading-relaxed max-w-xl mb-5 sm:mb-7"
            >
              We design and engineer fast, scalable digital experiences that turn
              ambitious ideas into products people remember.
            </motion.p>

            {/* 4. DUAL CTA BUTTONS (Mobile-optimized proportions) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6"
            >
              {/* PRIMARY CTA: Start a Project */}
              <motion.a
                href="#contact"
                whileHover={shouldReduceMotion ? {} : { scale: 1.025, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-cta-primary shadow-[0_10px_25px_-5px_rgba(59,130,246,0.38)] hover:shadow-[0_14px_30px_-5px_rgba(139,92,246,0.48)] transition-all duration-200 group border border-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer select-none"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
              </motion.a>

              {/* SECONDARY CTA: Explore Services */}
              <motion.a
                href="#services"
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-full text-xs sm:text-base font-semibold text-[#0F172A] bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.04)] hover:bg-white hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer select-none"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-50 transition-colors">
                  <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current ml-0.5" />
                </div>
                <span>Explore Services</span>
              </motion.a>
            </motion.div>

            {/* 5. CAPABILITY MICRO STRIP (Verified, claim-free) */}
            <motion.div variants={itemVariants}>
              <HeroSocialProof />
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Futuristic Digital Workspace (~55% on desktop) */}
          <div className="lg:col-span-7 xl:col-span-7 flex items-center justify-center w-full mt-4 sm:mt-6 lg:mt-0 relative">
            <HeroDigitalWorkspace />
          </div>
        </div>
      </div>

      {/* 3. BOTTOM TECH MARQUEE */}
      <TechMarquee />
    </section>
  );
}
