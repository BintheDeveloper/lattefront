module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'blob': "url('/src/asset/blob.svg')",
    },
    textShadow: {
      default: '0 2px 0 #ffffff'
    }
  },
  plugins: [
    require('tailwindcss-textShadow')
  ],
}