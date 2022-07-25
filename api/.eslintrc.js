module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-unused-vars': 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'no-promise-executor-return': 'off',
    'linebreak-style': ['error', 'windows'],
    camelcase: 'off',
    'no-console': 'off',
  },
};
