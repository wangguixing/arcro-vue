/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-29 18:08:10
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-02 22:17:18
 * @FilePath: \src\components\global-setting\form-wrapper.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { OptionsProp } from './type.js';

export default defineComponent({
  props: {
    type: {
      type: String as PropType<OptionsProp['type']>,
      default: '',
    },
    name: {
      type: String as PropType<OptionsProp['name']>,
      default: '',
    },
    defaultValue: {
      type: [String, Boolean, Number] as PropType<OptionsProp['defaultValue']>,
      default: '',
    },
  },
  emits: ['inputChange'],
  setup(props, { emit }) {
    const handleChange = (value: unknown) => {
      emit('inputChange', {
        value,
        key: props.name,
      });
    };
    return () => {
      return (
        <>
          {props.type === 'number' ? (
            <a-input-number
              style={{ width: '80px' }}
              size="small"
              onChange={handleChange}
              default-value={props.defaultValue}
            />
          ) : (
            <a-switch
              size="small"
              onChange={handleChange}
              default-checked={props.defaultValue}
            />
          )}
        </>
      );
    };
  },
});
