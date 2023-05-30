/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'h-color': '#8BD6D6',
        's-color': '#FFC3A0',
        'bg-color': '#fffff8',
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],

        "great-vibes": ['Great Vibes', "sans-serif"]
      },
    },
    screens: {
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
}
