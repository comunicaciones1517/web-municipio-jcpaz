import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a5276",
          50: "#eaf2f8",
          100: "#d4e6f1",
          200: "#a9cce3",
          300: "#7fb3d3",
          400: "#5499c9",
          500: "#2980b9",
          600: "#1a5276",
          700: "#154360",
          800: "#0d2d40",
          900: "#061820",
        },
        secondary: {
          DEFAULT: "#1e8449",
          50: "#eafaf1",
          100: "#d5f5e3",
          200: "#abebc6",
          300: "#82e0aa",
          400: "#58d68d",
          500: "#2ecc71",
          600: "#1e8449",
          700: "#196f3d",
          800: "#145a32",
          900: "#0d3b22",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
