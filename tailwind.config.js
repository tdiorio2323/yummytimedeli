/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC700',
        secondary: '#D32F2F',
        accent: '#4E342E',
        background: '#F5F5F5',
        text: '#212121',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Roboto', 'serif'],
      },
    },
  },
  plugins: [],
}

