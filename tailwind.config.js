/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.pug"],
  theme: {
    extend:     
    {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'header': '#F6F6F6',
        'pinkalpha': "#F22A69",
        'pinkblack': '#400000',
        'beach': '#EEE0B6',
        'cacao':'#5A4E27'
      },
    },
  },
  plugins: [],
}