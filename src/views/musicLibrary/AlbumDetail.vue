<template>
  <div class="main">
    <detail-info-card :obj="album" :cardType="'album'" @btnClick="cardClick" />

    <div class="detail_layout">
      <div class="detail_layout__main">
        <detail-songlist :songs="songs" :listType="'album'" />
      </div>

      <div class="detail_layout__other">
        <div class="mod_about" id="album_desc" style="display: ">
          <h3 class="about__tit">简介</h3>
          <div class="about__cont">
            <p>{{ album.desc }}</p>
          </div>
          <a class="about__more" @click="toggleShowMoreInfo">[更多]</a>
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

    <div
      class="popup_data_detail"
      id="popup_data_detail"
      data-aria="popup"
      style="z-index: 2147483647"
      :style="{ display: moreInfo ? '' : 'none' }"
      v-if="album.desc"
    >
      <div class="popup_data_detail__cont">
        <h3 class="popup_data_detail__tit">歌手简介</h3>
        <p v-for="(line, idx) in album.desc.split('\n')" :key="idx">
          {{ line }}
        </p>
        <p></p>
      </div>
      <i class="popup_data_detail__arrow"></i>
    </div>
  </div>
</template>

<script>
import DetailInfoCard from "components/common/DetailInfoCard";
import DetailSonglist from "components/common/DetailSonglist";
import ModListMenu from "components/common/ModListMenu";
import { getAlbum } from "api";
import { createSong, playSonglist, formatDate } from "common/utils";

export default {
  data() {
    return {
      moreInfo: false,
      id: this.$route.query.id,
      album: {},
      songs: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      getAlbum(this.id).then((res) => {
        //console.log(res);
        let ds = res.data;
        let album = {
          id: ds.album.id,
          name: ds.album.name,
          img: ds.album.picUrl,
          desc: ds.album.description,
          artistsText: ds.album.artist.name,
          type: ds.album.type,
          version: ds.album.subType,
          company: ds.album.company,
          publishTime: formatDate(ds.album.publishTime, "yyyy-MM-dd"),
        };
        this.album = album;
        //console.log(album);
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
    toggleShowMoreInfo() {
      this.moreInfo = !this.moreInfo;
    },
    playAll() {
      playSonglist(this.songs);
    },
    cardClick(v) {
      if (v == "all") {
        this.playAll();
      }
    },
  },
  components: {
    DetailInfoCard,
    DetailSonglist,
    ModListMenu,
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
.about__tit {
  font-size: 20px;
  font-weight: 400;
  line-height: 46px;
}
.about__cont {
  max-height: 88px;
  overflow: hidden;
  font-size: 14.3px;
}

.popup_data_detail__cont {
  max-height: 400px;
  font-size: 14px;
  line-height: 22px;
  margin: 30px 5px 30px 10px;
  overflow-y: auto;
}
</style>
