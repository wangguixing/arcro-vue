/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-04-01 00:42:41
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-04-01 01:23:54
 * @FilePath: \arcro-vue\src\mock\mock.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import type { MockMethod } from 'vite-plugin-mock';
import { formatGlobModules } from '@/utils/importMetaGlob';

const services = import.meta.glob('./service/*.ts');
const mockServices = formatGlobModules(services, [] as MockMethod[]);

export default mockServices;
