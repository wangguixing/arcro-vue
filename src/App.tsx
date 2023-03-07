/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-05 16:08:45
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-07 09:03:30
 * @FilePath: \myPages\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, onMounted } from 'vue';
import Demo from './views/demo';

export default defineComponent({
  name: 'App',
  // props: {},
  setup() {
    onMounted(() => {
      console.log(11111111);
    });
    return () => {
      return <Demo></Demo>;
    };
  },
});
