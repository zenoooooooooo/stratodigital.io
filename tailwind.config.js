/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '0px',   
        'md': '860px',   
        'lg': '1030px',  
        'xl': '1280px',  
      }
    },
    fontFamily: {
        'oswald': 'Oswald',
        'montserrat': 'Montserrat, sans-serif'
    }
  },
  plugins: [],
}