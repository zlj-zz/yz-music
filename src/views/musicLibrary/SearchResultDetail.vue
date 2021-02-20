<template>
  <div
    class="mod_search"
    style="background-image: url(//y.gtimg.cn/mediastyle/yqq/img/bg_search.jpg)"
    role="search"
  ></div>
  <div class="main">
    <div class="main-inner">
      <div class="result">
        <div class="mod_tab" role="nav">
          <a
            class="mod_tab__item js_tab"
            v-for="item in selectTypes"
            :key="item.typeId"
            :class="selectedType == item.typeId ? 'mod_tab__current' : ''"
            @click="changeSelectedType(item.typeId)"
            >{{ item.name }}</a
          >
        </div>

        <!-- song -->
        <div
          class="js_search_tab_cont search_tab_cont"
          id="song_box"
          style="display: block"
          v-if="selectedType == 1"
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
        <!-- album -->
        <div
          class="js_search_tab_cont search_tab_cont"
          id="album_box"
          style="display: block"
          v-if="selectedType == 10"
        >
          <div class="mod_playlist_text">
            <ul class="playlist__header">
              <li class="playlist__header_name">专辑</li>
              <li class="playlist__header_author">歌手</li>
              <li class="playlist__header_other">发行时间</li>
            </ul>
            <ul class="playlist__list">
              <li
                class="playlist__item"
                v-for="album in albums"
                :key="album.id"
              >
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
        <!-- mv -->
        <div
          class="js_search_tab_cont search_tab_cont"
          id="mv_box"
          style="display: block"
          v-if="selectedType == 1004"
        >
          <div class="mod_mv_list">
            <ul class="mv_list__list">
              <li class="mv_list__item" v-for="mv in mvs" :key="mv.id">
                <div class="mv_list__item_box" style="visibility: visible">
                  <a class="mv_list__cover mod_cover js_mv" hidefocus="true">
                    <img
                      class="mv_list__pic"
                      style="display: block; visibility: visible"
                      onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                      :alt="mv.name"
                      :src="mv.img"
                    />
                    <i class="mod_cover__icon_play"></i>
                    <!--div class="mv_list__time">04:10</div-->
                  </a>
                  <h3 class="mv_list__title">
                    <a class="js_mv" :title="mv.name">{{ mv.name }}</a>
                  </h3>
                  <p class="mv_list__singer">
                    <a class="js_singer" :title="mv.artistsText">{{
                      mv.artistsText
                    }}</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- playlist -->
        <div
          class="js_search_tab_cont search_tab_cont"
          id="playlist_box"
          style="display: block"
          v-if="selectedType == 1000"
        >
          <div class="mod_playlist_text">
            <ul class="playlist__header">
              <li class="playlist__header_name">歌单</li>
              <li class="playlist__header_author">创建人</li>
              <li class="playlist__header_other">播放量</li>
            </ul>
            <ul class="playlist__list">
              <li
                class="playlist__item"
                v-for="playlist in playlists"
                :key="playlist.id"
              >
                <div class="playlist__cover" style="visibility: visible">
                  <a class="js_playlist"
                    ><img
                      class="playlist__pic"
                      style="display: block; visibility: visible"
                      onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;"
                      :src="playlist.img"
                      :alt="playlist.name"
                  /></a>
                </div>
                <h4 class="playlist__title">
                  <span class="playlist__title_txt"
                    ><a class="js_playlist" :title="playlist.name">{{
                      playlist.name
                    }}</a></span
                  >
                </h4>
                <div class="playlist__author">
                  <a class="js_user" title="playlist.creatorName">{{
                    playlist.creatorName
                  }}</a>
                </div>
                <div class="playlist__other">{{ playlist.playCount }}</div>
              </li>
            </ul>
          </div>
        </div>
        <!-- user -->
        <div
          class="js_search_tab_cont search_tab_cont"
          id="user_box"
          style="display: block"
          v-if="selectedType == 1002"
        >
          <div class="mod_singer_list_text">
            <ul class="singer_list__list">
              <li
                class="singer_list__item"
                v-for="user in users"
                :key="user.id"
              >
                <h4 class="singer_list__title">
                  <div class="singer_list__cover" style="visibility: visible">
                    <a href="javascript:;" class="js_user">
                      <img
                        class="singer_list__pic"
                        style="display: block; visibility: visible"
                        onerror="this.src='//y.gtimg.cn/mediastyle/global/img/person_300.png?max_age=31536000';this.onerror=null;"
                        :alt="user.name"
                        :src="user.img"
                      />
                    </a>
                  </div>

                  <span class="singer_list__title_txt"
                    ><a class="js_user" :title="user.name"
                      >{{ user.name }}
                      <span class="singer_list__user_txt"> </span></a
                  ></span>
                </h4>
                <div class="singer_list__playlist">
                  歌单：{{ user.playlistCount }}
                </div>
                <div class="singer_list__count js_num_follow" data-num="78">
                  粉丝：{{ user.followeds }}
                </div>
                <div class="singer_list__other">
                  <a class="mod_btn singer_list__btn_focus js_focus_user">
                    <i class="mod_btn__icon_new"></i>关注
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- lyric -->
        <div
          class="js_search_tab_cont search_tab_cont"
          id="lyric_box"
          style="display: block"
          v-if="selectedType == 1006"
        >
          <div class="mod_lyric_list">
            <ul class="lyric_list__list">
              <li
                class="lyric_list__item"
                v-for="lyric in lyrics"
                :key="lyric.id"
              >
                <h3 class="lyric_list__tit">
                  <a title="">{{ lyric.name }}</a>
                  －
                  <a class="singer_name" :title="lyric.artistsText">{{
                    lyric.artistsText
                  }}</a>
                </h3>
                <h4 class="lyric_list__album">
                  <a class="album_name" :title="lyric.albumName">{{
                    lyric.albumName
                  }}</a>
                </h4>
                <div class="lyric_list__cont" :class="lyric.class">
                  <div v-html="processLyric(lyric.lyrics)"></div>
                </div>
                <div class="lyric_list__toolbar">
                  <button class="mod_btn js_clip" @click="moreLyric(lyric)">
                    <i class="mod_btn__icon_more"></i>
                    {{ lyric.class ? "收起" : "展开" }}
                  </button>
                  <button class="mod_btn js_lyric_copy">
                    <i class="mod_btn__icon_copy"></i>复制歌词
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailSonglist from "components/common/DetailSonglist";
import ModListMenu from "components/common/ModListMenu";
import { getSearchResult } from "api";
import {
  createSongs,
  createAlbums,
  createMvs,
  createPlaylists,
  createUsers,
} from "common/utils";

export default {
  data() {
    return {
      keyword: this.$route.query.keyword,
      selectedType: 1,
      selectTypes: [
        { name: "单曲", typeId: 1 },
        { name: "专辑", typeId: 10 },
        { name: "MV", typeId: 1004 },
        { name: "歌单", typeId: 1000 },
        { name: "用户", typeId: 1002 },
        { name: "歌词", typeId: 1006 },
      ],
      songs: [],
      albums: [],
      mvs: [],
      playlists: [],
      users: [],
      lyrics: [],
    };
  },
  created() {
    this.search();
  },
  methods: {
    changeSelectedType(id) {
      if (id != this.selectedType) this.selectedType = id;
    },
    processLyric(lyrics) {
      return lyrics.join("<br/>");
    },
    moreLyric(l) {
      console.log("jfkalj");
      l.class = l.class ? "" : "lyric_list__cont--max";
    },
    search() {
      getSearchResult({ keywords: this.keyword, type: 1 }).then((res) => {
        this.songs = createSongs(res.data.result.songs);
      });
      getSearchResult({ keywords: this.keyword, type: 10 }).then((res) => {
        this.albums = createAlbums(res.data.result.albums);
      });
      getSearchResult({ keywords: this.keyword, type: 1004 }).then((res) => {
        this.mvs = createMvs(res.data.result.mvs);
      });
      getSearchResult({ keywords: this.keyword, type: 1000 }).then((res) => {
        this.playlists = createPlaylists(res.data.result.playlists);
      });
      getSearchResult({ keywords: this.keyword, type: 1002 }).then((res) => {
        this.users = createUsers(res.data.result.userprofiles);
      });
      getSearchResult({ keywords: this.keyword, type: 1006 }).then((res) => {
        this.lyrics = createSongs(res.data.result.songs);
      });
    },
  },
  watch: {
    selectedType(v) {},
  },
  components: {
    DetailSonglist,
    ModListMenu,
  },
};
</script>

<style scoped>
blockquote,
body,
button,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
html,
input,
lengend,
li,
ol,
p,
pre,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
}
.mod_search {
  position: relative;
  height: 247px;
  background-position: 50%;
  background-size: cover;
}
.icon_txt {
  font: 0/0 a;
}
button {
  cursor: pointer;
}

.main {
  z-index: 2;
}
.main,
.section_inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.mod_tab {
  position: relative;
  zoom: 1;
  border-bottom: 1px solid #f7f7f7;
  margin-bottom: 30px;
}
.mod_tab,
.mod_tab__item {
  height: 56px;
  line-height: 56px;
}
.mod_tab__current {
  color: #31c27c;
}
.mod_tab__item {
  position: relative;
  float: left;
  font-size: 16px;
  overflow: hidden;
  margin-right: 55px;
}
.mod_tab,
.mod_tab__item {
  height: 56px;
  line-height: 56px;
}

.mod_btn__icon_play {
  width: 13px;
  height: 16px;
  background-position: -60px -220px;
}

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

.mv_list__list {
  margin-right: -20px;
  zoom: 1;
}
.mv_list__item {
  float: left;
  width: 25%;
  padding-bottom: 44px;
  overflow: hidden;
}

.singer_list__item {
  position: relative;
  height: 80px;
  display: table;
  width: 100%;
}
.singer_list__title {
  width: 40%;
  min-width: 280px;
  font-weight: 400;
  text-indent: 20px;
  overflow: hidden;
  line-height: 80px;
  padding-left: 20px;
  font-size: 0;
}
.singer_list__cover {
  position: relative;
  float: left;
  width: 60px;
  height: 60px;
  margin-top: 10px;
}
.singer_list__pic {
  height: 100%;
  object-fit: cover;
}
.singer_list__pic {
  display: block;
  width: 100%;
  min-height: 50px;
  border-radius: 50%;
}
.singer_list__title_txt {
  float: left;
  max-width: 310px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
}
.singer_list__user_txt {
  color: #999;
}
.singer_list__count,
.singer_list__other,
.singer_list__playlist,
.singer_list__title {
  display: table-cell;
  height: 80px;
  vertical-align: middle;
  box-sizing: border-box;
}
.singer_list__playlist,
.singer_list__title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.singer_list__playlist {
  width: 22%;
  padding-left: 20px;
}
.singer_list__count {
  width: 22%;
  padding-left: 15px;
}
.singer_list__other {
  width: 122px;
}
.singer_list__btn_focus {
  display: block;
  width: 122px;
  text-align: center;
  margin-right: 20px;
}

.mod_lyric_list {
  margin-top: -20px;
}
.lyric_list__item {
  position: relative;
  font-size: 14px;
  line-height: 28px;
  padding: 20px 0 20px;
  border-bottom: 1px solid #f7f7f7;
}
.lyric_list__album,
.lyric_list__tit {
  font-weight: 400;
}
.lyric_list__cont {
  height: 196px;
  overflow: hidden;
  color: #999;
}
.lyric_list__cont--max {
  height: initial;
}
.lyric_list__toolbar {
  margin-top: 10px;
}
.mod_btn {
  border: 1px solid #c9c9c9;
  color: #000;
}
.mod_btn,
.mod_btn_green {
  background-color: #fff;
  border-radius: 2px;
  font-size: 14px;
  margin-right: 6px;
  padding: 0 23px;
  height: 38px;
  line-height: 38px;
  display: inline-block;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
}
.mod_btn__icon_new {
  width: 16px;
  height: 16px;
  background-position: 0 -180px;
}
.mod_btn__icon_copy {
  width: 16px;
  height: 14px;
  background-position: -40px -100px;
  vertical-align: -2px;
}
</style>
