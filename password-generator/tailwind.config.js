/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backdropBlur: {
          xs: '2px',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }
  