import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Zap,
  Layers,
  ShieldCheck,
  BarChart3,
  Globe,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';

const CARD_ICONS = {
  Zap,
  Layers,
  ShieldCheck,
  BarChart3,
  Globe,
};

/**
 * FloatingCapabilityCard Component
 * Frosted glass cards matching the exact design, typography, and accessories
 * of the reference image.
 */
export function FloatingCapabilityCard({ card, isMobile }) {
  const shouldReduceMotion = useReducedMotion();
  const IconComponent = CARD_ICONS[card.icon] || Zap;

  // On mobile screens, hide cards flagged as showOnMobile: false
  if (isMobile && !card.showOnMobile) {
    return null;
  }

  const isUptimeCard = card.type === 'uptime';

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 15 }}
      animate={
        shouldReduceMotion
          ? { opacity: 1, scale: 1, y: 0 }
          : {
              opacity: 1,
              scale: 1,
              y: [0, card.floatDistance, 0],
            }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0.4 }
          : {
              y: {
                repeat: Infinity,
                duration: card.duration,
                ease: 'easeInOut',
                delay: card.delay,
              },
              opacity: { duration: 0.6, delay: card.delay * 0.3 },
              scale: { duration: 0.6, delay: card.delay * 0.3 },
            }
      }
      whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -2 }}
      className={`absolute ${card.desktopPos} z-[25] select-none group cursor-pointer transition-shadow duration-300`}
    >
      <div className="relative flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 sm:pr-3.5 rounded-2xl bg-white/92 backdrop-blur-xl border border-slate-200/90 ring-1 ring-indigo-500/10 shadow-[0_12px_30px_-8px_rgba(99,102,241,0.14),0_4px_14px_-2px_rgba(15,23,42,0.06)] group-hover:shadow-[0_20px_42px_-8px_rgba(99,102,241,0.25),0_6px_18px_rgba(15,23,42,0.08)] group-hover:border-indigo-300 transition-all max-w-[215px] sm:max-w-[245px] lg:max-w-[265px] overflow-hidden">
        {/* Top edge glossy highlight sheen */}
        <div className="absolute top-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />

        {/* Left Icon Badge */}
        <div
          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr ${card.iconBg} text-white flex items-center justify-center shrink-0 shadow-xs border border-white/30 group-hover:scale-105 transition-transform duration-200`}
        >
          <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </div>

        {/* Middle Titles */}
        <div className="min-w-0 flex-1">
          {isUptimeCard ? (
            <>
              <span className="font-heading font-black text-base sm:text-lg text-slate-900 leading-none tracking-tight block">
                {card.title}
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-sans leading-tight block truncate mt-0.5 font-medium">
                {card.subtitle}
              </span>
            </>
          ) : (
            <>
              <span className="font-heading font-extrabold text-[11px] sm:text-xs text-slate-900 leading-tight block truncate group-hover:text-blue-600 transition-colors">
                {card.title}
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-sans leading-tight block truncate mt-0.5">
                {card.subtitle}
              </span>
            </>
          )}
        </div>

        {/* Right Accessory */}
        {card.type === 'chart' && (
          <div className="flex items-end gap-1 h-5 px-1 shrink-0">
            <span className="w-1.5 h-2 bg-cyan-300 rounded-full" />
            <span className="w-1.5 h-3 bg-cyan-400 rounded-full" />
            <span className="w-1.5 h-4.5 bg-cyan-500 rounded-full" />
            <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
          </div>
        )}

        {card.type === 'toggle' && (
          <div className="w-9 h-5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 p-0.5 flex items-center justify-end shrink-0 shadow-xs">
            <div className="w-4 h-4 rounded-full bg-white shadow-xs" />
          </div>
        )}

        {card.type === 'status' && (
          <div className="flex items-center gap-1.5 shrink-0 px-1">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 shadow-[0_0_10px_#10B981]" />
            </span>
          </div>
        )}

        {card.type === 'uptime' && (
          <div className="w-5 h-5 rounded-full bg-emerald-100/90 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-300/80 shadow-xs">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        )}

        {card.type === 'action' && (
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
