/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-04-01 01:00:22
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-04-01 01:04:11
 * @FilePath: \arcro-vue\src\mock\service\types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface mockService {
  url: string;
  method: string;
  response: () => {
    code: number;
    data: unknown;
    msg: string;
    success: boolean;
  };
}
