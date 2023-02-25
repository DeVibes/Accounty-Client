/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                shopping: '#fb4934',
                car: '#0088FE',
                eatout: '#fabd2f',
                house: '#9d00ff',
                bodysoul: '#d3869b',
                grocery: '#b8bb26',
                income: '#0db5c7',
                transport: '#BE8D3C',
                bill: '#ebdbb2',
                gift: '#83a598',
            },
        },
    },
    plugins: [],
};
