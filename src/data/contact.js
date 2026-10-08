/**
 * ANK Digital Media - Contact / Project Intake Data Architecture
 * Verified official ANK Digital Media contact details and project intake categories.
 */

export const CONTACT_INTRO = {
  eyebrow: 'START A PROJECT',
  headlinePart1: "LET'S BUILD",
  headlinePart2: 'SOMETHING THAT MOVES BUSINESS.',
  supporting:
    "Tell us what you're building, what you're solving, or where you want to go next.",
  indicator: 'PROJECT INTAKE • CLIENT INQUIRIES',
};

export const PROJECT_TYPES = [
  'Web Design',
  'Web Development',
  'Web Application',
  'Software Development',
  'Mobile Application',
  'E-Commerce',
  'Digital Marketing',
  'SMS / Communication',
  'Other',
];

export const PROJECT_SCOPES = [
  'Exploring',
  'Defined Scope',
  'Ready to Start',
];

export const VERIFIED_CONTACT_CHANNELS = [
  {
    id: 'phone',
    label: 'Phone',
    value: '+91 9999779817',
    href: 'tel:+919999779817',
    icon: 'Phone',
  },
  {
    id: 'email',
    label: 'Email',
    value: 'ankdigitalmedia@gmail.com',
    href: 'mailto:ankdigitalmedia@gmail.com',
    icon: 'Mail',
  },
  {
    id: 'address',
    label: 'Address',
    value:
      'AG/611, Ground Floor, Opp. Wazirpur Computer Market, Near Shalimar Bagh Metro Station Gate No-2, New Delhi-110088',
    icon: 'MapPin',
  },
];
