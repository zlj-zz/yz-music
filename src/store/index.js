import { createStore } from "vuex";

import musicModule from "./module/music";
import userModule from "./module/user";

export default createStore({
  modules: {
    music: musicModule,
    user: userModule
  }
});
