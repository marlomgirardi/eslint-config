module.exports = {
  rules: {
    // Disallow the catch clause parameter name being the same as a variable in the outer scope
    // airbnb: off
    'no-catch-shadow': 'warn',

    // Disallow early use for variables and classes
    // airbnb: ['error', { functions: true, classes: true, variables: true }]
    'no-use-before-define': ['warn', 'nofunc'],
  },
};
