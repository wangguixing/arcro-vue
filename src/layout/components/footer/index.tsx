/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-13 17:00:49
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-29 15:10:04
 * @FilePath: \arcro-vue\src\layout\components\footer\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent } from 'vue';
import './index.less';

export default defineComponent({
  setup() {
    return () => (
      <>
        <a-layout-footer class="footer">Arco Pro</a-layout-footer>
      </>
    );
  },
});
