/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        zalando: ['Zalando Sans Expanded', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        noto: ['Noto Sans Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
