<template>
  <div class="" style="background-color: #333">
    <div class="main">
      <div class="video_player_box">
        <video
          id="video_player__source"
          class="video_player__source"
          controls="true"
          webkit-playsinline="true"
          isiphoneshowplaysinline="true"
          playsinline="true"
          preload="metadata"
          :src="url"
          width="1000"
          height="674"
        ></video>
      </div>
      <div class="mv__info" id="mv_control" style="">
        <h1 class="mv__title">
          <span class="mv__name" title="Falsetto">{{ mv.name }}</span>
          <span class="mv__line">-</span>
          <a class="mv__singer">{{ mv.artistsText }}</a>
        </h1>
        <span class="mv__listen">播放量：{{ mv.playCount }}</span>
      </div>
    </div>
  </div>
  <div class="main">
    <div class="detail_layout">
      <div class="detail_layout__main">
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
        <div
          class="mod_about js_box"
          id="album_desc"
          style="margin-top: 10px; display: "
        >
          <h3 class="about__tit" style="height-line: 54px; font-size: 24px">
            简介
          </h3>
          <div class="about__cont">
            <p v-if="mv.desc">{{ mv.desc }}</p>
            <p style="color: #999" v-else>还没有简介哦~</p>
          </div>
          <a class="btn_edit js_edit" style="display: none">
            <i class="icon_txt">编辑</i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommontBox from "components/common/CommontBox";
import { getMvDetail, getMvPlayUrl, getCommentsNew } from "api";
import { createMv } from "common/utils";

export default {
  data() {
    return {
      id: null,
      url: "",
      mv: {},
      pageSize: 20,
      commentPage: 1,
      commentCount: 0,
      comments: [],
    };
  },
  mounted() {
    this.id = this.$route.query.id;
    getMvDetail(this.id).then((res) => {
      this.mv = createMv(res.data.data);
      //console.log(this.mv);
    });
    this.updateMv();
    this.getComment();
  },
  methods: {
    updateMv() {
      getMvPlayUrl(this.id).then((res) => {
        this.url = res.data.data.url;
      });
    },
    getComment() {
      let params = {
        type: 1,
        pageSize: this.pageSize,
        pageNo: this.commentPage,
        id: this.id,
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
    CommontBox,
  },
};
</script>

<style scoped>
.video_player_box {
  position: relative;
  z-index: 3;
  width: 1200px;
  height: 674px;
  padding: 15px 0 10px 0;
  background-color: #000;
}
.video_player__source {
  /*position: absolute;*/
  /*top: 0;*/
  /*left: 0;*/
  width: 100%;
  height: 100%;
}

.mod_mv {
  background-color: #333;
  position: relative;
  z-index: 3;
}
.mv__info {
  height: 78px;
  line-height: 78px;
  position: relative;
}
.mv__name,
.mv__singer,
.mv__title {
  color: #fff;
  font-size: 22px;
}
.mv__title {
  font-weight: 400;
  float: left;
  margin-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 650px;
}
.mv__name {
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 350px;
}
.mv__line {
  margin: 0 8px;
}
.mv__listen {
  font-size: 14px;
  color: #999;
}
</style>
