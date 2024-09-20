module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#003135',
        'secondary': '#024950',
        'accent': '#964734',
        'highlight': '#0fA4AF',
        'background': '#AFDDE5'
    },
  },
},
  variants: {
    extend: {},
  },
  plugins: [],
}
