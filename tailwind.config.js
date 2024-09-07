/** @type {import('tailwindcss').Config} */
const config = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      base: "24",
    },
    extend: {
      fontFamily: {
        barlow: ['"Barlow Semi Condensed"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
        lucida: ['"Lucida Calligraphy"', "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;
