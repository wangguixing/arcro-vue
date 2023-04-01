/*
 * @Author: wangguixing
 * @Date: 2023-04-01 11:06:06
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-01 13:25:54
 * @FilePath: \src\hooks\useNotify.ts
 * @Description: 注明出处即可
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2023-04-01 11:06:06
 */

import { Notification } from '@arco-design/web-vue';
import type { NotificationConfig } from '@arco-design/web-vue';

enum notifyTitleEnum {
  SUCCESS = '成功提示',
  INFO = '消息提示',
  WARNING = '警告提示',
  ERROR = '错误提示',
}
interface NotificationProps extends NotificationConfig {
  type: 'success' | 'info' | 'warning' | 'error';
  content: string;
  onClose?: () => void;
  duration?: number;
}

type EnumTypes = keyof typeof notifyTitleEnum;

const notiTitle = (type: string) => {
  type = type.toUpperCase();
  return notifyTitleEnum[type as EnumTypes];
};
/**
 * @description: 强制封装title与duration,其他参照官方文档，错误提示显示5s，其他提示显示1s
 * @param {NotificationProps} 参照arcro-design-vue
 * @return {*} void
 */
const useNotify = ({ type, content, ...rest }: NotificationProps) => {
  Notification[type]({
    ...rest,
    closable: true,
    title: notiTitle(type) || '提示',
    content: () => content || '',
    duration: type === 'error' ? 5000 : 1000,
  });
};

export default useNotify;
