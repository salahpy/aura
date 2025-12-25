import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#9810FA",
          dark: "#8200DB",
          light: "#AD46FF",
        },
        aura: {
          pink: "#F6339A",
          purple: "#A855F7",
          fuchsia: "#E879F9",
          lavender: "#D946EF",
        },
        background: "#F9FAFB",
        sidebar: "#FFFFFF",
        text: {
          primary: "#101828",
          secondary: "#6A7282",
          muted: "#99A1AF",
        },
        border: "#E5E7EB",
        danger: "#E7000B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "aura-glow":
          "0px 10px 40px rgba(168, 85, 247, 0.3), 0px 0px 60px rgba(168, 85, 247, 0.4), 0px 0px 100px rgba(168, 85, 247, 0.2)",
        "input-focus": "0px 1px 14px 2px rgba(199, 91, 225, 0.2)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
