<template>
  <div class="main">
    <detail-info-card :avatar_url="playlist.img" :name="playlist.name">
      <template v-slot:info>
        <detail-show-list
          :infos="{
            标签: playlist.tags,
            播放量: playlist.playCount,
            分享量: playlist.shareCount,
            收藏量: playlist.subscribedCount,
          }"
        />
        <func-bar
          :whetherCollection="playlist.subscribed"
          @btnClick="cardClick"
        />
      </template>
    </detail-info-card>

    <div class="detail_layout">
      <div class="detail_layout__main">
        <detail-songlist :songs="songs" :listType="'playlist'" />
        <!-- comment -->
        <commont-box :params="params" />
      </div>

      <div class="detail_layout__other">
        <div class="mod_about" id="album_desc" style="display: ">
          <h3 class="about__tit">简介</h3>
          <div class="about__cont">
            <p>
              {{ playlist.desc }}
            </p>
          </div>
          <a class="btn_edit js_edit" style="display: none">
            <i class="icon_txt">编辑</i>
          </a>
        </div>

        <div class="other_part" id="similaralbum" style="display: none">
          <h3 class="other_part__tit">相似歌单</h3>
          <div class="mod_playlist">
            <ul class="playlist__list"></ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <black-tip :ifShow="ifShowTip" :iconType="tipType" :tip="tip" />
</template>

<script>
import DetailInfoCard from "components/common/DetailInfoCard";
import DetailShowList from "components/common/DetailShowList";
import FuncBar from "components/common/FuncBar";
import DetailSonglist from "components/common/DetailSonglist";
import CommontBox from "components/common/CommontBox";
import BlackTip from "components/common/BlackTip";
import tipHandle from "common/showTip";
import {
  getPlayList,
  getPlaylistDetial,
  getSongDetail,
  toggleLikePlaylist,
} from "api";
import { createPlaylist, createSongs, playSonglist } from "common/utils";

export default {
  data() {
    return {
      id: this.$route.query.id,
      playlist: {},
      songs: [],
    };
  },
  computed: {
    params() {
      return {
        id: this.playlist.id,
        type: 2,
        sortType: 2,
      };
    },
  },
  created() {
    this.init();
  },
  setup() {
    return { ...tipHandle() };
  },
  methods: {
    init() {
      getPlaylistDetial(this.id).then((res) => {
        let d = res.data.playlist;
        this.playlist = createPlaylist(d);
        //console.log(this.playlist);

        let trackIds = res.data.playlist.trackIds.map(({ id }) => id);
        let songDetails = getSongDetail(trackIds.slice(0, 500)).then((res) => {
          let songs = createSongs(res.data.songs);
          this.songs = songs;
        });
      });
    },
    cardClick(v) {
      if (v == "all") playSonglist(this.songs);
      else if (v == "collection") {
        if (this.$store.state.user.isLogged) {
          if (!this.playlist.subscribed) {
            toggleLikePlaylist({ t: 1, id: this.playlist.id }).then((res) => {
              this.playlist.subscribed = true;
              this.showTip("收藏成功，已添加到收藏歌单", 1300, 0);
            });
          } else {
            toggleLikePlaylist({ t: 2, id: this.playlist.id }).then((res) => {
              this.playlist.subscribed = false;
              this.showTip("取消收藏成功", 1300, 0);
            });
          }
        } else this.showTip("请先登陆", 1300, 1);
      }
    },
  },
  components: {
    DetailInfoCard,
    DetailShowList,
    FuncBar,
    DetailSonglist,
    CommontBox,
    BlackTip,
  },
};
</script>

<style scoped>
</style>
