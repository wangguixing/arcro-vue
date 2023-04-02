/*
 * @Author: wangguixing
 * @Date: 2023-03-30 18:08:10
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-02 23:28:18
 * @FilePath: \src\layout\components\contentLayout\page-layout.tsx
 * @Description: 注明出处即可
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2023-03-30 18:08:10
 */

import {
  defineComponent,
  computed,
  Transition,
  KeepAlive,
  createVNode,
} from 'vue';
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
        <RouterView
          v-slots={{
            default: ({
              Component,
              route,
            }: {
              Component: VNode;
              route: RouteLocationNormalizedLoaded;
            }) => {
              return (
                <Transition name="fade" mode="out-in">
                  <div key={route.path} style={{ height: '100%' }}>
                    {route.meta.ignoreCache ? (
                      createVNode(Component)
                    ) : (
                      <KeepAlive include={cacheList.value}>
                        {createVNode(Component)}
                      </KeepAlive>
                    )}
                  </div>
                </Transition>
              );
            },
          }}
        ></RouterView>
      </>
    );
  },
});
