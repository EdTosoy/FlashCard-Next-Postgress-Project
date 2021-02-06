module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "testimonialBG": "url('/images/testimonialBG.png')",
      }),

      height: {
        "80vh": "80vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
