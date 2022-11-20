/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultConfig");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "#8B5CF6",
      secondary: "#A78BFA",
      white: "#F5F3FF",
      black: "#1F2937",
      text: {
        DEFAULT: "#1F2937",
        light: "#6C7281",
        white: "#F3F4F6",
      },
      light: {
        DEFAULT: "#C4B5FD",
        lighter: "F3F4F6",
      },
    },
    extend: {},
  },
  plugins: [],
};
