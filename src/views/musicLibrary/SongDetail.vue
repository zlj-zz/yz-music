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
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
a:hover {
  color: #31c27c;
}

.mod_data {
  position: relative;
  height: 250px;
  padding-left: 305px;
  margin-top: 40px;
  margin-bottom: 35px;
}
.data__cover {
  position: absolute;
  left: 0;
  top: 0;
  width: 250px;
  height: 250px;
}
.data__cont {
  padding-top: 13px;
}
.data__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.data__name {
  overflow: hidden;
  height: 50px;
  line-height: 50px;
}
.data__name_txt {
  float: left;
  font-size: 31px;
  line-height: 50px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70%;
  margin-right: 10px;
}
.icon_singer {
  float: left;
  width: 16px;
  height: 16px;
  background-position: -20px -240px;
  margin: 5px 7px 0 0;
}
.data__singer_txt {
  font-size: 16px;
  color: #333;
}
.data__info {
  width: 450px;
  overflow: hidden;
  padding-top: 8px;
}
.data_info__item {
  float: left;
  line-height: 27px;
  width: 166px;
  margin-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
}
.data_info__item--even {
  width: 250px;
}
.data__actions {
  position: absolute;
  bottom: 23px;
  font-size: 0;
}

.data__actions .mod_btn,
.data__actions .mod_btn_green {
  min-width: 122px;
  text-align: center;
  padding: 0 18px;
  font-family: 微软雅黑;
}
.mod_btn_green {
  border: 1px solid #31c27c;
  background-color: #31c27c;
  color: #fff;
}
.mod_btn {
  border: 1px solid #c9c9c9;
  color: #000;
}
.mod_btn,
.mod_btn_green {
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
.mod_btn_green__icon_play {
  width: 13px;
  height: 16px;
  background-position: -80px -220px;
  vertical-align: -3px;
}
.mod_btn__icon_like {
  width: 16px;
  height: 16px;
  background-position: -60px 0;
  vertical-align: -4px;
}
.mod_btn__icon_comment {
  width: 16px;
  height: 16px;
  background-position: -140px -120px;
  vertical-align: -3px;
}
.mod_btn__icon_menu {
  width: 16px;
  height: 16px;
  background-position: -20px -80px;
}

.detail_layout {
  padding-right: 343px;
}
.detail_layout__main {
  float: left;
  width: 100%;
  padding-bottom: 20px;
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

.detail_layout__other {
  float: right;
  position: relative;
  width: 290px;
  margin-right: -343px;
  padding-bottom: 20px;
}
.other_part {
  overflow: hidden;
  margin-bottom: 10px;
}
.other_part__tit {
  font-size: 20px;
  font-weight: 400;
  line-height: 46px;
}
.mod_playlist {
  overflow: hidden;
  font-size: 0;
}
.mod_playlist .playlist__list {
  margin-right: -20px;
}
.mod_playlist .playlist__item {
  display: inline-block;
  width: 20%;
  padding-bottom: 44px;
  overflow: hidden;
  font-size: 14px;
  vertical-align: top;
}
.mod_playlist .playlist__item_box {
  position: relative;
  margin-right: 20px;
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
.mod_playlist .playlist__pic {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.mod_playlist .playlist__title {
  overflow: hidden;
}
.mod_playlist .playlist__title_txt {
  float: left;
  max-width: 100%;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
  max-height: 44px;
}
.mod_playlist .playlist__author,
.mod_playlist .playlist__author a,
.mod_playlist .playlist__other {
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 22px;
}
.mod_mv_list {
  overflow: hidden;
}
.detail_layout__other .playlist__item {
  width: 33.333333%;
  padding-bottom: 14px;
}
.detail_layout__other .mv_list__item_box {
  margin-right: 0;
}
.detail_layout__other .mv_list__cover,
.detail_layout__other .playlist__cover {
  margin-bottom: 4px;
}
.detail_layout__other .playlist__cover:hover .playlist__pic,
.detail_layout__other .playlist__pic {
  -webkit-transform: none;
  -webkit-transition: none;
  transform: none;
  transition: none;
}
.detail_layout__other .mv_list__singer,
.detail_layout__other .mv_list__title,
.detail_layout__other .playlist__title,
.detail_layout__other .playlist__title_txt {
  line-height: 1.5;
  margin-bottom: 0;
}

.mod_popup_tips {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 37px 46px 25px;
  line-height: 22px;
  border-radius: 3px;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr='#B2000000', endColorstr='#B2000000');
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  text-align: center;
}
.popup_tips__icon {
  display: block;
  width: 46px;
  height: 46px;
  background-position: 0 -150px;
  margin: 0 auto 16px;
}
.popup_tips__tit {
  font-size: 14px;
  color: #fff;
  font-weight: 400;
}
</style>
