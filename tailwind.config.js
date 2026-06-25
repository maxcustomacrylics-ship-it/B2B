/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff3f8",
          100: "#d0dce9",
          200: "#a3bbd4",
          300: "#759bbe",
          400: "#487aa9",
          500: "#1e5893",
          600: "#0F2744",
          700: "#0d223b",
          800: "#0a1d32",
          900: "#071829",
        },
        accent: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        background: "#ffffff",
        foreground: "#0f172a",
        muted: "#64748b",
        border: "#e2e8f0",
      },
    },
  },
  plugins: [],
};
