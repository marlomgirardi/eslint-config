module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['import'],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx'],
    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },

  rules: {
    // Ensure imports point to files/modules that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

    // Ensure named imports coupled with named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
    'import/named': 'error',

    // Disallow invalid exports, e.g. multiple defaults
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': 'error',

    // Do not allow a default import name to match a named export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'warn',

    // Warn on accessing default export property names that are also named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'error',

    // Reports use of a deprecated name, as indicated by a @deprecated
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    'import/no-deprecated': 'warn',

    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // paths are treated both as absolute paths, and relative to process.cwd()
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'test/**', // Tape, common npm pattern
        'tests/**', // Also common npm pattern
        'spec/**', // Mocha, rspec-like pattern
        '**/__tests__/**', // Jest pattern
        '**/__mocks__/**', // Jest pattern
        'test.{js,jsx}', // Repos with a single test file
        'test-*.{js,jsx}', // Repos with multiple top-level test files
        '**/*{.,_}{test,spec}.{js,jsx}', // Tests where the extension or filename suffix denotes that it is a test
        '**/jest.config.js', // Jest config
        '**/jest.setup.js', // Jest setup
        '**/vue.config.js', // Vue-cli config
        '**/webpack.config.js', // Webpack config
        '**/webpack.config.*.js', // Webpack config
        '**/rollup.config.js', // Rollup config
        '**/rollup.config.*.js', // Rollup config
        '**/gulpfile.js', // Gulp config
        '**/gulpfile.*.js', // Gulp config
        '**/Gruntfile{,.js}', // Grunt config
        '**/protractor.conf.js', // Protractor config
        '**/protractor.conf.*.js', // Protractor config
        '**/karma.conf.js', // Karma config
      ],
      optionalDependencies: false,
    }],

    // Forbid mutable exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

    // Disallow AMD require/define
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    'import/no-amd': 'error',

    // Disallow non-import statements appearing before import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': 'error',

    // Disallow duplicate imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
    }],

    // Enforce a convention in the order of require() / import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index'],
    }],

    // Require a newline after the last import/require in a group
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',

    // Require modules with a single export to use a default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'error',

    // Forbid import of modules using absolute paths
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'error',

    // Forbid require() calls with expressions
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'error',

    // Forbid Webpack loader syntax in imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'error',

    // Prevent importing the default as if it were named
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    'import/no-named-default': 'error',

    // Forbid a module from importing itself
    // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-self-import.md
    'import/no-self-import': 'error',

    // Forbid cyclical dependencies between modules
    // https://github.com/benmosher/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
    'import/no-cycle': ['error', { maxDepth: Infinity }],

    // Ensures that there are no useless path segments
    // https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['error', { commonjs: true }],
  },
};
