module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "prussian-blue": "#002642",
        "claret": "#840032",
        "gamboge": "#E59500",
        "cultured": "#F7F3F3",
        "rich-black": "#02040F"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
