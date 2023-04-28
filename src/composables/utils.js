import { ElNotification } from "element-plus";

// Element 消息弹窗, 最后一个参数默认message为纯文本
export function toast(
  message,
  type = "success",
  dangerouslyUseHTMLString = false
) {
  ElNotification({
    message,
    type,
    duration: 3000,
  });
}
