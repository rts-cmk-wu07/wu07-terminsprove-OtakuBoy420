/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4A88E",
        gray: "#E4E4E4",
        white: colors.white,
        black: colors.black,
        inputBg: "#f1f0f5",
        inputText: "#acacac",
      },
      fontFamily: {
        sans: ["Arial", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: "22px",
        lg: "28px",
        xl: "50px",
        "2xl": "62px",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    function ({ addBase }) {
      addBase({
        html: { fontSize: "22px" },
      });
    },
  ],
};
