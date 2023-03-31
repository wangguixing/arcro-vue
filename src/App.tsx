/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-05 16:08:45
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-31 12:57:34
 * @FilePath: \arcro-vue\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
