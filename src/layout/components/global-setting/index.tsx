import { defineComponent, computed, Fragment, unref } from 'vue';
import { Message } from '@arco-design/web-vue';
import { useClipboard } from '@vueuse/core';
import { useAppStore } from '@/store';
import GlobalSettingBlock from './block';
import './index.less';

export default defineComponent({
  name: 'GlobalSetting',
  emits: ['cancel'],
  setup(props, { emit }) {
    const appStore = useAppStore();
    const { copy } = useClipboard();
    const visible = computed(() => appStore.globalSettings);
    const contentOpts = computed(() => [
      { name: '导航栏', key: 'navbar', defaultVal: appStore.navbar },
      {
        name: '菜单栏',
        key: 'menu',
        defaultVal: appStore.menu,
      },
      {
        name: '顶部菜单栏',
        key: 'topMenu',
        defaultVal: appStore.topMenu,
      },
      { name: '底部', key: 'footer', defaultVal: appStore.footer },
      { name: 'settings.tabBar', key: 'tabBar', defaultVal: appStore.tabBar },
      {
        name: '菜单来源后台',
        key: 'menuFromServer',
        defaultVal: appStore.menuFromServer,
      },
      {
        name: '菜单栏宽度',
        key: 'menuWidth',
        defaultVal: appStore.menuWidth,
        type: 'number',
      },
    ]);
    const othersOpts = computed(() => [
      {
        name: '色弱模式',
        key: 'colorWeak',
        defaultVal: appStore.colorWeak,
      },
    ]);
    const cancel = () => {
      appStore.updateSettings({ globalSettings: false });
      emit('cancel');
    };
    const copySettings = async () => {
      const text = JSON.stringify(appStore.$state, null, 2);
      await copy(text);
      Message.success('复制成功');
    };
    const setVisible = () => {
      appStore.updateSettings({ globalSettings: true });
    };
    return () => (
      <>
        <Fragment>
          {appStore.navbar ? (
            <div class="fixed-settings" onClick={setVisible}>
              <a-button type="primary">
                {{
                  icon: () => <icon-settings />,
                }}
              </a-button>
            </div>
          ) : (
            ''
          )}
        </Fragment>
        <a-drawer
          width="300"
          unmount-on-close
          visible={visible}
          cancel-text="取消"
          ok-text="复制配置"
          onOk={copySettings}
          onCancel={cancel}
        >
          {{
            title: () => '页面配置',
          }}
          <GlobalSettingBlock options={unref(contentOpts)} title="设置" />
          <GlobalSettingBlock options={unref(othersOpts)} title="其他设置" />
          <a-alert>替换到 settings.json 中即可</a-alert>
        </a-drawer>
      </>
    );
  },
});
