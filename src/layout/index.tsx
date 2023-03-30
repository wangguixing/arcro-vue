/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-13 17:00:18
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-30 18:07:50
 * @FilePath: \arcro-vue\src\layout\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref, computed, watch, provide, onMounted, defineComponent } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAppStore, useUserStore } from '@/store/index';
import NavBar from '@/layout/components/navbar/index.vue';
// import Menu from '@/layout/components/menu/index.tsx';
// import Footer from '@/layout/components/footer/index.tsx';
import TabBar from '@/layout/components/tab-bar/index.vue';
import usePermission from '@/hooks/permission';
import useResponsive from '@/hooks/responsive';
import PageLayout from './components/contentLayout/page-layout';

export default defineComponent({
  components: {
    NavBar,
    TabBar,
    PageLayout,
  },
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
    const footer = computed(() => appStore.footer);
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
  },
});
