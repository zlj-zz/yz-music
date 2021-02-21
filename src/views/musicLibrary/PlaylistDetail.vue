<template>
  <div class="main">
    <detail-info-card :obj="playlist" :cardType="'pl'" @btnClick="cardClick" />

    <div class="detail_layout">
      <div class="detail_layout__main">
        <detail-songlist :songs="songs" :listType="'playlist'" />
      </div>

      <div class="detail_layout__other">
        <div class="mod_about js_box" id="album_desc" style="display: ">
          <h3 class="about__tit">简介</h3>
          <div class="about__cont">
            <p>
              {{ playlist.desc }}
            </p>
          </div>
          <!-- <a
            href="javascript:;"
            class="about__more"
            data-stat="y_new.gedan.moreinfo"
            data-left="0"
            data-top="-187"
            data-target="popup_data_detail"
            style="display: "
            >[更多]</a
          > -->
          <a href="javascript:;" class="btn_edit js_edit" style="display: none">
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
</template>

<script>
import DetailInfoCard from "components/common/DetailInfoCard";
import DetailSonglist from "components/common/DetailSonglist";
import { getPlayList, getPlaylistDetial, getSongDetail } from "api";
import { processCount, createSong, playSonglist } from "common/utils";

export default {
  data() {
    return {
      id: this.$route.query.id,
      playlist: {},
      songs: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      getPlaylistDetial(this.id).then((res) => {
        console.log(res);
        let d = res.data.playlist;
        this.playlist = {
          id: d.id,
          name: d.name,
          img: d.coverImgUrl,
          desc: d.description,
          creator: d.creator.nickname,
          creatorId: d.creator.userId,
          tags: d.creator.expertTags,
          playCount: processCount(d.playCount),
          subscribedCount: processCount(d.subscribedCount),
          shareCount: processCount(d.shareCount),
        };
        console.log(this.playlist);

        let trackIds = res.data.playlist.trackIds.map(({ id }) => id);
        let songDetails = getSongDetail(trackIds.slice(0, 500)).then((res) => {
          console.log(res.data.songs);
          let songs = res.data.songs.map(({ id, name, al, ar, mv, dt }) => {
            return createSong({
              id,
              name,
              artists: ar,
              duration: dt,
              mvId: mv,
              albumName: al.name,
              albumId: al.id,
              img: al.picUrl,
            });
          });
          this.songs = songs;
        });
      });
    },
    playAll() {
      playSonglist(this.songs);
    },
    cardClick(v) {
      if (v == "all") this.playAll();
    },
  },
  components: {
    DetailInfoCard,
    DetailSonglist,
  },
};
</script>

<style scoped>
.mod_songlist {
  font-size: 14px;
  overflow: hidden;
}
.mod_songlist {
  padding-bottom: 60px;
}
</style>
