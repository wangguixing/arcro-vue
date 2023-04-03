import { ref, computed, watch, onUnmounted, defineComponent } from 'vue';
import type { RouteLocationNormalized } from 'vue-router';
import {
  listenerRouteChange,
  removeRouteListener,
} from '@/utils/route-listener';
import { useAppStore, useTabBarStore } from '@/store';
import tabItem from './tab-item.tsx';
import './index.less';

export default defineComponent({
  components: { tabItem },
  setup() {
    const appStore = useAppStore();
    const tabBarStore = useTabBarStore();

    const affixRef = ref();
    const tagList = computed(() => {
      return tabBarStore.getTabList;
    });
    const offsetTop = computed(() => {
      return appStore.navbar ? 60 : 0;
    });

    watch(
      () => appStore.navbar,
      () => {
        affixRef.value.updatePosition();
      }
    );
    listenerRouteChange((route: RouteLocationNormalized) => {
      if (
        !route.meta.noAffix &&
        !tagList.value.some((tag) => tag.fullPath === route.fullPath)
      ) {
        tabBarStore.updateTabList(route);
      }
    }, true);

    onUnmounted(() => {
      removeRouteListener();
    });
    return () => (
      <>
        <div class="tab-bar-container">
          <a-affix ref={affixRef} offset-top={offsetTop.value}>
            <div class="tab-bar-box">
              <div class="tab-bar-scroll">
                <div class="tags-wrap">
                  {tagList.value.map((item, index) => {
                    return (
                      <tab-item
                        key={item.fullPath}
                        index={index}
                        item-data={item}
                      />
                    );
                  })}
                </div>
              </div>
              <div class="tag-bar-operation"></div>
            </div>
          </a-affix>
        </div>
      </>
    );
  },
});
