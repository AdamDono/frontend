/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',  // PowerRent blue
        secondary: '#1E293B' // Dark blue
      }
    }
  },
  plugins: []
}