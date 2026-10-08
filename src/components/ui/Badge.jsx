import React from 'react';
import { cn } from '../../lib/utils';

export function Badge({
  children,
  variant = 'default',
  icon: Icon,
  dot = false,
  className = '',
}) {
  const baseStyles =
    'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-full select-none transition-all';

  const variants = {
    default:
      'bg-brand-indigo/10 text-brand-indigo border border-brand-indigo/20',
    gradient:
      'bg-brand-gradient-subtle text-brand-indigo border border-brand-indigo/30',
    glow:
      'bg-brand-surface text-brand-cyan border border-brand-cyan/30 shadow-glow-cyan',
    dark:
      'bg-brand-surface text-slate-300 border border-brand-border',
    light:
      'bg-white text-slate-700 border border-slate-200 shadow-soft-sm',
  };

  return (
    <span className={cn(baseStyles, variants[variant] || variants.default, className)}>
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
      )}
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </span>
  );
}
