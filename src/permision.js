import router from "~/router/index";

// 全局前置守卫
router.beforeEach((to, from, next) => {
  console.log("全局守卫");
  next();
});
