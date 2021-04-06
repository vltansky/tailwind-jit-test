// const { guessProductionMode } = require("@vltansky/tailwind");
process.env.TAILWIND_MODE = process.env.WEBPACK_DEV_SERVER === 'true' && process.argv.join(' ').indexOf('build') !== -1
    ? 'build'
    : 'watch';
module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      // enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
