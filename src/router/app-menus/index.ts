/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-30 14:47:00
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-30 14:48:37
 * @FilePath: \arcro-vue\src\router\routes\app-menus\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { appRoutes, appExternalRoutes } from '../routes/index';

const mixinRoutes = [...appRoutes, ...appExternalRoutes];

const appClientMenus = mixinRoutes.map((el) => {
  const { name, path, meta, redirect, children } = el;
  return {
    name,
    path,
    meta,
    redirect,
    children,
  };
});

export default appClientMenus;
