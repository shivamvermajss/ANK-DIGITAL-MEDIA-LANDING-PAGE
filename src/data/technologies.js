/**
 * ANK Digital Media - Technology Ecosystem Data Architecture
 * Conservative, factual digital ecosystem framed as published capabilities.
 * Free of unsupported claims, fake certifications, or invented tech stack claims.
 */

export const TECHNOLOGIES_INTRO = {
  eyebrow: 'TECHNOLOGY ECOSYSTEM',
  headlinePart1: 'THE RIGHT TECHNOLOGY.',
  headlinePart2: 'FOR THE RIGHT EXPERIENCE.',
  supporting:
    'Modern digital capabilities brought together around the needs of every product, platform and business.',
};

export const ECOSYSTEM_DATA = {
  web: {
    id: 'web',
    index: '01',
    label: 'WEB & FRONTEND',
    title: 'Web Design & Development',
    eyebrow: '01 • WEB & FRONTEND',
    icon: 'Layout',
    accentColor: 'blue',
    description:
      'Responsive websites, web applications and digital experiences built around business requirements.',
    capabilities: [
      { name: 'Web Designing', sub: 'Visual Architecture & UI/UX', tag: 'UI/UX Architecture' },
      { name: 'Web Development', sub: 'Performant Frontend Systems', tag: 'Frontend Systems' },
      { name: 'Web Applications', sub: 'Interactive Digital Workflows', tag: 'Responsive Web' },
      { name: 'Responsive Experiences', sub: 'Adaptive Multi-Device Layouts', tag: 'Adaptive Layouts' },
      { name: 'Landing Pages', sub: 'Focused Conversion Interfaces', tag: 'Conversion Ready' },
    ],
    floatingBadges: [
      { text: 'Responsive Web', delay: 0, duration: 4.5 },
      { text: 'Component Driven', delay: 1, duration: 5.2 },
      { text: 'Adaptive Layouts', delay: 0.5, duration: 5.8 },
    ],
  },

  software: {
    id: 'software',
    index: '02',
    label: 'SOFTWARE',
    title: 'Software Development',
    eyebrow: '02 • SOFTWARE',
    icon: 'Cpu',
    accentColor: 'indigo',
    description:
      'Custom software solutions designed around specific business requirements and workflows.',
    capabilities: [
      { name: 'Custom Software', sub: 'Tailored Business Logic', tag: 'Custom Development' },
      { name: 'Application Development', sub: 'Cross-Platform Solutions', tag: 'Business Systems' },
      { name: 'System Integration', sub: 'Unified Service Architecture', tag: 'Unified Architecture' },
      { name: 'Legacy Re-engineering', sub: 'Modernized Core Platforms', tag: 'Platform Modernization' },
      { name: 'Maintenance & Support', sub: 'Lifecycle Stability & Updates', tag: 'Lifecycle Support' },
    ],
    floatingBadges: [
      { text: 'Custom Software', delay: 0, duration: 4.8 },
      { text: 'System Integration', delay: 1.2, duration: 5.0 },
      { text: 'Enterprise Logic', delay: 0.6, duration: 5.5 },
    ],
  },

  data: {
    id: 'data',
    index: '03',
    label: 'DATA & APPLICATIONS',
    title: 'Applications & Data',
    eyebrow: '03 • DATA & APPLICATIONS',
    icon: 'Database',
    accentColor: 'purple',
    description:
      'Dynamic applications with structured data and content management capabilities.',
    capabilities: [
      { name: 'Database Integration', sub: 'Structured Storage Schemas', tag: 'Database Integration' },
      { name: 'Dynamic Applications', sub: 'Real-Time State Handling', tag: 'Dynamic Workflows' },
      { name: 'Content Management', sub: 'Streamlined Editorial Control', tag: 'CMS Ready' },
      { name: 'Enterprise CMS', sub: 'Flexible Publishing Platforms', tag: 'Publishing Platforms' },
      { name: 'Application Data', sub: 'Secure Query & Persistence', tag: 'Structured Data' },
    ],
    floatingBadges: [
      { text: 'CMS Ready', delay: 0, duration: 5.1 },
      { text: 'Structured Data', delay: 0.8, duration: 4.6 },
      { text: 'Dynamic Systems', delay: 1.4, duration: 5.4 },
    ],
  },

  integration: {
    id: 'integration',
    index: '04',
    label: 'INTEGRATION',
    title: 'APIs & Connected Services',
    eyebrow: '04 • INTEGRATION',
    icon: 'GitBranch',
    accentColor: 'cyan',
    description:
      'API-driven development and connected services that bring digital systems together.',
    capabilities: [
      { name: 'API Integration', sub: 'REST & Webhook Connectors', tag: 'API Integration' },
      { name: 'Third-Party Services', sub: 'External Gateway Sync', tag: 'Connected Services' },
      { name: 'Connected Applications', sub: 'Interoperable Systems', tag: 'Cloud Gateways' },
      { name: 'System Integration', sub: 'Unified Data Workflows', tag: 'Data Sync Pipelines' },
      { name: 'Digital Workflows', sub: 'Automated Event Pipelines', tag: 'Automated Events' },
    ],
    floatingBadges: [
      { text: 'API Connected', delay: 0, duration: 4.7 },
      { text: 'Cloud Gateways', delay: 1.1, duration: 5.3 },
      { text: 'Event Pipelines', delay: 0.4, duration: 5.0 },
    ],
  },

  digital: {
    id: 'digital',
    index: '05',
    label: 'DIGITAL',
    title: 'Digital & Communication',
    eyebrow: '05 • DIGITAL',
    icon: 'MessageSquare',
    accentColor: 'emerald',
    description:
      'Digital marketing and communication capabilities supporting customer reach and engagement.',
    capabilities: [
      { name: 'SEO', sub: 'Search Engine Visibility', tag: 'Search Visibility' },
      { name: 'Social Media', sub: 'Channel Brand Building', tag: 'Channel Growth' },
      { name: 'Influencer Marketing', sub: 'Audience Amplification', tag: 'Audience Reach' },
      { name: 'WhatsApp Marketing', sub: 'Direct Business Messaging', tag: 'Digital Channels' },
      { name: 'SMS & Voice', sub: 'Omnichannel Alerts & IVR', tag: 'Omnichannel Alerts' },
      { name: 'IVR & OTP', sub: 'Automated Session Verification', tag: 'Session Verification' },
    ],
    floatingBadges: [
      { text: 'Digital Channels', delay: 0, duration: 4.9 },
      { text: 'Omnichannel Reach', delay: 0.7, duration: 5.6 },
      { text: 'Verified Routing', delay: 1.3, duration: 4.5 },
    ],
  },
};

export const DOMAIN_KEYS = ['web', 'software', 'data', 'integration', 'digital'];
