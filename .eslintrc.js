module.exports = {
  parserOptions: {
    ecmaVersion: 2019
  },
  env: {
    browser: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'no-console': 'off',
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'func-names': 'off'
  }
}
