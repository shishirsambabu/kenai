import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A12",
        "bg-2": "#0d0d18",
        cyan: "#00F0FF",
        magenta: "#FF2E97",
        violet: "#A855F7",
        "off-white": "#E5E7EB",
        muted: "#7a7f93",
      },
      fontFamily: {
        display: ["'Chakra Petch'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        body: ["Rajdhani", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
