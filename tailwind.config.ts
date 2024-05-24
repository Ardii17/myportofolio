import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      rotate: {
        30: "30deg",
      },
      width: {
        0.95: "93%",
        0.07: "7%",
        0.31: "31%",
      },
      height: {
        0.4: "40%",
        100: "32rem",
      },
      translate: {
        19: "4.5rem",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      padding: {
        18: "4.5rem",
      },
      margin: {
        30: "7.2rem",
      },
      borderWidth: {
        sm: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
