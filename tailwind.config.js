/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        lightBlue: "#00aaff",
        darkBlue: "#001f3f",
        gold: "#FFD700",
      },
    },
  },
  plugins: [],
};
