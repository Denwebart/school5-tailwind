/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./build/*.html'],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            fontFamily: {
                headings: 'Nunito',
            },
        },
    },
    plugins: [],
};
