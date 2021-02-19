<template>
  <div class="main">
    <div
      class="mod_data"
      itemscope=""
      itemtype="http://schema.org/MusicRecording"
    >
      <span class="data__cover">
        <img
          id="albumImg"
          onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
          :src="album.img"
          :alt="album.name"
          class="data__photo"
        />
        <i class="data__cover_mask"></i>
      </span>
      <div class="data__cont">
        <div class="data__name">
          <h1 class="data__name_txt" :title="album.name">{{ album.name }}</h1>
        </div>

        <div class="data__singer">
          <i class="icon_singer sprite"></i
          ><a
            class="js_singer data__singer_txt"
            itemprop="byArtist"
            :title="album.artists"
            >{{ album.artists }}</a
          >
        </div>

        <ul class="data__info">
          <li class="data_info__item">类型：{{ album.type }}</li>

          <li class="data_info__item data_info__item--even">语种：国语</li>

          <li class="data_info__item">发行时间：2021-02-13</li>

          <li class="data_info__item data_info__item--even">
            唱片公司：<span>{{ album.company }}</span>
          </li>
        </ul>

        <div class="data__actions" role="toolbar">
          <a class="mod_btn_green js_all_play" @click="playAll">
            <i class="mod_btn_green__icon_play"></i>播放全部
          </a>

          <a
            href="javascript:;"
            class="mod_btn js_fav_album"
            data-stat="y_new.album.header.love"
            data-status="0"
            ><i class="mod_btn__icon_like"></i>收藏</a
          >
          <a
            class="mod_btn js_into_comment"
            data-stat="y_new.album.gotocomment"
            href="#comment_box"
            ><i class="mod_btn__icon_comment"></i>评论(15)</a
          >
          <a
            href="javascript:;"
            class="mod_btn js_more"
            data-mid="000QQkw74FD8iE"
            data-id="17519496"
            data-stat="y_new.album.header.more"
            ><i class="mod_btn__icon_menu"></i>更多</a
          >
        </div>
      </div>
    </div>
    <div class="detail_layout">
      <div class="detail_layout__main">
        <div class="mod_songlist">
          <ul class="songlist__header">
            <li class="songlist__edit songlist__edit--check sprite">
              <input type="checkbox" class="songlist__checkbox js_check_all" />
            </li>
            <li class="songlist__header_name">歌曲</li>
            <li class="songlist__header_author">歌手</li>
            <li class="songlist__header_time">时长</li>
          </ul>

          <ul class="songlist__list" id="song_box">
            <li v-for="(song, idx) in songs" :key="song.id">
              <div
                class="songlist__item"
                :claa="(idx + 1) % 2 == 0 ? 'songlist__item--even' : ''"
              >
                <div class="songlist__edit songlist__edit--check sprite">
                  <input type="checkbox" class="songlist__checkbox" />
                </div>
                <div class="songlist__number">{{ idx + 1 }}</div>
                <div class="songlist__songname">
                  <!-- <i
                    class="songlist__icon songlist__icon_exclusive sprite"
                    title="独家"
                  ></i> -->

                  <span class="songlist__songname_txt">
                    <a :title="song.name">{{ song.name }}</a>
                  </span>
                  <div class="mod_list_menu">
                    <a
                      class="list_menu__item list_menu__play js_play"
                      title="播放"
                      @click="playOne(idx)"
                    >
                      <i class="list_menu__icon_play"></i>
                      <span class="icon_txt">播放</span>
                    </a>
                    <a
                      href="javascript:;"
                      class="list_menu__item list_menu__add js_fav"
                      title="添加到歌单"
                      aria-haspopup="true"
                      data-target="menu_add"
                    >
                      <i class="list_menu__icon_add"></i>
                      <span class="icon_txt">添加到歌单</span>
                    </a>

                    <a
                      href="javascript:;"
                      class="list_menu__item list_menu__down js_down"
                      title="下载"
                      aria-haspopup="true"
                      data-target="menu_down"
                    >
                      <i class="list_menu__icon_down"></i>
                      <span class="icon_txt">下载</span>
                    </a>

                    <a
                      href="javascript:;"
                      class="list_menu__item list_menu__share js_share"
                      title="分享"
                      aria-haspopup="true"
                      data-aria="menu_share"
                    >
                      <i class="list_menu__icon_share"></i>
                      <span class="icon_txt">分享</span>
                    </a>
                  </div>
                </div>
                <div class="songlist__artist">
                  <a :title="song.artistsText" class="singer_name">{{
                    song.artistsText
                  }}</a>
                </div>
                <div class="songlist__time">{{ song.durationText }}</div>
                <div class="songlist__other"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="detail_layout__other">
        <div class="mod_about" id="album_desc" style="display: ">
          <h3 class="about__tit">简介</h3>
          <div class="about__cont">
            <p>{{ album.desc }}</p>
          </div>
          <!-- <a
            href="javascript:;"
            data-stat="y_new.album.moreinfo"
            class="about__more"
            data-left="0"
            data-top="-187"
            data-target="popup_data_detail"
            style="display: "
            >[更多]</a
          > -->
        </div>

        <div class="other_part">
          <h3 class="other_part__tit">此歌手的其他专辑</h3>
          <div class="mod_playlist">
            <ul class="playlist__list">
              <li
                class="playlist__item"
                onmouseover="this.className=(this.className+' playlist__item--hover')"
                onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
              >
                <div class="playlist__item_box">
                  <div class="playlist__cover mod_cover">
                    <a
                      href="//y.qq.com/n/yqq/album/001ybzgu1cVjIO.html"
                      class="js_album"
                      data-stat="y_new.album.otheralbum.click"
                      data-albummid="001ybzgu1cVjIO"
                      data-albumid="7270497"
                      ><img
                        src="//y.gtimg.cn/music/photo_new/T002R90x90M000001ybzgu1cVjIO_1.jpg?max_age=2592000"
                        onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                        alt="全职高手OST"
                        class="playlist__pic" /><i
                        class="mod_cover__icon_play js_play"
                        data-stat="y_new.album.otheralbum.play"
                      ></i
                    ></a>
                  </div>
                  <h4 class="playlist__title">
                    <span class="playlist__title_txt"
                      ><a
                        href="//y.qq.com/n/yqq/album/001ybzgu1cVjIO.html"
                        class="js_album"
                        data-stat="y_new.album.otheralbum.click"
                        data-albummid="001ybzgu1cVjIO"
                        data-albumid="7270497"
                        title="全职高手OST"
                        >全职高手OST</a
                      ></span
                    >
                  </h4>
                  <div class="playlist__author">2019-08-02</div>
                </div>
              </li>

              <li
                class="playlist__item"
                onmouseover="this.className=(this.className+' playlist__item--hover')"
                onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
              >
                <div class="playlist__item_box">
                  <div class="playlist__cover mod_cover">
                    <a
                      href="//y.qq.com/n/yqq/album/000hweUb3m5RLy.html"
                      class="js_album"
                      data-stat="y_new.album.otheralbum.click"
                      data-albummid="000hweUb3m5RLy"
                      data-albumid="5984191"
                      ><img
                        src="//y.gtimg.cn/music/photo_new/T002R90x90M000000hweUb3m5RLy_1.jpg?max_age=2592000"
                        onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                        alt="明日之后的你"
                        class="playlist__pic" /><i
                        class="mod_cover__icon_play js_play"
                        data-stat="y_new.album.otheralbum.play"
                      ></i
                    ></a>
                  </div>
                  <h4 class="playlist__title">
                    <span class="playlist__title_txt"
                      ><a
                        href="//y.qq.com/n/yqq/album/000hweUb3m5RLy.html"
                        class="js_album"
                        data-stat="y_new.album.otheralbum.click"
                        data-albummid="000hweUb3m5RLy"
                        data-albumid="5984191"
                        title="明日之后的你"
                        >明日之后的你</a
                      ></span
                    >
                  </h4>
                  <div class="playlist__author">2019-01-25</div>
                </div>
              </li>

              <li
                class="playlist__item"
                onmouseover="this.className=(this.className+' playlist__item--hover')"
                onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
              >
                <div class="playlist__item_box">
                  <div class="playlist__cover mod_cover">
                    <a
                      href="//y.qq.com/n/yqq/album/001SMDDu4L2gbZ.html"
                      class="js_album"
                      data-stat="y_new.album.otheralbum.click"
                      data-albummid="001SMDDu4L2gbZ"
                      data-albumid="5863053"
                      ><img
                        src="//y.gtimg.cn/music/photo_new/T002R90x90M000001SMDDu4L2gbZ_1.jpg?max_age=2592000"
                        onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                        alt="福气拱拱来"
                        class="playlist__pic" /><i
                        class="mod_cover__icon_play js_play"
                        data-stat="y_new.album.otheralbum.play"
                      ></i
                    ></a>
                  </div>
                  <h4 class="playlist__title">
                    <span class="playlist__title_txt"
                      ><a
                        href="//y.qq.com/n/yqq/album/001SMDDu4L2gbZ.html"
                        class="js_album"
                        data-stat="y_new.album.otheralbum.click"
                        data-albummid="001SMDDu4L2gbZ"
                        data-albumid="5863053"
                        title="福气拱拱来"
                        >福气拱拱来</a
                      ></span
                    >
                  </h4>
                  <div class="playlist__author">2019-01-15</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAlbum } from "api";
import { createSong, playSonglist, playTheSong } from "common/utils";

export default {
  data() {
    return {
      id: this.$route.query.id,
      album: {},
      songs: {},
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      getAlbum(this.id).then((res) => {
        console.log(res);
        let ds = res.data;
        let album = {
          id: ds.album.id,
          name: ds.album.name,
          img: ds.album.picUrl,
          desc: ds.album.description,
          artists: ds.album.artist.name,
          type: ds.album.type,
          version: ds.album.subType,
          company: ds.album.company,
          publishTime: ds.album.publishTime,
        };
        this.album = album;
        console.log(album);
        this.songs = ds.songs.map(
          ({ id, name, ar, dt, al, mv, publishTime }) => {
            return createSong({
              id,
              name,
              artists: ar,
              duration: dt,
              albumName: al.name,
              mvId: mv,
              img: al.picUrl,
            });
          }
        );
        console.log(this.songs);
      });
    },
    playAll() {
      playSonglist(this.songs);
    },
    playOne(id) {
      playTheSong(this.songs[id]);
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

.songlist__header {
  background-color: #fbfbfd;
}
.songlist__header {
  height: 50px;
  line-height: 50px;
  background-color: rgba(0, 0, 0, 0.01);
  color: #999;
}
.songlist__header,
.songlist__item {
  position: relative;
  padding-left: 46px;
  padding-right: 95px;
}

.songlist__album,
.songlist__artist,
.songlist__number,
.songlist__other,
.songlist__time {
  line-height: 50px;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}

.songlist__song_txt,
.songlist__time {
  color: #999;
}
</style>
