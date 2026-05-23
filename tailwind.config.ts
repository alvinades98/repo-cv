import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        magenta: {
          DEFAULT: "#FF2D78",
          50: "#ffeef3",
          100: "#ffd9e6",
          200: "#ffb3cd",
          300: "#ff80ab",
          400: "#ff4d89",
          500: "#FF2D78",
          600: "#e61a5f",
          700: "#cc1454",
          800: "#990f3f",
          900: "#660a2a",
        },
        "cyan-neon": {
          DEFAULT: "#00F5FF",
          50: "#e6feff",
          100: "#ccfdff",
          200: "#99fbff",
          300: "#66f8ff",
          400: "#33f6ff",
          500: "#00F5FF",
          600: "#00c4cc",
          700: "#009399",
          800: "#006266",
          900: "#003133",
        },
        "purple-neon": {
          DEFAULT: "#9B30FF",
          50: "#f3e6ff",
          100: "#e6ccff",
          200: "#cc99ff",
          300: "#b366ff",
          400: "#9933ff",
          500: "#9B30FF",
          600: "#7c26cc",
          700: "#5d1d99",
          800: "#3e1366",
          900: "#1f0a33",
        },
      },
      fontFamily: {
        display: ["'Dela Gothic One'", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        heading: ["'Bebas Neue'", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "gradient-shift": "gradient-shift 6s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out -3s infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "glitch-skew": "glitch-skew 4s infinite steps(2, end)",
        "scroll-down": "scroll-down 2s infinite",
        "border-glow": "border-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
