module.exports = {
  plugins: ['jsx-a11y'],

  extends: 'plugin:jsx-a11y/recommended',

  rules: {
    // Require ARIA roles to be valid and non-abstract
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
    'jsx-a11y/aria-role': ['error', { ignoreNonDom: false }],

    // Require that JSX labels use "htmlFor"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/b800f40a2a69ad48015ae9226fbe879f946757ed/docs/rules/label-has-associated-control.md
    'jsx-a11y/label-has-associated-control': ['warn', { required: { every: ['id'] } }],

    // Prohibit autoFocus prop
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md
    'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],

    // Prevent distracting elements, like <marquee> and <blink>
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md
    'jsx-a11y/no-distracting-elements': ['error', {
      elements: ['marquee', 'blink'],
    }],

    // WAI-ARIA roles should not be used to convert an interactive element to non-interactive
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md
    'jsx-a11y/no-interactive-element-to-noninteractive-role': ['error', {
      tr: ['none', 'presentation'],
    }],

    // A non-interactive element does not support event handlers (mouse and key handlers)
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
    'jsx-a11y/no-noninteractive-element-interactions': ['error', {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ],
    }],

    // WAI-ARIA roles should not be used to convert a non-interactive element to interactive
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md
    'jsx-a11y/no-noninteractive-element-to-interactive-role': ['error', {
      ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
      table: ['grid'],
      td: ['gridcell'],
    }],

    // Tab key navigation should be limited to elements on the page that can be interacted with.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md
    'jsx-a11y/no-noninteractive-tabindex': ['error', {
      tags: [],
      roles: ['tabpanel'],
    }],

    'jsx-a11y/no-onchange': 'off',

    // Enforce that DOM elements without semantic behavior not have interaction handlers
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    'jsx-a11y/no-static-element-interactions': ['error', {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ],
    }],

    // Enforce that a control (an interactive element) has a text label.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md
    'jsx-a11y/control-has-associated-label': ['error', {
      labelAttributes: ['label'],
      controlComponents: [],
      ignoreElements: [
        'audio',
        'canvas',
        'embed',
        'input',
        'textarea',
        'tr',
        'video',
      ],
      ignoreRoles: [
        'grid',
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'row',
        'tablist',
        'toolbar',
        'tree',
        'treegrid',
      ],
      depth: 5,
    }],
  },
};
