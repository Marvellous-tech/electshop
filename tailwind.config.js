 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'farm': "url('/assets/farm.jpg')",
        'farmset': "url('../assets/farmset.jpg')",
        'birdwhite': "url('../assets/birdwhite.jpg')",
      }
    }
  },
  plugins: [],
}