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
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#d47632",

          secondary: "#29256f",

          accent: "#e5e7eb",

          neutral: "#2c2e33",

          "base-100": "#f3f4f6",

          "base-200": "#e5e7eb",

          "base-300": "#F9FAFB",

          info: "#7dd3fc",

          success: "#4ade80",

          warning: "#fde68a",

          error: "#f43f5e",

          deafult: "#1f2937",
        },
        dark: {
          primary: "#29256f",

          secondary: "#d47632",

          accent: "#00ce6a",

          neutral: "#f3f4f6",

          "base-100": "#2c2e33",

          info: "#0073d1",

          success: "#4cb333",

          warning: "#9e5b00",

          error: "#ff7475",

          default: "#f3f4f6",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
