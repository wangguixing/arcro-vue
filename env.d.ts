/*
 * @Author: guixing-wang 1163260785@qq.com
 * @Date: 2023-03-05 16:08:45
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-06 17:46:47
 * @FilePath: \myPages\env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/// <reference types="vite/client" />
declare module '*.ts';
declare module '*.tsx';
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
