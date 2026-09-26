import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        encre: "#12213A",
        corail: "#E8623D",
        creme: "#FBF6EF",
      },
      fontFamily: {
        titre: ["var(--font-titre)"],
        corps: ["var(--font-corps)"],
      },
    },
  },
  plugins: [],
};
export default config;
