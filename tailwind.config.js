module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#F3C614', 
        'secondary': '#353535',
      },
      height: {
        '80': '20rem',
        '100': '25rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
