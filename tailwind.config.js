/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black1: "#111111",
        grey1: "#666666",
        lightGray1: "#F5F5F5",
        darkBlue: "#0256B2",
        lightBlue: "#E6EEF7",
        red1: "#E31B23",
        successGreen: "#5EC26A",
      }
    },
  },
  plugins: [],
}

