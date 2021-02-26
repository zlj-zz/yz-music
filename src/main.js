import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "@/assets/css/base.scss";
import "@/assets/css/fakeqqmusic.scss";
import LazyPlugin from "common/lazy-load";
import {
  ElIcon,
  ElLoading,
  ElBacktop,
  ElInput,
  ElAutocomplete,
  ElCarousel,
  ElCarouselItem,
  ElPagination,
  ElEmpty,
  ElPopover,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElStep,
  ElSteps
} from "element-plus";

createApp(App)
  .use(store)
  .use(router)
  .use(LazyPlugin)
  .use(ElIcon)
  .use(ElLoading)
  .use(ElBacktop)
  .use(ElInput)
  .use(ElAutocomplete)
  .use(ElCarousel)
  .use(ElCarouselItem)
  .use(ElPagination)
  .use(ElEmpty)
  .use(ElPopover)
  .use(ElDropdown)
  .use(ElDropdownMenu)
  .use(ElDropdownItem)
  .use(ElStep)
  .use(ElSteps)
  .mount("#app");
