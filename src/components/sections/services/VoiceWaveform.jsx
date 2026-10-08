import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * VoiceWaveform Component
 * 
 * Native SVG audio waveform (7-9 vertical bars) simulating speech activity.
 * Respects prefers-reduced-motion.
 * Subtly animates bar heights on hover.
 */
export function VoiceWaveform({ isHovered = false, accent = 'blue' }) {
  const shouldReduceMotion = useReducedMotion();

  // 7 vertical bars with varying base heights to reflect natural speech frequencies
  const bars = [
    { base: 6, max: 14, duration: 1.2, delay: 0.1 },
    { base: 12, max: 20, duration: 0.9, delay: 0.2 },
    { base: 18, max: 24, duration: 1.4, delay: 0.05 },
    { base: 10, max: 18, duration: 1.0, delay: 0.3 },
    { base: 22, max: 28, duration: 1.3, delay: 0.15 },
    { base: 14, max: 22, duration: 0.85, delay: 0.25 },
    { base: 8, max: 16, duration: 1.1, delay: 0.08 },
  ];

  const primaryColor = accent === 'indigo' ? '#6366F1' : '#3B82F6';
  const secondaryColor = accent === 'indigo' ? '#818CF8' : '#60A5FA';

  return (
    <div
      className="inline-flex items-center gap-[3px] h-7 px-2.5 py-1 rounded-lg bg-slate-50/80 border border-slate-200/70 transition-all duration-200"
      style={{
        boxShadow: isHovered
          ? `0 2px 10px -2px ${primaryColor}25`
          : '0 1px 3px rgba(15, 23, 42, 0.04)',
      }}
      aria-hidden="true"
    >
      {bars.map((bar, i) => {
        const heightVariants = shouldReduceMotion
          ? { height: bar.base }
          : {
              height: isHovered
                ? [bar.base, bar.max, bar.base * 0.8, bar.max * 0.9, bar.base]
                : [bar.base, bar.base * 1.4, bar.base * 0.7, bar.base],
            };

        return (
          <motion.span
            key={i}
            animate={heightVariants}
            transition={{
              duration: isHovered ? bar.duration * 0.75 : bar.duration * 1.4,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: bar.delay,
            }}
            className="w-[2.5px] rounded-full transition-colors duration-200"
            style={{
              height: `${bar.base}px`,
              background: `linear-gradient(180deg, ${primaryColor}, ${secondaryColor})`,
              opacity: isHovered ? 1 : 0.8,
            }}
          />
        );
      })}
    </div>
  );
}
