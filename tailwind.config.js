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
      white: "var(--white)",
      bgwhite: "var(--bg-white)",
      "light-grey": "var(--light-grey)",
      "white-grey": "var(--white-grey)",
      "dark-grey": "var(--dark-grey)",
      text: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
      feedback: {
        green: "var(--feedback-green)",
        warning: "var(--feedback-warning)",
        error: "var(--feedback-error)",
      },
      tag: {
        mobile: "var(--tag-mobile)",
        web: "var(--tag-web)",
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
