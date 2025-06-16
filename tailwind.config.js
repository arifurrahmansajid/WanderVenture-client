/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    //   fontFamily: {
    //   'sans': ['ui-sans-serif', 'system-ui', ...],
    // }
      colors: {
        primay: '#4D869C',
        primay1: '#7AB2B2',
        back: '#EEF7FF',
      },
    },
  },
  plugins: [require('daisyui'),],
}