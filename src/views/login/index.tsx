/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-30 13:59:28
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-30 17:55:39
 * @FilePath: \arcro-vue\src\views\login\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, reactive, ref, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { Message } from '@arco-design/web-vue';
import { useStorage } from '@vueuse/core';
import { useUserStore } from '@/store';
import useLoading from '@/hooks/loading';
// TS类型
import type { ValidatedError } from '@arco-design/web-vue/es/form/interface';
import './index.less';

import useEventBus from '@/hooks/eventBus';
import type { LoginData } from './types';

export default defineComponent({
  name: 'Login',
  props: {},
  emit: [],
  setup() {
    const { busEmit, busOff } = useEventBus();
    const router = useRouter();
    const errorMessage = ref('');
    const { loading, setLoading } = useLoading();
    const userStore = useUserStore();
    const loginConfig = useStorage('login-config', {
      rememberPassword: true,
      username: 'admin', // 演示默认值
      password: 'admin', // demo default value
    });
    const userInfo = reactive({
      username: loginConfig.value.username,
      password: loginConfig.value.password,
      rememberPassword: loginConfig.value.rememberPassword,
    });
    const handleSubmit = async ({
      errors,
      values,
    }: {
      errors: Record<string, ValidatedError> | undefined;
      values: Record<string, any>;
    }) => {
      if (loading.value) return;
      if (!errors) {
        setLoading(true);
        try {
          await userStore.login(values as LoginData);
          const { redirect, ...othersQuery } = router.currentRoute.value.query;
          router.push({
            name: (redirect as string) || 'Workplace',
            query: {
              ...othersQuery,
            },
          });
          Message.success('登录成功');
          const { rememberPassword } = loginConfig.value;
          const { username, password } = values;
          // 实际生产环境需要进行加密存储。
          // The actual production environment requires encrypted storage.
          loginConfig.value.username = rememberPassword ? username : '';
          loginConfig.value.password = rememberPassword ? password : '';
        } catch (err) {
          errorMessage.value = (err as Error).message;
        } finally {
          setLoading(false);
        }
      } else {
        busEmit('login', errors);
      }
    };
    const setRememberPassword = (value: boolean) => {
      loginConfig.value.rememberPassword = value;
    };
    onBeforeUnmount(() => {
      busOff('login');
    });
    return () => {
      return (
        <div class="login-page">
          <a-form
            ref="loginForm"
            model={userInfo}
            class="login-form"
            layout="vertical"
            onSubmit={handleSubmit}
          >
            <div class="login-form-title">Arcro-vue</div>
            <a-form-item
              field="username"
              rules={[{ required: true, message: '用户名不能为空' }]}
              validate-trigger={['change', 'blur']}
              hide-label
            >
              <a-input
                vModel={userInfo.username}
                placeholder="用户名"
                v-slots={{ prefix: () => <icon-user /> }}
                allow-clear
              ></a-input>
            </a-form-item>
            <a-form-item
              field="password"
              rules={[{ required: true, message: '请输入密码' }]}
              validate-trigger={['change', 'blur']}
              hide-label
            >
              <a-input-password
                vModel={userInfo.password}
                placeholder="请输入密码"
                allow-clear
                v-slots={{ prefix: () => <icon-lock /> }}
              ></a-input-password>
            </a-form-item>
            <a-space size={16} direction="vertical">
              <div class="login-form-password-actions">
                <a-checkbox
                  checked="rememberPassword"
                  vModel={userInfo.rememberPassword}
                  onChange={setRememberPassword}
                >
                  记住密码
                </a-checkbox>
                <a-link>忘记密码</a-link>
              </div>
              <a-button
                type="primary"
                html-type="submit"
                long
                loading={loading.value}
              >
                登录
              </a-button>
              <a-button type="text" long class="login-form-register-btn">
                注册
              </a-button>
            </a-space>
          </a-form>
        </div>
      );
    };
  },
});
