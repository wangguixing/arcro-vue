/*
 * @Author: wangguixing
 * @Date: 2023-03-06 16:35:08
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-01 14:56:18
 * @FilePath: \commitlint.config.js
 * @Description: 注明出处即可
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2023-03-06 16:35:08
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'add',
        'feat',
        'fix',
        'update',
        'change',
        'docs',
        'test',
        'release',
        'merge',
        'chore',
        'create',
        'remove',
        'styles',
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'body-empty': [2, 'always'],
    'footer-empty': [2, 'always'],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
};
