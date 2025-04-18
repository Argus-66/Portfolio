import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      animation: {
        "move-left": 'move-left 15s linear infinite',
        "move-right": 'move-right 15s linear infinite',
        "blink": "blink 1s step-end infinite",
        "orbit": "orbit 60s linear infinite",
        "orbit-reverse": "orbit-reverse 60s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "cosmic-orbit": "cosmic-orbit 60s linear infinite",
        "cosmic-orbit-reverse": "cosmic-orbit-reverse 60s linear infinite",
      },
      keyframes: {
        "move-left": {
          '0%': {
            transform: "translateX(0%)",
          },
          '100%': {
            transform: "translateX(-50%)",
          },
        },
        "move-right": {
          '0%': {
            transform: "translateX(-50%)",
          },
          '100%': {
            transform: "translateX(0%)",
          },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" }
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "orbit-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "cosmic-orbit": {
          "0%": { transform: "rotate(0deg) translateX(225px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(225px) rotate(-360deg)" }
        },
        "cosmic-orbit-reverse": {
          "0%": { transform: "rotate(0deg) translateX(225px) rotate(0deg)" },
          "100%": { transform: "rotate(-360deg) translateX(225px) rotate(360deg)" }
        }
      },
      rotate: {
        '30': '30deg',
        '60': '60deg',
        '75': '75deg',
      },
      scale: {
        '25': '0.25',
        '30': '0.3',
        '50': '0.5',
        '70': '0.7',
      }
    },
  },
  plugins: [],
};

export default config;
