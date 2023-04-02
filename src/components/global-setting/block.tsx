import { defineComponent } from 'vue';
import { useAppStore } from '@/store';
import type { PropType } from 'vue';
import FormWrapper from './form-wrapper';
import type { OptionsProp } from './type.js';
import './index.less';

export default defineComponent({
  name: 'GlobalSettingBlock',
  components: { FormWrapper },
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
  setup(props) {
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
      return (
        <>
          <div class="global-setting-block">
            <h5 class="title">{props.title}</h5>
            {props.options.map((optItem) => {
              return (
                <div class="global-setting-form-wrapper">
                  <span>{optItem.name}</span>
                  <form-wrapper
                    type={optItem.type || 'switch'}
                    name={optItem.key}
                    default-value={optItem.defaultValue}
                    onInputChange={handleChange}
                  />
                </div>
              );
            })}
          </div>
        </>
      );
    };
  },
});
