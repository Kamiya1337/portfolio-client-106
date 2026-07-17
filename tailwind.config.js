/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FFF8F5',
        paper: '#FFFFFF',
        taupe: '#E9E1DC',
        beige: '#FFD9E5',
        charcoal: '#1E1B18',
        obsidian: '#242827',
        'dark-surface': '#34302C',
        'muted-dark': '#504347',
        'muted-light': '#E9EEF8',
        'surface-dim': '#E1D8D4',
        'surface-low': '#FBF2ED',
        'surface-container': '#F5ECE7',
        'surface-high': '#EFE6E2',
        'primary-mint': '#DDE1FF',
        'secondary-lavender': '#F9B3CC',
        'tertiary-blue': '#A6B5FD',
        primary: '#69364B',
        secondary: '#4B5A9C',
        tertiary: '#854E64',
        outline: '#837378',
        'border-light': 'rgba(131, 115, 120, 0.18)',
        'border-dark': 'rgba(255, 255, 255, 0.35)',
      },
      fontFamily: {
        sans: ['Be Vietnam Pro', 'Hanken Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Libre Caslon Text', 'Playfair Display', 'Georgia', 'serif'],
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
        glass: 'inset 0 1px 1px rgba(255,255,255,0.9), 0 34px 80px rgba(105,54,75,0.11)',
        glow: '0 22px 70px rgba(105,54,75,0.16)',
      },
    },
  },
  plugins: [],
};
