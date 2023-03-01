/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
          'laptop': '1024px',
      },
      keyframes: {
        navBar: {
          '0%': { transform: 'translateY(-5%)' },
          '100%': { transform: 'translateY(0)' },
        },
        sideIn: {
          '0%':{
            transform: 'translateY(-2%)',
            opacity: 0
          },
          '100%':{
            transform: 'translateY(0)',
            opacity: 1
          }
        }
      },
      animation: {
        navBar: 'navBar .5s ease-in-out',
        sideIn: 'sideIn .6s ease-in-out'
      },
      fontFamily:{
          Karla: ['Karla','sans-serif']
      },
      colors:{
        'light-coffee': "#C89F94",
        'ch-orange': '#fb923c'
      },
      spacing:{
        '17.666667%;' : '17.666667%;'
      }
    },
  },
  plugins: [],
}
