/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000', // The bright red brand color
        secondary: '#FFFFFF',
        'smoke-gray': '#555555',
      },
      fontFamily: {
        heading: ['"Chakra Petch"', 'sans-serif'], // Robotic/Future font
        paragraph: ['Inter', 'sans-serif'], // Clean text font
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}