/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //  custom colors here
        primary: '#84BD00',  
        
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        montez: ['Montez', 'cursive'],
      },
    },
  },
  plugins: [],
}