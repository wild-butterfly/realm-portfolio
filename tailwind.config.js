/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gamer: ['"Press Start 2P"', "system-ui", "sans-serif"],
      },
      colors: {
        magicBlue: "#00E7FF",
        neonPurple: "#C77DFF",
        darkGray: "#0D0D0D",
        itemGreen: "#00FF85",
      },
      backgroundImage: {
        'realm-gradient': 'linear-gradient(135deg, #0D0D0D 0%, #1A0033 100%)',
      },
      animation: {
        fadeIn: "fadeIn 1.2s ease-in forwards",
        float: "float 6s ease-in-out infinite",
        portalOpen: "portalOpen 2s ease-out forwards",
        twinkle: "twinkle 6s ease-in-out infinite",
        slowFloat: "slowFloat 12s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        portalOpen: {
          "0%": { transform: "scale(0)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        twinkle: {
          "0%, 100%": { opacity: 0.2 },
          "50%": { opacity: 1 },
        },
        slowFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [],
};
