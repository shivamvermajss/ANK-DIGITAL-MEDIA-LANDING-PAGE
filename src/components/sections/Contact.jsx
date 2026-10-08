import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONTACT_INTRO } from '../../data/contact';
import { ContactVisual } from './contact/ContactVisual';
import { ContactInfo } from './contact/ContactInfo';
import { ContactForm } from './contact/ContactForm';

export function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      aria-label="ANK Digital Media Project Intake & Contact"
      className="relative py-24 sm:py-28 lg:py-36 bg-[#F8FAFC] text-slate-900 overflow-hidden scroll-mt-20"
    >
      {/* 1. Subtle Premium Dot-Grid Overlay (22px x 22px) */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(148, 163, 184, 0.18) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden="true"
      />

      {/* 2. Ambient Floating Radial Glows */}
      {/* Primary Orb: Indigo/Blue behind the right Project Brief form */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 18, -12, 0],
                y: [0, -16, 12, 0],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-[-5%] w-[580px] h-[580px] rounded-full pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(37, 99, 235, 0.12) 40%, transparent 70%)',
          filter: 'blur(130px)',
        }}
        aria-hidden="true"
      />

      {/* Secondary Orb: Purple toward the lower/outer area */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -15, 14, 0],
                y: [0, 18, -14, 0],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.13) 0%, rgba(99, 102, 241, 0.08) 45%, transparent 70%)',
          filter: 'blur(120px)',
        }}
        aria-hidden="true"
      />

      {/* Subtle Top Linear Edge Fade for Smooth Section Transitions */}
      <div
        className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white/80 to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Asymmetric Grid (45% Left / 55% Right on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN: Narrative & Verified Contact (~45% width on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {/* 4. Frosted Glass Badge: [ ● START A PROJECT ] */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-5 inline-block"
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.80)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(226, 232, 240, 0.85)',
                  boxShadow: '0 4px 14px -3px rgba(15, 23, 42, 0.06)',
                }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                </span>
                <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-slate-700">
                  {CONTACT_INTRO.eyebrow}
                </span>
              </div>
            </motion.div>

            {/* 3. Left Headline: Navy First Part, Gradient Second Part */}
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.05] mb-5"
            >
              <span>{CONTACT_INTRO.headlinePart1}</span>
              <span
                className="block mt-1"
                style={{
                  background: 'linear-gradient(90deg, #2563EB, #6366F1, #8B5CF6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {CONTACT_INTRO.headlinePart2}
              </span>
            </motion.h2>

            {/* Supporting Copy */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed mb-8 max-w-lg"
            >
              {CONTACT_INTRO.supporting}
            </motion.p>

            {/* 5. Upgraded Project Flow Pipeline */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mb-8"
            >
              <ContactVisual />
            </motion.div>

            {/* 16-19. Upgraded Verified Contact Channels */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="space-y-3"
            >
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block px-1">
                Contact Details
              </span>
              <ContactInfo />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Upgraded Frosted Glass Project Brief Card (~55% width on desktop) */}
          <div className="lg:col-span-7 relative">
            {/* Subtle Peripheral Floating Micro-Accents */}
            <div
              className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-gradient-to-tr from-blue-400/20 to-indigo-400/10 blur-xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400/15 to-purple-400/10 blur-xl pointer-events-none"
              aria-hidden="true"
            />

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
