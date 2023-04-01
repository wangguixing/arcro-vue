/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-07 18:21:59
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-04-01 11:01:26
 * @FilePath: \arcro-vue\src\hooks\useLoading.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref } from 'vue';

export default function useLoading(initValue = false) {
  const loading = ref(initValue);
  const setLoading = (value: boolean) => {
    loading.value = value;
  };
  const toggle = () => {
    loading.value = !loading.value;
  };
  return {
    loading,
    setLoading,
    toggle,
  };
}
