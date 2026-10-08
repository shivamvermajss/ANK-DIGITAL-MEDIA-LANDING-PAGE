import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';

/**
 * WhatsAppPreview Component
 * 
 * Interactive micro-chat preview inside the WhatsApp Marketing featured card.
 * Communicates: Business Messaging, Automated Replies, Verified Channel.
 * Strictly avoids unsupported official certification claims.
 * Respects prefers-reduced-motion.
 */
export function WhatsAppPreview({ isHovered = false }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="relative rounded-2xl p-3.5 sm:p-4 transition-all duration-300 select-none overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(16, 185, 129, 0.20)',
        boxShadow: isHovered
          ? '0 16px 36px -10px rgba(16, 185, 129, 0.16), 0 4px 12px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
          : '0 12px 30px -10px rgba(16, 185, 129, 0.10), 0 4px 12px rgba(15, 23, 42, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      }}
    >
      {/* Background ambient emerald glow */}
      <div
        className="pointer-events-none absolute -top-8 -right-8 w-40 h-40 rounded-full transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.14), transparent 70%)',
          opacity: isHovered ? 1 : 0.6,
        }}
        aria-hidden="true"
      />

      {/* Header Bar */}
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-emerald-100/60">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full bg-emerald-500 transition-all duration-300 ${
              isHovered ? 'ring-4 ring-emerald-400/25 scale-110' : 'animate-pulse'
            }`}
          />
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-800">
            WhatsApp Business
          </span>
          <span className="text-[9px] font-mono text-emerald-700/80 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60 hidden xs:inline-block">
            Connected
          </span>
        </div>

        <span className="text-[9px] font-mono text-slate-400">
          Direct Channel
        </span>
      </div>

      {/* Conversational Stream */}
      <div className="space-y-2 text-xs font-sans">
        {/* Incoming Client Inquiry Bubble */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: isHovered ? -2 : 0, x: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="max-w-[85%] rounded-2xl rounded-tl-sm p-2.5 bg-slate-50/90 border border-slate-200/80 shadow-2xs text-slate-700 self-start"
        >
          <p className="text-[11px] sm:text-xs leading-relaxed">
            Hello! How can we help you today?
          </p>
          <span className="text-[8.5px] font-mono text-slate-400 block text-right mt-1">
            09:41 AM
          </span>
        </motion.div>

        {/* Center Conceptual Verified Channel Pill */}
        <motion.div
          animate={shouldReduceMotion ? {} : { opacity: isHovered ? 1 : 0.85, scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center my-1"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-emerald-700 text-[9.5px] font-mono shadow-2xs">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span className="font-semibold">Verified Channel</span>
            <span className="text-emerald-500/70">• Conceptual</span>
          </div>
        </motion.div>

        {/* Outgoing Automated Response Bubble */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: isHovered ? -1 : 0, x: isHovered ? -1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="max-w-[85%] rounded-2xl rounded-tr-sm p-2.5 bg-emerald-50/90 border border-emerald-200/80 shadow-2xs text-emerald-950 ml-auto"
        >
          <p className="text-[11px] sm:text-xs leading-relaxed font-medium">
            Automated response active. Your inquiry is queued for instant response.
          </p>
          <div className="flex items-center justify-end gap-1 mt-1 text-[8.5px] font-mono text-emerald-700">
            <span>09:41 AM</span>
            <span className="inline-flex text-emerald-600">✓✓</span>
          </div>
        </motion.div>
      </div>

      {/* Footer Status readout */}
      <div className="pt-2.5 mt-2.5 border-t border-emerald-100/60 flex items-center justify-between text-[8px] sm:text-[8.5px] font-mono text-slate-500">
        <span className="text-emerald-700 font-semibold flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5 text-emerald-500" />
          <span>Automated Flow Active</span>
        </span>
        <span className="text-slate-400">Low-Latency Routing</span>
      </div>
    </div>
  );
}
