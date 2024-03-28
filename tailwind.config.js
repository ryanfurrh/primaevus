const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["var(--font-ibm)", ...fontFamily.mono],
        marvin: ["var(--font-marvin)", ...fontFamily.sans],
        plexSans: ["var(--font-plex-sans)", ...fontFamily.sans],
        archivo: ["var(--font-archivo)", ...fontFamily.sans],
        jet: ["var(--font-jet)", ...fontFamily.mono],
      },
      typography: {
        DEFAULT: {
          css: {
            WebkitFontSmoothing: "none",
          },
        },
      },
      width: {
        18: "72px",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        sand: {
          50: "#f7f5f3",
          100: "#efece7",
          200: "#dfd9cf",
          300: "#cfc5b8",
          400: "#bfb2a0",
          500: "#af9f88",
          600: "#8c7f6d",
          700: "#695f52",
          800: "#454037",
          900: "#353029",
          1000: "#23201b",
        },
        ink: {
          800: "#262626",
          900: "#101010",
        },
        neptune: {
          50: "#DBEDEA",
          100: "#CDE6E2",
          200: "#B2D8D2",
          300: "#97CBC3",
          400: "#7CBDB3",
          500: "#57AA9D",
          600: "#43867B",
          700: "#306059",
          800: "#1E3B36",
          900: "#0B1614",
        },
        bone: {
          50: "#E4E5E4",
        },
        pale: {
          100: "#D6C3BA",
        },
      },
      imageRendering: {
        pixelated: {
          "-webkit-optimize-contrast": "none",
          "-webkit-interpolation-mode": "nearest-neighbor",
          "image-rendering": "pixelated",
        },
      },
      screens: {
        xs: "450px",
      },
    },
  },
  variants: {
    imageRendering: ["responsive"],
  },
  plugins: [require("@tailwindcss/typography", "@tailwindcss-image-rendering")],
  corePlugins: {
    imageRendering: false,
  },
  darkMode: "class",
};
