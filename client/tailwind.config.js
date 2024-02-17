/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SolidenTrialRegular: ["SolidenTrialRegular", "sans-serif"],
        SolidenTrialExpanded: ["SolidenTrialExpanded", "sans-serif"],
      },
    },
  },
  plugins: [],
};
