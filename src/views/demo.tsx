/*
 * @Author: guixing-wang 1163260785@qq.com
 * @Date: 2023-03-05 22:46:49
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-07 16:40:06
 * @FilePath: \myPages\src\views\demo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { PropType } from 'vue';
import { defineComponent, onMounted, reactive } from 'vue';

interface obj1 {
  a: number;
  b: number;
  c: string;
}
export default defineComponent({
  name: 'Demo',
  props: {
    post: {
      type: Array as PropType<obj1[]>,
    },
  },
  setup(props) {
    const aa = reactive({ post1: props.post });
    const fun = (): void => {
      Object.assign(aa, { c: 3 });
    };
    onMounted(() => {
      fun();
    });
    return () => (
      <>
        {props.post?.map((i) => (
          <>
            <div>{i.a}</div>
            <div>{i.b}</div>
            <div>{i.c}</div>
          </>
        ))}

        <theme-table></theme-table>
      </>
    );
  },
});
