const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000001",
        lightBlue: "#00aaff",
        darkBlue: "#001f3f",
        gold: "#FFD700",
      },
      keyframes: {
        fadeInSlideUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeInSlideUp: "fadeInSlideUp 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
