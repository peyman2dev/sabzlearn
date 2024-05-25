/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
        "primary": "#4318FF",
        "dark": "#273142",
        "dark-sm": "#111C44",
        "light": "#A3AED0"
      }
    },
  },
  plugins: [
    // Adding Variant for & > *, & > *:hover
    function ({ addVariant }) {
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
    }],
}

