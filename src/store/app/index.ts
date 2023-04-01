/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-13 17:01:41
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-01 14:14:16
 * @FilePath: \src\store\app\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia';
import { Notification } from '@arco-design/web-vue';
import type { NotificationReturn } from '@arco-design/web-vue/es/notification/interface';
import type { RouteRecordNormalized } from 'vue-router';
// import { getMenuList } from '@/api/user';
import type { AppState } from './types';

const defaultSettings = {
  theme: 'light',
  colorWeak: false,
  navbar: true,
  menu: true,
  topMenu: false,
  hideMenu: false,
  menuCollapse: false,
  footer: true,
  themeColor: '#165DFF',
  menuWidth: 220,
  globalSettings: false,
  device: 'desktop',
  tabBar: false,
  menuFromServer: false,
  serverMenu: [],
};

const useAppStore = defineStore('app', {
  state: (): AppState => ({ ...defaultSettings }),

  getters: {
    appCurrentSetting(state: AppState): AppState {
      return { ...state };
    },
    appDevice(state: AppState) {
      return state.device;
    },
    appAsyncMenus(state: AppState): RouteRecordNormalized[] {
      return state.serverMenu as unknown as RouteRecordNormalized[];
    },
  },

  actions: {
    // Update app settings
    updateSettings(partial: Partial<AppState>) {
      // @ts-ignore-next-line
      this.$patch(partial);
    },

    // Change theme color
    toggleTheme(dark: boolean) {
      if (dark) {
        this.theme = 'dark';
        document.body.setAttribute('arco-theme', 'dark');
      } else {
        this.theme = 'light';
        document.body.removeAttribute('arco-theme');
      }
    },
    toggleDevice(device: string) {
      this.device = device;
    },
    toggleMenu(value: boolean) {
      this.hideMenu = value;
    },
    async fetchServerMenuConfig() {
      let notifyInstance: NotificationReturn | null = null;
      try {
        notifyInstance = Notification.info({
          id: 'menuNotice', // Keep the instance id the same
          content: 'loading',
          closable: true,
        });
        // const { data } = await getMenuList();
        // this.serverMenu = data;
        // notifyInstance = Notification.success({
        //   id: 'menuNotice',
        //   content: 'success',
        //   closable: true,
        // });
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        notifyInstance = Notification.error({
          id: 'menuNotice',
          content: 'error',
          closable: true,
        });
      }
    },
    clearServerMenu() {
      this.serverMenu = [];
    },
  },
});

export default useAppStore;
