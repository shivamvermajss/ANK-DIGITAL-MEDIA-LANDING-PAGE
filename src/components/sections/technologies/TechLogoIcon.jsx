import {
  Code2,
  Shield,
  Smartphone,
  ShoppingBag,
  AppWindow,
  Boxes,
  GitBranch,
  Layout,
} from 'lucide-react';

/**
 * TechLogoIcon Component
 * 
 * Crisp native SVG vector icons for selected technologies.
 * Zero raster images, zero external dependencies.
 */
export function TechLogoIcon({ name, className = 'w-4 h-4' }) {
  switch (name) {
    case 'React':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" stroke="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" stroke="currentColor" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );

    case 'JavaScript':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#F7DF1E" fillOpacity="0.18" stroke="#F7DF1E" strokeWidth="1.2" />
          <path d="M9 16.5 C9 15.5 9 14.5 9.5 14 C10 13.5 10.5 13.5 11 14" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 13.5 C14.5 13 15.5 13 16 13.5 C16.5 14 16.5 14.8 16 15.3 C15.5 15.8 14.5 16 14 16.5" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'HTML5':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M4 3L5.5 19.5L12 21.5L18.5 19.5L20 3H4Z" stroke="currentColor" strokeLinejoin="round" />
          <path d="M16.5 7H7.5L8 11.5H16L15.5 16L12 17L8.5 16L8.3 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'CSS3':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M4 3L5.5 19.5L12 21.5L18.5 19.5L20 3H4Z" stroke="currentColor" strokeLinejoin="round" />
          <path d="M7.5 7H16.5L16 11.5H8L8.5 16L12 17L15.5 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'Tailwind CSS':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M6 9C7.2 6.5 9 5.5 11.5 6C13.5 6.4 14.5 8 16 8.5C17.5 9 18.5 8 19.5 6.5C18.5 9 17 10 14.5 9.5C12.5 9.1 11.5 7.5 10 7C8.5 6.5 7.5 7.5 6 9Z"
            fill="#06B6D4"
          />
          <path
            d="M3 15C4.2 12.5 6 11.5 8.5 12C10.5 12.4 11.5 14 13 14.5C14.5 15 15.5 14 16.5 12.5C15.5 15 14 16 11.5 15.5C9.5 15.1 8.5 13.5 7 13C5.5 12.5 4.5 13.5 3 15Z"
            fill="#06B6D4"
          />
        </svg>
      );

    case 'Node.js':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 2.5L20.5 7.5V17L12 22L3.5 17V7.5L12 2.5Z"
            stroke="#16A34A"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M12 7.5V17" stroke="#16A34A" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M12 12L17 9" stroke="#16A34A" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M12 12L7 9" stroke="#16A34A" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case 'Express':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" />
          <path d="M8 9L11 15L16 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'REST APIs':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <rect x="3" y="6" width="7" height="5" rx="1.5" stroke="currentColor" />
          <rect x="14" y="13" width="7" height="5" rx="1.5" stroke="currentColor" />
          <path d="M10 8.5H12C13 8.5 14 9.5 14 10.5V13" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );

    case 'MongoDB':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          {/* Classic MongoDB Leaf vector */}
          <path
            d="M12 2C12 2 7.5 7.5 7.5 13C7.5 17 9.8 19.8 12 22C14.2 19.8 16.5 17 16.5 13C16.5 7.5 12 2 12 2Z"
            fill="#10B981"
            fillOpacity="0.2"
            stroke="#059669"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M12 3V21" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case 'PostgreSQL':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          {/* Elephant outline badge */}
          <path
            d="M12 3C7.5 3 4 6.5 4 11C4 13.5 5.2 15.8 7 17.2V21L10 19C10.6 19.2 11.3 19.3 12 19.3C16.5 19.3 20 15.6 20 11C20 6.5 16.5 3 12 3Z"
            fill="#3B82F6"
            fillOpacity="0.18"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="9.5" cy="10" r="1" fill="#2563EB" />
          <path d="M14 11C14 13 13 14.5 11.5 15" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case 'MySQL':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          {/* Database Cylinder / Wave symbol */}
          <ellipse cx="12" cy="7" rx="8" ry="3.5" fill="#0284C7" fillOpacity="0.2" stroke="#0284C7" strokeWidth="1.5" />
          <path d="M4 7V17C4 18.9 7.6 20.5 12 20.5C16.4 20.5 20 18.9 20 17V7" stroke="#0284C7" strokeWidth="1.5" />
          <path d="M4 12C4 13.9 7.6 15.5 12 15.5C16.4 15.5 20 13.9 20 12" stroke="#0284C7" strokeWidth="1.2" />
        </svg>
      );

    case 'API Integration':
      return <GitBranch className={className} />;

    case 'Authentication':
      return <Shield className={className} />;

    case 'Third-Party Services':
      return <Boxes className={className} />;

    case 'Responsive Design':
      return <Layout className={className} />;

    case 'E-Commerce':
      return <ShoppingBag className={className} />;

    case 'Web Applications':
      return <AppWindow className={className} />;

    case 'Mobile Applications':
      return <Smartphone className={className} />;

    default:
      return <Code2 className={className} />;
  }
}
