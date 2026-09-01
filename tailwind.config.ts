import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0B1F3A",
          900: "#122A4E",
          800: "#1B3A66",
          700: "#264C82",
        },
        gold: {
          600: "#B08D3E",
          500: "#C6A253",
          100: "#F3EAD3",
        },
        ink: "#14181F",
        paper: "#F7F7F5",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
