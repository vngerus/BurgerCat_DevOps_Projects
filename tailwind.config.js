/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orangeBG': '#FD6A02',
        'orangeBG2': '#EB9605',
      },
    },
  },
  plugins: [],
}
