/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7b1fa2',
        primaryDark: '#4a0072',
        primaryLight: '#ae52d4',
        secondary: '#311b92',
        secondaryDark: '#000063',
        secondaryLight: '#6746c3',
        primaryTextColor: '#ffffff',
        primaryTextColorDark: '#f2f2f2',
        primaryTextColorLight: '000000',
        secondaryTextColor: '#ffffff',
        secondaryTextColorDark: '#f2f2f2',
        secondaryTextColorLight: '000000',        
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

// https://material.io/design/color/the-color-system.html#color-theme-creation
// https://heroicons.com/
