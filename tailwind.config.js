const { transform } = require('next/dist/build/swc');


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
     }, 
      // screens: {
      //   sm: "640px",
      //   md: "768px",
      //   lg: "1024px",
      //   xl: "1280px",
      // },
      fontFamily: {
        jetBrainsMono: "var(--font-jetbrainsMono)",
        oswald: "var(--font-oswald)",
        poppins: "var(--font-poppins)",
        Plaster: "var(--font-Plaster)",
        playfair: "var(--font-playfairDisplaySC)",

      },
    
    extend: {
      backgroundImage: {
        'banner': "url('../public/images/skills/codeurCafe.jpg')",
      },

      keyframes: {
        "slide-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-up": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
      },


      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-in-out",
        "slide-up": "slide-up 0.5s ease-in-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}