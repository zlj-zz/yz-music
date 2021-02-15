import { createStore } from "vuex";

import musicModule from "./module/music";

export default createStore({
  modules: {
    music: musicModule
  }
});
