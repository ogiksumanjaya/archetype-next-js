/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    screens: {
      '2xl': {'max': '1400px'},
      'xl': {'max': '1200px'},
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'sm': {'max': '576px'},
    }
  },
  plugins: [],
}
