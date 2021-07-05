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
        '.container-r': {
          padding: '.5rem 6rem 5rem 7rem',
          margin: '.8rem 0 8rem 50rem',
          color: '#343A40',
        },

        '.container-l': {
          padding: '.5rem 7rem 5rem 6rem',
          margin: '.8rem 50rem 8rem 0',
          color: '#343A40',
        },
      };

      addComponents(rounded);
    }),
  ],
};
