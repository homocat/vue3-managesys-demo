import { createRouter, createWebHashHistory } from "vue-router";

import Index from "~/pages/Index.vue";
import About from "~/pages/About.vue";
import NotFound from "~/pages/404.vue";
import Login from "~/pages/Login.vue";

const routes = [
  {
    path: "/",
    component: Index,
    meta: {
      title: "后台首页",
    },
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/about",
    component: About,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
