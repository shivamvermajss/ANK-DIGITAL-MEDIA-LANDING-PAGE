import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  href,
  onClick,
  ...props
}) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo/50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2',
    lg: 'text-base px-6 py-3.5 rounded-xl gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-brand-gradient text-white shadow-soft-md hover:shadow-glow-indigo active:brightness-95 border border-white/20',
    secondary:
      'bg-brand-surface text-white border border-brand-border hover:bg-brand-surface-elevated hover:border-white/20 active:brightness-95',
    outline:
      'bg-transparent text-brand-dark border border-brand-border-light hover:bg-white hover:border-brand-indigo/40 active:bg-slate-50',
    glass:
      'glass-panel-light text-brand-dark hover:bg-white/90 active:bg-white/70 shadow-soft-sm',
    ghost:
      'bg-transparent text-brand-muted-dark hover:text-brand-dark hover:bg-black/5 active:bg-black/10',
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size] || sizeStyles.md,
    variantStyles[variant] || variantStyles.primary,
    className
  );

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(combinedClasses, 'group')}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(combinedClasses, 'group')}
      {...props}
    >
      {content}
    </motion.button>
  );
}
