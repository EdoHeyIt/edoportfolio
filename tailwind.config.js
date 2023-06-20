/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        portfolio1: "url('./assets/portfolio1.png')",
        portfolio2: "url('./assets/portfolio2.png')",
        portfolio3: "url('./assets/portfolio3.png')",
      },
      colors: {
        primary: "rgb(0,0,0)",
        secondary: "rgb(255,255,255)",
        dimWhite: "rgba(255, 255, 255, 0.8)",
      },
      fontFamily: {
        roboto: ["Roboto Mono"],
      },
    },
    screens: {
      us: "360px",
      ms: "400px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
