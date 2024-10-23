/** @type {import('tailwindcss').Config} */

const path = require(`path`);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "hsl(0, 100%, 68%)",          
        },

        neutral: {
          vdarkblue: "hsl(230, 29%, 20%)",
          dgrayishblue: "hsl(230, 11%, 40%)",
          grayishblue: " hsl(231, 7%, 65%)",
          lgrayishblue: "hsl(207, 33%, 95%)",
        }
      },

      fontFamily: {
        body: ["Poppins"],
      },


      backgroundImage: {
        'body-image': `url(${path.resolve(__dirname, 'src/assets/images/bg-intro-desktop.png')})`
      }
    },
  },
  plugins: [],
}