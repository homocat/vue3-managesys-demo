import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "virtual:windi.css";
import router from "~/router/index";
import store from "./store";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(store);

import "./permision";

app.mount("#app");
