/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        productShadow: "0 14px 30px 0 rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
