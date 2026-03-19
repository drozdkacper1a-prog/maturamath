/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        accent: '#1D9E75',
        accentLight: '#f0fdf4',
        success: '#16a34a',
        warning: '#f59e0b',
        danger: '#ef4444'
      },
      boxShadow: {
        card: '0 10px 30px -14px rgba(2, 6, 23, 0.15)'
      }
    }
  },
  plugins: []
};

