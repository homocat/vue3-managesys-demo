import { ElNotification, ElMessageBox, ElMessage } from "element-plus";
import nProgress from "nprogress";

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

// 显示全局loading
export function showFullLoading() {
  nProgress.start();
}

// 隐藏全局loading
export function hideFullLoading() {
  nProgress.done();
}
