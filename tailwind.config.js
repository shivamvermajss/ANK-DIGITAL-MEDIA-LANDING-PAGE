/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0D12',
          surface: '#151821',
          'surface-elevated': '#1F2432',
          light: '#F8FAFF',
          'page-base': '#F8FAFF',
          'soft-violet': '#EDE9FE',
          'soft-blue': '#DBEAFE',
          white: '#FFFFFF',
          indigo: '#6366F1',
          violet: '#8B5CF6',
          cyan: '#06B6D4',
          blue: '#3B82F6',
          slate: '#CBD5E1',
          'icy-blue': '#BFDBFE',
          'light-indigo': '#C7D2FE',
          'pastel-purple': '#DDD6FE',
          navy: '#0F172A',
          charcoal: '#1A1E29',
          muted: '#94A3B8',
          'muted-dark': '#64748B',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-light': 'rgba(15, 23, 42, 0.08)',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', '"Space Grotesk"', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(15, 23, 42, 0.06)',
        'soft-md': '0 8px 24px -4px rgba(15, 23, 42, 0.08)',
        'soft-lg': '0 16px 40px -8px rgba(15, 23, 42, 0.12)',
        'dark-sm': '0 2px 10px -2px rgba(0, 0, 0, 0.5)',
        'dark-md': '0 10px 30px -5px rgba(0, 0, 0, 0.6)',
        'glow-indigo': '0 0 25px -4px rgba(99, 102, 241, 0.35)',
        'glow-violet': '0 0 25px -4px rgba(139, 92, 246, 0.35)',
        'glow-cyan': '0 0 25px -4px rgba(6, 182, 212, 0.35)',
        'neu-flat': '6px 6px 14px #e5e8ee, -6px -6px 14px #ffffff',
        'neu-pressed': 'inset 3px 3px 6px #e5e8ee, inset -3px -3px 6px #ffffff',
        'neu-dark': '6px 6px 14px #08090d, -6px -6px 14px #1c212d',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #06B6D4 100%)',
        'brand-gradient-subtle': 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)',
        'dark-card': 'linear-gradient(180deg, rgba(21, 24, 33, 0.8) 0%, rgba(11, 13, 18, 0.95) 100%)',
        'light-card': 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
