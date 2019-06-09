module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'flowtype',
    'react',
    'react-hooks'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/forbid-prop-types': 0,
    'template-curly-spacing' : 'off',
    'indent' : 'off',
    'react/prop-types': 'off',
    'mouse-events-have-key-events': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off'
  },
};
