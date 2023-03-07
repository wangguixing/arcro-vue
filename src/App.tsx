/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-05 16:08:45
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-07 15:43:06
 * @FilePath: \myPages\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, reactive } from 'vue';
import Demo from './views/demo';

export default defineComponent({
  name: 'App',

  setup() {
    const post = reactive([{ a: 1, b: 2, c: '3' }]);
    return () => <Demo post={post}></Demo>;
  },
});
