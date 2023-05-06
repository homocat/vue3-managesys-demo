import router from "./router/index";
import { getCookie } from "./composables/auth";
import { toast } from "./composables/utils";
import store from "./store/index";

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  const token = getCookie();

  // 如果没有登录强制跳转回登录页
  if (!token && to.path != "/login") {
    toast("请先登录", "error");
    return next({ path: "/login" });
  }

  // 防止重复登录
  if (token && to.path == "/login") {
    toast("请勿重复登录", "error");
    return next({ path: from.path ? from.path : "/" });
  }

  if (token) {
    await store.dispatch("getInfo");
  }

  next();
});