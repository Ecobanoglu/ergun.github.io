/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        /*
        primary: {
          50: "#effaff",
          100: "#ddf4ff",
          200: "#b4ebff",
          300: "#71ddff",
          400: "#26cdff",
          500: "#00b7fd",
          600: "#0093d9",
          700: "#0074b0",
          800: "#006391",
          900: "#035177",
          950: "#011a28",
        },
        */
        primary: colors.blue,
        secondary: colors.gray,
        danger: colors.red,
        warning: colors.orange,
        success: colors.green,
      },
      lineHeight: {
        small: "1.125",
      },
    },
  },
  plugins: [],
};
