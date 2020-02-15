module.exports = {
  extends: 'plugin:jsx-a11y/recommended',

  rules: {
    // Require that JSX labels use "htmlFor"
    'jsx-a11y/label-has-associated-control': ['warn', { required: { every: ['id'] } }],

    // Disallow the need of the onClick be accompanied by onKeyUp/onKeyDown/onKeyPress
    'jsx-a11y/click-events-have-key-events': 'warn',
  },
};
