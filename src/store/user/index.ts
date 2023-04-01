/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-13 17:01:42
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-01 14:18:19
 * @FilePath: \src\store\user\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { defineStore } from 'pinia';
import {
  login as userLogin,
  logout as userLogout,
  getUserInfo,
} from '@/api/user';
import type { LoginData } from '@/api/user';
import { setTokenValue, removeToken } from '@/utils/auth';
import { removeRouteListener } from '@/utils/route-listener';
import type { UserState } from './types';
import useAppStore from '../app';

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: undefined,
    avatar: undefined,
    job: undefined,
    organization: undefined,
    location: undefined,
    email: undefined,
    introduction: undefined,
    personalWebsite: undefined,
    jobName: undefined,
    organizationName: undefined,
    locationName: undefined,
    phone: undefined,
    registrationDate: undefined,
    accountId: undefined,
    certification: undefined,
    role: '',
  }),

  getters: {
    userInfo(state: UserState): UserState {
      return { ...state };
    },
  },

  actions: {
    switchRoles() {
      return new Promise((resolve) => {
        this.role = this.role === 'user' ? 'admin' : 'user';
        resolve(this.role);
      });
    },
    // Set user's information
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial);
    },

    // Reset user's information
    resetInfo() {
      this.$reset();
    },

    // Get user's information
    async info() {
      const res = await getUserInfo();

      this.setInfo(res.data);
    },

    // Login
    async login(loginForm: LoginData) {
      try {
        const res = await userLogin(loginForm);
        setTokenValue(res.data.token);
      } catch (err) {
        removeToken();
        throw err;
      }
    },
    logoutCallBack() {
      const appStore = useAppStore();
      this.resetInfo();
      removeToken();
      removeRouteListener();
      appStore.clearServerMenu();
    },
    // Logout
    async logout() {
      try {
        await userLogout();
      } finally {
        this.logoutCallBack();
      }
    },
  },
});

export default useUserStore;
