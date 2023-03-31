/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-30 14:27:06
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-04-01 01:24:16
 * @FilePath: \arcro-vue\src\router\routes\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { RouteRecordNormalized } from 'vue-router';
import { formatGlobModules } from '@/utils/importMetaGlob';

const modules = import.meta.glob('./modules/*.ts', { eager: true });
const externalModules = import.meta.glob('./externalModules/*.ts', {
  eager: true,
});

export const appRoutes: RouteRecordNormalized[] = formatGlobModules(
  modules,
  [] as RouteRecordNormalized[]
);

export const appExternalRoutes: RouteRecordNormalized[] = formatGlobModules(
  externalModules,
  [] as RouteRecordNormalized[]
);
