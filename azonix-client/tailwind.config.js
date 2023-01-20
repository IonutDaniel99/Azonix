/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                darkBlue: "#16181a",
            },
            keyframes: {
                wave: {
                    "0%": { opacity: 1 },
                    "50%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
            animation: {
                errorEaseIn: "wave 2s linear infinite",
            },
        },
    },
    plugins: [],
};
