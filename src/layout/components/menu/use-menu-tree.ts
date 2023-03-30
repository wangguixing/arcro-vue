/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-13 17:00:49
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-30 14:48:50
 * @FilePath: \arcro-vue\src\layout\components\menu\use-menu-tree.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { computed } from 'vue';
import type { RouteRecordRaw, RouteRecordNormalized } from 'vue-router';
import usePermission from '@/hooks/permission';
import { useAppStore } from '@/store';
import { deepClone } from '@/utils/utils';
import appClientMenus from '@/router/app-menus';

export default function useMenuTree() {
  const permission = usePermission();
  const appStore = useAppStore();
  const appRoute = computed(() => {
    if (appStore.menuFromServer) {
      return appStore.appAsyncMenus;
    }
    return appClientMenus;
  });
  const menuTree = computed(() => {
    const copyRouter = deepClone(appRoute.value) as RouteRecordNormalized[];
    copyRouter.sort((a: RouteRecordNormalized, b: RouteRecordNormalized) => {
      return ((a.meta.order as number) || 0) - ((b.meta.order as number) || 0);
    });
    function travel(_routes: RouteRecordRaw[], layer: number) {
      if (!_routes) return null;

      const collector: any = _routes.map((element) => {
        // no access
        if (!permission.accessRouter(element)) {
          return null;
        }

        // leaf node
        if (element.meta?.hideChildrenInMenu || !element.children) {
          element.children = [];
          return element;
        }

        // route filter hideInMenu true
        element.children = element.children.filter(
          (x) => x.meta?.hideInMenu !== true
        );

        // Associated child node
        const subItem = travel(element.children, layer + 1);

        if (subItem.length) {
          element.children = subItem;
          return element;
        }
        // the else logic
        if (layer > 1) {
          element.children = subItem;
          return element;
        }

        if (element.meta?.hideInMenu === false) {
          return element;
        }

        return null;
      });
      return collector.filter(Boolean);
    }
    return travel(copyRouter, 0);
  });

  return {
    menuTree,
  };
}
