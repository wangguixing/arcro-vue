/*
 * @Author: wangguixing
 * @Date: 2023-04-01 00:42:41
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-01 15:35:23
 * @FilePath: \src\mock\index.ts
 * @Description: 注明出处即可
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2023-04-01 00:42:41
 */

import type { MockMethod } from 'vite-plugin-mock';
import { login, userInfo } from './data';

export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: () => {
      return login;
    },
  },
  {
    url: '/api/user/userInfo',
    method: 'get',
    response: () => {
      return userInfo;
    },
  },
] as MockMethod[];
