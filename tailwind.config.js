/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/globals.css"
  ],
  theme: {
    extend: {
      colors: {
        'black': "#000000",
        'white': "#ffffff",
        'haze' : "#aba0f0",
        'pink' : "#ff94a6",
        'purple' : "#8247e5",
        'bubblegum' : "#e03dc1"
      },
      backgroundImage: {
        'gradient-1' : 'linear-gradient(170deg, rgba(87,23,75,1) 0%, rgba(13,4,11,1) 25%, rgba(35,10,30,1) 75%, rgba(87,23,75,1) 100%)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
