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

export const TECHNOLOGY_CATEGORIES = [
  {
    id: 'frontend',
    number: '01',
    label: 'FRONTEND',
    title: 'Frontend Engineering',
    desc: 'Interfaces built around responsive, component-driven digital experiences.',
    icon: 'Layout',
    accentColor: 'blue',
    items: [
      { name: 'React', type: 'UI Library', highlight: true },
      { name: 'JavaScript', type: 'Core Language', highlight: true },
      { name: 'HTML5', type: 'Markup Standard', highlight: false },
      { name: 'CSS3', type: 'Styling & Motion', highlight: false },
      { name: 'Tailwind CSS', type: 'Utility Styling', highlight: true },
    ],
  },
  {
    id: 'backend',
    number: '02',
    label: 'BACKEND',
    title: 'Backend Systems',
    desc: 'Application logic, business workflows, and data endpoints engineered for stability.',
    icon: 'Server',
    accentColor: 'indigo',
    items: [
      { name: 'Node.js', type: 'Runtime Engine', highlight: true },
      { name: 'Express', type: 'Routing Framework', highlight: true },
      { name: 'REST APIs', type: 'Data Architecture', highlight: true },
    ],
  },
  {
    id: 'database',
    number: '03',
    label: 'DATABASE',
    title: 'Database & Storage',
    desc: 'Structured and flexible data models designed for integrity and query efficiency.',
    icon: 'Database',
    accentColor: 'purple',
    items: [
      { name: 'MongoDB', type: 'Document Store', highlight: true },
      { name: 'PostgreSQL', type: 'Relational SQL', highlight: true },
      { name: 'MySQL', type: 'Relational Database', highlight: false },
    ],
  },
  {
    id: 'integration',
    number: '04',
    label: 'INTEGRATION',
    title: 'API & Integrations',
    desc: 'Connecting external services, authentication flows, and automated digital gateways.',
    icon: 'GitBranch',
    accentColor: 'cyan',
    items: [
      { name: 'API Integration', type: 'Webhooks & REST', highlight: true },
      { name: 'Authentication', type: 'Session & Token Guard', highlight: true },
      { name: 'Third-Party Services', type: 'Service Gateways', highlight: false },
    ],
  },
  {
    id: 'digital',
    number: '05',
    label: 'DIGITAL',
    title: 'Digital Capabilities',
    desc: 'Cross-platform execution tailored to diverse business processes and user audiences.',
    icon: 'Cpu',
    accentColor: 'emerald',
    items: [
      { name: 'Responsive Design', type: 'Multi-Device Layout', highlight: true },
      { name: 'E-Commerce', type: 'Storefront Systems', highlight: true },
      { name: 'Web Applications', type: 'Workflow Software', highlight: true },
      { name: 'Mobile Applications', type: 'Touch-Optimized UI', highlight: false },
    ],
  },
];

export const TECHNOLOGIES_CLOSING = {
  eyebrow: 'APPROACH',
  headingPart1: 'TECHNOLOGY IS THE TOOL.',
  headingPart2: 'EXPERIENCE IS THE GOAL.',
  supporting:
    'We choose the approach around the product, the audience, and the business objective.',
};
