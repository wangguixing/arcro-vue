/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-06 16:35:08
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-30 18:18:52
 * @FilePath: \myPages\commitlint.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  /**
   *  提交前，代码检查，配置
   */
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
