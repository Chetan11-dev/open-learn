module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or false
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        success: '#13aa52',
        error: '#dc3545',
        'gray-soft': '#383e48',
        'white-soft': '#eaecf2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
