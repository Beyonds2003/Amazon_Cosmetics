/** @type {import('tailwindcss').Config} */

const { callbackify } = require('util');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        m2xl: {max: '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        mxl: {max: '1200px'},
        // => @media (max-width: 1279px) { ... }
  
        mlg: {max: '1080px'},
        // => @media (max-width: 1023px) { ... }
  
        mmd: {max: '870px'},
        // => @media (max-width: 767px) { ... }

        mmmd: {max: '760px'},
  
        msm: {max: '700px'},
        // => @media (max-width: 639px) { ... }
        mssm: {max: '500px'}
      },
      colors: {
        'theme': '#FCDD61'
      },
      height: {
        'fix': 'calc(100vh-56px)'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
