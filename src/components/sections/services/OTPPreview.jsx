import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Lock, CheckCircle2, KeyRound, Sparkles } from 'lucide-react';

/**
 * OTPPreview Component
 * 
 * Interactive security micro-preview inside the OTP Service featured card.
 * Communicates: Security, Verification, Authentication.
 * Features 4 sequential OTP input cells, animated delivery circuit, and verified state.
 * Strictly avoids fake numerical claims (e.g. no fake 99.9% delivery).
 * Respects prefers-reduced-motion.
 */
export function OTPPreview({ isHovered = false }) {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(4);

  // Subtle sequential dot appearance (cycles 0 -> 1 -> 2 -> 3 -> 4)
  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 4 ? 0 : prev + 1));
    }, isHovered ? 650 : 1100);

    return () => clearInterval(interval);
  }, [shouldReduceMotion, isHovered]);

  const otpDots = [0, 1, 2, 3];

  return (
    <div
      className="relative rounded-2xl p-3.5 sm:p-4 transition-all duration-300 select-none overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(99, 102, 241, 0.20)',
        boxShadow: isHovered
          ? '0 16px 36px -10px rgba(99, 102, 241, 0.18), 0 4px 12px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
          : '0 12px 30px -10px rgba(99, 102, 241, 0.12), 0 4px 12px rgba(15, 23, 42, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      }}
    >
      {/* Background ambient indigo/purple glow */}
      <div
        className="pointer-events-none absolute -top-8 -right-8 w-40 h-40 rounded-full transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%)',
          opacity: isHovered ? 1 : 0.6,
        }}
        aria-hidden="true"
      />

      {/* Header Bar */}
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-indigo-100/60">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-indigo-50 border border-indigo-200/70 flex items-center justify-center text-indigo-600">
            <ShieldCheck className="w-3 h-3" />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-800">
            Secure Verification
          </span>
        </div>

        <span className="text-[9px] font-mono font-medium text-indigo-700 bg-indigo-50/90 border border-indigo-200/80 px-2 py-0.5 rounded-full">
          Verification Flow
        </span>
      </div>

      {/* Main OTP Input Cells Stage */}
      <div className="py-2 flex flex-col items-center justify-center">
        {/* Sublabel */}
        <span className="text-[10px] font-mono text-slate-500 mb-2.5 flex items-center gap-1.5">
          <Lock className="w-2.5 h-2.5 text-indigo-500" />
          <span>One-Time Authentication Passcode</span>
        </span>

        {/* 4 OTP Input Boxes */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-3">
          {otpDots.map((index) => {
            const isFilled = shouldReduceMotion || activeStep > index;
            const isCurrent = !shouldReduceMotion && activeStep === index;

            return (
              <motion.div
                key={index}
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: isCurrent ? 1.08 : 1,
                        y: isFilled ? -2 : 0,
                      }
                }
                transition={{ duration: 0.2 }}
                className={`w-10 h-11 sm:w-11 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-200 shadow-2xs ${
                  isFilled
                    ? 'bg-gradient-to-b from-indigo-50/90 to-white border-2 border-indigo-500/70 text-indigo-900 shadow-indigo-500/10'
                    : isCurrent
                    ? 'bg-white border-2 border-indigo-400 ring-2 ring-indigo-400/20'
                    : 'bg-white/80 border border-slate-200/90 text-slate-300'
                }`}
              >
                {isFilled ? (
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 shadow-2xs" />
                ) : (
                  <span className="text-slate-300 font-mono text-xs">•</span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Delivery Flow Circuit Indicator */}
        <div className="flex items-center gap-2 text-[9px] font-mono text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Delivery Pipeline Active</span>
          <span className="text-slate-300">•</span>
          <span className="text-indigo-600 font-semibold">Instant Handshake</span>
        </div>
      </div>

      {/* Footer Status readout */}
      <div className="pt-2.5 mt-2 border-t border-indigo-100/60 flex items-center justify-between text-[8px] sm:text-[8.5px] font-mono text-slate-500">
        <span className="text-indigo-700 font-semibold flex items-center gap-1">
          <KeyRound className="w-2.5 h-2.5 text-indigo-500" />
          <span>Encrypted Session Protocol</span>
        </span>
        <span className="text-slate-400">Zero-Persistence Delivery</span>
      </div>
    </div>
  );
}
