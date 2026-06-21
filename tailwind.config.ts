import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B5E20',
          light: '#2E7D32',
          dark: '#0D3B10',
          surface: '#E8F5E9',
          'surface-light': '#F1F8F2',
        },
        teal: {
          DEFAULT: '#00897B',
          dark: '#00695C',
          light: '#4DB6AC',
        },
        background: '#F5F7F5',
        surface: {
          DEFAULT: '#FFFFFF',
          elevated: '#FAFAFA',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#616161',
          tertiary: '#9E9E9E',
          hint: '#BDBDBD',
        },
        border: {
          DEFAULT: '#E0E0E0',
          light: '#F0F0F0',
        },
        success: { DEFAULT: '#2E7D32', surface: '#E8F5E9' },
        warning: { DEFAULT: '#F57F17', surface: '#FFF8E1' },
        error: { DEFAULT: '#C62828', surface: '#FFEBEE' },
        accent: {
          blue: '#1565C0',
          indigo: '#283593',
          amber: '#F57F17',
          purple: '#6A1B9A',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      fontSize: {
        display: ['3rem', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.02em' }],
        h1: ['2.25rem', { lineHeight: '1.15', fontWeight: '800', letterSpacing: '-0.02em' }],
        h2: ['1.75rem', { lineHeight: '1.2', fontWeight: '700' }],
        h3: ['1.375rem', { lineHeight: '1.25', fontWeight: '700' }],
        h4: ['1.125rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        body: ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        caption: ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
        stat: ['1.75rem', { lineHeight: '1.1', fontWeight: '800' }],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        elevated: '0 10px 40px -10px rgb(27 94 32 / 0.12)',
      },
      animation: {
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
