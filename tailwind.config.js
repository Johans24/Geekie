/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#ffab00",
        "primary-clear": "rgb(255, 171, 0,.5)",
        "primary-dark": "#b57900",
        grey: "#e0e0e0",
        "dark-grey": "#424242"
      }
    },
  },
  plugins: [],
}
