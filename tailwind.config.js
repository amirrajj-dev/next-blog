/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#1f2937',
        darkCard: '#2d3748',
        darkText: '#e2e8f0',
        darkBlue: '#2c5282',
        darkBlue2: '#2a4365',
        darkPurple: '#553c9a',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'dana-regular': 'dana-regular',
        'dana-bold': 'dana-bold',
        'dana-light': 'dana-light',
      },
    },
  },
  plugins: [],
};
