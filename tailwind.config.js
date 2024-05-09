/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#FFF",
      black: "#000",
      orange: "#FF3811"
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

