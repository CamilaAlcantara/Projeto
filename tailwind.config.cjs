/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  
   //important: '#root',
  theme: {
   
    extend: {
      backgroundImage: {
        "logoFundo" : "url('./src/assets/foto_login.png')"
      },
  
      colors:{
        roxo:{
          400: '#8231D8',
          500: '#4F1087',
          600: '#6819BC', 
          700: '#4F1087' , 
          800: '#6819BC',
          900: '#682323BC'
        },
        cinza:{
          100: '#E5E5E5',
          200: '#A3A3A3',
          300: '#C4C4C4',
          800: '#838383',
          900: '#3F3F46',
        },
        red:{
          100: '#F22263',
          200: '#F22263'
        },
        preto:{
          800: '#3F3F46'
        }
      },
      spacing: { 
        A: '2px',
        B: '6px',
        C: '10px',
        D: '14px',
        E: '18px',
        F: '21.74px',
        G: '22px',
      },

      fontSize:{
        A: '0.5625rem /* 9px */',
        B:'0.625rem /* 10px */' 
      }
     
    },
  },
  // plugins: [
  //   require('tailwind-scrollbar'),
  // ],
}