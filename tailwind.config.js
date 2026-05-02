/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#01215b',
          50: '#e8ebf2',
          100: '#c5ccdf',
          200: '#9ea9c9',
          300: '#7786b3',
          400: '#5968a2',
          500: '#3b4d91',
          600: '#2f3f7d',
          700: '#233066',
          800: '#01215b',
          900: '#011a48',
        },
        accent: {
          DEFAULT: '#fcbb24',
          50: '#fef9e8',
          100: '#fdf0c2',
          200: '#fbe496',
          300: '#f9d86a',
          400: '#f7c942',
          500: '#fcbb24',
          600: '#d99a0e',
          700: '#b5790a',
          800: '#915a08',
          900: '#6d4206',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        'hero-fade': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'hero-fade': 'hero-fade 1.2s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
