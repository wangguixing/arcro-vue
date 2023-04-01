/*
 * @Author: wangguixing
 * @Date: 2023-03-30 18:08:10
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-01 13:06:45
 * @FilePath: \src\views\Demo\index.tsx
 * @Description: 注明出处即可
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2023-03-30 18:08:10
 */

import { defineComponent } from 'vue';
import ElNotification from '@/hooks/useNotify';

export default defineComponent({
  name: 'Demo',

  setup() {
    const get = () => {
      ElNotification({ type: 'error', duration: 2, content: '12321312312' });
    };
    return () => (
      <a-button type="primary" onClick={get}>
        Primary
      </a-button>
    );
  },
});
