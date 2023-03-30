/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-13 17:00:49
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-30 11:33:07
 * @FilePath: \arcro-vue\src\layout\components\message-box\list.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Fragment, defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { MessageRecord, MessageListType } from './type';

export default defineComponent({
  props: {
    renderList: {
      type: Array as PropType<MessageListType>,
      required: true,
    },
    unreadCount: {
      type: Number,
      default: 0,
    },
  },
  emits: ['itemClick'],
  setup(props, { emit }) {
    const allRead = () => {
      emit('itemClick', [...props.renderList]);
    };

    const onItemClick = (item: MessageRecord): void => {
      if (!item.status) {
        emit('itemClick', [item]);
      }
    };
    const getStatusNameColor = (
      messageType: number
    ): { statusName: string; statusColor: string } => {
      let statusName = '';
      let statusColor = '';
      switch (messageType) {
        case 0:
          statusName = '未开始';
          statusColor = 'gray';
          break;
        case 1:
          statusName = '已开通';
          statusColor = 'green';
          break;
        case 2:
          statusName = '进行中';
          statusColor = 'blue';
          break;
        case 3:
          statusName = '即将到期';
          statusColor = 'red';
          break;
        default:
          break;
      }
      return {
        statusName,
        statusColor,
      };
    };
    const showMax = 3;
    return () => {
      const { renderList } = props;
      return (
        <>
          <a-list border={false}>
            {renderList.map((item) => (
              <a-list-item
                action-layout="vertical"
                style={{ opacity: item.status ? 0.5 : 1 }}
              >
                {{
                  extra: () => {
                    const { statusName, statusColor } = getStatusNameColor(
                      item.messageType
                    );
                    return <a-tag color={statusColor}>{{ statusName }}</a-tag>;
                  },
                }}
                <div class="item-wrap" onClick={() => onItemClick(item)}>
                  <a-list-item-meta>
                    {{
                      // 头像插槽
                      avatar: () =>
                        item.avatar ? (
                          <a-avatar shape="circle">
                            <img src={item.avatar} />
                            <icon-desktop v-else />
                          </a-avatar>
                        ) : (
                          ''
                        ),
                      // 标题插槽
                      title: () => (
                        <a-space size={4}>
                          <span>{item.title}</span>
                          <a-typography-text type="secondary">
                            {item.subTitle}
                          </a-typography-text>
                        </a-space>
                      ),
                      // 描述信息插槽
                      description: () => (
                        <div>
                          <a-typography-paragraph
                            ellipsis={{
                              rows: 1,
                            }}
                          >
                            {item.content}
                          </a-typography-paragraph>
                          {item.type === 'message' && (
                            <a-typography-text class="time-text">
                              {item.time}
                            </a-typography-text>
                          )}
                        </div>
                      ),
                    }}
                  </a-list-item-meta>
                </div>
              </a-list-item>
            ))}
            {/* footer插槽 */}
            {{
              footer: () => '',
            }}
            <Fragment>
              <a-space
                fill
                size="0"
                class={renderList.length < showMax ? 'add-border-top' : ''}
              >
                <div class="footer-wrap">
                  <a-link onClick={allRead}>已读</a-link>
                </div>
                <div class="footer-wrap">
                  <a-link>更多</a-link>
                </div>
              </a-space>
            </Fragment>
            {/* 容器 */}
            {renderList.length && renderList.length < 3 && (
              <div
                style={{ height: `${(showMax - renderList.length) * 86}px` }}
              ></div>
            )}
          </a-list>
        </>
      );
    };
  },
});
