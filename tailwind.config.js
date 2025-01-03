/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sereneTeal: "#1ABC9C", // Teal - Buttons, Links
        deepOcean: "#2C3E50", // Dark Blue - Text and Headers
        cloudWhite: "#F5F5F5", // Light Gray - Background
        sunsetOrange: "#F39C12", // Bright Orange - Hover Effects
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
