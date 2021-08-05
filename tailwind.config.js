const colors = require ('tailwindcss/colors')
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
      fontFamily :{
        body:["Epilogue" ]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

