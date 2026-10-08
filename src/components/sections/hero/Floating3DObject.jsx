import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Floating3DObject Component
 * Realistic 3D floating glass spheres, chrome orbs, and sparkles
 * matching the cosmic atmosphere of the reference image.
 */
export function Floating3DObject() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-[8] select-none overflow-visible"
    >
      {/* 1. Large Soft Lavender 3D Sphere (Top-Right background behind Scalable card) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -10, 0],
                x: [0, 5, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { repeat: Infinity, duration: 8.5, ease: 'easeInOut' }
        }
        className="absolute top-[6%] right-[14%] w-16 h-16 sm:w-20 sm:h-20 rounded-full hidden sm:block"
        style={{
          background:
            'radial-gradient(circle at 32% 28%, #FFFFFF 0%, #E9D5FF 30%, #C084FC 60%, #7E22CE 85%, #3B0764 100%)',
          boxShadow:
            '0 20px 40px rgba(147, 51, 234, 0.3), inset -6px -8px 16px rgba(59, 7, 100, 0.6), inset 4px 4px 10px rgba(255, 255, 255, 0.9)',
        }}
      >
        <div className="absolute top-2.5 left-3 w-5 h-3 rounded-full bg-white/60 blur-[1px] rotate-[-30deg]" />
      </motion.div>

      {/* 2. Top-Center Chrome Metallic Sphere (Above laptop hinge) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, 8, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { repeat: Infinity, duration: 7.2, ease: 'easeInOut', delay: 0.8 }
        }
        className="absolute top-[10%] left-[45%] w-8 h-8 sm:w-10 sm:h-10 rounded-full hidden sm:block"
        style={{
          background:
            'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #CBD5E1 35%, #64748B 70%, #1E293B 100%)',
          boxShadow:
            '0 12px 24px rgba(15, 23, 42, 0.35), inset -3px -4px 8px rgba(2, 6, 23, 0.7), inset 2px 2px 6px rgba(255, 255, 255, 0.9)',
        }}
      >
        <div className="absolute top-1.5 left-2 w-2.5 h-1.5 rounded-full bg-white/80 blur-[0.5px] rotate-[-25deg]" />
      </motion.div>

      {/* 3. Lower-Right Dark Chrome Sphere (Near bedrock platform) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -7, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { repeat: Infinity, duration: 6.8, ease: 'easeInOut', delay: 1.5 }
        }
        className="absolute bottom-[18%] right-[8%] w-10 h-10 sm:w-12 sm:h-12 rounded-full hidden sm:block"
        style={{
          background:
            'radial-gradient(circle at 35% 30%, #94A3B8 0%, #475569 40%, #1E293B 75%, #090D16 100%)',
          boxShadow:
            '0 15px 30px rgba(15, 23, 42, 0.4), inset -4px -5px 10px rgba(2, 6, 23, 0.8), inset 3px 3px 8px rgba(255, 255, 255, 0.6)',
        }}
      >
        <div className="absolute top-2 left-2.5 w-3 h-1.5 rounded-full bg-white/50 blur-[0.5px] rotate-[-30deg]" />
      </motion.div>

      {/* 4. Left Iridescent Glass Bubble (Behind tech stack) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, 9, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { repeat: Infinity, duration: 7.8, ease: 'easeInOut', delay: 2.2 }
        }
        className="absolute top-[36%] left-[6%] w-10 h-10 sm:w-12 sm:h-12 rounded-full hidden sm:block"
        style={{
          background:
            'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.9) 0%, rgba(56, 189, 248, 0.35) 45%, rgba(168, 85, 247, 0.25) 75%, rgba(30, 27, 75, 0.4) 100%)',
          boxShadow:
            '0 10px 20px rgba(56, 189, 248, 0.2), inset -4px -4px 10px rgba(56, 189, 248, 0.3), inset 3px 3px 8px rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(4px)',
        }}
      />

      {/* 5. Delicate Sparkle Stars */}
      <div className="absolute top-[18%] left-[26%] text-cyan-400 text-xs animate-pulse opacity-85">
        ✦
      </div>
      <div
        className="absolute top-[20%] right-[22%] text-purple-400 text-sm animate-pulse opacity-90"
        style={{ animationDelay: '1.2s' }}
      >
        ✦
      </div>
      <div
        className="absolute bottom-[24%] left-[18%] text-blue-400 text-xs animate-pulse opacity-75"
        style={{ animationDelay: '2.0s' }}
      >
        ✦
      </div>
      <div
        className="absolute bottom-[35%] right-[20%] text-cyan-300 text-xs animate-pulse opacity-80"
        style={{ animationDelay: '1.6s' }}
      >
        ✦
      </div>
    </div>
  );
}
