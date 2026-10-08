/**
 * ANK Digital Media - Services Data Architecture
 * Preserving authentic service terminology across all 4 practices:
 * 1. Web & Software Development (Primary / Hero-Level)
 * 2. Digital Marketing (Secondary)
 * 3. SMS & Business Communication (Secondary)
 * 4. Infrastructure / Hosting & Domain (Supporting)
 */

export const SERVICES_INTRO = {
  eyebrow: 'WHAT WE DO',
  headlinePart1: 'ONE DIGITAL PARTNER.',
  headlinePart2: 'EVERYTHING YOUR BUSINESS NEEDS TO GROW.',
  description:
    'ANK Digital Media brings web development, digital marketing, business communication, and online infrastructure together under one partner.',
  capabilityStrip: ['WEB', 'DIGITAL', 'COMMUNICATION', 'INFRASTRUCTURE'],
};

export const FULL_SERVICE_PILLARS = [
  {
    id: 'development',
    code: '01',
    category: 'DEVELOP',
    title: 'Web & Software Development',
    desc: 'Websites, Web Apps, Mobile, E-Commerce & Custom Systems',
    href: '#development-showcase',
    isPrimary: true,
    tag: 'PRIMARY PRACTICE',
  },
  {
    id: 'digital-marketing',
    code: '02',
    category: 'GROW',
    title: 'Digital Marketing',
    desc: 'SEO, Social Media, Influencer & Google My Business',
    href: '#digital-marketing',
    isPrimary: false,
    tag: '02 / GROW',
  },
  {
    id: 'communication',
    code: '03',
    category: 'CONNECT',
    title: 'SMS & Business Communication',
    desc: 'Bulk SMS, WhatsApp Marketing, Voice Calls, IVR & RCS',
    href: '#communication',
    isPrimary: false,
    tag: '03 / CONNECT',
  },
  {
    id: 'infrastructure',
    code: '04',
    category: 'POWER',
    title: 'Hosting & Domain Infrastructure',
    desc: 'Web Hosting, Domain Registration & DNS Management',
    href: '#infrastructure',
    isPrimary: false,
    tag: '04 / POWER',
  },
];

export const DEVELOPMENT_PIPELINE_NODES = {
  development: {
    id: 'development',
    badge: '01 / DEVELOP • ARCHITECTURE',
    title: 'Web Development & Engineering',
    tagline:
      'Modern websites, web applications, and digital platforms engineered around your business goals, performance criteria, and user journeys.',
    pillars: [
      {
        id: 'modular-architecture',
        title: 'Modular Component Architecture',
        desc: 'Built for maintainability and seamless future scaling.',
        previewType: 'architecture',
      },
      {
        id: 'high-performance',
        title: 'High-Performance Execution',
        desc: 'Fast load times, fluid transitions, and responsive layouts.',
        previewType: 'performance',
      },
      {
        id: 'user-centric',
        title: 'User-Centric Visual Design',
        desc: 'Interface elegance paired with intuitive navigation journeys.',
        previewType: 'design',
      },
    ],
    ctaText: 'Explore Development',
  },
  strategy: {
    id: 'strategy',
    badge: '01 / DEVELOP • STRATEGY',
    title: 'Strategy & Architecture Discovery',
    tagline:
      'Turn business objectives into clear technical specifications, system architecture plans, and structured digital execution roadmaps.',
    pillars: [
      {
        id: 'requirements-scope',
        title: 'Requirements & Scope Definition',
        desc: 'Mapping business logic and user journeys into clear development milestones.',
        previewType: 'roadmap',
      },
      {
        id: 'stack-evaluation',
        title: 'Technology Stack Evaluation',
        desc: 'Selecting frameworks, databases, and APIs tailored to product requirements.',
        previewType: 'stack',
      },
      {
        id: 'scalability-security',
        title: 'Scalability & Security Roadmap',
        desc: 'Architectural planning ensuring long-term data integrity and system capacity.',
        previewType: 'security',
      },
    ],
    ctaText: 'Plan Your Architecture',
  },
  design: {
    id: 'design',
    badge: '01 / DEVELOP • UI/UX DESIGN',
    title: 'UI/UX Design & Design Systems',
    tagline:
      'Modern, intuitive interfaces crafted with rigorous design systems, accessible design tokens, and engaging visual aesthetics.',
    pillars: [
      {
        id: 'design-systems',
        title: 'Custom Design Systems',
        desc: 'Consistent typography, color palettes, and component libraries.',
        previewType: 'tokens',
      },
      {
        id: 'prototyping',
        title: 'Interactive Wireframing & Prototypes',
        desc: 'Clickable prototypes validating user flows before engineering commences.',
        previewType: 'prototyping',
      },
      {
        id: 'responsive-layouts',
        title: 'Responsive Cross-Platform Layouts',
        desc: 'Fluid layouts designed to render impeccably across desktop, tablet, and mobile.',
        previewType: 'responsive',
      },
    ],
    ctaText: 'View Design Approach',
  },
  optimization: {
    id: 'optimization',
    badge: '01 / DEVELOP • OPTIMIZATION',
    title: 'Performance & Code Optimization',
    tagline:
      'Fine-tuning client-side bundles, database queries, and search engine technical readiness for smooth user interactions.',
    pillars: [
      {
        id: 'vitals-engineering',
        title: 'Core Web Vitals Engineering',
        desc: 'Optimizing DOM rendering, image compression, and asset delivery pipelines.',
        previewType: 'vitals',
      },
      {
        id: 'semantic-markup',
        title: 'Clean Semantic Markup',
        desc: 'W3C standards compliance, structured schema data, and search engine discoverability.',
        previewType: 'semantic',
      },
      {
        id: 'bundle-splitting',
        title: 'Bundle Splitting & Lazy Loading',
        desc: 'Minimizing initial download sizes for immediate interactive readiness.',
        previewType: 'bundling',
      },
    ],
    ctaText: 'Optimize Your Product',
  },
  deployment: {
    id: 'deployment',
    badge: '01 / DEVELOP • DEPLOYMENT',
    title: 'Cloud-Ready Deployment & Security',
    tagline:
      'Production releases configured with automated continuous delivery, SSL certificates, environment variables, and web security protocols.',
    pillars: [
      {
        id: 'automated-pipelines',
        title: 'Automated Build Pipelines',
        desc: 'Continuous integration testing ensuring zero-downtime production rollouts.',
        previewType: 'pipeline',
      },
      {
        id: 'ssl-encryption',
        title: 'SSL Encryption & Security Standards',
        desc: 'End-to-end encryption, HTTPS protocols, and header security configurations.',
        previewType: 'encryption',
      },
      {
        id: 'server-dns',
        title: 'Server & DNS Orchestration',
        desc: 'Global edge routing, DNS record verification, and domain connectivity.',
        previewType: 'dns',
      },
    ],
    ctaText: 'Deploy With Confidence',
  },
  support: {
    id: 'support',
    badge: '01 / DEVELOP • ONGOING SUPPORT',
    title: 'Ongoing Maintenance & Platform Scaling',
    tagline:
      'Dedicated post-launch technical support, dependency updates, database backups, and feature expansion as your business grows.',
    pillars: [
      {
        id: 'security-updates',
        title: 'Proactive Version & Security Updates',
        desc: 'Regular framework patches and dependency maintenance preventing technical debt.',
        previewType: 'updates',
      },
      {
        id: 'scheduled-backups',
        title: 'Scheduled Backups & Health Checks',
        desc: 'Automated data archiving and system availability verification.',
        previewType: 'backups',
      },
      {
        id: 'feature-enhancements',
        title: 'Feature Enhancements & Scaling',
        desc: 'Continuous platform iteration adapting to emerging business requirements.',
        previewType: 'iteration',
      },
    ],
    ctaText: 'Schedule Support Consultation',
  },
};

export const DEVELOPMENT_CATEGORY = {
  id: 'development',
  title: 'WEB & SOFTWARE DEVELOPMENT',
  badge: 'Primary Practice',
  tagline:
    'From high-performance websites to custom applications and digital platforms, we build modern solutions around your business goals.',
  ctaText: 'Explore Development',
  ctaHref: '#development-capabilities',
  services: [
    {
      id: 'web-designing',
      title: 'Web Designing',
      desc: 'User interface and visual design focused on clear customer journeys.',
      icon: 'Palette',
      tag: 'UI/UX Design',
      technologies: ['HTML', 'CSS', 'UI/UX'],
      featured: false,
    },
    {
      id: 'web-development',
      title: 'Web Development',
      desc: 'Modern websites built around your business requirements.',
      icon: 'Code2',
      tag: 'Websites',
      technologies: ['Next.js', 'React', 'Tailwind'],
      featured: false,
    },
    {
      id: 'web-application',
      title: 'Web Application',
      desc: 'Interactive web applications tailored to specific business processes.',
      icon: 'AppWindow',
      tag: 'Web Apps',
      eyebrow: 'FEATURED PRACTICE • WEB PLATFORMS',
      technologies: ['React', 'Next.js', 'Node.js'],
      featured: true,
      previewType: 'web-app',
    },
    {
      id: 'software-development',
      title: 'Software Development',
      desc: 'Custom software solutions built around business workflows.',
      icon: 'Cpu',
      tag: 'Custom Software',
      eyebrow: 'FEATURED PRACTICE • SYSTEM ARCHITECTURE',
      technologies: ['Node.js', 'APIs', 'Database'],
      featured: true,
      previewType: 'software-architecture',
    },
    {
      id: 'mobile-application',
      title: 'Mobile Application',
      desc: 'Mobile applications designed for modern digital experiences.',
      icon: 'Smartphone',
      tag: 'Mobile Apps',
      technologies: ['React Native', 'Flutter'],
      featured: false,
    },
    {
      id: 'desktop-application',
      title: 'Desktop Application',
      desc: 'Desktop software solutions designed for operational efficiency.',
      icon: 'Monitor',
      tag: 'Desktop Software',
      technologies: ['JavaScript', 'Node.js'],
      featured: false,
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce',
      desc: 'Online stores and digital commerce solutions for selling products and services.',
      icon: 'ShoppingBag',
      tag: 'E-Commerce',
      technologies: ['Shopify', 'Stripe', 'Next.js'],
      featured: false,
    },
    {
      id: 'graphics-design',
      title: 'Graphics Design',
      desc: 'Creative graphic design and visual assets for digital and print media.',
      icon: 'Sparkles',
      tag: 'Visual Design',
      technologies: ['Visual Design', 'Branding'],
      featured: false,
    },
    {
      id: 'cms',
      title: 'Content Management System',
      desc: 'Content management systems that make updating and publishing straightforward.',
      icon: 'Database',
      tag: 'CMS Solutions',
      technologies: ['CMS', 'Content'],
      featured: false,
    },
  ],
};

export const MARKETING_CATEGORY = {
  id: 'digital-marketing',
  title: 'DIGITAL MARKETING',
  badge: 'Digital Marketing',
  tagline: 'Turn digital presence into measurable business growth.',
  services: [
    {
      id: 'digital-marketing-overview',
      title: 'Digital Marketing',
      desc: 'Strategic marketing campaigns to connect with audiences and expand your digital reach.',
      icon: 'TrendingUp',
      capabilities: ['Campaign Strategy', 'Audience Growth'],
    },
    {
      id: 'seo',
      title: 'Search Engine Optimisation / SEO',
      desc: 'Search visibility optimization to help potential customers find your business online.',
      icon: 'Search',
      capabilities: ['Search Visibility', 'On-Page SEO'],
    },
    {
      id: 'social-media',
      title: 'Social Media',
      desc: 'Social media management and content creation to engage your community.',
      icon: 'Share2',
      capabilities: ['Content Strategy', 'Community'],
    },
    {
      id: 'influencer-marketing',
      title: 'Influencer Marketing',
      desc: 'Collaborations with relevant creators and influencers to amplify brand awareness.',
      icon: 'Users',
      capabilities: ['Creator Outreach', 'Brand Awareness'],
    },
    {
      id: 'gmb',
      title: 'Google My Business',
      desc: 'Profile setup and optimization to enhance local search discoverability.',
      icon: 'MapPin',
      capabilities: ['Local Discovery', 'Profile Optimization'],
    },
    {
      id: 'brand-building',
      title: 'Brand Building',
      desc: 'Brand identity and strategic positioning to establish clear market presence.',
      icon: 'Award',
      capabilities: ['Brand Identity', 'Market Positioning'],
    },
  ],
};

export const COMMUNICATION_CATEGORY = {
  id: 'communication',
  title: 'SMS & BUSINESS COMMUNICATION',
  badge: 'Business Communication',
  tagline: 'Reach customers through powerful messaging and communication solutions.',
  services: [
    {
      id: 'bulk-sms',
      title: 'Bulk SMS Services',
      desc: 'Large-scale SMS messaging solutions for time-sensitive customer outreach.',
      icon: 'MessageSquare',
      type: 'SMS Outreach',
      accent: 'sky',
      capabilities: ['Bulk Messaging', 'Campaigns'],
      featured: false,
    },
    {
      id: 'whatsapp-marketing',
      title: 'WhatsApp Marketing',
      desc: 'Business communication and campaign messaging through WhatsApp.',
      icon: 'MessageCircle',
      type: 'Direct Messaging',
      accent: 'emerald',
      capabilities: ['Business Messaging', 'Automated Replies'],
      featured: true,
    },
    {
      id: 'voice-call',
      title: 'Voice Call Services',
      desc: 'Voice broadcast and calling solutions for announcements and customer outreach.',
      icon: 'PhoneCall',
      type: 'Voice Solutions',
      accent: 'blue',
      capabilities: ['Text-to-Speech', 'Call Routing'],
      featured: false,
      hasWaveform: true,
    },
    {
      id: 'ivr-services',
      title: 'IVR Services',
      desc: 'Interactive voice response systems to guide and direct incoming customer calls.',
      icon: 'PhoneForwarded',
      type: 'Call Routing',
      accent: 'indigo',
      capabilities: ['Interactive Voice', 'Call Flows'],
      featured: false,
      hasWaveform: true,
    },
    {
      id: 'missed-call',
      title: 'Missed Call Services',
      desc: 'Missed call solutions for customer response, verification, and feedback.',
      icon: 'PhoneMissed',
      type: 'Call Services',
      accent: 'blue',
      capabilities: ['Call Response', 'Lead Capture'],
      featured: false,
    },
    {
      id: 'transactional-sms',
      title: 'Transactional SMS',
      desc: 'Automated SMS delivery for notifications, order updates, and account alerts.',
      icon: 'Send',
      type: 'Notifications',
      accent: 'sky',
      capabilities: ['Notifications', 'Alerts'],
      featured: false,
    },
    {
      id: 'promotional-sms',
      title: 'Promotional SMS',
      desc: 'Promotional text campaigns to announce offers and business updates.',
      icon: 'Megaphone',
      type: 'Campaigns',
      accent: 'violet',
      capabilities: ['Campaign Messaging', 'Promotions'],
      featured: false,
    },
    {
      id: 'otp-service',
      title: 'OTP Service',
      desc: 'One-time password delivery solutions for secure user verification.',
      icon: 'ShieldCheck',
      type: 'Verification',
      accent: 'indigo',
      capabilities: ['Secure Verification', 'Authentication'],
      featured: true,
    },
    {
      id: 'rcs-services',
      title: 'RCS Services',
      desc: 'Rich communication services featuring branded and interactive message formats.',
      icon: 'Radio',
      type: 'Rich Messaging',
      accent: 'cyan',
      capabilities: ['Rich Messaging', 'Interactive Content'],
      featured: false,
    },
  ],
};

export const INFRASTRUCTURE_CATEGORY = {
  id: 'infrastructure',
  title: 'INFRASTRUCTURE',
  badge: 'Hosting & Domains',
  tagline: 'Reliable foundations for your digital presence.',
  services: [
    {
      id: 'web-hosting',
      title: 'Web Hosting',
      desc: 'Reliable hosting solutions for your digital presence.',
      icon: 'Server',
      type: 'Cloud & Web Hosting',
      accent: 'blue',
      capabilities: ['Cloud Hosting', 'Web Infrastructure', 'SSL Security'],
      highlights: ['Domain & Web Support', 'Email Accounts', 'Hosting Setup', 'Security Options'],
    },
    {
      id: 'domain-registration',
      title: 'Domain Registration',
      desc: 'Domain registration solutions for your online identity.',
      icon: 'Globe',
      type: 'Identity & DNS',
      accent: 'indigo',
      capabilities: ['DNS Management', 'Domain Renewal', 'Domain Support'],
      highlights: ['Domain Name Search', 'Registration & Renewal', 'DNS Management', 'Domain Assistance'],
    },
  ],
};
