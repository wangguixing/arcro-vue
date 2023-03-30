/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-13 17:00:49
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-29 15:05:33
 * @FilePath: \arcro-vue\src\layout\components\chart\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import VCharts from 'vue-echarts';
import { ref, nextTick, defineComponent } from 'vue';
import type { PropType } from 'vue';

interface Props {
  autoResize: boolean;
  width: string;
  height: string;
}
export default defineComponent({
  name: 'Chart',
  props: {
    options: {
      type: Object as PropType<
        import('echarts/types/dist/shared').ECBasicOption
      >,
      default() {
        return {};
      },
    },
    autoResize: {
      type: Boolean as PropType<Props['autoResize']>,
      default: true,
    },
    width: {
      type: String as PropType<Props['width']>,
      default: '100%',
    },
    height: {
      type: String as PropType<Props['width']>,
      default: '100%',
    },
  },
  setup(props) {
    const renderChart = ref(false);
    nextTick(() => {
      renderChart.value = true;
    });
    return () => {
      const { options, autoResize, width, height } = props;
      return (
        <>
          {renderChart.value ? (
            <VCharts
              option={options}
              autoresize={autoResize}
              style={{ width, height }}
            />
          ) : (
            ''
          )}
        </>
      );
    };
  },
});
