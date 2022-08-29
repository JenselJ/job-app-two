/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/tailwind/landing-page/*.{js,jsx}'],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    extend: {
      fontFamily: {
        sans: ["Poppins"]
      }
    },
  },
  plugins: [],
  prefix: 'tw-'
}
