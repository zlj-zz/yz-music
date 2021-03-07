<template>
  <div class="main">
    <detail-info-card :avatar_url="song.img" :name="song.name">
      <template v-slot:info>
        <detail-show-list
          :infos="{
            艺术家: song.artistsText,
            专辑: song.albumName,
            时长: song.durationText,
            发布时间: song.publishTime,
          }"
        />
        <func-bar :whetherCollection="song.subscribed" @btnClick="cardClick" />
      </template>
    </detail-info-card>

    <div class="detail_layout">
      <div class="detail_layout__main">
        <!--歌词 start-->
        <div class="mod_lyric">
          <div class="lyric__hd">
            <h2 class="lyric__tit">歌词</h2>
            <a
              class="btn_copy sprite"
              id="copy_link"
              title="复制歌词"
              @click="copyLyric"
              ><i class="icon_txt">复制</i></a
            >
          </div>
          <div
            class="lyric__cont"
            :class="isShowAllLyric ? '' : 'limit'"
            v-if="lyric"
          >
            <div class="lyric__cont_box" id="lrc_content">
              <p v-for="(item, idx) in lyric" :key="idx">{{ item }}</p>
            </div>
            <a class="c_tx_highlight js_open_lyric" @click="toggleLyric"
              >[{{ isShowAllLyric ? "收起" : "展开" }}]</a
            >
          </div>
        </div>
        <!--歌词 end-->

        <!-- comment -->
        <commont-box :params="params" />
      </div>
      <!--相似歌曲-->
      <div class="detail_layout__other">
        <div class="other_part" style="" id="song_playlist">
          <h3 class="other_part__tit">相似歌曲</h3>
          <div class="mod_playlist">
            <ul class="playlist__list" v-if="simiSongs">
              <li
                class="playlist__item"
                v-for="simiSong in simiSongs"
                :key="simiSong.id"
              >
                <div class="playlist__item_box">
                  <div class="playlist__cover mod_cover">
                    <a @click="gotoSongDetail(simiSong.id)">
                      <img
                        src=""
                        v-lazy="simiSong.img"
                        :alt="simiSong.name"
                        class="playlist__pic"
                      />
                      <i class="mod_cover__icon_play"></i>
                    </a>
                  </div>
                  <h4 class="playlist__title">
                    <span class="playlist__title_txt"
                      ><a
                        :title="simiSong.name"
                        @click="gotoSongDetail(simiSong.id)"
                        >{{ simiSong.name }}</a
                      ></span
                    >
                  </h4>
                  <div class="playlist__author">{{ simiSong.artistsText }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--相关MV-->
        <div class="other_part" id="song_mv" v-if="mv">
          <h3 class="other_part__tit">相关MV</h3>
          <div class="mod_mv_list">
            <div class="mv_list__item_box">
              <a class="mv_list__cover mod_cover" hidefocus="true">
                <img
                  class="mv_list__pic"
                  src="//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000"
                  v-lazy="mv.img"
                  :alt="mv.name"
                />
                <i class="mod_cover__icon_play"></i>
              </a>
              <h3 class="mv_list__title">
                <a class="js_mv" :title="mv.name">{{ mv.name }}</a>
              </h3>

              <p class="mv_list__singer" title="mv.artistName">
                <a :title="mv.artistName">
                  {{ mv.artistName }}
                </a>
              </p>
            </div>
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
import BlackTip from "components/common/BlackTip";
import tipHandle from "common/showTip";
import CommontBox from "components/common/CommontBox";
import {
  getSongDetail,
  getSongLiyric,
  getSimiSong,
  getMvDetail,
  likeSong,
} from "api";
import {
  createSong,
  formatDate,
  playTheSong,
  copyText,
  gotoSongDetail,
} from "common/utils";

export default {
  setup() {
    return { ...tipHandle() };
  },
  data() {
    return {
      isShowAllLyric: false,
      song: {},
      lyric: [],
      simiSongs: null,
      mv: null,
    };
  },
  computed: {
    params() {
      return {
        id: this.song.id,
        type: 0,
        sortType: 2,
      };
    },
  },
  created() {
    this.songId = this.$route.query.id;
    this.init();
  },
  methods: {
    init() {
      // 获取歌曲信息
      getSongDetail(this.songId).then((res) => {
        let d = res.data.songs[0];
        let subscribed = this.$store.state.user.likelist.findIndex(
          (id) => id === d.id
        );
        this.song = createSong({
          id: d.id,
          name: d.name,
          artists: d.ar,
          duration: d.dt,
          albumName: d.al.name,
          mvId: d.mv,
          img: d.al.picUrl,
          publishTime:
            d.publishTime == 0
              ? "未知"
              : formatDate(d.publishTime, "yyyy-MM-dd"),
          subscribed: subscribed == -1 ? false : true,
        });
        //console.log(this.song);
        // 如果有mv， 获取mv信息
        if (d.mv != 0) {
          getMvDetail(d.mv).then((res) => {
            //console.log(res);
            let d = res.data.data;
            this.mv = {
              id: d.id,
              name: d.name,
              img: d.cover,
              artistName: d.artistName,
            };
          });
        }
      });
      // 获取歌词
      getSongLiyric(this.songId).then((res) => {
        let d = res.data.lrc.lyric;
        this.lyric = d.split("\n").map((i) => i.slice(11));
      });
      // 获取相似歌曲
      getSimiSong(this.songId).then((res) => {
        let ds = res.data.songs;
        this.simiSongs = ds.map((d) => {
          return createSong({
            id: d.id,
            name: d.name,
            artists: d.artists,
            duration: d.duration,
            albumName: d.album.name,
            mvId: d.mv,
            img: d.album.blurPicUrl,
          });
        });
      });
    },
    toggleLyric() {
      this.isShowAllLyric = !this.isShowAllLyric;
    },
    copyLyric() {
      if (this.lyric) {
        let lyricText = this.lyric.join(" ");
        copyText(lyricText);
        this.showTip("复制成功", 1000, 0);
      }
    },
    gotoSongDetail,
    cardClick(v) {
      if (v == "all") playTheSong(this.song);
      else if (v == "collection") {
        if (this.$store.state.user.isLogged) {
          if (!this.song.subscribed) {
            likeSong({
              id: this.song.id,
            }).then((res) => {
              this.song.subscribed = true;
              this.$store.commit("user/addToLikelist", this.song.id);
              this.showTip("收藏成功，已添加到我喜欢的音乐", 1000, 0);
            });
          } else {
            likeSong({
              id: this.song.id,
              like: false,
            }).then((res) => {
              this.song.subscribed = false;
              this.$store.commit("user/delFromLikelist", this.song.id);
              this.showTip("取消收藏成功", 1000, 1);
            });
          }
        } else this.showTip("请先登陆", 1000, 1);
      }
    },
  },
  components: {
    DetailInfoCard,
    DetailShowList,
    FuncBar,
    BlackTip,
    CommontBox,
  },
};
</script>

<style scoped>
li,
p,
ul {
  margin: 0;
  margin-right: 0px;
  padding: 0;
}

.lyric__hd {
  overflow: hidden;
  line-height: 46px;
}
.lyric__tit {
  float: left;
  font-size: 20px;
  font-weight: 400;
  margin-right: 10px;
}
.btn_copy {
  float: left;
  width: 16px;
  height: 16px;
  background-position: -100px -40px;
  margin-top: 13px;
  overflow: hidden;
}
.lyric__cont {
  font-size: 14px;
  color: #000;
  line-height: 26px;
  margin-bottom: 40px;
}
.lyric__cont.limit .lyric__cont_box {
  max-height: 390px;
  overflow: hidden;
}
</style>
