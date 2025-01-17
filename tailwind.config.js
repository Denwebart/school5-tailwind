/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./assets/*.html'],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
