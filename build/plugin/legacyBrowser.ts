/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-31 13:04:50
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-31 13:15:23
 * @FilePath: \arcro-vue\build\plugin\legacyBrowser.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import legacy from '@vitejs/plugin-legacy';

export default function configLegacyBrowser() {
  const config = legacy({
    targets: ['ie >= 11'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
  });
  return config;
}
