module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#673ab7",
      secondary: "#9575cd",
      primaryDark: "#512da8",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
