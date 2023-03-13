/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['"Lobster"', "cursive"],
      },
    },
  },
  plugins: [],
};
