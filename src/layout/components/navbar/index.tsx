/*
 * @Author: wangguixing
 * @Date: 2023-03-30 18:08:10
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-03 22:00:17
 * @FilePath: \src\layout\components\navbar\index.tsx
 * @Description: 注明出处即可
 * Copyright 2023 wangguixing, All Rights Reserved.
 * 2023-03-30 18:08:10
 */

import { defineComponent, computed, ref, inject } from 'vue';
import { useDark, useToggle, useFullscreen } from '@vueuse/core';
import useUser from '@/hooks/user';
import { useAppStore, useUserStore } from '@/store/index';
import Menu from '../menu/index';
import MessageBox from '../message-box';
import './index.less';

export default defineComponent({
  setup() {
    const appStore = useAppStore();
    const userStore = useUserStore();
    const { logout } = useUser();
    const { isFullscreen, toggle: toggleFullScreen } = useFullscreen();
    const avatar = computed(() => {
      return userStore.avatar;
    });
    const theme = computed(() => {
      return appStore.theme;
    });
    const topMenu = computed(() => appStore.topMenu && appStore.menu);
    const isDark = useDark({
      selector: 'body',
      attribute: 'arco-theme',
      valueDark: 'dark',
      valueLight: 'light',
      storageKey: 'arco-theme',
      onChanged(dark: boolean) {
        // overridden default behavior
        appStore.toggleTheme(dark);
      },
    });
    const toggleTheme = useToggle(isDark);
    const handleToggleTheme = () => {
      toggleTheme();
    };
    const setVisible = () => {
      appStore.updateSettings({ globalSettings: true });
    };
    const refBtn = ref();
    // const triggerBtn = ref();
    const setPopoverVisible = () => {
      const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      refBtn.value.dispatchEvent(event);
    };
    const handleLogout = () => {
      logout();
    };
    // const setDropDownVisible = () => {
    //   const event = new MouseEvent('click', {
    //     view: window,
    //     bubbles: true,
    //     cancelable: true,
    //   });
    //   triggerBtn.value.dispatchEvent(event);
    // };
    // const switchRoles = async () => {
    //   const res = await userStore.switchRoles();
    //   Message.success(res as string);
    // };
    const toggleDrawerMenu = inject('toggleDrawerMenu') as () => void;
    return () => {
      return (
        <>
          <div class="navbar">
            <div class="left-side">
              <a-space>
                <img
                  alt="logo"
                  src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
                />
                <a-typography-title
                  style={{ margin: 0, fontSize: '18px' }}
                  heading={5}
                >
                  arcro-vue
                </a-typography-title>

                {!topMenu.value && appStore.device === 'mobile' ? (
                  <icon-menu-fold
                    style="font-size: 22px; cursor: pointer"
                    onClick={toggleDrawerMenu}
                  />
                ) : (
                  ''
                )}
              </a-space>
            </div>
            <div class="center-side">{topMenu.value && <Menu />}</div>
            <ul class="right-side">
              <li>
                <a-tooltip
                  content={
                    theme.value === 'light'
                      ? '点击切换为暗黑模式'
                      : '点击切换为亮色模式'
                  }
                >
                  <a-button
                    class="nav-btn"
                    type="outline"
                    shape="'circle'"
                    onClick={handleToggleTheme}
                  >
                    {{
                      icon: () =>
                        theme.value === 'dark' ? (
                          <icon-moon-fill />
                        ) : (
                          <icon-sun-fill />
                        ),
                    }}
                  </a-button>
                </a-tooltip>
              </li>
              <li>
                <a-tooltip content="消息通知">
                  <div class="message-box-trigger">
                    <a-badge count={9} dot>
                      <a-button
                        class="nav-btn"
                        type="outline"
                        shape="circle"
                        onClick={setPopoverVisible}
                      >
                        <icon-notification />
                      </a-button>
                    </a-badge>
                  </div>
                </a-tooltip>
                <a-popover
                  trigger="click"
                  arrow-style={{ display: 'none' }}
                  content-style={{ padding: 0, minWidth: '400px' }}
                  content-class="message-popover"
                  v-slots={{ content: () => <MessageBox /> }}
                >
                  <div ref={refBtn} class="ref-btn"></div>
                </a-popover>
              </li>
              <li>
                <a-tooltip
                  content={
                    isFullscreen.value ? '点击退出全屏模式' : '点击切换全屏模式'
                  }
                >
                  <a-button
                    class="nav-btn"
                    type="outline"
                    shape="circle"
                    onClick={toggleFullScreen}
                  >
                    {{
                      icon: () =>
                        isFullscreen ? (
                          <icon-fullscreen-exit />
                        ) : (
                          <icon-fullscreen />
                        ),
                    }}
                  </a-button>
                </a-tooltip>
              </li>
              <li>
                <a-tooltip content="设置">
                  <a-button
                    class="nav-btn"
                    type="outline"
                    shape="circle"
                    onClick={setVisible}
                  >
                    {{
                      icon: () => <icon-settings />,
                    }}
                  </a-button>
                </a-tooltip>
              </li>
              <li>
                <a-avatar
                  size={32}
                  style={{ marginRight: '8px', cursor: 'pointer' }}
                >
                  <img alt="avatar" src={avatar.value} />
                </a-avatar>
              </li>
              <li>
                <a-tooltip content="登出">
                  <a-button
                    class="nav-btn"
                    type="outline"
                    shape="circle"
                    onClick={handleLogout}
                  >
                    {{
                      icon: () => <icon-export />,
                    }}
                  </a-button>
                </a-tooltip>
              </li>
            </ul>
          </div>
        </>
      );
    };
  },
});
