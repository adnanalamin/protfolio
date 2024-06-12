/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ex2' : '"Exo 2", sans-serif'
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

