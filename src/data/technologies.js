/**
 * ANK Digital Media - Technologies Data Architecture
 * Conservative, factual digital ecosystem framed as selected technologies and capabilities.
 * Free of unsupported claims, fake certifications, or invented partnerships.
 */

export const TECHNOLOGIES_INTRO = {
  eyebrow: 'TECHNOLOGY',
  headlinePart1: 'THE RIGHT TECHNOLOGY.',
  headlinePart2: 'FOR THE RIGHT EXPERIENCE.',
  supporting:
    'Modern tools and digital capabilities brought together around the needs of each product.',
  indicator: 'TECHNOLOGY ECOSYSTEM',
  tagline: 'THE TECHNOLOGY ADAPTS TO THE PRODUCT.',
  badge: 'SELECTED TECHNOLOGIES',
};

/**
 * 5 Standardized Domain Objects with explicit keys for:
 * - frontend
 * - backend
 * - database
 * - api (with integration alias)
 * - digital
 *
 * Each object contains both 'description' and 'desc', as well as 'technologies' and 'items'
 * to guarantee 100% crash-free defensive rendering across all components.
 */
export const DOMAINS_DATA = {
  frontend: {
    id: 'frontend',
    number: '01',
    label: 'FRONTEND',
    title: 'Frontend Engineering',
    description: 'Interfaces built around responsive, component-driven digital experiences.',
    desc: 'Interfaces built around responsive, component-driven digital experiences.',
    icon: 'Layout',
    accentColor: 'blue',
    technologies: [
      { name: 'React', type: 'UI Library', highlight: true },
      { name: 'JavaScript', type: 'Core Language', highlight: true },
      { name: 'HTML5', type: 'Markup Standard', highlight: false },
      { name: 'CSS3', type: 'Styling & Motion', highlight: false },
      { name: 'Tailwind CSS', type: 'Utility Styling', highlight: true },
    ],
    items: [
      { name: 'React', type: 'UI Library', highlight: true },
      { name: 'JavaScript', type: 'Core Language', highlight: true },
      { name: 'HTML5', type: 'Markup Standard', highlight: false },
      { name: 'CSS3', type: 'Styling & Motion', highlight: false },
      { name: 'Tailwind CSS', type: 'Utility Styling', highlight: true },
    ],
  },
  backend: {
    id: 'backend',
    number: '02',
    label: 'BACKEND',
    title: 'Backend Systems',
    description: 'Application logic, business workflows, and data endpoints engineered for stability.',
    desc: 'Application logic, business workflows, and data endpoints engineered for stability.',
    icon: 'Server',
    accentColor: 'indigo',
    technologies: [
      { name: 'Node.js', type: 'Runtime Engine', highlight: true },
      { name: 'Express', type: 'Routing Framework', highlight: true },
      { name: 'REST APIs', type: 'Data Architecture', highlight: true },
    ],
    items: [
      { name: 'Node.js', type: 'Runtime Engine', highlight: true },
      { name: 'Express', type: 'Routing Framework', highlight: true },
      { name: 'REST APIs', type: 'Data Architecture', highlight: true },
    ],
  },
  database: {
    id: 'database',
    number: '03',
    label: 'DATABASE',
    title: 'Database & Storage',
    description: 'Structured and flexible data models designed for integrity and query efficiency.',
    desc: 'Structured and flexible data models designed for integrity and query efficiency.',
    icon: 'Database',
    accentColor: 'purple',
    technologies: [
      { name: 'MongoDB', type: 'Document Store', highlight: true },
      { name: 'PostgreSQL', type: 'Relational SQL', highlight: true },
      { name: 'MySQL', type: 'Relational Database', highlight: false },
    ],
    items: [
      { name: 'MongoDB', type: 'Document Store', highlight: true },
      { name: 'PostgreSQL', type: 'Relational SQL', highlight: true },
      { name: 'MySQL', type: 'Relational Database', highlight: false },
    ],
  },
  api: {
    id: 'api',
    number: '04',
    label: 'INTEGRATION',
    title: 'API & Integrations',
    description: 'Connecting external services, authentication flows, and automated digital gateways.',
    desc: 'Connecting external services, authentication flows, and automated digital gateways.',
    icon: 'GitBranch',
    accentColor: 'cyan',
    technologies: [
      { name: 'API Integration', type: 'Webhooks & REST', highlight: true },
      { name: 'Authentication', type: 'Session & Token Guard', highlight: true },
      { name: 'Third-Party Services', type: 'Service Gateways', highlight: false },
    ],
    items: [
      { name: 'API Integration', type: 'Webhooks & REST', highlight: true },
      { name: 'Authentication', type: 'Session & Token Guard', highlight: true },
      { name: 'Third-Party Services', type: 'Service Gateways', highlight: false },
    ],
  },
  digital: {
    id: 'digital',
    number: '05',
    label: 'DIGITAL',
    title: 'Digital Capabilities',
    description: 'Cross-platform execution tailored to diverse business processes and user audiences.',
    desc: 'Cross-platform execution tailored to diverse business processes and user audiences.',
    icon: 'Cpu',
    accentColor: 'emerald',
    technologies: [
      { name: 'Responsive Design', type: 'Multi-Device Layout', highlight: true },
      { name: 'E-Commerce', type: 'Storefront Systems', highlight: true },
      { name: 'Web Applications', type: 'Workflow Software', highlight: true },
      { name: 'Mobile Applications', type: 'Touch-Optimized UI', highlight: false },
    ],
    items: [
      { name: 'Responsive Design', type: 'Multi-Device Layout', highlight: true },
      { name: 'E-Commerce', type: 'Storefront Systems', highlight: true },
      { name: 'Web Applications', type: 'Workflow Software', highlight: true },
      { name: 'Mobile Applications', type: 'Touch-Optimized UI', highlight: false },
    ],
  },
};

// Aliases: integration maps to api for backwards compatibility
DOMAINS_DATA.integration = DOMAINS_DATA.api;

/**
 * Ordered list of 5 domain tabs
 */
export const DOMAINS_LIST = [
  DOMAINS_DATA.frontend,
  DOMAINS_DATA.backend,
  DOMAINS_DATA.database,
  DOMAINS_DATA.api,
  DOMAINS_DATA.digital,
];

/**
 * Backward compatibility array
 */
export const TECHNOLOGY_CATEGORIES = DOMAINS_LIST;

/**
 * Explicit domain to ecosystem node mapping (Section 10)
 */
export const NODE_BY_DOMAIN = {
  frontend: 'frontend',
  backend: 'backend',
  database: 'database',
  api: 'integration',
  integration: 'integration',
  digital: 'digital',
};

export const TECHNOLOGIES_CLOSING = {
  eyebrow: 'APPROACH',
  headingPart1: 'TECHNOLOGY IS THE TOOL.',
  headingPart2: 'EXPERIENCE IS THE GOAL.',
  supporting:
    'We choose the approach around the product, the audience, and the business objective.',
};
