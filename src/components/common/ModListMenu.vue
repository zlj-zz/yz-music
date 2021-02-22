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
      v-if="kind == 0"
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
import { playTheSong, playSonglist, createSongs } from "common/utils";
import { getPlaylistDetial, getSongDetail, getAlbum } from "api";

export default {
  props: {
    song: {
      type: Object,
      default: {},
    },
    id: { default: 0 },
    // 0: song, 1: album , 2: playlist
    kind: { default: 0 },
  },
  methods: {
    play() {
      switch (this.kind) {
        case 0:
          if (this.song) {
            playTheSong(this.song);
          }
          console.log(this.song);
          break;
        case 1:
          this.playAlbum(this.id);
          break;
        case 2:
          this.playTheList(this.id);
          break;
        default:
          console.log(this.kind);
      }
    },
    playTheList(listId) {
      getPlaylistDetial(listId).then((res) => {
        let trackIds = res.data.playlist.trackIds.map(({ id }) => id);
        let songDetails = getSongDetail(trackIds.slice(0, 500)).then((res) => {
          let songs = createSongs(res.data.songs);
          //console.log(songs);
          playSonglist(songs);
        });
      });
    },
    playAlbum(id) {
      getAlbum(this.id).then((res) => {
        let ds = res.data;
        let songs = createSongs(ds.songs);
        console.log(this.songs);
        playSonglist(songs);
      });
    },
  },
};
</script>

<style scoped>
</style>
