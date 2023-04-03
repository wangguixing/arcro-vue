/*
 * @Author: wangguixing
 * @Date: 2023-03-13 17:57:39
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-01 13:05:56
 * @FilePath: \src\hooks\responsive.ts
 * @Description: 注明出处即可
 * Copyright 2023 wangguixing, All Rights Reserved.
 * 2023-03-13 17:57:39
 */

import { onMounted, onBeforeMount, onBeforeUnmount } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import { useAppStore } from '@/store';
import { addEventListen, removeEventListen } from '@/utils/event';

const WIDTH = 992; // https://arco.design/vue/component/grid#responsivevalue

function queryDevice() {
  const rect = document.body.getBoundingClientRect();
  return rect.width - 1 < WIDTH;
}

export default function useResponsive(immediate?: boolean) {
  const appStore = useAppStore();
  function resizeHandler() {
    if (!document.hidden) {
      const isMobile = queryDevice();
      appStore.toggleDevice(isMobile ? 'mobile' : 'desktop');
      appStore.toggleMenu(isMobile);
    }
  }
  const debounceFn = useDebounceFn(resizeHandler, 100);
  onMounted(() => {
    if (immediate) debounceFn();
  });
  onBeforeMount(() => {
    addEventListen(window, 'resize', debounceFn);
  });
  onBeforeUnmount(() => {
    removeEventListen(window, 'resize', debounceFn);
  });
}
