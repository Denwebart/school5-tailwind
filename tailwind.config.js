/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./build/*.html'],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
