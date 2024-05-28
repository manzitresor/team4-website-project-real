/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit']
      },
      colors: {
        'secondary': "#00672E",
        'primary': "#EFECEA",
        'black': "#000",
      }
    },
  },
  plugins: [],
}

