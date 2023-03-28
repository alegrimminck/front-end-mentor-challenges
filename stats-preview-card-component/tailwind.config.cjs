/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(233, 47%, 7%)",
        "desaturated-blue": "hsl(244, 38%, 16%)",
        "soft-violet": "hsl(277, 64%, 61%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "lexend-deca": ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
