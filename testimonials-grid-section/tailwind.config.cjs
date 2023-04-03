/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        // "Verified Graduate" has the same color as the person's name with 50% opacity
        // Review paragraphs inside the quotations have the same color as well, but are at 70% opacity

        // primary
        "moderate-violet": "hsl(263, 55%, 52%)",
        "dark-grayish-blue": "hsl(217, 19%, 35%)",
        "dark-blackish-blue": "hsl(219, 29%, 14%)",

        // neutral
        "light-gray": "hsl(0, 0%, 81%)",
        "light-grayish-blue": "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
