/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-07 16:26:18
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-07 16:26:37
 * @FilePath: \arcro-vue\src\router\getRouteByDict.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { RouteRecordNormalized } from 'vue-router';

const routers = import.meta.glob('./config/*.ts', { eager: true });

function formatModules(_modules: any, result: RouteRecordNormalized[]) {
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default;
    if (!defaultModule) return;
    const moduleList = Array.isArray(defaultModule)
      ? [...defaultModule]
      : [defaultModule];
    result.push(...moduleList);
  });
  return result;
}

export const routes: RouteRecordNormalized[] = formatModules(routers, []);
