/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-13 17:00:18
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-03 21:49:15
 * @FilePath: \src\layout\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  ref,
  computed,
  watch,
  provide,
  onMounted,
  defineComponent,
  Fragment,
} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAppStore, useUserStore } from '@/store/index';
import NavBar from '@/layout/components/navbar/index';
import Menu from '@/layout/components/menu/index';
import TabBar from '@/layout/components/tab-bar/index';
import usePermission from '@/hooks/permission';
import useResponsive from '@/hooks/responsive';
import PageLayout from './components/contentLayout/page-layout';
import style from './index.module.less';

export default defineComponent({
  name: 'PageLayout',
  setup() {
    const isInit = ref(false);
    const appStore = useAppStore();
    const userStore = useUserStore();
    const router = useRouter();
    const route = useRoute();
    const permission = usePermission();
    useResponsive(true);
    const navbarHeight = `60px`;
    const navbar = computed(() => appStore.navbar);
    const renderMenu = computed(() => appStore.menu && !appStore.topMenu);
    const hideMenu = computed(() => appStore.hideMenu);
    // const footer = computed(() => appStore.footer);
    const menuWidth = computed(() => {
      return appStore.menuCollapse ? 48 : appStore.menuWidth;
    });
    const collapsed = computed(() => {
      return appStore.menuCollapse;
    });
    const paddingStyle = computed(() => {
      const paddingLeft =
        renderMenu.value && !hideMenu.value
          ? { paddingLeft: `${menuWidth.value}px` }
          : {};
      const paddingTop = navbar.value ? { paddingTop: navbarHeight } : {};
      return { ...paddingLeft, ...paddingTop };
    });
    const setCollapsed = (val: boolean) => {
      if (!isInit.value) return; // for page initialization menu state problem
      appStore.updateSettings({ menuCollapse: val });
    };
    watch(
      () => userStore.role,
      (roleValue) => {
        if (roleValue && !permission.accessRouter(route))
          router.push({ name: 'notFound' });
      }
    );
    const drawerVisible = ref(false);
    const drawerCancel = () => {
      drawerVisible.value = false;
    };
    provide('toggleDrawerMenu', () => {
      drawerVisible.value = !drawerVisible.value;
    });
    onMounted(() => {
      isInit.value = true;
    });
    return () => (
      <Fragment>
        <a-layout class={style.layout}>
          {navbar.value ? (
            <div class={style.layoutNavbar}>
              <NavBar />
            </div>
          ) : (
            ''
          )}
          {renderMenu.value && hideMenu && (
            <a-layout-sider
              class={style.layoutSider}
              breakpoint="xl"
              collapsed={collapsed.value}
              collapsible={true}
              width={menuWidth.value}
              style={{ paddingTop: navbar.value ? '60px' : '' }}
              hide-trigger={true}
              onCollapse={setCollapsed}
            >
              <div class={style.menuWrapper}>
                <Menu />
              </div>
            </a-layout-sider>
          )}

          {hideMenu.value && (
            <a-drawer
              visible={drawerVisible}
              placement="left"
              footer={false}
              mask-closable
              closable={false}
              onCancel={drawerCancel}
            >
              <Menu />
            </a-drawer>
          )}

          <a-layout class={style.layoutContent} style={paddingStyle.value}>
            {appStore.tabBar && <TabBar />}
            <a-layout-content>
              <PageLayout />
            </a-layout-content>
          </a-layout>
        </a-layout>
      </Fragment>
    );
  },
});
