/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true
    },

    screens: {
      'sm': '393px',
      'md': '768px',
      'xl': '1920px'
    },

    extend: {
      colors: {
        green: "#58B763"
      }
    },
  },
  plugins: [],
}