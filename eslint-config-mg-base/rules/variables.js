const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // Disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',

    // Disallow labels that share a name with a variable
    'no-label-var': 'error',

    // Disallow specific globals
    'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals),

    // Disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // Disallow use of variables before they are defined
    'no-use-before-define': ['error', 'nofunc'],
  },
};
