/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
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