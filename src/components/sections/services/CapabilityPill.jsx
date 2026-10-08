import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  Share2,
  TrendingUp,
  MapPin,
  Palette,
  MessageSquare,
  Phone,
  Radio,
  ShieldCheck,
  Send,
  Bell,
  Layers,
  Zap,
  Award,
} from 'lucide-react';

const CAPABILITY_ICONS = {
  // Digital Marketing
  'search visibility': Search,
  'on-page seo': Search,
  'technical seo': Search,
  'audience growth': TrendingUp,
  'campaign strategy': TrendingUp,
  'content strategy': Layers,
  'community': Share2,
  'community engagement': Share2,
  'influencer outreach': Sparkles,
  'creator outreach': Sparkles,
  'brand awareness': Award,
  'brand positioning': Palette,
  'market positioning': TrendingUp,
  'local discovery': MapPin,
  'local seo': MapPin,
  'profile optimization': MapPin,
  'google maps': MapPin,
  'reputation management': ShieldCheck,
  'brand identity': Palette,
  'visual assets': Palette,
  'brand guidelines': Layers,

  // Communication
  'bulk messaging': MessageSquare,
  'business messaging': MessageSquare,
  'automated replies': Zap,
  'campaigns': Send,
  'analytics': TrendingUp,
  'text-to-speech': Radio,
  'call routing': Phone,
  'voice broadcast': Radio,
  'interactive voice': Phone,
  'multi-level menus': Layers,
  'call flows': Radio,
  'call response': Phone,
  'lead capture': Zap,
  'automated callback': Phone,
  'secure verification': ShieldCheck,
  'verification': ShieldCheck,
  'authentication': ShieldCheck,
  'notifications': Bell,
  'alerts': Bell,
  '2fa verification': ShieldCheck,
  'campaign messaging': Send,
  'promotions': Sparkles,
  'discounts': Sparkles,
  'event announcements': Bell,
  'rich messaging': MessageSquare,
  'verified sender': ShieldCheck,
  'interactive content': Sparkles,
};

const ACCENT_COLOR_MAP = {
  emerald: {
    text: '#059669',
    bg: 'rgba(236, 253, 245, 0.95)',
    border: 'rgba(16, 185, 129, 0.35)',
    hoverShadow: '0 4px 12px -2px rgba(16, 185, 129, 0.16)',
    iconColor: '#10b981',
  },
  sky: {
    text: '#0284C7',
    bg: 'rgba(240, 249, 255, 0.95)',
    border: 'rgba(14, 165, 233, 0.35)',
    hoverShadow: '0 4px 12px -2px rgba(14, 165, 233, 0.16)',
    iconColor: '#0ea5e9',
  },
  cyan: {
    text: '#0891B2',
    bg: 'rgba(236, 254, 255, 0.95)',
    border: 'rgba(6, 182, 212, 0.35)',
    hoverShadow: '0 4px 12px -2px rgba(6, 182, 212, 0.16)',
    iconColor: '#06b6d4',
  },
  blue: {
    text: '#2563EB',
    bg: 'rgba(239, 246, 255, 0.95)',
    border: 'rgba(59, 130, 246, 0.35)',
    hoverShadow: '0 4px 12px -2px rgba(59, 130, 246, 0.16)',
    iconColor: '#3b82f6',
  },
  indigo: {
    text: '#4F46E5',
    bg: 'rgba(238, 242, 255, 0.95)',
    border: 'rgba(99, 102, 241, 0.35)',
    hoverShadow: '0 4px 12px -2px rgba(99, 102, 241, 0.16)',
    iconColor: '#6366f1',
  },
  violet: {
    text: '#7C3AED',
    bg: 'rgba(245, 243, 255, 0.95)',
    border: 'rgba(139, 92, 246, 0.35)',
    hoverShadow: '0 4px 12px -2px rgba(139, 92, 246, 0.16)',
    iconColor: '#8b5cf6',
  },
  purple: {
    text: '#9333EA',
    bg: 'rgba(250, 245, 255, 0.95)',
    border: 'rgba(168, 85, 247, 0.35)',
    hoverShadow: '0 4px 12px -2px rgba(168, 85, 247, 0.16)',
    iconColor: '#a855f7',
  },
};

/**
 * CapabilityPill Component (Sections 6 & 15)
 * 
 * Reusable capability pill for Digital Marketing & Communication cards:
 * - Rounded-full with clean border
 * - Brand-aware subtle hover tint and micro-shadow
 * - Aligned 12px vector icon with subtle hover scale
 * - translateY(-1px) micro-lift
 */
export function CapabilityPill({ text, accent = 'blue' }) {
  const [isHovered, setIsHovered] = useState(false);
  const styleConfig = ACCENT_COLOR_MAP[accent] || ACCENT_COLOR_MAP.blue;
  const key = text?.toLowerCase() || '';
  const IconComponent = CAPABILITY_ICONS[key] || Sparkles;

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group/pill inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-medium px-2.5 py-1 rounded-full transition-all duration-200 select-none cursor-default shadow-2xs hover:-translate-y-px"
      style={{
        background: isHovered ? styleConfig.bg : 'rgba(248, 250, 252, 0.85)',
        border: `1px solid ${isHovered ? styleConfig.border : 'rgba(226, 232, 240, 0.85)'}`,
        color: isHovered ? styleConfig.text : '#475569',
        boxShadow: isHovered ? styleConfig.hoverShadow : '0 1px 2px 0 rgba(0, 0, 0, 0.02)',
      }}
    >
      <IconComponent
        className="w-3 h-3 transition-transform duration-200 group-hover/pill:scale-110 shrink-0"
        style={{
          color: isHovered ? styleConfig.iconColor : '#94a3b8',
        }}
      />
      <span>{text}</span>
    </span>
  );
}
