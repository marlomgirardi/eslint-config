module.exports = {
  rules: {
    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // TODO: review on airbnb-base next major
    'require-atomic-updates': 'error',

    // Disallow Shadowing of Restricted Names
    'no-shadow-restricted-names': 'error',
  },
};
