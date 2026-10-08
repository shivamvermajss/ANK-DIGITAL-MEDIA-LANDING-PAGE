import React, { useState } from 'react';

/**
 * CapabilityPill Component
 * 
 * Compact pill displaying supported channel capability.
 * Avoids unsupported statistical claims.
 */
export function CapabilityPill({ text, accent = 'blue' }) {
  const [isHovered, setIsHovered] = useState(false);

  const accentColorMap = {
    emerald: { text: '#059669', bg: 'rgba(236, 253, 245, 0.9)', border: 'rgba(16, 185, 129, 0.35)' },
    sky: { text: '#0284C7', bg: 'rgba(240, 249, 255, 0.9)', border: 'rgba(14, 165, 233, 0.35)' },
    cyan: { text: '#0891B2', bg: 'rgba(236, 254, 255, 0.9)', border: 'rgba(6, 182, 212, 0.35)' },
    blue: { text: '#2563EB', bg: 'rgba(239, 246, 255, 0.9)', border: 'rgba(59, 130, 246, 0.35)' },
    indigo: { text: '#4F46E5', bg: 'rgba(238, 242, 255, 0.9)', border: 'rgba(99, 102, 241, 0.35)' },
    violet: { text: '#7C3AED', bg: 'rgba(245, 243, 255, 0.9)', border: 'rgba(139, 92, 246, 0.35)' },
  };

  const styleConfig = accentColorMap[accent] || accentColorMap.blue;

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-flex items-center text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded-full transition-all duration-200 select-none cursor-default"
      style={{
        background: isHovered ? styleConfig.bg : 'rgba(248, 250, 252, 0.85)',
        border: `1px solid ${isHovered ? styleConfig.border : 'rgba(226, 232, 240, 0.85)'}`,
        color: isHovered ? styleConfig.text : '#64748b', // slate-500
      }}
    >
      {text}
    </span>
  );
}
