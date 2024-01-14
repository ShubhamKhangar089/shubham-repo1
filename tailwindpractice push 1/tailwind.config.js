/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "my-y":"#ffde59"
      },
      spacing:{
         '100' : '100px'
      },
      width:{
       '200':"200px",
       '250':"250px"
      },
      height:{
        '200':"200px",
        '500':"500px"
      }
    },
  },
  plugins: [],
}