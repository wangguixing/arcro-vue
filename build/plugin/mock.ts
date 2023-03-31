/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-04-01 00:40:02
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-04-01 00:40:15
 * @FilePath: \arcro-vue\build\plugin\mock.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { viteMockServe } from 'vite-plugin-mock';

export default function ConfigViteMock() {
  const config = viteMockServe({
    mockPath: './src/mock/source',
    localEnabled: true,
  });
  return config;
}
