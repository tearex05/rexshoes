/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-x": "#FF0000",
        "custom1": "#DFBAB1",
        "custom2": "#EA3D8C"
      }
    },
  },
  plugins: [],
}
