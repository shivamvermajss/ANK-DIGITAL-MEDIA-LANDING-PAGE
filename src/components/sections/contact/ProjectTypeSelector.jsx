import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PROJECT_TYPES } from '../../../data/contact';

export function ProjectTypeSelector({ selectedType, onSelectType, error }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <label
          id="project-type-label"
          className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 group-focus-within:text-indigo-600 transition-colors"
        >
          04 — What do you need? <span className="text-rose-500">*</span>
        </label>
        <span className="text-[10px] font-mono text-slate-400 bg-slate-100/80 px-2 py-0.5 rounded-full border border-slate-200/50">
          Select Service
        </span>
      </div>

      <div
        role="group"
        aria-labelledby="project-type-label"
        className="grid grid-cols-2 sm:grid-cols-3 gap-2"
      >
        {PROJECT_TYPES.map((type) => {
          const isSelected = Array.isArray(selectedType)
            ? selectedType.includes(type)
            : selectedType === type;

          return (
            <motion.button
              key={type}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelectType(type)}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { y: -1 }
              }
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              style={
                isSelected
                  ? {
                      background: 'linear-gradient(90deg, #2563EB, #6366F1, #8B5CF6)',
                      boxShadow: '0 8px 20px -10px rgba(99, 102, 241, 0.45)',
                    }
                  : undefined
              }
              className={`px-3 py-2.5 rounded-xl text-xs font-heading font-semibold transition-all duration-200 flex items-center justify-between gap-1.5 cursor-pointer select-none text-left border ${
                isSelected
                  ? 'text-white border-transparent'
                  : 'bg-white/80 hover:bg-indigo-50/50 text-slate-700 hover:text-slate-900 border-slate-200/90 hover:border-indigo-300/80 shadow-2xs'
              }`}
            >
              <span className="truncate">{type}</span>

              {isSelected && (
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="shrink-0 flex items-center"
                >
                  <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" aria-hidden="true" />
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>

      {error && (
        <p role="alert" className="text-xs text-rose-500 font-mono mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
