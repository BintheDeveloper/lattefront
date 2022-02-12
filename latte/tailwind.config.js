module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          coral: '#BAC8FF'
        }
      }
    },
    backgroundImage: {
      'blob': "url('/src/asset/blob.svg')",
      'banner': "url('/src/asset/banner.svg')"
    },
    textShadow: {
      'default': '-3.5px 0 white, 0 3.5px white, 3.5px 0 white, 0 -3.5px white',
      'md': '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',
      'h2': '0 0 3px #FF0000, 0 0 5px #0000FF',
      'h1': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
   }
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded']
  }
}