/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-13 17:57:25
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-13 17:59:22
 * @FilePath: \arcro-vue\src\hooks\permission.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
// import { useUserStore } from '@/store';

export default function usePermission() {
  // const userStore = useUserStore();
  return {
    accessRouter(route: RouteLocationNormalized | RouteRecordRaw) {
      return (
        !route.meta?.requiresAuth || !route.meta?.roles
        // route.meta?.roles?.includes('*') ||
        // route.meta?.roles?.includes(userStore.role)
      );
    },
    findFirstPermissionRoute(_routers: any, role = 'admin') {
      const cloneRouters = [..._routers];
      while (cloneRouters.length) {
        const firstElement = cloneRouters.shift();
        if (
          firstElement?.meta?.roles?.find((el: string[]) => {
            return el.includes('*') || el.includes(role);
          })
        )
          return { name: firstElement.name };
        if (firstElement?.children) {
          cloneRouters.push(...firstElement.children);
        }
      }
      return null;
    },
    // You can add any rules you want
  };
}
