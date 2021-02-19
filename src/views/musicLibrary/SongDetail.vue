<template>
  <div class="main">
    <div
      class="mod_data"
      itemscope=""
      itemtype="http://schema.org/MusicRecording"
      style="display: "
      v-if="song"
    >
      <span class="data__cover">
        <img
          :src="song.img"
          :alt="song.name"
          onerror="this.src='//y.gtimg.cn/mediastyle/music_v11/extra/default_300x300.jpg?max_age=31536000';this.onerror=null;"
          class="data__photo"
        />
      </span>
      <div class="data__cont">
        <div class="data__name">
          <h1 class="data__name_txt" :title="song.name">{{ song.name }}</h1>
        </div>
        <div class="data__singer" :title="song.artistsText">
          <i class="icon_singer sprite"></i>
          <a
            href="//y.qq.com/n/yqq/singer/001JDzPT3JdvqK.html"
            :title="song.artistsText"
            class="data__singer_txt js_singer"
            data-stat="y_new.song.header.singername"
            itemprop="byArtist"
          >
            {{ song.artistsText }}
          </a>
        </div>
        <ul class="data__info">
          <li class="data_info__item data_info__item--even">
            专辑：<a
              href="//y.qq.com/n/yqq/album/002Zwh5p4HgecI.html"
              itemprop="inAlbum"
              class="js_album"
              :title="song.albumName"
              >{{ song.albumName }}</a
            >
          </li>
          <li class="data_info__item js_lan" style="">语种：未知</li>
          <li class="data_info__item js_genre data_info__item--even" style="">
            时长：{{ song.durationText }}
          </li>
          <li class="data_info__item js_company" style="">
            唱片公司：<span>未知</span>
          </li>
          <li
            class="data_info__item js_public_time data_info__item--even"
            style=""
          >
            发行时间：{{ song.publishTime }}
          </li>
        </ul>

        <div class="data__actions" role="toolbar">
          <a class="mod_btn_green js_all_play"
            ><i class="mod_btn_green__icon_play"></i>播放</a
          >
          <a href="javascript:;" class="mod_btn js_all_like"
            ><i class="mod_btn__icon_like"></i>收藏</a
          >
          <a
            class="mod_btn js_into_comment"
            data-stat="y_new.song.gotocomment"
            href="#comment_box"
            ><i class="mod_btn__icon_comment"></i>评论(5182)</a
          >
          <a
            href="javascript:;"
            class="mod_btn js_more"
            data-id="102193483"
            data-songtype="0"
            ><i class="mod_btn__icon_menu"></i>更多</a
          >
        </div>
      </div>
    </div>

    <div class="detail_layout">
      <div class="detail_layout__main">
        <!--歌词 start-->
        <div class="mod_lyric">
          <input id="copy_content" style="display: none" />
          <div class="lyric__hd">
            <h2 class="lyric__tit">歌词</h2>
            <a
              class="btn_copy sprite"
              id="copy_link"
              href="javascript:;"
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
            <a
              href="javascript:;"
              class="c_tx_highlight js_open_lyric"
              @click="toggleLyric"
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
                onmouseover="this.className=(this.className+' playlist__item--hover')"
                onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
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
  <div
    class="mod_popup_tips"
    id="popup"
    style="z-index: 2147483647; left: 646px; top: 326px"
    :style="{ display: ifShowTip ? '' : 'none' }"
  >
    <i class="popup_tips__icon"></i>
    <h2 class="popup_tips__tit">{{ tip }}</h2>
  </div>
</template>

<script>
import { getSongDetail, getSongLiyric, getSimiSong, getMvDetail } from "api";
import { createSong, formatDate } from "common/utils";

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
        let input = document.getElementById("copy_content");

        input.value = lyricText;
        input.select();
        document.execCommand("copy");
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
  },
};
</script>

<style scoped>
.main {
  z-index: 2;
}
.main,
.section_inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}
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
li,
ol,
p,
pre,
td,
textarea,
th,
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
