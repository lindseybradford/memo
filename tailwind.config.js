// tailwind.config.js
const plugin = require('tailwindcss/plugin')
module.exports = {
  theme: {
    extend: {
      colors: {
        black: "#2B3727",
        blue: "#D7EBEC", // bg color
        cream: "#F7F4F0",
        yellow: "#F2C94C"
      },
      lineHeight: {
        tight: "1.1",
        snug: "1.2"
      },
      fontSize: {
        "3xl": "2rem"
      },
      fontFamily: {
        mono: "Mono, SFMono-Regular, Menlo"
      }
    }
  },
  variants: {},
  corePlugins: {
    gridTemplateColumns: false
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        // bg gradient color (rgba should match primary hex above)
        ".gradient-fade-lr": {
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(215, 235, 236, 1) 100%)"
        }
      };

      addUtilities(newUtilities);
    })
  ]
};
