/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
        special: ["var(--font-special)", ...fontFamily.sans],
        space: ["var(--font-space)", ...fontFamily.sans],
        unna: ["var(--font-unna)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#EFEEEE",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
    },
  },
  plugins: [],
};

