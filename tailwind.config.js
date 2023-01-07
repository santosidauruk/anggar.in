/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
      purple: {
        ...colors.purple,
        900: '#1C1B36',
        700: '#323073',
        500: '#6A67CB',
        300: '#C3C2EA',
        200: '#E3E3F0',
        100: '#EEEEFA',
      },
      neutral: {
        ...colors.neutral,
        800: '#333646',
        600: '#656B8B',
        400: '#B5B8C9',
        200: '#F0F1F4',
      },
    },
    extend: {},
  },
  plugins: [],
};
