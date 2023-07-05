/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tall: { raw: "(min-height: 700px)" },
        wideShort: { raw: "(min-width: 640px) and (max-height: 700px)" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
