module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      FontFace: {
        quicksand: "'Quicksand', sans-serif",
        pacifico: "'Pacifico', cursive",
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
