/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "black-h": "#441061",
      "black-h-pass": "#553368",
      "white-h": "#AD72C3",
      "white-h-pass": "#553368",
      "current-pos":"#22C55E",
      "redc":"#dd3131",
      "wonc":"#E7C440",
      bg1: "#540054",
      bg2: "#bf4193",
    },
    screens: {
      xss: "440px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
    },
  },
  plugins: [],
};
