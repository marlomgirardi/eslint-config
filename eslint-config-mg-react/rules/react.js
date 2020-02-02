const baseStyleRules = require('@i9ws/eslint-config-i9ws-base/rules/style').rules;

const dangleRules = baseStyleRules['no-underscore-dangle'];

module.exports = {
  plugins: ['react'],

  extends: 'plugin:react/recommended',

  rules: {
    'no-underscore-dangle': [
      dangleRules[0],
      {
        ...dangleRules[1],
        allow: [...dangleRules[1].allow, '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
      },
    ],

    // Prevent multiple component definition per file
    'react/no-multi-comp': ['error', { ignoreStateless: true }],

    // Enforce our component methods order
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          'event-handlers',
          'getters',
          'setters',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          'event-handlers': ['/^_?on.+$/'],
          rendering: ['/^_?render.+$/', 'render'],
        },
      },
    ],
  },
};
