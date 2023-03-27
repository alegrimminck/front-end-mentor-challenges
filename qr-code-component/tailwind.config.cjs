/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "light-gray": "hsl(212, 45%, 89%)",
        "grayish-blue": "hsl(220, 15%, 55%)",
        "dark-blue": "hsl(218, 44%, 22%)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        xl: "1.35rem",
      },
    },
  },
  plugins: [],
};
