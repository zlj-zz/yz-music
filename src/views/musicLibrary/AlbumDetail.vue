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
      </div>
    </div>

    <div
      class="popup_data_detail"
      id="popup_data_detail"
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
    cardClick(v) {
      if (v == "all") {
        playSonglist(this.songs);
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
li,
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
</style>
