/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      color: {
        secondary: '#64748b'
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
};

