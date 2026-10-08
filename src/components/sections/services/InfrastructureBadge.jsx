import React, { useState } from 'react';
import { Cloud, Server, ShieldCheck, Network, RefreshCw, Headphones } from 'lucide-react';

/**
 * InfrastructureBadge Component
 * 
 * Interactive capability pills for Power / Digital Foundation section.
 * Differentiated styling:
 * - High-contrast Domain Registration pills (DNS Management: indigo, Domain Renewal: blue, Domain Support: violet)
 * - Normal: bg rgba(255,255,255,0.96), border rgba(...,0.22), text #475569, box-shadow
 * - Hover: bg rgba(...,0.85), border rgba(...,0.45), text saturated, shadow, translateY(-2px), transition 300ms cubic-bezier(0.16, 1, 0.3, 1)
 * - Preserves Web Hosting capability pills (Cloud Hosting, Web Infrastructure, SSL Security)
 */
export function InfrastructureBadge({ text }) {
  const [isHovered, setIsHovered] = useState(false);

  // Configuration map for each capability concept
  const badgeConfigs = {
    // 1. Web Hosting Capabilities (Preserved)
    'Cloud Hosting': {
      icon: Cloud,
      normalBg: 'rgba(255, 255, 255, 0.96)',
      normalBorder: 'rgba(59, 130, 246, 0.22)',
      normalText: '#475569',
      normalIcon: '#2563EB',
      normalShadow: '0 4px 12px -6px rgba(59, 130, 246, 0.14)',
      hoverBg: 'rgba(239, 246, 255, 0.95)',
      hoverBorder: 'rgba(59, 130, 246, 0.45)',
      hoverText: '#1D4ED8',
      hoverIcon: '#1D4ED8',
      hoverShadow: '0 8px 20px -8px rgba(59, 130, 246, 0.25)',
      hoverY: '-2px',
    },
    'Web Infrastructure': {
      icon: Server,
      normalBg: 'rgba(255, 255, 255, 0.96)',
      normalBorder: 'rgba(99, 102, 241, 0.22)',
      normalText: '#475569',
      normalIcon: '#4F46E5',
      normalShadow: '0 4px 12px -6px rgba(99, 102, 241, 0.14)',
      hoverBg: 'rgba(238, 242, 255, 0.95)',
      hoverBorder: 'rgba(99, 102, 241, 0.45)',
      hoverText: '#4338CA',
      hoverIcon: '#4338CA',
      hoverShadow: '0 8px 20px -8px rgba(99, 102, 241, 0.25)',
      hoverY: '-2px',
    },
    'SSL Security': {
      icon: ShieldCheck,
      normalBg: 'rgba(255, 255, 255, 0.96)',
      normalBorder: 'rgba(16, 185, 129, 0.22)',
      normalText: '#475569',
      normalIcon: '#059669',
      normalShadow: '0 4px 12px -6px rgba(16, 185, 129, 0.14)',
      hoverBg: 'rgba(236, 253, 245, 0.95)',
      hoverBorder: 'rgba(16, 185, 129, 0.45)',
      hoverText: '#047857',
      hoverIcon: '#047857',
      hoverShadow: '0 8px 20px -8px rgba(16, 185, 129, 0.25)',
      hoverY: '-2px',
    },

    // 2. Domain Registration Capabilities (Upgraded with Stronger Contrast & Differentiated Accents)
    'DNS Management': {
      icon: Network,
      normalBg: 'rgba(255, 255, 255, 0.96)',
      normalBorder: 'rgba(99, 102, 241, 0.22)',
      normalText: '#475569',
      normalIcon: '#6366F1',
      normalShadow: '0 5px 14px -8px rgba(79, 70, 229, 0.16)',
      hoverBg: 'rgba(238, 242, 255, 0.85)',
      hoverBorder: 'rgba(99, 102, 241, 0.45)',
      hoverText: '#3730A3',
      hoverIcon: '#4F46E5',
      hoverShadow: '0 8px 20px -8px rgba(99, 102, 241, 0.25)',
      hoverY: '-2px',
    },
    'Domain Renewal': {
      icon: RefreshCw,
      normalBg: 'rgba(255, 255, 255, 0.96)',
      normalBorder: 'rgba(59, 130, 246, 0.22)',
      normalText: '#475569',
      normalIcon: '#3B82F6',
      normalShadow: '0 5px 14px -8px rgba(59, 130, 246, 0.16)',
      hoverBg: 'rgba(239, 246, 255, 0.85)',
      hoverBorder: 'rgba(59, 130, 246, 0.45)',
      hoverText: '#1D4ED8',
      hoverIcon: '#2563EB',
      hoverShadow: '0 8px 20px -8px rgba(59, 130, 246, 0.25)',
      hoverY: '-2px',
    },
    'Domain Support': {
      icon: Headphones,
      normalBg: 'rgba(255, 255, 255, 0.96)',
      normalBorder: 'rgba(139, 92, 246, 0.22)',
      normalText: '#475569',
      normalIcon: '#8B5CF6',
      normalShadow: '0 5px 14px -8px rgba(139, 92, 246, 0.16)',
      hoverBg: 'rgba(245, 243, 255, 0.85)',
      hoverBorder: 'rgba(139, 92, 246, 0.45)',
      hoverText: '#5B21B6',
      hoverIcon: '#7C3AED',
      hoverShadow: '0 8px 20px -8px rgba(139, 92, 246, 0.25)',
      hoverY: '-2px',
    },
  };

  const config = badgeConfigs[text] || {
    icon: Server,
    normalBg: 'rgba(255, 255, 255, 0.96)',
    normalBorder: 'rgba(148, 163, 184, 0.22)',
    normalText: '#475569',
    normalIcon: '#64748B',
    normalShadow: '0 4px 12px -6px rgba(15, 23, 42, 0.08)',
    hoverBg: 'rgba(241, 245, 249, 0.95)',
    hoverBorder: 'rgba(148, 163, 184, 0.45)',
    hoverText: '#334155',
    hoverIcon: '#334155',
    hoverShadow: '0 8px 20px -8px rgba(15, 23, 42, 0.16)',
    hoverY: '-2px',
  };

  const IconComponent = config.icon;

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-medium select-none cursor-default"
      style={{
        background: isHovered ? config.hoverBg : config.normalBg,
        border: `1px solid ${isHovered ? config.hoverBorder : config.normalBorder}`,
        color: isHovered ? config.hoverText : config.normalText,
        boxShadow: isHovered ? config.hoverShadow : config.normalShadow,
        transform: isHovered ? `translateY(${config.hoverY})` : 'translateY(0)',
        transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <IconComponent
        className="w-3 h-3 transition-colors duration-200"
        style={{
          color: isHovered ? config.hoverIcon : config.normalIcon,
        }}
      />
      <span>{text}</span>
    </span>
  );
}
