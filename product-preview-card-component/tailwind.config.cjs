/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        cyan: "hsl(158, 36%, 37%)",
        "dark-cyan": "hsl(158, 36%, 27%)",
        cream: "hsl(30, 38%, 92%)",
        "dark-blue": "hsl(212, 21%, 14%)",
        "grayish-blue": "hsl(228, 12%, 48%)",
      },
    },
  },
  plugins: [],
};
