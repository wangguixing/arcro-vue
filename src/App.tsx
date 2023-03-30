import { defineComponent, onMounted } from 'vue';
import useEventBus from '@/hooks/eventBus';

export default defineComponent({
  name: 'App',
  setup() {
    const { busOn } = useEventBus();
    onMounted(() => {
      busOn('login', (v) => {
        console.log(v);
      });
    });
    return () => (
      <a-config-provider>
        <router-view />
      </a-config-provider>
    );
  },
});
