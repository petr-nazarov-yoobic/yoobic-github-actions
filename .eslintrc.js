module.exports = {
  // Global ESLint Settings
  // =================================
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  globals: {
    assert: true,
    browser: true,
    expect: true,
    by: true,
    protractor: true,
    sinon: true,
    xdescribe: true,
    xit: true
  },
  // ===========================================
  // Set up ESLint for .js / .jsx files
  // ===========================================
  parserOptions: {
    //ecmaVersion: 2020
    ecmaVersion: 13,
    sourceType: 'module'
  },

  // Plugins
  // =================================
  plugins: ['filename-rules', 'folders-rules'],

  // Extend Other Configs
  // =================================
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
    //'plugin:prettier/recommended'
    // Disable rules that conflict with Prettier
    // !!! Prettier must be last to override other configs !!!!
  ],
  rules: {
    'prefer-template': 'error',
    'arrow-body-style':  ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'no-var': 'error',
    quotes: ['error', 'single'],
    'semi': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }],
    'max-len': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
        caseSensitive: true
      }
    ],
    'no-unused-vars': 'error',
    'filename-rules/match': [2, /^([.a-z0-9]+-)*[.a-z0-9_]+(?:\..*)?$/],
    'folders-rules/match-regex': [2, '^([a-z0-9]+-)*[a-z0-9_]+?$|__mocks__'],
    'max-classes-per-file': ['error', 1],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.spec.ts', '**/*.spec.js', './terraform/**/*.js', './pulumi/**/*.js'],
        optionalDependencies: false,
        peerDependencies: true
      }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'internal', 'object', 'type'],
        warnOnUnassignedImports: true,
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false
        }
      }
    ],
    'no-warning-comments': ['warn', { terms: ['todo', 'fixme', 'any other term'], location: 'anywhere' }]
  },
  overrides: [
    // Match TypeScript Files
    // =================================
    {
      files: ['**/*.{ts,tsx}'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        sourceType: 'module'
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],
      env: {
        node: true,
        jest: true
      },
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
};
