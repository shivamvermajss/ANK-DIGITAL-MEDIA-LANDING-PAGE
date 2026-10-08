import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { LaptopMockup } from './LaptopMockup';
import { FloatingCapabilityCard } from './FloatingCapabilityCard';
import { FloatingTechIcon } from './FloatingTechIcon';
import { Floating3DObject } from './Floating3DObject';
import { WORKSPACE_CARDS, WORKSPACE_TECH_ICONS } from '../../../data/heroWorkspace';

/**
 * HeroDigitalWorkspace Component
 * The centerpiece right-side visual replacing the old orbital globe.
 * Recreates the futuristic development workspace from the reference design:
 * - 3D angled laptop showing code editor and live preview UI
 * - Faceted bedrock pedestal with flowing electric neon streamers
 * - Frosted glass capability cards floating in space
 * - Floating technology brand icons (React, Next.js, Node.js, Tailwind)
 * - Translucent 3D glass spheres and cosmic lighting
 */
export function HeroDigitalWorkspace() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
        (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches)
      );
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cursor tracking coordinates relative to center (-0.5 to +0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth, organic spring physics for responsive yet gentle tilting (Section 10)
  const springConfig = { stiffness: 120, damping: 20, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Map cursor movement to perspective rotation (Sections 9 & 11):
  // cursor left -> rotates slightly left (rotateY -5deg)
  // cursor right -> rotates slightly right (rotateY +5deg)
  // cursor top -> tilts slightly backward (rotateX +4deg)
  // cursor bottom -> tilts slightly forward (rotateX -4deg)
  // Clamped firmly to recommended maximums: rotateX ±4deg, rotateY ±5deg
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || isMobile || !containerRef.current) return;
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return;

    const rect = containerRef.current.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const rawX = (e.clientX - rect.left) / rect.width - 0.5;
    const rawY = (e.clientY - rect.top) / rect.height - 0.5;
    const clampedX = Math.max(-0.5, Math.min(0.5, rawX));
    const clampedY = Math.max(-0.5, Math.min(0.5, rawY));
    mouseX.set(clampedX);
    mouseY.set(clampedY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const tiltStyle =
    shouldReduceMotion || isMobile
      ? {}
      : {
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="relative w-full max-w-[640px] sm:max-w-[700px] lg:max-w-[760px] xl:max-w-[820px] h-[460px] sm:h-[520px] md:h-[560px] lg:h-[600px] xl:h-[620px] mx-auto flex items-center justify-center select-none"
    >
      {/* ======================================================== */}
      {/* 1. BACKGROUND LAYER: ATMOSPHERIC AMBIENT BREATHING GLOWS */}
      {/* (Constrained strictly behind the laptop with -z-10)       */}
      {/* ======================================================== */}
      {/* Center Indigo / Blue Glow */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { scale: 1, opacity: 0.28 }
            : {
                scale: [1, 1.12, 1],
                opacity: [0.22, 0.38, 0.22],
              }
        }
        transition={{
          duration: 6.0,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[500px] lg:w-[600px] h-[380px] sm:h-[500px] lg:h-[600px] rounded-full bg-gradient-to-tr from-blue-500/25 via-indigo-500/22 to-purple-500/25 blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Top-Right Cyan Glow (Offset timing: 6.5s) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { scale: 1, opacity: 0.22 }
            : {
                scale: [1, 1.15, 1],
                opacity: [0.18, 0.34, 0.18],
              }
        }
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
        className="absolute top-1/4 right-2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/18 to-transparent blur-[85px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Bottom-Left Purple Glow (Offset timing: 5.5s) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { scale: 1, opacity: 0.25 }
            : {
                scale: [1, 1.14, 1],
                opacity: [0.20, 0.38, 0.20],
              }
        }
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        className="absolute bottom-1/4 left-4 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-gradient-to-tr from-purple-500/20 via-pink-500/15 to-transparent blur-[80px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* ======================================================== */}
      {/* 2. CURSOR TILT CONTAINER (3D Perspective interaction)    */}
      {/* ======================================================== */}
      <motion.div
        style={tiltStyle}
        className="relative w-full h-full flex items-center justify-center overflow-visible will-change-transform"
      >
        {/* MIDGROUND LAYER: 3D DECORATIVE GLASS SPHERES & CRYSTALS */}
        <Floating3DObject />

        {/* MIDGROUND LAYER: FLOATING TECHNOLOGY BRAND ICONS (React, Next.js, Node.js, Tailwind) */}
        {WORKSPACE_TECH_ICONS.map((item) => (
          <FloatingTechIcon key={item.id} item={item} isMobile={isMobile} />
        ))}

        {/* FOREGROUND LAYER 1: CENTRAL 3D LAPTOP & WORKSPACE WITH SUBTLE LEVITATION */}
        <motion.div
          animate={
            shouldReduceMotion
              ? { y: 0 }
              : {
                  y: isMobile ? [-2, 2, -2] : [-5, 5, -5],
                }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
          className="relative z-[15] flex items-center justify-center will-change-transform"
        >
          <LaptopMockup isHovered={isHovered} />
        </motion.div>

        {/* FOREGROUND LAYER 2: FLOATING FROSTED GLASS CAPABILITY CARDS */}
        {WORKSPACE_CARDS.map((card) => (
          <FloatingCapabilityCard
            key={card.id}
            card={card}
            isMobile={isMobile}
          />
        ))}
      </motion.div>
    </div>
  );
}
