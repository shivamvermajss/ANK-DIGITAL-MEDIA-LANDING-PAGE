import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Sparkles, Layers, Cpu, Rocket } from 'lucide-react';

const WORKFLOW_STAGES = [
  {
    step: '01',
    name: 'Idea',
    tag: 'Discovery',
    icon: Sparkles,
    accent: 'from-blue-500/10 to-indigo-500/10 text-blue-600',
  },
  {
    step: '02',
    name: 'Design',
    tag: 'Architecture',
    icon: Layers,
    accent: 'from-indigo-500/10 to-purple-500/10 text-indigo-600',
  },
  {
    step: '03',
    name: 'Develop',
    tag: 'Engineering',
    icon: Cpu,
    accent: 'from-purple-500/10 to-blue-500/10 text-purple-600',
  },
  {
    step: '04',
    name: 'Launch',
    tag: 'Release',
    icon: Rocket,
    accent: 'from-emerald-500/10 to-teal-500/10 text-emerald-600',
  },
];

export function ContactVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(226, 232, 240, 0.8)',
        boxShadow: '0 12px 30px -18px rgba(15, 23, 42, 0.18)',
      }}
      className="rounded-[18px] p-5 sm:p-6 relative overflow-hidden select-none"
    >
      {/* Subtle Ambient Radial Wash */}
      <div
        className="absolute -top-16 -right-16 w-52 h-52 bg-gradient-to-bl from-blue-300/20 via-indigo-300/10 to-transparent rounded-full blur-2xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Top Header of Glass Workflow Panel */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200/80">
          <div className="flex items-center gap-2 text-slate-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-slate-800">
              Project Flow Pipeline
            </span>
          </div>
          <span className="text-[11px] font-mono text-indigo-600 font-semibold bg-indigo-50/80 px-2.5 py-0.5 rounded-full border border-indigo-100">
            Concept → Delivery
          </span>
        </div>

        {/* 4 Connected Stages: IDEA → DESIGN → DEVELOP → LAUNCH */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 relative">
          {WORKFLOW_STAGES.map((stage, idx) => {
            const IconComponent = stage.icon;
            const isLast = idx === WORKFLOW_STAGES.length - 1;

            return (
              <motion.div
                key={stage.name}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.07 }}
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                className="group relative p-3 rounded-2xl bg-white/85 hover:bg-white border border-slate-200/80 hover:border-indigo-300/80 shadow-2xs hover:shadow-[0_8px_20px_-8px_rgba(99,102,241,0.25)] transition-all duration-200 flex flex-col justify-between"
              >
                {/* Stage Header with Number and Icon */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">
                    {stage.step}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-lg bg-gradient-to-br ${stage.accent} flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Stage Name */}
                <div>
                  <span className="font-heading font-black text-sm text-slate-900 block leading-tight group-hover:text-indigo-950 transition-colors">
                    {stage.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 font-medium mt-0.5 block truncate">
                    {stage.tag}
                  </span>
                </div>

                {/* Desktop Micro Connector Chevron */}
                {!isLast && (
                  <div
                    className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-4 h-4 rounded-full bg-white border border-slate-200 shadow-2xs items-center justify-center text-slate-400 group-hover:text-indigo-600 pointer-events-none"
                    aria-hidden="true"
                  >
                    <ChevronRight className="w-2.5 h-2.5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Micro Status Summary Line */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span className="flex items-center gap-1.5 text-slate-600 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Direct Engineer & Designer Intake</span>
          </span>
          <span className="text-slate-400 hidden sm:inline text-[10px]">
            No intermediaries
          </span>
        </div>
      </div>
    </div>
  );
}
