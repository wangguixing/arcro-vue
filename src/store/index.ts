/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-13 17:01:41
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-13 17:01:55
 * @FilePath: \arcro-vue\src\stores\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createPinia } from 'pinia';
import useAppStore from './app';
import useUserStore from './user';
import useTabBarStore from './tab-bar';

const pinia = createPinia();

export { useAppStore, useUserStore, useTabBarStore };
export default pinia;
