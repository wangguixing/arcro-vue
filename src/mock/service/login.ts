/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-04-01 00:45:08
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-04-01 01:13:03
 * @FilePath: \arcro-vue\src\mock\login\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { mockService } from './types.d';

export default {
  url: '/api/getUserInfo', // 注意，这里只能是string格式
  method: 'get',
  response: () => ({
    code: 1,
    data: {
      account: 'admin',
      birthday: '0',
      certificatesNumber: null,
      certificatesType: null,
      description: null,
      education: null,
      email: '12011112222@qq.com',
      entryDate: '0',
      firstLoginIp: '127.0.0.1',
      firstLoginTime: '1635295040000',
      gender: 1,
      headIcon: null,
      id: '1',
      lastChangePasswordDate: '0',
      lastLoginIp: '218.29.222.2',
      lastLoginTime: '1680251906531',
      loginAppFlag: 1,
      managerUid: null,
      mobilePhone: '13311112222',
      nation: null,
      nativePlace: null,
      nickName: null,
      postalAddress: null,
      prevLoginIp: '218.29.222.2',
      prevLoginTime: '1680250497020',
      propertyJson: null,
      quickQuery: null,
      realName: '超级管理员',
      signature: null,
      sortNum: '35.00',
      sourceType: 1,
      sysFlag: 0,
      sysTheme: null,
      telephone: null,
      tokenInfo: {
        tokenName: 'token',
        tokenValue: 'f788bd14187c4735a5331e44a2aa558a',
      },
      urgentContacts: null,
      urgentTelephone: null,
      workStatus: 2,
    },
    msg: '操作成功',
    success: true,
  }),
} as mockService;
