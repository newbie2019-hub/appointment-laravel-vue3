const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    safelist: [
        'bg-red-400',
        'bg-red-500',
        'bg-red-600',
        'bg-orange-400',
        'bg-orange-500',
        'bg-orange-600',
        'bg-blue-400',
        'bg-blue-500',
        'bg-blue-600',
        'bg-gray-400',
        'bg-gray-500',
        'bg-gray-600',
        'bg-green-400',
        'bg-green-500',
        'bg-green-600',
        'bg-violet-600',
        'bg-violet-500',
        'bg-violet-400'
    ],

    plugins: [require('@tailwindcss/forms')],
};
