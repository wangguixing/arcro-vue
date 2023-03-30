/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-14 09:19:54
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-29 14:21:31
 * @FilePath: \arcro-vue\src\layout\components\contentLayout\page-layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, computed } from 'vue';
import { useTabBarStore } from '@/store';
import { RouterView } from 'vue-router';

import type { VNode } from 'vue';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

export default defineComponent({
  name: 'ContentLayout',
  setup() {
    const tabBarStore = useTabBarStore();
    const cacheList = computed(() => tabBarStore.getCacheList);
    return () => (
      <>
        <RouterView>
          {{
            default: ({
              Component,
              route,
            }: {
              Component: VNode;
              route: RouteLocationNormalizedLoaded;
            }) => {
              return (
                <transition name="fade" mode="out-in" appear>
                  {route.meta.ignoreCache ? (
                    <component is={Component} />
                  ) : (
                    <keep-alive include={cacheList}>
                      <component is={Component} />
                    </keep-alive>
                  )}
                </transition>
              );
            },
          }}
        </RouterView>
      </>
    );
  },
});
