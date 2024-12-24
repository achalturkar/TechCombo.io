/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  
  theme: {
    extend: {


            backgroundImage: {
        // 'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0,0,0,0.8)),url('/images/world.jpg')",
      },
      fontFamily:{
        poppins : ["Poppins"],
        noto:["Noto Sans", "serif"],
        inter:["Inter"]

      }
    },
  },
  plugins: [],
}

