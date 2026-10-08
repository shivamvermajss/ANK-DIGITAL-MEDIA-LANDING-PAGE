import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Lock, KeyRound } from 'lucide-react';

/**
 * OTPPreview Component
 * 
 * Interactive security micro-preview inside the OTP Service featured card.
 * Communicates: Secure Verification, Authentication, Verification Flow.
 * Features 4 distinct passcode boxes with inner shadow, visible indigo dots,
 * and a smooth sequential typing/verification animation.
 * Respects prefers-reduced-motion.
 */
export function OTPPreview({ isHovered = false }) {
  const shouldReduceMotion = useReducedMotion();
  const [filledCount, setFilledCount] = useState(4);

  // Subtle sequential passcode animation: 0 -> 1 -> 2 -> 3 -> 4, pause, loop
  useEffect(() => {
    if (shouldReduceMotion) return;

    let timeoutId;
    let isCancelled = false;

    const runSequence = (step) => {
      if (isCancelled) return;
      setFilledCount(step);

      if (step < 4) {
        // advance each digit after 380ms
        timeoutId = setTimeout(() => runSequence(step + 1), 380);
      } else {
        // pause for 1600ms after all four dots are filled, then restart
        timeoutId = setTimeout(() => runSequence(0), 1600);
      }
    };

    // kick off first sequence
    timeoutId = setTimeout(() => runSequence(1), 600);

    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
    };
  }, [shouldReduceMotion]);

  return (
    <div
      className="relative rounded-2xl p-3.5 sm:p-4 select-none overflow-hidden transition-all duration-300"
      style={{
        background: 'rgba(255, 255, 255, 0.90)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(226, 232, 240, 0.80)',
        boxShadow: isHovered
          ? '0 18px 40px -16px rgba(99, 102, 241, 0.16), 0 12px 30px -10px rgba(99, 102, 241, 0.12)'
          : '0 12px 30px -10px rgba(99, 102, 241, 0.12), 0 2px 8px rgba(15, 23, 42, 0.04)',
      }}
    >
      {/* Subtle indigo ambient glow inside mockup */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at 85% 20%, rgba(99, 102, 241, 0.10), transparent 45%)',
          opacity: isHovered ? 1 : 0.8,
        }}
        aria-hidden="true"
      />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-2.5 mb-3 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-600 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10.5px] font-mono font-bold tracking-wider text-slate-800">
            Secure Verification
          </span>
        </div>

        <span className="inline-flex items-center gap-1 text-[9px] font-mono text-indigo-700 bg-indigo-50/90 border border-indigo-200/80 px-2 py-0.5 rounded-full font-medium">
          <span>Verification Code</span>
        </span>
      </div>

      {/* Main OTP Input Cells Stage */}
      <div className="relative z-10 py-2.5 flex flex-col items-center justify-center">
        {/* Sublabel */}
        <span className="text-[10px] font-mono text-slate-500 mb-3 flex items-center gap-1.5 font-medium">
          <Lock className="w-2.5 h-2.5 text-indigo-500" />
          <span>One-Time Authentication Passcode</span>
        </span>

        {/* 4 OTP Input Boxes */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 mb-3">
          {[0, 1, 2, 3].map((idx) => {
            const isFilled = filledCount > idx;
            const isCurrent = !shouldReduceMotion && filledCount === idx;

            return (
              <div
                key={idx}
                className={`w-10 h-11 sm:w-11 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-200 bg-white ${
                  isFilled
                    ? 'border border-indigo-400/90 shadow-[inset_0_1.5px_3px_rgba(99,102,241,0.08),0_2px_8px_rgba(99,102,241,0.12)]'
                    : isCurrent
                    ? 'border border-indigo-400 ring-2 ring-indigo-400/20 shadow-[inset_0_1.5px_3px_rgba(15,23,42,0.06)]'
                    : 'border border-slate-200/90 shadow-[inset_0_1.5px_3px_rgba(15,23,42,0.05)]'
                }`}
              >
                {isFilled ? (
                  <motion.span
                    initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-indigo-600 shadow-2xs"
                  />
                ) : (
                  <span className="w-2 h-2 rounded-full border border-slate-200 bg-slate-100/60" />
                )}
              </div>
            );
          })}
        </div>

        {/* Delivery Flow Circuit Indicator */}
        <div className="flex items-center gap-2 text-[9px] font-mono text-slate-500 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-xs" />
          <span>Secure Channel</span>
          <span className="text-slate-300">•</span>
          <span className="text-indigo-600 font-semibold">Zero-Persistence Verification</span>
        </div>
      </div>

      {/* Footer Status readout */}
      <div className="relative z-10 pt-2.5 mt-2 border-t border-slate-200/70 flex items-center justify-between text-[9px] sm:text-[9.5px] font-mono">
        <span className="text-indigo-700 font-semibold flex items-center gap-1">
          <KeyRound className="w-2.5 h-2.5 text-indigo-500" />
          <span>Encrypted Session Protocol</span>
        </span>
        <span className="text-slate-500 font-medium">Authentication Active</span>
      </div>
    </div>
  );
}
