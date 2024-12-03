/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'big-background': "url('/assets/images/bg.png')",
                'banner-background': "url('/assets/images/banner/figure-board.svg')",
                "gradient-button": "linear-gradient(91.47deg, #DA458F -6%, #DA34DD 113.05%)",
                "active-gradient-button": "linear-gradient(91.47deg, #D63C7A -6%, #C92AC9 113.05%)",
            },
            colors: {
                 "footer-color": "#17161A"
            }
        },
    },
    plugins: [],
};
