
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'ell-back': "url('/src/images/menuWall.svg')",
        
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
