module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'] ,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ['Open Sans']
      },
      gridTemplateColumns : {
        '1/5':"1fr 5 fr"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
