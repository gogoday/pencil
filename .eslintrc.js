module.exports = {
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended', 'prettier', 'prettier/@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error', // 被prettier标记的地方抛出错误信息
    '@typescript-eslint/no-require-imports': 'off', // 禁用no-require-imports
    'import/first': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.ts'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-undef': 'off', // 允许interface export
      },
    },
  ],
  env: {
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
};
