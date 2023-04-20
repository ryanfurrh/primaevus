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
        mono: ['var(--font-plex)']
      },
      typography: {
        DEFAULT: {
          css: {
            WebkitFontSmoothing: 'none',
          },
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