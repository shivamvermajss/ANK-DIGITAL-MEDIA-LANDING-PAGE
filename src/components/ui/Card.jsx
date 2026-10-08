import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function Card({
  children,
  variant = 'white',
  interactive = false,
  className = '',
  ...props
}) {
  const baseStyles = 'rounded-2xl transition-all duration-300 relative';

  const variants = {
    white: 'bg-white border border-slate-200/80 shadow-soft-md',
    glass: 'glass-panel-light shadow-soft-sm',
    dark: 'bg-brand-surface border border-brand-border text-slate-100 shadow-dark-md',
    'dark-glass': 'glass-panel-dark text-slate-100 shadow-dark-md',
    neu: 'bg-brand-light neu-flat border border-white/60',
  };

  const interactiveStyles = interactive
    ? 'hover:-translate-y-1 hover:shadow-soft-lg cursor-pointer'
    : '';

  if (interactive) {
    return (
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
        className={cn(baseStyles, variants[variant] || variants.white, interactiveStyles, className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={cn(baseStyles, variants[variant] || variants.white, className)}
      {...props}
    >
      {children}
    </div>
  );
}
