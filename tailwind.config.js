const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        "spotify-green": "#1DB954",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
