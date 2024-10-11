/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", "sans-serif"],
    },
    extend: {
      colors: {
        darkGrayBlue: "hsl(227, 12%, 61%)",
        vdarkBlue: "hsl(233, 12%, 13%)",
        paleRed: "hsl(13, 100%, 96%)",
        lightGray: "hsl(0, 0%, 98%)",
        brightRed: "hsl(12, 88%, 59%)",
        darkBlue: "hsl(228, 39%, 23%)",
      },

      screens: {
        xxmd: "900px",
        xmd: "700px",
        xsm: "402px",
      },
    },
  },
  plugins: [],
};
