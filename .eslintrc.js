module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['vue'],
  rules: {
    'prettier/prettier': [
      'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'es5',
        },
    ]
  }
}
