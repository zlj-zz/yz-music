import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "@/assets/css/base.scss";
import "@/assets/css/fakeqqmusic.scss";

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount("#app");

// import { getBanner } from "./api";
// getBanner().then(res => console.log(res));
