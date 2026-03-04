/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#003366',
        'burnt-orange': '#b34d19',
        charcoal: '#4b4b4b',
        'off-white': '#fcfcfc',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
        readable: '720px',
        form: '600px',
      },
      boxShadow: {
        nav: '0 2px 8px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};