/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-13 17:01:42
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-13 17:07:05
 * @FilePath: \arcro-vue\src\store\user\types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export type RoleType = '' | '*' | 'admin' | 'user';
export interface UserState {
  name?: string;
  avatar?: string;
  job?: string;
  organization?: string;
  location?: string;
  email?: string;
  introduction?: string;
  personalWebsite?: string;
  jobName?: string;
  organizationName?: string;
  locationName?: string;
  phone?: string;
  registrationDate?: string;
  accountId?: string;
  certification?: number;
  role: RoleType;
}
