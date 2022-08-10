module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'vue/no-v-html': 'off',
    'comma-dangle': 'off',
    eqeqeq: 'off',
    semi: 'off',
    quotes: 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-trailing-spaces': 'error'
  }
}
