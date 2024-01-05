/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-gold': '#FFBD39',
        'custom-ash':'5A5A5A'
        
      },
      textColor: {
        'custom-gold': '#FFBD39',
        'custom-ash':'5A5A5A'
        
      },
      fontFamily: {
        pops: ["Poppins", "sans-serif"],
        ruby: ["Rubik Doodle Shadow", "serif"],
      },
    },
  },
  plugins: [],
};
