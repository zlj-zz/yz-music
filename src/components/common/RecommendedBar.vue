<template>
  <div
    class="mod_slide_box"
    style="position: relative; background-image: linear-gradient(#f5f5f5, #fff)"
  >
    <div class="section_inner" style="z-index: 2">
      <h1 class="recommended_list">歌单推荐</h1>
      <div class="target-bar">
        <a
          class="playlist"
          v-for="item in playlistType"
          :key="item.key"
          :class="item.key == selectType ? 'playlist__select' : ''"
          @click="switchType(item.key)"
          >{{ item.title }}
        </a>
      </div>

      <div class="mod_playlist mod_slide" v-loading="listLoading">
        <ul
          class="playlist__list slide__list"
          :style="{ left: showNo ? '-100%' : '0' }"
        >
          <li
            class="playlist__item slide__item"
            v-for="item in playList"
            :key="item.name"
          >
            <div class="playlist__item_box">
              <div class="playlist__cover mod_cover">
                <a class="js_playlist" @click="playTheList(item.id)">
                  <img
                    class="playlist__pic"
                    src="//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000"
                    v-lazy="item.coverImgUrl"
                    :alt="item.name"
                  /><i class="mod_cover__mask"></i
                  ><i class="mod_cover__icon_play js_play"></i>
                </a>
              </div>
              <h4 class="playlist__title">
                <span class="playlist__title_txt">
                  <a @click="gotoPlaylistDetail(item.id)">{{ item.name }}</a>
                </span>
              </h4>
              <div class="playlist__other">
                播放量：{{ processCount(item.playCount) }}
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div
        class="mod_slide_switch js_switch"
        data-stat="y_new.index.playlist.pager"
      >
        <a
          class="js_jump slide_switch__item"
          :class="showNo ? '' : 'slide_switch__item--current'"
          @mouseover="switchShow(false)"
        >
          <i class="slide_switch__bg"></i>
          <i class="icon_txt">1</i>
        </a>
        <a
          class="js_jump slide_switch__item"
          :class="showNo ? 'slide_switch__item--current' : ''"
          @mouseover="switchShow(true)"
        >
          <i class="slide_switch__bg"></i>
          <i class="icon_txt">2</i>
        </a>
      </div>
    </div>
    <push-button @btnClick="btnClick" />
  </div>
</template>

<script>
import PushButton from "components/common/PushButton";
import { getPlayList, getPlaylistDetial, getSongDetail } from "api";
import {
  processCount,
  createSong,
  playSonglist,
  gotoPlaylistDetail,
} from "common/utils";

export default {
  data() {
    return {
      listLoading: true,
      showNo: false,
      selectType: "全部",
      playlistType: [
        { title: "为你推荐", key: "全部" },
        { title: "R&B/Soul", key: "R&B/Soul" },
        { title: "网络歌曲", key: "网络歌曲" },
        { title: "ACG", key: "ACG" },
        { title: "怀旧", key: "怀旧" },
        { title: "流行", key: "流行" },
      ],
      playList: [],
    };
  },
  mounted() {
    this.updatePlayList("全部");
  },
  methods: {
    updatePlayList(key) {
      let limit = 10;
      getPlayList(limit, 1, key)
        .then((res) => {
          //console.log(res);
          this.playList = res.data.playlists;
          this.listLoading = false;
        })
        .catch((err) => console.log(err));
    },
    switchType(key) {
      if (key != this.selectType) {
        this.selectType = key;
        this.updatePlayList(key);
      }
    },
    switchShow(flag) {
      if (flag != this.showNo) this.showNo = flag;
    },
    btnClick() {
      this.showNo = !this.showNo;
    },
    playTheList(listId) {
      getPlaylistDetial(listId).then((res) => {
        let trackIds = res.data.playlist.trackIds.map(({ id }) => id);
        let songDetails = getSongDetail(trackIds.slice(0, 500)).then((res) => {
          let songs = res.data.songs.map(({ id, name, al, ar, mv, dt }) => {
            return createSong({
              id,
              name,
              artists: ar,
              duration: dt,
              mvId: mv,
              albumName: al.name,
              img: al.picUrl,
            });
          });
          //console.log(songs);
          playSonglist(songs);
        });
      });
    },
    processCount,
    gotoPlaylistDetail,
  },
  components: {
    PushButton,
  },
};
</script>

<style scoped>
/* play list bar */
.recommended_list {
  letter-spacing: 20px;
  text-align: center;
  font-size: 31px;
}
.target-bar {
  text-align: center;
  padding-bottom: 18px;
}
.playlist {
  display: inline-block;
  font-size: 16px;
  margin: 0 30px;
  text-decoration: none;
}
.playlist:hover {
  color: #31c27c;
}
.playlist__select {
  color: #31c27c;
}

/* list */
.mod_playlist {
  overflow: hidden;
  font-size: 0;
}
.mod_slide {
  overflow: hidden;
  margin-bottom: 20px;
}
.mod_playlist {
  margin-right: -20px;
}
.slide__list {
  position: relative;
  font-size: 0;
  width: 1250%;
  transition-duration: 1s;
}
.slide__item {
  width: 2%;
}
.mod_playlist .playlist__list {
  margin-right: -20px;
  padding: 0;
}
.playlist__item {
  display: inline-block;
  /*width: 18%;*/
  padding-bottom: 44px;
  overflow: hidden;
  font-size: 14px;
  vertical-align: top;
  color: #000;
  /*margin-right: 20px;*/
}
.playlist__item {
  position: relative;
  width: 1.6%;
  padding-bottom: 0;
}
.mod_playlist .playlist__item_box {
  position: relative;
  margin-right: 20px;
}
.mod_index--hot .playlist__item_box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.mod_playlist .playlist__cover {
  position: relative;
  display: block;
  overflow: hidden;
  padding-top: 100%;
  margin-bottom: 15px;
}
.mod_playlist .playlist__pic {
  height: 100%;
  object-fit: cover;
}
.mod_playlist .playlist__title {
  overflow: hidden;
}

a:hover {
  color: #31c27c;
}
</style>
