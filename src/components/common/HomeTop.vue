<template>
  <div class="toplist_main" v-loading="loading">
    <h1 class="list">排行榜</h1>
    <div class="home_toplist">
      <ul class="toplist__list js_list">
        <li
          class="toplist__item mod_cover"
          v-for="(toplist, idx) in toplists"
          :key="idx"
          :class="'item' + (idx + 1)"
        >
          <div class="toplist__box">
            <div id="toplist__bg" :class="'toplist__bg' + idx"></div>
            <i class="mod_cover__icon_play" @click="playSonglist(toplist)"></i>
            <i class="toplist__line"></i>
            <h3 class="toplist__hd">
              <a href="javascript:;" class="toplist__tit"
                >{{ toplistTypes[idx].name }}
              </a>
            </h3>

            <ul class="toplist__songlist">
              <li class="toplist__song" v-for="songIdx in 4" :key="songIdx">
                <div class="toplist__number">{{ songIdx }}</div>
                <div class="toplist__songname">
                  <a
                    class="js_song"
                    :data-id="toplist[songIdx - 1].id"
                    @click="gotoSongDetail(toplist[songIdx - 1].id)"
                  >
                    {{ toplist[songIdx - 1].name }}
                  </a>
                </div>
                <div class="toplist__artist">
                  <a
                    @click="
                      gotoSongerDetail(toplist[songIdx - 1].artists[0].id)
                    "
                    >{{ toplist[songIdx - 1].artistsText }}</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getPlaylistDetial, getSongDetail, toplistTypes } from "api";
import {
  createSongs,
  gotoSongDetail,
  gotoSongerDetail,
  playSonglist,
} from "common/utils";

export default {
  data() {
    return {
      loading: true,
      toplists: [],
      toplistTypes,
    };
  },
  mounted() {
    for (let key in toplistTypes) {
      this.updateTopList(toplistTypes[key].id);
    }
  },
  methods: {
    updateTopList(toplistType) {
      getPlaylistDetial(toplistType).then((res) => {
        let trackIds = res.data.playlist.trackIds.map(({ id }) => id);
        getSongDetail(trackIds).then((res) => {
          let songs = createSongs(res.data.songs);
          this.toplists.push(songs);
          this.loading = false;
        });
      });
    },
    gotoSongDetail,
    gotoSongerDetail,
    playSonglist,
  },
};
</script>

<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
}
.list {
  font-size: 31px;
}
.toplist__bg0 {
  background-image: linear-gradient(#e66754, #8888e5);
}
.toplist__bg1 {
  background-image: linear-gradient(#ffa500, #1998e5);
}
.toplist__bg2 {
  background-image: linear-gradient(#335484, #3698e5);
}
.toplist__bg3 {
  background-image: linear-gradient(#7858e5, #654125);
}
.toplist__bg4 {
  background-image: linear-gradient(#985632, #369852);
}

.toplist__songlist {
  position: absolute;
  top: 188px;
  left: 30px;
  right: 30px;
  white-space: nowrap;
  text-align: left;
}
.toplist__songlist a {
  color: #fff;
  font-size: 14px;
}
.toplist__song {
  position: relative;
  padding-left: 15px;
  margin-bottom: 27px;
}
.toplist__number {
  position: absolute;
  top: 0;
  left: 0;
}
.toplist__songname {
  overflow: hidden;
  text-overflow: ellipsis;
}
.toplist__artist {
  overflow: hidden;
  text-overflow: ellipsis;
}

.target-list:hover .arrow-btn {
  opacity: 1;
  transform: translateX(0);
  transition-duration: 0.5s;
}

.arrow-btn {
  opacity: 0;
}
</style>
