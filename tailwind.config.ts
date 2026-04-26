import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d946ef",
        secondary: "#a21caf",
        accent: "#fdf4ff",
        background: "#0f172a",
        foreground: "#f8fafc",
      },
    },
  },
  plugins: [],
};

export default config;
