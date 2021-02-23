<template>
  <div class="main">
    <detail-info-card
      :obj="playlist"
      :cardType="'pl'"
      :commentCount="commentCount"
      @btnClick="cardClick"
    />

    <div class="detail_layout">
      <div class="detail_layout__main">
        <detail-songlist :songs="songs" :listType="'playlist'" />
        <!-- comment -->
        <commont-box
          :comments="comments"
          :limit="pageSize"
          :currentPage="commentPage"
          :total="commentCount"
          @current-change="currentChange"
        />
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
</template>

<script>
import DetailInfoCard from "components/common/DetailInfoCard";
import DetailSonglist from "components/common/DetailSonglist";
import CommontBox from "components/common/CommontBox";
import {
  getPlayList,
  getPlaylistDetial,
  getSongDetail,
  getCommentsNew,
} from "api";
import { processCount, createSong, playSonglist } from "common/utils";

export default {
  data() {
    return {
      id: this.$route.query.id,
      playlist: {},
      songs: [],
      pageSize: 20,
      commentPage: 1,
      commentCount: 0,
      comments: [],
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
        this.getComment();
      });
    },
    cardClick(v) {
      if (v == "all") playSonglist(this.songs);
    },
    getComment() {
      let params = {
        type: 2,
        pageSize: this.pageSize,
        pageNo: this.commentPage,
        id: this.playlist.id,
        sortType: 2,
      };
      getCommentsNew(params).then((res) => {
        this.commentCount =
          res.data.data.totalCount > 5000 ? 5000 : res.data.data.totalCount;
        this.comments = res.data.data.comments;
      });
    },
    currentChange(v) {
      this.commentPage = v;
    },
  },
  watch: {
    commentPage() {
      this.getComment();
    },
  },
  components: {
    DetailInfoCard,
    DetailSonglist,
    CommontBox,
  },
};
</script>

<style scoped>
</style>
