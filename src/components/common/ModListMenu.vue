<template>
  <div class="mod_list_menu">
    <a
      class="list_menu__item list_menu__play js_play"
      title="播放"
      @click="play"
    >
      <i class="list_menu__icon_play"></i>
      <span class="icon_txt">播放</span>
    </a>
    <a
      class="list_menu__item list_menu__add js_fav"
      title="添加到歌单"
      aria-haspopup="true"
    >
      <i class="list_menu__icon_add"></i>
      <span class="icon_txt">添加到歌单</span>
    </a>
    <a
      class="list_menu__item list_menu__down js_down"
      title="下载"
      aria-haspopup="true"
    >
      <i class="list_menu__icon_down"></i>
      <span class="icon_txt">下载</span>
    </a>
    <a
      class="list_menu__item list_menu__share js_share"
      title="分享"
      aria-haspopup="true"
    >
      <i class="list_menu__icon_share"></i>
      <span class="icon_txt">分享</span>
    </a>
  </div>
</template>

<script>
import { playTheSong } from "common/utils";
export default {
  props: {
    song: {
      type: Object,
      default: {},
    },
  },
  methods: {
    play() {
      if (this.song) {
        playTheSong(this.song);
      }
      console.log(this.song);
    },
  },
};
</script>

<style scoped>
</style>
