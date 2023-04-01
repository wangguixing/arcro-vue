/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-30 14:40:57
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-01 15:41:41
 * @FilePath: \src\router\routes\modules\demo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { DEFAULT_LAYOUT } from '../base';
import type { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'dashboard',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  // children: [
  //   {
  //     path: 'demo',
  //     name: 'Demo',
  //     component: () => import('@/views/Demo'),
  //     meta: {
  //       locale: 'demo',
  //       requiresAuth: true,
  //       roles: ['*'],
  //     },
  //   },
  // ],
};

export default DASHBOARD;
