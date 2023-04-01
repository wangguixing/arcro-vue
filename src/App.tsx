/*
 * @Author: wangguixing
 * @Date: 2023-03-05 16:08:45
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-01 13:05:15
 * @FilePath: \src\App.tsx
 * @Description: 注明出处即可
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2023-03-05 16:08:45
 */

import { defineComponent, onMounted } from 'vue';
import useEventBus from '@/hooks/eventBus';

export default defineComponent({
  name: 'App',
  setup() {
    const { busOn } = useEventBus();
    onMounted(() => {
      busOn('login', (v) => {
        if (v) {
          console.log(v);
        }
      });
    });
    return () => (
      <a-config-provider>
        <router-view />
      </a-config-provider>
    );
  },
});
