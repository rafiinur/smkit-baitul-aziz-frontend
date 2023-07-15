/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#0081C9",
      skyBlue: "#86E5FF",
      lightBlue: "#5BC0F8",
      orange: "#FC4F00",
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      lora: ["Lora", "serif"],
    },
    extend: {},
  },
  plugins: [],
}
