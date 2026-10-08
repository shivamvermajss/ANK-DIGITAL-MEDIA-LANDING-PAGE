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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Subtle pointer parallax coordinates (restricted to ±4px on desktop, zero on mobile)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 90 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || isMobile || !containerRef.current) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[640px] sm:max-w-[700px] lg:max-w-[760px] xl:max-w-[820px] h-[460px] sm:h-[520px] md:h-[560px] lg:h-[600px] xl:h-[620px] mx-auto flex items-center justify-center select-none"
    >
      {/* 1. ATMOSPHERIC AMBIENT AURA (Multi-tiered blue, purple, & cyan glows behind the visual) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[500px] lg:w-[600px] h-[380px] sm:h-[500px] lg:h-[600px] rounded-full bg-gradient-to-tr from-blue-500/25 via-indigo-500/22 to-purple-500/25 blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/18 to-transparent blur-[85px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-4 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-gradient-to-tr from-purple-500/20 via-pink-500/15 to-transparent blur-[80px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* 2. PARALLAX CONTAINER (Responds gently to pointer on desktop) */}
      <motion.div
        style={
          shouldReduceMotion || isMobile
            ? {}
            : {
                x: parallaxX,
                y: parallaxY,
              }
        }
        className="relative w-full h-full flex items-center justify-center overflow-visible"
      >
        {/* 3D DECORATIVE GLASS SPHERES & CRYSTALS */}
        <Floating3DObject />

        {/* CENTRAL 3D PERSPECTIVE LAPTOP & WORKSPACE (Resting on crystalline pedestal) */}
        <div className="relative z-[15] flex items-center justify-center">
          <LaptopMockup />
        </div>

        {/* FLOATING TECHNOLOGY BRAND ICONS (React, Next.js, Node.js, Tailwind CSS) */}
        {WORKSPACE_TECH_ICONS.map((item) => (
          <FloatingTechIcon key={item.id} item={item} />
        ))}

        {/* FLOATING FROSTED GLASS CAPABILITY CARDS */}
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
