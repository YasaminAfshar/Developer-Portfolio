/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
        special: ["var(--font-special)", ...fontFamily.sans],
        space: ["var(--font-space)", ...fontFamily.sans],
        unna: ["var(--font-unna)", ...fontFamily.sans],
        roboto: ["var(--font-roboto)", ...fontFamily.sans],
        inconsolata: ["var(--font-inconsolata)", ...fontFamily.sans],
        abel: ["var(--font-abel)", ...fontFamily.sans],
        rowdies: ["var(--font-rowdies)", ...fontFamily.sans],
        merienda: ["var(--font-merienda)", ...fontFamily.sans],
        cinzel: ["var(--font-cinzel)", ...fontFamily.sans],
        saira: ["var(--font-saira)", ...fontFamily.sans],
        mate: ["var(--font-mate)", ...fontFamily.sans],
        economica: ["var(--font-economica)", ...fontFamily.sans],
        kurale: ["var(--font-kurale)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#EFEEEE",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
        gold: "#C89502",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      screens: {
        "xsm": "510px",
        "2xsm": "550px",
        "3xsm": "610px",
        "2sm": "700px",
        "3sm": "870px",
        "1md": "770px",
        "2md": "970px",
        "1lg": "1140px",
        "2lg": "1180px",
        "3lg": "1215px",
        "4lg": "1315px",
        "5lg": "1380px",
        "1xl": "1490px",
        "1xxl": "1560px",
        "3xl": "1620px",
        "4xl": "1750px",
      },
    },
  },
  plugins: [],
});

