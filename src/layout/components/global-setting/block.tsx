import { defineComponent, Fragment } from 'vue';
import { useAppStore } from '@/store';

import type { PropType } from 'vue';
import type { OptionsProp } from './type.ts';
import './index.less';

export default defineComponent({
  name: 'GlobalSettingBlock',
  props: {
    title: {
      type: String as PropType<string>,
      default: '',
    },
    options: {
      type: Array as PropType<OptionsProp[]>,
      default() {
        return [];
      },
    },
  },
  setup(props, ctx) {
    const appStore = useAppStore();
    const handleChange = async ({
      key,
      value,
    }: {
      key: string;
      value: unknown;
    }) => {
      if (key === 'colorWeak') {
        document.body.style.filter = value ? 'invert(80%)' : 'none';
      }
      if (key === 'menuFromServer' && value) {
        await appStore.fetchServerMenuConfig();
      }
      if (key === 'topMenu') {
        appStore.updateSettings({
          menuCollapse: false,
        });
      }
      appStore.updateSettings({ [key]: value });
    };
    return () => {
      const { title, options } = props;
      return (
        <>
          <div class="block">
            <h5 class="title">{{ title }}</h5>
            {options.map((optItem) => {
              return (
                <Fragment>
                  <span>optItem.name</span>
                  <form-wrapper
                    type={optItem.type || 'switch'}
                    name={optItem.key}
                    default-value={optItem.defaultValue}
                    onInputChange={handleChange}
                  />
                </Fragment>
              );
            })}
          </div>
        </>
      );
    };
  },
});
