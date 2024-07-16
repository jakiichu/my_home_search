

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ipst-ui-kit/dist/**/*.js",
    "./node_modules/ipst-ui-kit/dist/index.css",

  ],
  theme: {
    extend: {
      colors: {
        primary: "#e2b714",
        default: '#323437',
        default_accent: '#646669',
      },
    },
  },
  plugins: [],
}