module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

const plugin = require('tailwindcss/plugin');
module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(function ({ addComponents }) {
      const rounded = {
        '.rounded-l-full': {
          padding: '.5rem 6rem 5rem 7rem',
          margin: '.10rem 0 10rem 50rem',
          borderRadius: '.25rem',
          fontWeight: '300',
          backgroundColor: '#DBEAFE',
          color: '#000',
          Animation: 'slidein-r',
        },

        '.rounded-r-full': {
          padding: '.5rem 7rem 5rem 6rem',
          margin: '.10rem 50rem 10rem 0',
          borderRadius: '.25rem',
          fontWeight: '300',
          backgroundColor: '#BFDBFE',
          color: '#000',
        },
      };

      addComponents(rounded);
    }),
  ],
};
