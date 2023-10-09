// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors: {
        'altus-navy': '#0A1F38',
        'altus-green': '#3B8448'
      },
      opacity: {
        '07': '0.07',
      },
      screens: {
        desktop: '1024px',
        tablet: '768px',
        mobile: '480px'
      },
      fontFamily: {
        display: ['GT Walsheim', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
        'gt-walsheim': ['GT Walsheim', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        base: ['14px']
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }