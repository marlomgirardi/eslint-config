module.exports = {
  env: {
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },

  plugins: ['import'],

  rules: {
    // Prevent imports to folders in relative parent paths
    // Bug: https://github.com/benmosher/eslint-plugin-import/issues/1291
    'import/no-relative-parent-imports': 'off',

    // Do not allow a default import name to match a named export
    // airbnb: error
    'import/no-named-as-default': 'warn',

    // Reports use of a deprecated name, as indicated by a @deprecated
    // airbnb: off
    'import/no-deprecated': 'warn',

    // Forbid Webpack loader syntax in imports
    'import/no-webpack-loader-syntax': 'error',

    // Prevent unassigned imports
    // importing for side effects is perfectly acceptable, if you need side effects.
    // airbnb: off
    'import/no-unassigned-import': 'warn',

    // Reports modules without any exports, or with unused exports
    // TODO: review on airbnb-base next major
    'import/no-unused-modules': [
      'error',
      {
        ignoreExports: [],
        missingExports: true,
        unusedExports: true,
      },
    ],
  },
};
