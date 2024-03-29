import { defineComponent, computed } from 'vue';
// import { useClipboard } from '@vueuse/core';
import { useAppStore } from '@/store';
import GlobalSettingBlock from './block';
import './index.less';

export default defineComponent({
  name: 'GlobalSetting',
  emits: ['cancel'],
  setup(_, { emit }) {
    const appStore = useAppStore();
    // const { copy } = useClipboard();
    const visible = computed(() => appStore.globalSettings);
    const contentOpts = computed(() => [
      { name: '导航栏', key: 'navbar', defaultValue: appStore.navbar },
      {
        name: '菜单栏',
        key: 'menu',
        defaultValue: appStore.menu,
      },
      {
        name: '顶部菜单栏',
        key: 'topMenu',
        defaultValue: appStore.topMenu,
      },
      { name: '底部', key: 'footer', defaultValue: appStore.footer },
      { name: '多页签', key: 'tabBar', defaultValue: appStore.tabBar },
      {
        name: '菜单来源后台',
        key: 'menuFromServer',
        defaultValue: appStore.menuFromServer,
      },
      {
        name: '菜单栏宽度',
        key: 'menuWidth',
        defaultValue: appStore.menuWidth,
        type: 'number',
      },
    ]);
    const othersOpts = computed(() => [
      {
        name: '色弱模式',
        key: 'colorWeak',
        defaultValue: appStore.colorWeak,
      },
    ]);
    const cancel = () => {
      appStore.updateSettings({ globalSettings: false });
      emit('cancel');
    };
    // const copySettings = async () => {
    //   const text = JSON.stringify(appStore.$state, null, 2);
    //   await copy(text);
    //   Message.success('复制成功');
    // };
    return () => (
      <div class="global-setting">
        <a-drawer
          width={300}
          unmount-on-close
          visible={visible.value}
          cancel-text="取消"
          // ok-text=""
          // onOk={copySettings}
          footer={false}
          onCancel={cancel}
          v-slots={{ title: () => '页面配置' }}
        >
          <GlobalSettingBlock options={contentOpts.value} title="设置" />
          <GlobalSettingBlock options={othersOpts.value} title="其他设置" />
        </a-drawer>
      </div>
    );
  },
});
