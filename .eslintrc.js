module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: { jest: true },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react-native/no-inline-styles': 'off',
    'no-console': ['error'],
    'prettier/prettier': ['off', { singleQuote: true }],
    'no-underscore-dangle': 'off',
    'no-extra-boolean-cast': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    camelcase: [2, { properties: 'always' }],
    complexity: ['error', { max: 5 }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, optionalDependencies: false, peerDependencies: false },
    ],
    'import/no-unresolved': [2, { ignore: ['StoreTypes$'] }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    'react/boolean-prop-naming': [
      'error',
      {
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        message: 'It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }})',
      },
    ],
  },
};
