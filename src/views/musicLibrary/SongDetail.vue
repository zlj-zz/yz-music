<template>
  <div class="main">
    <detail-info-card :obj="song" @btnClick="cardClick" />

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
                    <a class="js_playlist" @click="gotoSongDetail(simiSong.id)">
                      <img
                        :src="simiSong.img"
                        :alt="simiSong.name"
                        class="playlist__pic"
                      />
                      <i class="mod_cover__icon_play js_play"></i>
                    </a>
                  </div>
                  <h4 class="playlist__title">
                    <span class="playlist__title_txt"
                      ><a
                        class="js_playlist"
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
              <a class="mv_list__cover mod_cover js_mv" hidefocus="true">
                <img
                  class="mv_list__pic"
                  :src="mv.img"
                  onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                  alt="{{mv.name}}"
                />
                <i class="mod_cover__icon_play"></i>
              </a>
              <h3 class="mv_list__title">
                <a class="js_mv" :title="mv.name">{{ mv.name }}</a>
              </h3>

              <p class="mv_list__singer" title="mv.artistName">
                <a :title="mv.artistName" class="js_singer">
                  {{ mv.artistName }}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <black-tip :ifShow="ifShowTip" :tip="tip" />
</template>

<script>
import DetailInfoCard from "components/common/DetailInfoCard";
import BlackTip from "components/common/BlackTip";
import { getSongDetail, getSongLiyric, getSimiSong, getMvDetail } from "api";
import { createSong, formatDate, playTheSong, copyText } from "common/utils";

export default {
  data() {
    return {
      isShowAllLyric: false,
      ifShowTip: false,
      tip: "",
      song: {},
      lyric: [],
      simiSongs: null,
      mv: null,
    };
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
        //console.log(d);
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
        });
        // 如果有mv， 获取mv信息
        console.log(d.mv);
        if (d.mv != 0) {
          getMvDetail(d.mv).then((res) => {
            console.log(res);
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
        this.showTip("复制成功");
      }
    },
    showTip(tip) {
      this.tip = tip;
      this.ifShowTip = true;
      if (this.tipTimer) clearTimeout(this.tipTimer);
      setTimeout(() => {
        this.ifShowTip = false;
      }, 1000);
    },
    gotoSongDetail(id) {
      this.$router.push({
        path: "/musicLibrary/songDetail",
        query: { id: id },
      });
    },
    play() {
      playTheSong(this.song);
    },
    cardClick(v) {
      if (v == "all") this.play();
    },
  },
  components: {
    DetailInfoCard,
    BlackTip,
  },
};
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6,
li,
ol,
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
.lyric__cont {
  font-size: 14px;
  color: #000;
  line-height: 26px;
}
.c_tx_current,
.c_tx_highlight {
  color: #31c27c;
}
</style>
