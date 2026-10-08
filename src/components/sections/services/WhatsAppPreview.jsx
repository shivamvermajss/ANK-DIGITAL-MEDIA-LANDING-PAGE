import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, MessageSquare, Bot } from 'lucide-react';

/**
 * WhatsAppPreview Component
 * 
 * Interactive micro-chat preview inside the WhatsApp Marketing featured card.
 * Communicates: Business Messaging, Automated Replies, Messaging Active.
 * Strictly avoids unsupported official certification claims.
 * Respects prefers-reduced-motion.
 */
export function WhatsAppPreview({ isHovered = false }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="relative rounded-2xl p-3.5 sm:p-4 select-none overflow-hidden transition-all duration-300"
      style={{
        background: 'rgba(255, 255, 255, 0.90)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(226, 232, 240, 0.80)',
        boxShadow: isHovered
          ? '0 18px 40px -16px rgba(16, 185, 129, 0.16), 0 12px 30px -10px rgba(99, 102, 241, 0.12)'
          : '0 12px 30px -10px rgba(99, 102, 241, 0.12), 0 2px 8px rgba(15, 23, 42, 0.04)',
      }}
    >
      {/* Subtle emerald ambient glow inside mockup */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at 85% 20%, rgba(16, 185, 129, 0.10), transparent 45%)',
          opacity: isHovered ? 1 : 0.8,
        }}
        aria-hidden="true"
      />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-2.5 mb-3 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          {/* WhatsApp Live Status Indicator with gentle non-aggressive pulsing ring */}
          <div className="relative flex items-center justify-center w-3 h-3">
            {!shouldReduceMotion && (
              <motion.span
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.65, 0, 0.65],
                }}
                transition={{
                  duration: 2.0,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 rounded-full bg-emerald-500/40"
              />
            )}
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-xs" />
          </div>

          <span className="text-[10.5px] font-mono font-bold tracking-wider text-slate-800">
            WhatsApp Business
          </span>

          <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-800 bg-emerald-50/90 px-2 py-0.5 rounded-full border border-emerald-200/80 font-medium">
            <span>Messaging Active</span>
          </span>
        </div>

        <span className="text-[9.5px] font-mono text-slate-500 font-medium">
          Channel Active
        </span>
      </div>

      {/* Conversational Stream */}
      <div className="relative z-10 space-y-2.5 text-xs font-sans">
        {/* Incoming Client Inquiry Bubble */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: isHovered ? -2 : 0, x: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="max-w-[85%] rounded-2xl rounded-tl-sm p-3 bg-slate-50 border border-slate-200/90 shadow-2xs self-start"
        >
          <p className="text-[11.5px] sm:text-xs leading-relaxed text-slate-800 font-medium">
            Hello! How can we help?
          </p>
          <span className="text-[9px] font-mono text-slate-500 block text-right mt-1 font-medium">
            10:42 AM
          </span>
        </motion.div>

        {/* Center Conceptual Verified Channel Pill */}
        <motion.div
          animate={shouldReduceMotion ? {} : { opacity: isHovered ? 1 : 0.9, scale: isHovered ? 1.01 : 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center my-0.5"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-emerald-800 text-[9.5px] font-mono shadow-2xs font-medium">
            <Bot className="w-3 h-3 text-emerald-600" />
            <span>Automated response active</span>
          </div>
        </motion.div>

        {/* Outgoing Automated Response Bubble */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: isHovered ? -1 : 0, x: isHovered ? -1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="max-w-[85%] rounded-2xl rounded-tr-sm p-3 bg-emerald-50/90 border border-emerald-200/90 shadow-2xs ml-auto"
        >
          <p className="text-[11.5px] sm:text-xs leading-relaxed text-slate-800 font-medium">
            Thank you for reaching out. We have received your inquiry and our team will connect shortly.
          </p>
          <div className="flex items-center justify-end gap-1.5 mt-1 text-[9px] font-mono text-slate-500 font-medium">
            <span>10:42 AM</span>
            <span className="text-emerald-600 font-bold tracking-tighter">✓✓</span>
          </div>
        </motion.div>
      </div>

      {/* Footer Status readout */}
      <div className="relative z-10 pt-2.5 mt-2.5 border-t border-slate-200/70 flex items-center justify-between text-[9px] sm:text-[9.5px] font-mono">
        <span className="text-emerald-700 font-semibold flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
          <span>Automated Response Stream</span>
        </span>
        <span className="text-slate-500 font-medium">Direct Reach</span>
      </div>
    </div>
  );
}
