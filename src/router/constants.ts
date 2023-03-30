/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-14 09:10:26
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-30 13:38:12
 * @FilePath: \arcro-vue\src\router\constants.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const WHITE_LIST = [
  { name: 'notFound', children: [] },
  { name: 'login', children: [] },
];

export const NOT_FOUND = {
  name: 'notFound',
};

export const REDIRECT_ROUTE_NAME = 'Redirect';

export const DEFAULT_ROUTE_NAME = 'Workplace';

export const DEFAULT_ROUTE = {
  title: '工作台',
  name: DEFAULT_ROUTE_NAME,
  fullPath: '/dashboard/workplace',
};
