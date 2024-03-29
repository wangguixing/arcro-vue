/*
 * @Author: guixing-wang
 * @Date: 2023-03-05 16:08:45
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-02 21:51:55
 * @FilePath: \env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/// <reference types="vite/client" />
declare module '*.json';
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare global {
  interface Window {
    _czc: any;
  }
}
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
}
