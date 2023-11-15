/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'custom-gradient': "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.5887605042016807) 100%);",
            }
        },
        colors: {
            DarkBlue: '#162061',
            LightBlue: '#3ECADD',
        },
    },
    plugins: [],
};
