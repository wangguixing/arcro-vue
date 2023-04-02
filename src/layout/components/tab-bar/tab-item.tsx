import { computed, defineComponent } from 'vue';
import type { PropType } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useTabBarStore } from '@/store';
import { DEFAULT_ROUTE_NAME, REDIRECT_ROUTE_NAME } from '@/router/constants';
import type { TagProps } from './type';

import './index.less';

enum Eaction {
  reload = 'reload',
  current = 'current',
  left = 'left',
  right = 'right',
  others = 'others',
  all = 'all',
}

export default defineComponent({
  props: {
    itemData: {
      type: Object as PropType<TagProps>,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const tabBarStore = useTabBarStore();

    const goto = (tag: TagProps) => {
      router.push({ ...tag });
    };
    const tagList = computed(() => {
      return tabBarStore.getTabList;
    });

    const disabledReload = computed(() => {
      return props?.itemData?.fullPath !== route.fullPath;
    });

    const disabledCurrent = computed(() => {
      return props.index === 0;
    });

    const disabledLeft = computed(() => {
      return [0, 1].includes(props.index);
    });

    const disabledRight = computed(() => {
      return props.index === tagList.value.length - 1;
    });

    const tagClose = (tag: TagProps, idx: number) => {
      tabBarStore.deleteTag(idx, tag);
      if (props.itemData?.fullPath === route.fullPath) {
        const latest = tagList.value[idx - 1]; // 获取队列的前一个tab
        router.push({ name: latest.name });
      }
    };

    const findCurrentRouteIndex = () => {
      return tagList.value.findIndex((el) => el.fullPath === route.fullPath);
    };
    const actionSelect = async (value: any) => {
      const { itemData, index } = props;
      const copyTagList = [...tagList.value];
      if (value === Eaction.current) {
        tagClose(itemData, index);
      } else if (value === Eaction.left) {
        const currentRouteIdx = findCurrentRouteIndex();
        copyTagList.splice(1, props.index - 1);

        tabBarStore.freshTabList(copyTagList);
        if (currentRouteIdx < index) {
          router.push({ name: itemData.name });
        }
      } else if (value === Eaction.right) {
        const currentRouteIdx = findCurrentRouteIndex();
        copyTagList.splice(props.index + 1);

        tabBarStore.freshTabList(copyTagList);
        if (currentRouteIdx > index) {
          router.push({ name: itemData.name });
        }
      } else if (value === Eaction.others) {
        const filterList = tagList.value.filter((el, idx) => {
          return idx === 0 || idx === props.index;
        });
        tabBarStore.freshTabList(filterList);
        router.push({ name: itemData.name });
      } else if (value === Eaction.reload) {
        tabBarStore.deleteCache(itemData);
        await router.push({
          name: REDIRECT_ROUTE_NAME,
          params: {
            path: route.fullPath,
          },
        });
        tabBarStore.addCache(itemData.name);
      } else {
        tabBarStore.resetTabList();
        router.push({ name: DEFAULT_ROUTE_NAME });
      }
    };
    return () => (
      <div class="tab-bar-item">
        <a-dropdown
          trigger="contextMenu"
          popup-max-height={false}
          onSelect={actionSelect}
          v-slots={{
            content: () => (
              <>
                <a-doption disabled={disabledReload} value={Eaction.reload}>
                  <icon-refresh />
                  <span>重新加载</span>
                </a-doption>
                <a-doption
                  class="sperate-line"
                  disabled={disabledCurrent}
                  value={Eaction.current}
                >
                  <icon-close />
                  <span>关闭当前标签页</span>
                </a-doption>
                <a-doption disabled={disabledLeft} value={Eaction.left}>
                  <icon-to-left />
                  <span>关闭左侧标签页</span>
                </a-doption>
                <a-doption
                  class="sperate-line"
                  disabled={disabledRight}
                  value={Eaction.right}
                >
                  <icon-to-right />
                  <span>关闭右侧标签页</span>
                </a-doption>
                <a-doption value={Eaction.others}>
                  <icon-swap />
                  <span>关闭其它标签页</span>
                </a-doption>
                <a-doption value={Eaction.all}>
                  <icon-folder-delete />
                  <span>关闭全部标签页</span>
                </a-doption>
              </>
            ),
          }}
        >
          <span
            class={
              props.itemData.fullPath === route.fullPath
                ? 'arco-tag arco-tag-size-medium arco-tag-checked link-activated'
                : ' arco-tag arco-tag-size-medium arco-tag-checked '
            }
            onClick={() => goto(props.itemData)}
          >
            <span class="tag-link"> 标题 </span>
            <span
              class="arco-icon-hover arco-tag-icon-hover arco-icon-hover-size-medium arco-tag-close-btn"
              onClick={() => tagClose(props.itemData, props.index)}
            >
              <icon-close />
            </span>
          </span>
        </a-dropdown>
      </div>
    );
  },
});
