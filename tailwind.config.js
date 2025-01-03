/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik:["Rubik-Regular","sans-serif"],
        "rubik-Bold":["Rubik-Bold","sans-serif"],
        "rubik-extraBold":["Rubik-ExtraBold","sans-serif"],
        "rubik-semiBold":["Rubik-SemiBold","sans-serif"],
        "rubik-light":["Rubik-Light","sans-serif"],
        "rubik-medium":["Rubik-Medium","sans-serif"],
      },

      colors:{
        "primary": {
          300: '#0061FF',
          200: '#0061FF1A',
          100: '#0061FF0A',
        },
        black:{
          DEFAULT: '#000000',
          100:'#8C8E98',
          200:'#666876',
          300:'#191D31'
        },
        accent:{
          100: '#FBFBFD'
        },
        danger:'#F75555'
      }
    },
  },
  plugins: [],
}

