module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },

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
  },
};
