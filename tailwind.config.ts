import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    borderRadius: {
      sm: '0.5rem',
      DEFAULT: '1rem',
      md: '2rem',
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
    },
    colors: {
      text: 'var(--colors-text)',
      border: 'var(--colors-border)',
      background: 'var(--colors-background)',
      'btn-background': 'var(--colors-btn-background)',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
