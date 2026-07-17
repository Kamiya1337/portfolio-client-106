/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FFF8EF',
        paper: '#FFFFFF',
        taupe: '#F5DED8',
        beige: '#FCA8AA',
        charcoal: '#171313',
        obsidian: '#171313',
        'dark-surface': '#304A16',
        'muted-dark': '#79515C',
        'muted-light': '#FBE9E6',
        'surface-dim': '#F4D7D2',
        'surface-low': '#FFF4EA',
        'surface-container': '#FBE9E6',
        'surface-high': '#F9DDE2',
        'primary-mint': '#849A28',
        'secondary-lavender': '#F2678E',
        'tertiary-blue': '#E23260',
        primary: '#9A4D68',
        secondary: '#849A28',
        tertiary: '#E23260',
        outline: '#B78B8F',
        'border-light': 'rgba(154, 77, 104, 0.17)',
        'border-dark': 'rgba(255, 255, 255, 0.35)',
      },
      fontFamily: {
        sans: ['Be Vietnam Pro', 'Hanken Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      spacing: {
        sidebar: '280px',
        'section-gap': '5rem',
      },
      borderRadius: {
        glass: '1.5rem',
        'glass-lg': '2rem',
      },
      boxShadow: {
        glass: 'inset 0 1px 1px rgba(255,255,255,0.9), 0 34px 80px rgba(154,77,104,0.12)',
        glow: '0 22px 70px rgba(226,50,96,0.18)',
      },
    },
  },
  plugins: [],
};
