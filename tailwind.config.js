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
        'maincolor': '#8D5CC7',
        'primary-color': '#a855f7',
        'secondary-color': '#4ade80',

        'main-bg-onecolor': '#FCFAF2',

        'main-bg-light-pink': '#fcf2f6',
        'main-bg-light-blue': '#f2fafc',

        'main-green-alt1': '#F2FFFF',
        "main-pink-alt1": "#fff7f2",
        "main-pink-alt2": "#FEF1EC",


      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        AmaticSC: ['Amatic SC', "sans-serif"]
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
