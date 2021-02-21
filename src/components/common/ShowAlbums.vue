<template>
  <div
    class="js_search_tab_cont search_tab_cont"
    id="album_box"
    style="display: block"
  >
    <div class="mod_playlist_text">
      <ul class="playlist__header">
        <li class="playlist__header_name">专辑</li>
        <li class="playlist__header_author">歌手</li>
        <li class="playlist__header_other">发行时间</li>
      </ul>
      <ul class="playlist__list">
        <li class="playlist__item" v-for="album in albums" :key="album.id">
          <div class="playlist__cover" style="visibility: visible">
            <a class="js_album"
              ><img
                class="playlist__pic"
                style="display: block; visibility: visible"
                onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                :alt="album.name"
                :src="album.img"
            /></a>
          </div>
          <h4 class="playlist__title">
            <span class="playlist__title_txt"
              ><a class="js_album" :title="album.name">{{
                album.name
              }}</a></span
            >
          </h4>
          <div class="playlist__author">
            <a class="js_singer" :title="album.artistsText">{{
              album.artistsText
            }}</a>
          </div>
          <div class="playlist__other">{{ album.publishTime }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    albums: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style scoped>
.mod_playlist_text {
  zoom: 1;
  font-size: 14px;
}
.mod_lyric_list,
.mod_mv_list,
.mod_playlist_text,
.mod_songlist {
  padding-bottom: 40px;
}
.mod_playlist_text .playlist__header {
  height: 50px;
  line-height: 50px;
  background-color: #fbfbfd;
  color: #999;
}
.mod_playlist_text .playlist__author,
.mod_playlist_text .playlist__header_author,
.mod_playlist_text .playlist__header_name,
.mod_playlist_text .playlist__header_number,
.mod_playlist_text .playlist__number {
  float: left;
  padding-left: 20px;
}
.mod_playlist_text .playlist__header_name {
  width: 57%;
}
.mod_playlist_text .playlist__author,
.mod_playlist_text .playlist__header_author {
  width: 30%;
}
.mod_playlist_text .playlist__header_other,
.mod_playlist_text .playlist__other {
  width: 7.5%;
}
.mod_playlist_text .playlist__header_other,
.mod_playlist_text .playlist__other {
  float: right;
  padding-right: 20px;
  text-align: right;
}
.mod_playlist_text .playlist__item {
  position: relative;
  height: 70px;
  line-height: 70px;
  zoom: 1;
  overflow: hidden;
  clear: both;
  font-size: 0;
}
.mod_playlist_text .playlist__cover {
  float: left;
  width: 50px;
  height: 50px;
  overflow: hidden;
  margin-top: 10px;
  padding-left: 20px;
}
.mod_playlist_text .playlist__pic {
  height: 100%;
  object-fit: cover;
}
.mod_playlist_text .playlist__pic {
  display: block;
  width: 100%;
  min-height: 50px;
}
.mod_playlist_text .playlist__author,
.mod_playlist_text .playlist__number,
.mod_playlist_text .playlist__other,
.mod_playlist_text .playlist__title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.mod_playlist_text .playlist__title {
  width: 52.66667%;
  font-weight: 400;
  text-indent: 15px;
  overflow: hidden;
}
.mod_playlist_text .playlist__title_txt {
  float: left;
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mod_playlist_text .playlist__author,
.mod_playlist_text .playlist__count,
.mod_playlist_text .playlist__number,
.mod_playlist_text .playlist__title {
  float: left;
  height: 70px;
}
.mod_playlist_text .playlist__author,
.mod_playlist_text .playlist__header_author {
  width: 30%;
}
.mod_playlist_text .playlist__author,
.mod_playlist_text .playlist__number,
.mod_playlist_text .playlist__other,
.mod_playlist_text .playlist__title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
</style>
