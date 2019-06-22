module.exports = {
  rules: {
    // Disallow using an async function as a Promise executor
    // TODO: review on airbnb-base next major
    'no-async-promise-executor': 'error',

    // Disallow characters which are made with multiple code points in character class syntax
    // TODO: review on airbnb-base next major
    'no-misleading-character-class': 'error',

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // TODO: review on airbnb-base next major
    'require-atomic-updates': 'error',

    // Disallow Shadowing of Restricted Names
    'no-shadow-restricted-names': 'error',
  },
};
