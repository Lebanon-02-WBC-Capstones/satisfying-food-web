const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'ell-back': "url('/src/images/menuWall.svg')",

      }),
      fontFamily: {
        body: ["Epilogue"]
      },
      animation: {
        'boun-slow': 'bounce 800ms 1.5 ',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

