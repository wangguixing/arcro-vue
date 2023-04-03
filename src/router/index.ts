/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-05 16:08:45
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-03 20:16:51
 * @FilePath: \src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';
import { REDIRECT_MAIN, NOT_FOUND_ROUTE } from './routes/base';
import { appRoutes } from './routes/index';
import { createRouteGuard } from './guard/index';

NProgress.configure({ showSpinner: false }); // NProgress Configuration
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/views/Demo'),
      meta: {
        requiresAuth: false,
      },
    },
    ...appRoutes,
    REDIRECT_MAIN,
    NOT_FOUND_ROUTE,
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

createRouteGuard(router);

export default router;
