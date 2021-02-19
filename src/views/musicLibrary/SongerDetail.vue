<template>
  <div class="songer-main">
    <detail-info-card
      :obj="songer"
      :cardType="'songer'"
      @btnClick="playHotSongs"
      @moreClick="toggleShowMoreInfo"
    />

    <div id="index_tab" class="js_tab">
      <div class="mod_part">
        <div class="part__hd">
          <h2 class="part__tit">热门歌曲</h2>

          <a class="part__more js_goto_tab">
            全部<i class="icon_part_arrow sprite"></i>
          </a>
        </div>

        <detail-songlist :songs="hotSongs" :listType="'songer'" />
      </div>

      <div class="mod_part" v-if="albums.length > 0">
        <div class="part__hd">
          <h2 class="part__tit">专辑</h2>
        </div>
        <div class="mod_playlist">
          <ul class="playlist__list" id="albumlist">
            <li
              class="playlist__item"
              onmouseover="this.className=(this.className+' playlist__item--hover')"
              onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
              v-for="album in albums"
              :key="album.id"
            >
              <div class="playlist__item_box">
                <div class="playlist__cover mod_cover">
                  <a class="js_album">
                    <img
                      class="playlist__pic"
                      onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                      :src="album.img"
                      :alt="album.name"
                    />
                    <i
                      class="mod_cover__icon_play js_play"
                      @click="playAlbum(album.id)"
                    ></i>
                  </a>
                </div>
                <h4 class="playlist__title">
                  <span class="playlist__title_txt">
                    <a
                      class="js_album"
                      :title="album.name"
                      @click="gotoAlbumDetail(album.id)"
                      >{{ album.name }}</a
                    >
                  </span>
                </h4>
                <div class="playlist__other">{{ album.publishTime }}</div>
                <a class="btn_operate_menu js_albumlist_more">
                  <span class="icon_txt">更多</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="mod_part" v-if="mvs.length > 0">
        <div class="part__hd">
          <h2 class="part__tit">MV</h2>
          <a class="part__more js_goto_tab">
            全部<i class="icon_part_arrow sprite"></i>
          </a>
        </div>
        <div class="mod_mv">
          <ul class="mv_list__list" id="mvlist">
            <li class="mv_list__item" v-for="mv in mvs" :key="mv.id">
              <div class="mv_list__item_box">
                <a class="mv_list__cover mod_cover js_mv" hidefocus="true">
                  <img
                    class="mv_list__pic"
                    onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                    :src="mv.img"
                    :alt="mv.name"
                  />
                  <i class="mod_cover__icon_play"></i>
                </a>
                <h3 class="mv_list__title">
                  <a class="js_mv" :title="mv.name">{{ mv.name }}</a>
                </h3>

                <div class="mv_list__info">
                  <span class="mv_list__listen"
                    ><i class="mv_list__listen_icon sprite"></i
                    >{{ mv.playCount }}</span
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="mod_part" id="similar" style="" v-if="simiSongers.length > 0">
        <div class="part__hd">
          <h2 class="part__tit">相似歌手</h2>
        </div>
        <div class="mod_singer_list">
          <ul class="singer_list__list">
            <li
              class="singer_list__item"
              v-for="songer in simiSongers"
              :key="songer.id"
            >
              <div class="singer_list__item_box">
                <a
                  class="singer_list__cover js_singer"
                  hidefocus="true"
                  :title="songer.name"
                  @click="gotoSongerDetail({ id: songer.id })"
                >
                  <img
                    class="singer_list__pic"
                    onerror="this.src='//y.gtimg.cn/mediastyle/global/img/singer_300.png?max_age=31536000';this.onerror=null;"
                    :src="songer.img"
                    :alt="songer.name"
                  />
                </a>
                <h3 class="singer_list__title">
                  <a
                    class="js_singer"
                    :title="songer.name"
                    @click="gotoSongerDetail({ id: songer.id })"
                    >{{ songer.name }}</a
                  >
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="popup_data_detail"
      id="popup_data_detail"
      data-aria="popup"
      style="z-index: 2147483647"
      :style="{ display: moreInfo ? '' : 'none' }"
      v-if="songer.desc"
    >
      <div class="popup_data_detail__cont">
        <h3 class="popup_data_detail__tit">歌手简介</h3>
        <p v-for="(line, idx) in songer.desc.split('\n')" :key="idx">
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
import {
  getUserDetail,
  getSongerDetail,
  getSongerTop50,
  getSimiSongers,
  getSongerAlbums,
  getSongerMvs,
  getAlbum,
} from "api";
import {
  createSonger,
  createSimiSonger,
  createUser,
  createSong,
  createAlbum,
  createMv,
  playSonglist,
} from "common/utils";

export default {
  data() {
    return {
      moreInfo: false,
      id: null,
      songer: {},
      simiSongers: [],
      hotSongs: [],
      songs: [],
      albums: [],
      mvs: [],
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.init();
  },
  methods: {
    async init() {
      // Get songer detail
      const res1 = await getSongerDetail(this.id);
      this.songer = createSonger(res1.data.data);

      // Get songer top 50
      const res2 = await getSongerTop50(this.id);
      this.hotSongs = res2.data.songs.map((song) => {
        return createSong({
          id: song.id,
          name: song.name,
          artists: song.ar,
          duration: song.dt,
          albumName: song.al.name,
          img: song.al.picUrl,
        });
      });

      // Get simi songer
      const res3 = await getSimiSongers(this.id);
      let simiSongers = res3.data.artists.map((songer) => {
        return createSimiSonger(songer);
      });
      this.simiSongers =
        simiSongers.length > 5 ? simiSongers.slice(0, 5) : simiSongers;

      // Get songer album
      const res4 = await getSongerAlbums({ id: this.id, limit: 5, offset: 0 });
      console.log(res4);
      this.albums = res4.data.hotAlbums.map(
        ({ id, name, publishTime, artists, picUrl }) => {
          return createAlbum({
            id,
            name,
            img: picUrl,
            artists,
            publishTime,
          });
        }
      );

      // Get songer mv
      const res5 = await getSongerMvs(this.id);
      let mvs = res5.data.mvs.map(
        ({ id, name, imgurl, duration, playCount, publishTime }) => {
          return createMv({
            id,
            name,
            img: imgurl,
            duration,
            playCount,
            publishTime,
          });
        }
      );
      this.mvs = mvs.length > 5 ? mvs.slice(0, 5) : mvs;
    },
    playHotSongs() {
      playSonglist(this.hotSongs);
    },
    toggleShowMoreInfo() {
      this.moreInfo = !this.moreInfo;
    },
    playAlbum(id) {
      getAlbum(id).then((res) => {
        let songs = res.data.songs.map(
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
        playSonglist(songs);
      });
    },
    gotoAlbumDetail(id) {
      this.$router.push({
        path: "/musicLibrary/albumDetail",
        query: { id: id },
      });
    },
    gotoSongerDetail(query) {
      this.$router.push({ path: "/musicLibrary/songerDetail", query: query });
    },
  },
  components: {
    DetailInfoCard,
    DetailSonglist,
  },
};
</script>

<style scoped>
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
lengend,
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
.songer-main {
  z-index: 2;
}
.songer-main,
.section_inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

/*overwrite*/
.data__cont {
  padding-top: 31px;
}
/*overwrite*/
.data__name_txt {
  float: left;
  font-size: 38px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 90%;
  margin-right: 10px;
}
/*overwrite*/
.data__actions {
  bottom: 30px;
}
.data_statistic__item {
  display: inline-block;
  border-right: solid 1px #c9c9c9;
  text-align: center;
  padding-right: 20px;
  margin-right: 20px;
  font-size: 18px;
}
.data_statistic__item--last {
  border-right: 0 none;
}

.mod_part .mv_list__item,
.mod_part .singer_list__item {
  width: 20%;
}
.mod_part .mv_list__item,
.mod_part .playlist__item {
  padding-bottom: 0;
}
.mv_list__list {
  margin-right: -20px;
  zoom: 1;
}
.mv_list__item {
  float: left;
  width: 25%;
  padding-bottom: 44px;
  overflow: hidden;
}

.mod_singer_list {
  overflow: hidden;
  text-align: center;
}
.singer_list__list {
  margin-right: -20px;
  overflow: hidden;
  zoom: 1;
  margin-bottom: -24px;
}

.singer_list__item {
  float: left;
  width: 20%;
  margin-bottom: 20px;
  overflow: hidden;
}
.singer_list__item_box {
  position: relative;
  margin-right: 20px;
  background-color: #fbfbfd;
  min-height: 195px;
  padding: 25px 0;
  overflow: hidden;
}
.singer_list__title {
  font-size: 16px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  zoom: 1;
  *width: 100%;
  margin: 20px 30px 4px;
}

.mod_mv {
  height: 183px;
}

.popup_data_detail {
  top: 128px;
  right: 85px;
}
.popup_data_detail__cont {
  max-height: 250px;
  font-size: 14px;
  line-height: 22px;
  margin: 30px 5px 30px 10px;
  overflow-y: auto;
}
</style>
