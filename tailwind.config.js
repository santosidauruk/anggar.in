/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#1C1B36', // Purple-Massive
          700: '#323073', // Purple-Heavy
          500: '#6A67CB', // Purple-Fair
          400: '#C3C2EA', // Purple-Soft
          300: '#CFD4ED', // Other/stroke
          200: '#E3E3F0', // Purple-Root
          100: '#EEEEFA', // Purple-Base
        },
        neutral: {
          800: '#333646', // Black-Fair
          600: '#656B8B', // Black-Soft
          400: '#B5B8C9', // Other/Divider
          200: '#F0F1F4', // White-Soft
        },
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
