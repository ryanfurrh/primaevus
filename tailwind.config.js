const { fontFamily } = require('tailwindcss/defaultTheme')

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
        ibm: ['var(--font-ibm)', ...fontFamily.mono],
        marvin: ['var(--font-marvin)', ...fontFamily.sans],
        plexSans: ['var(--font-plex-sans)', ...fontFamily.sans],
        orbitron: ['var(--font-orbitron)', ...fontFamily.sans],
        archivo: ['var(--font-archivo)', ...fontFamily.sans]
      },
      typography: {
        DEFAULT: {
          css: {
            WebkitFontSmoothing: 'none',
          },
        },
      },
      colors: {
        'sand': {
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
          1000: "#23201b"
        },
      },
      imageRendering: {
        pixelated: {
          '-webkit-optimize-contrast': 'none',
          '-webkit-interpolation-mode': 'nearest-neighbor',
          'image-rendering': 'pixelated',
        },
      },
      screens: {
        'xs': '450px',
      },
    },
  },
  variants: {
    imageRendering: ['responsive'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}