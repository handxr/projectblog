module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
   
    extend: {
      colors: { 
        darkmode : '#0e1217',
        lightmode : '#FBEED9',
        lightcard : '#FDF6EA',
        darkcard: ' #1c1f26',
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
