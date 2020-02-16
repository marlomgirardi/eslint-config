module.exports = {
  env: {
    node: true,
  },

  rules: {
    // Require all requires be top-level
    'global-require': 'error',

    // Disallow use of the Buffer() constructor
    'no-buffer-constructor': 'error',

    // Disallow use of new operator with the require function
    'no-new-require': 'error',

    // Disallow string concatenation with __dirname and __filename
    'no-path-concat': 'error',
  },
};
