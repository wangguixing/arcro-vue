/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-07 16:12:26
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-07 16:22:06
 * @FilePath: \arcro-vue\src\router\config\demo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Demo from '@/views/demo';
import type { routeConfigType } from './types';

export const demo: routeConfigType = {
  path: '/',
  name: 'home',
  component: Demo,
};
