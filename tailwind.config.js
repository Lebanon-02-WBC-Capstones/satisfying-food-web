const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {
        orange : colors.orange
     
      },
      width: {
        "26": "6.8rem"
      },
      height: {
        "42": "10.9rem"
      },
      backgroundImage: theme => ({
        'ell-back': "url('/src/images/menuWall.svg')",
        "about-us-bg-image": "url('/src/pages/AboutUs/About_Us.svg')"
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

