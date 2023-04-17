/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        button: "0 0 35px 0 hsl(150, 100%, 66%)",
      },
    },
    colors: {
      "blue-100": "hsl(217, 19%, 38%)",
      "blue-600": "hsl(217, 19%, 24%)",
      "blue-800": "hsl(218, 23%, 16%)",
      "blue-50": "hsl(193, 38%, 86%)",
      "green-500": "hsl(150, 100%, 66%)",
    },
  },
  plugins: [],
};
