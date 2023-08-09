/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    colors: {
      primary: "var(--primary)",
      gray: "var(--gray)",
      "gray-dark2": "var(--gray-dark2)",
      "feedback-warning": "var(--feedback-warning)",
      black: "var(--black)",
      background: "var(--background)",
      white: "var(--white)",
      error: "var(--error)",
      active: {
        primary: "var(--active-primary)",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
