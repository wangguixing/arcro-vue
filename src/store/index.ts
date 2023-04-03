/*
 * @Author: wangguixing
 * @Date: 2023-03-30 18:08:10
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-01 15:03:22
 * @FilePath: \src\store\index.ts
 * @Description: 注明出处即可
 * Copyright 2023 wangguixing, All Rights Reserved.
 * 2023-03-30 18:08:10
 */

import { createPinia } from 'pinia';
import useAppStore from './app';
import useUserStore from './user';
import useTabBarStore from './tab-bar';

const pinia = createPinia();

export { useAppStore, useUserStore, useTabBarStore };
export default pinia;
