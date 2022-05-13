module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        asd: '0 1px 2px 0 rgb(205, 92, 92)',
      },
      colors: {
        colorf: '#d1ae3d',
      },
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
      rotate: {
        135: '135deg',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
      divideStyle: ['hover', 'focus'],
      borderRadius: ['hover', 'focus'],
      transitionDuration: ['hover', 'focus'],
    },
  },
  plugins: [],
};
