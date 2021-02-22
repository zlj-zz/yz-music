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
        <show-songs :songs="songs" v-if="selectedType == 1" />
        <!-- album -->
        <show-albums :albums="albums" v-if="selectedType == 10" />
        <!-- mv -->
        <show-mvs :mvs="mvs" v-if="selectedType == 1004" />
        <!-- playlist -->
        <show-playlist :playlists="playlists" v-if="selectedType == 1000" />
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
                    <a class="js_user">
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
        <show-lyrics :lyrics="lyrics" v-if="selectedType == 1006" />
      </div>
    </div>
  </div>
</template>

<script>
import ShowSongs from "components/common/ShowSongs";
import ShowAlbums from "components/common/ShowAlbums";
import ShowMvs from "components/common/ShowMvs";
import ShowPlaylist from "components/common/ShowPlaylist";
import ShowLyrics from "components/common/ShowLyrics";
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
    ShowSongs,
    ShowAlbums,
    ShowMvs,
    ShowPlaylist,
    ShowLyrics,
    ModListMenu,
  },
};
</script>

<style scoped>
button,
dd,
dl,
dt,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
li,
ol,
p,
pre,
td,
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

.mod_btn,
.mod_btn_green {
  background-color: #fff;
}
</style>
