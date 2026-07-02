/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ... your existing content globs
  ],
  theme: {
    extend: {
      // Port your SCSS color tokens here
      colors: {
        // exact names from _colors.scss (you can rename them as you prefer)
        'body-bg': '#151515',
        'contact-bg': '#242424',
        green: '#4ee1a0',
        'green-bg': 'hsla(153,71%,59%,0.727)',
        'text-1': '#ffffff',
        'text-2': '#d9d9d9',
        red: '#ff6f5b',
      },
    },
  },
  plugins: [],
};
