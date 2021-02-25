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
            class="mod_tab__item"
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
        <detail-lists :lists="albums" v-if="selectedType == 10" />
        <!-- mv -->
        <show-mvs :mvs="mvs" v-if="selectedType == 1004" />
        <!-- playlist -->
        <detail-lists
          :lists="playlists"
          :kind="1"
          v-if="selectedType == 1000"
        />
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
                        src="//y.gtimg.cn/mediastyle/global/img/person_300.png?max_age=31536000"
                        v-lazy="user.img"
                        :alt="user.name"
                      />
                    </a>
                  </div>

                  <span class="singer_list__title_txt"
                    ><a :title="user.name"
                      >{{ user.name }}
                      <span class="singer_list__user_txt"> </span></a
                  ></span>
                </h4>
                <div class="singer_list__playlist">
                  歌单：{{ user.playlistCount }}
                </div>
                <div class="singer_list__count" data-num="78">
                  粉丝：{{ user.followeds }}
                </div>
                <div class="singer_list__other">
                  <a class="mod_btn singer_list__btn_focus">
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
import ShowMvs from "components/common/ShowMvs";
import ShowLyrics from "components/common/ShowLyrics";
import DetailLists from "components/common/DetailLists";
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
    ShowMvs,
    ShowLyrics,
    DetailLists,
    ModListMenu,
  },
};
</script>

<style scoped>
dl,
dt,
li,
ol,
pre,
td,
th,
ul {
  margin: 0;
  padding: 0;
}

.mod_btn,
.mod_btn_green {
  background-color: #fff;
}
</style>
