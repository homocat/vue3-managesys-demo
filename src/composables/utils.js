import { ElNotification, ElMessageBox, ElMessage } from "element-plus";

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

export function messagebox(content = "", type = "warning", title = "") {
  return ElMessageBox.confirm(content, title, {
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    type,
  })
    .then(() => {
      ElMessage({
        type: "success",
        message: "completed",
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "canceled",
      });
    });
}
