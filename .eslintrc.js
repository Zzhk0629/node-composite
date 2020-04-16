module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
  },
  extends: 'eslint:recommended',
  rules: {
    // 强制使用一致的换行风格
    'linebreak-style': [2, 'unix'],
    //强制使用单引号
    quotes: ['error', 'single'],
    //强制不使用分号结尾
    semi: ['error', 'never'],
    'no-else-return': 'error',
    'no-useless-return': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
  },
}
