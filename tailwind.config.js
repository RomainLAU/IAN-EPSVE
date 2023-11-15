/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                calibri: ['Calibri', 'sans-serif'],
            },
        },
        colors: {
            DarkBlue: '#162061',
            LightBlue: '#3ECADD',
        },
    },
    plugins: [],
};
