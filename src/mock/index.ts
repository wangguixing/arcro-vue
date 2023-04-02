/*
 * @Author: wangguixing
 * @Date: 2023-04-01 00:42:41
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-01 23:46:45
 * @FilePath: \src\mock\index.ts
 * @Description: 注明出处即可
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2023-04-01 00:42:41
 */

import type { MockMethod } from 'vite-plugin-mock';
import { login, userInfo, menu } from './data/index';

export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: () => {
      return login;
    },
  },
  {
    url: '/api/user/info',
    method: 'post',
    response: () => {
      return userInfo;
    },
  },
  {
    url: '/api/user/menu',
    method: 'post',
    response: () => {
      return menu;
    },
  },
  {
    url: '/api/user/logout',
    method: 'post',
    response: () => {
      return {
        code: 1,
        data: null,
        msg: '操作成功',
        success: true,
      };
    },
  },
] as MockMethod[];
