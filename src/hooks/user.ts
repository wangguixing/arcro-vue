/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-30 13:48:08
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-30 13:49:42
 * @FilePath: \arcro-vue\src\hooks\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useRouter } from 'vue-router';
import { Message } from '@arco-design/web-vue';

import { useUserStore } from '@/store';

export default function useUser() {
  const router = useRouter();
  const userStore = useUserStore();
  const logout = async (logoutTo?: string) => {
    await userStore.logout();
    const currentRoute = router.currentRoute.value;
    Message.success('登出成功');
    router.push({
      name: logoutTo && typeof logoutTo === 'string' ? logoutTo : 'login',
      query: {
        ...router.currentRoute.value.query,
        redirect: currentRoute.name as string,
      },
    });
  };
  return {
    logout,
  };
}
