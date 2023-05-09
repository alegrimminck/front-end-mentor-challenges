/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"],
      },
      colors: {
        // Theme 1
        "1-bg-main": "hsl(222, 26%, 31%)",
        "1-bg-toggle": "hsl(223, 31%, 20%)",
        "1-bg-screen": "hsl(224, 36%, 15%)",
        "1-key-first": "hsl(225, 21%, 49%)",
        "1-key-first-shadow": "hsl(224, 28%, 35%)",
        "1-key-second": "hsl(6, 63%, 50%)",
        "1-key-second-shadow": "hsl(6, 70%, 34%)",
        "1-key-third": "hsl(30, 25%, 89%)",
        "1-key-third-shadow": "hsl(28, 16%, 65%)",
        "1-text-keypad": "hsl(221, 14%, 31%)",
        "1-text-main": "hsl(0, 0%, 100%)",

        // Theme 2
        "2-bg-main": "hsl(0, 0%, 90%)",
        "2-bg-toggle": "hsl(0, 5%, 81%)",
        "2-bg-screen": "hsl(0, 0%, 93%)",
        "2-key-first": "hsl(185, 42%, 37%)",
        "2-key-first-shadow": "hsl(185, 58%, 25%)",
        "2-key-second": "hsl(25, 98%, 40%)",
        "2-key-second-shadow": "hsl(25, 99%, 27%)",
        "2-key-third": "hsl(45, 7%, 89%)",
        "2-key-third-shadow": "hsl(35, 11%, 61%)",
        "2-text-keypad": "hsl(60, 10%, 19%)",
        "2-text-main": "hsl(60, 10%, 19%)",

        // Theme 3
        "3-bg-main": "hsl(268, 75%, 9%)",
        "3-bg-toggle": "hsl(268, 71%, 12%)",
        "3-bg-screen": "hsl(268, 71%, 12%)",
        "3-key-first": "hsl(281, 89%, 26%)",
        "3-key-first-shadow": "hsl(285, 91%, 52%)",
        "3-key-second": "hsl(176, 100%, 44%)",
        "3-key-second-shadow": "hsl(177, 92%, 70%)",
        "3-key-third": "hsl(268, 47%, 21%)",
        "3-key-third-shadow": "hsl(290, 70%, 36%)",
        "3-text-keypad": "hsl(52, 100%, 62%)",
        "3-text-secondary": "hsl(198, 20%, 13%)",
        "3-text-main": "hsl(52, 100%, 62%)",
      },
    },
  },
  plugins: [],
};
