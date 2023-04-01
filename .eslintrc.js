/*
 * @Author: wangguixing
 * @Date: 2023-03-06 16:07:33
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-01 15:00:13
 * @FilePath: \.eslintrc.js
 * @Description: 注明出处即可
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2023-03-06 16:07:33
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    // Parser that checks the content of the <script> tag
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'browser': true,
    'node': true,
    'vue/setup-compiler-macros': true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    // Airbnb JavaScript Style Guide https://github.com/airbnb/javascript
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: path.resolve(__dirname, './tsconfig.app.json'),
      },
    },
  },
  rules: {
    'no-nested-ternary': 0,
    'no-restricted-syntax': 0,
    'prettier/prettier': 1,
    // Vue: Recommended rules to be closed or modify
    'vue/comment-directive': 0,
    'vue/require-default-prop': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/max-attributes-per-line': 0,
    // Vue: Add extra rules
    'vue/custom-event-name-casing': [2, 'camelCase'],
    'vue/no-v-text': 1,
    'vue/padding-line-between-blocks': 1,
    'vue/require-direct-export': 1,
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-explicit-any': 0,
    'import/extensions': [
      0,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-param-reassign': 0,
    'prefer-regex-literals': 0,
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
};
