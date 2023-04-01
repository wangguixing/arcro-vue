/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-13 17:00:49
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-30 11:50:15
 * @FilePath: \arcro-vue\src\layout\components\message-box\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, ref, reactive, toRefs } from 'vue';
import useLoading from '@/hooks/useLoading';
import List from './list';

import type { MessageListType } from './type';

interface TabItem {
  key: string;
  title: string;
  avatar?: string;
}
export default defineComponent({
  name: 'MessageBox',
  setup(props, ctx) {
    const { loading, setLoading } = useLoading(true);
    const messageType = ref('message');
    const messageData = reactive<{
      renderList: MessageListType;
      messageList: MessageListType;
    }>({
      renderList: [],
      messageList: [],
    });
    toRefs(messageData);
    const tabList: TabItem[] = [
      {
        key: 'message',
        title: '消息',
      },
      {
        key: 'notice',
        title: '通知',
      },
      {
        key: 'todo',
        title: '待办',
      },
    ];
    return () => {
      return (
        <>
          <a-spin style="display: block" loading={loading}>
            <a-tabs
              modelValue:activeKey={messageType}
              type="rounded"
              destroy-on-hide
            >
              {tabList.map((item) => {
                return (
                  <a-tab-pane>
                    {{
                      title: () => <span> {item.title}</span>,
                    }}
                    {!messageData.renderList.length && (
                      <a-result
                        v-if="!renderList.length"
                        status="404"
                        v-slots={{
                          subTitle: () => '暂无内容',
                        }}
                      />
                    )}
                    <List renderList={messageData.renderList} />
                  </a-tab-pane>
                );
              })}
              {{
                extra: () => <a-button type="text">清空</a-button>,
              }}
            </a-tabs>
          </a-spin>
        </>
      );
    };
  },
});
