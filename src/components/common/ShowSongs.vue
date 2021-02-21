<template>
  <div
    class="js_search_tab_cont search_tab_cont"
    id="song_box"
    style="display: block"
  >
    <div class="mod_songlist_toolbar">
      <a href="javascript:;" class="mod_btn js_all_play"
        ><i class="mod_btn__icon_play"></i>播放全部</a
      >
      <a href="javascript:;" class="mod_btn js_all_fav"
        ><i class="mod_btn__icon_add"></i>添加到</a
      >
      <a href="javascript:;" class="mod_btn js_all_down"
        ><i class="mod_btn__icon_down"></i>下载</a
      >
      <a href="javascript:;" class="mod_btn js_batch"
        ><i class="mod_btn__icon_batch"></i>批量操作</a
      >
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
