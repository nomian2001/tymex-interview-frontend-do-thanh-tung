/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'big-background': "url('/assets/images/bg.png')",
            },
        },
    },
    plugins: [],
};
