<template>
  <div class="js_box" id="like_box" style="display: block">
    <div class="mod_tab" role="nav">
      <a
        class="mod_tab__item"
        href="javascript:;"
        data-tab="like_song"
        data-stat="y_new.profile.like.tab.song"
        v-for="option in options"
        :key="option"
        :class="option == selected ? 'mod_tab__current' : ''"
        @click="select(option)"
        >{{ option }}</a
      >
    </div>
    <div class="profile_cont">
      <show-playlist :playlists="playlists" v-if="selected == '歌单'" />
      <show-albums :albums="albums" v-if="selected == '专辑'" />
      <show-mvs :mvs="mvs" v-if="selected == '视频'" />
    </div>
  </div>
</template>


<script>
import ShowPlaylist from "components/common/ShowPlaylist";
import ShowAlbums from "components/common/ShowAlbums";
import ShowMvs from "components/common/ShowMvs";
import { getUserPlaylists, getCollectedAlbum, getCollectedMvs } from "api";
import { createPlaylists, createAlbums, createMvs } from "common/utils";

export default {
  data() {
    return {
      selected: "歌单",
      options: ["歌单", "专辑", "视频"],
      playlists: [],
      albums: [],
      mvs: [],
    };
  },
  mounted() {
    this.getUserPlaylists();
    this.getCollectedAlbum();
    this.getCollectedMvs();
  },
  methods: {
    select(option) {
      if (option != this.selected) {
        this.selected = option;
      }
    },
    getUserPlaylists() {
      getUserPlaylists(this.userId).then((res) => {
        let lists = createPlaylists(res.data.playlist);
        this.playlists = lists;
      });
    },
    getCollectedAlbum() {
      getCollectedAlbum().then((res) => {
        let d = createAlbums(res.data.data);
        this.albums = d;
      });
    },
    getCollectedMvs() {
      getCollectedMvs().then((res) => {
        console.log(res);
        let d = createMvs(res.data.data);
        console.log(d);
        this.mvs = d;
      });
    },
  },
  computed: {
    userId() {
      return this.$store.state.user.user.userId;
    },
  },
  components: {
    ShowPlaylist,
    ShowAlbums,
    ShowMvs,
  },
};
</script>

<style scoped>
.mod_tab,
.mod_tab__item {
  height: 56px;
  line-height: 56px;
}
.mod_tab {
  position: relative;
  zoom: 1;
  border-bottom: 1px solid #f7f7f7;
  margin-bottom: 30px;
}
.mod_tab {
  margin-bottom: -20px;
  overflow: hidden;
  border-bottom: 0 none;
}
.mod_tab,
.mod_tab__item {
  height: 56px;
  line-height: 56px;
}
.mod_tab__item {
  position: relative;
  float: left;
  font-size: 16px;
  overflow: hidden;
  margin-right: 55px;
}
.mod_tab__current {
  color: #31c27c;
}
</style>
