/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      fontFamily: {
        headings: "Nunito",
        text: "Open Sans",
      },
    },
  },
  plugins: [],
};
