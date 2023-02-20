/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: "Inter",
      boxShadow: {
        'custom': '0 16px 50px -20px #fecdd3',
        'timelinecard': '1px 1px 2px 2px #fecaca, 0 1px 2px -2px #fecaca'
      },
      fontSize: {
        'xxs': '9px'
      }
    },
  },
  plugins: [],
}