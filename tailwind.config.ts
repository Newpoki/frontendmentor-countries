import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      grey100: "hsl(0, 0%, 98%)",
      grey500: "#C4C4C4",
      grey700: "#B2B2B2",
      slate500: "#2B3844",
      slate700: "#202C36",
    },
    extend: {}
  },
  plugins: [],
};
export default config;
