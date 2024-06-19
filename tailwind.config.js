const { nextui } = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|modal|ripple|spinner).js"
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1300px",
    },
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        "Dana-Thin": "Dana-Thin",
        "Dana-Light": "Dana-Light",
        "Dana-Regular": "Dana-Regular",
        "Dana-Medium": "Dana-Medium",
        "Dana-Demi": "Dana-Demi",
        "Dana-Bold": "Dana-Bold",
        "Dana-ExtraBold": "Dana-ExtraBold",
        "Dana-Black": "Dana-Black",

        "En-Regular": "En-Regular",
        "En-Medium": "En-Medium"

      },
      colors: {
        "dark-900": "#121212",
        "dark-800": "#1a1a1a",
        "dark-700": "#222222",
        "dark-600": "#2a2a2a",
        "dark-500": "#333333",
        "dark-400": "#4a4a4a",
        "dark-300": "#666666",
        "dark-200": "#888888",
        "dark-100": "#aaaaaa"
      }


    },
  },
  plugins: [// Adding Variant for & > *, & > *:hover
    function ({ addVariant }) {
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
    }, nextui()],

}

