<template>
  <div
    class="js_search_tab_cont search_tab_cont"
    id="song_box"
    style="display: block"
  >
    <div class="mod_songlist_toolbar">
      <a class="mod_btn"><i class="mod_btn__icon_play"></i>播放全部</a>
      <a class="mod_btn"><i class="mod_btn__icon_add"></i>添加到</a>
      <a class="mod_btn"><i class="mod_btn__icon_down"></i>下载</a>
      <a class="mod_btn"><i class="mod_btn__icon_batch"></i>批量操作</a>
    </div>
    <detail-songlist :songs="songs" :listType="'playlist'" />
  </div>
</template>

<script>
import DetailSonglist from "components/common/DetailSonglist";

export default {
  props: {
    songs: {
      type: Array,
      default: [],
    },
  },
  components: { DetailSonglist },
};
</script>

<style lscoped>
</style>
