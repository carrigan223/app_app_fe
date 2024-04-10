import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-bg": "#f9f9f9",
        "dark-bg": "#1a1a1a",
        "light-text": "#333",
        "dark-text": "#f9f9f9",
        "light-border": "#ddd",
        "dark-border": "#333",
      }
      
    },
  },
  plugins: [],
};
export default config;
