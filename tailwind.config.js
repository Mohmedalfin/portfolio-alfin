/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,vue,svelte}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '100px',
    },
    extend: {
      colors: {
        primary: '#14b8a6', // Example primary color
        dark: '#0f172a',
      },
      scale: {
        115: '1.15',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
