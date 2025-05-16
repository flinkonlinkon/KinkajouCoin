/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        openSans: ['"Open Sans"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
       animation: {
    'spin-slow': 'spin 3s linear infinite',
  },
    },
  },
  plugins: [require('daisyui'),],
}

