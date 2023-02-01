/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./parts/**/*.{js,ts,jsx,tsx}",
    "./types/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend : {
      colors: {
        'black': "#151515",
      },
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')],
}