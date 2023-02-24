/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'loginpage': "url('/images/bgimage.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
