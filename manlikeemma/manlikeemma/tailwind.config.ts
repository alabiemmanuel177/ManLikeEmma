import type { Config } from "tailwindcss";

const config: Config = {
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
      backgroundColor: {
        "gray-20": "rgb(20,20,20)",
        "teal-blue": "rgb(45 191 212 / 0.1)",
        // "gray-25": "#252525"
        "teal-custom": "rgb(94, 212, 234)",
        "white-8": "#F8F8FA",
      },
      textColor: {
        "teal-custom": "rgb(94, 212, 234)",
      },
      borderColor: {
        "teal-custom": "rgb(94, 212, 234)",
      },
    },
  },
  plugins: [],
};
export default config;
