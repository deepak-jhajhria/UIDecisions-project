/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000000",
          light: "#676767",
          dark: "#313131",
          lighter: "#131313",
        },
        secondary: {
          DEFAULT: "#ffffff",
          light: "#E6E6E6",
          dark: "#ffffff",
        },
        tertiary: {
          DEFAULT: "#855AFF",
        },
        orange: "#FE6C4C",
        yellow: "#F7C33D",
      },
      fontSize: {
        "custom-3xl": "38px",
      },
      backgroundImages: {
        darklight: "linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_100%)"
      }
    },
  },
  plugins: [],
}