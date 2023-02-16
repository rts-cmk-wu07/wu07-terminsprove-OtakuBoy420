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
        inputText: "#777777",
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
      boxShadow: {
        primary: "0 0px 12px 0px #F4A88E",
      },
      backgroundImage: {
        welcome: "url('./src/assets/images/welcome-1.jpg')",
      },
      backgroundPosition: {
        centered: "60% center",
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
