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
      },
      colors: {
        dark: "#1b1b1b",
        light: "#EFEEEE",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
});

