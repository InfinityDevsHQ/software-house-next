import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        accent: {
          DEFAULT: "#E2E8F0",
          foreground: "#334155",
          light: "#F8FAFC",
          dark: "#020617",
        },
        muted: {
          DEFAULT: "#CBD5E1",
        },
        primary: {
          DEFAULT: "#0059FF",
          dark: "#003699",
          medium: "#3B82F6",
        },
        secondary: {
          DEFAULT: "#FBBF24",
        },
      },
      spacing: {
        100: "31.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
