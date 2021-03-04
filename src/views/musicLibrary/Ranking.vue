<template>
  <div id="mian">
    <div class="toplist_nav">
      <dl class="toplist_nav__list" v-for="(items, key) in data" :key="key">
        <dt class="toplist_nav__tit">{{ key }}</dt>
        <dd class="toplist_nav__item">
          <a
            class="toplist_nav__link"
            v-for="item in items"
            :key="item.dataId"
            :class="
              item.dataId == seletedType ? 'toplist_nav__link--current' : ''
            "
            @click="onSelectType(item)"
            >{{ item.name }}</a
          >
        </dd>
      </dl>
    </div>

    <div class="mod_toplist">
      <div class="toplist__hd_rk">
        <h1 class="toplist__tit1">{{ seletedTypeName }}</h1>
        <span class="toplist_switch">
          <span class="toplist_switch__data">{{ updateTime }}</span>
        </span>
        <el-popover
          placement="top-start"
          :title="seletedTypeName"
          :width="450"
          trigger="hover"
          :content="desc"
        >
          <template #reference>
            <a class="toplist__rule">榜单规则</a>
          </template>
        </el-popover>
      </div>
      <div class="mod_songlist_toolbar">
        <a class="mod_btn_green js_all_play" @click="playSonglist(listDatas)"
          ><i class="mod_btn_green__icon_play"></i>播放全部</a
        >
        <!-- <a class="mod_btn js_all_fav"
          ><i class="mod_btn__icon_add"></i>添加到</a
        > -->
        <!-- <a class="mod_btn js_all_down"
          ><i class="mod_btn__icon_down"></i>下载</a
        > -->
        <!-- <a class="mod_btn js_batch"
          ><i class="mod_btn__icon_batch"></i>批量操作</a
        > -->
        <a class="mod_btn js_into_comment" href="#comment_box"
          ><i class="mod_btn__icon_comment"></i>评论{{
            "(" + processCount(commentCount) + ")"
          }}</a
        >
      </div>

      <div class="mod_songlist" v-loading="loading">
        <ul class="songlist__header">
          <li class="songlist__edit sprite">
            <input type="checkbox" class="songlist__checkbox" />
          </li>
          <li class="songlist__header_name">歌曲</li>
          <li class="songlist__header_author">歌手</li>
          <li class="songlist__header_time">时长</li>
        </ul>

        <ul class="songlist__list" v-if="listDatas.length > 0">
          <li v-for="(song, idx) in listDatas" :key="song.id" :id="song.id">
            <div
              class="songlist__item"
              :class="idx % 2 == 0 ? 'songlist__item--even' : ''"
              onmouseover="this.className=(this.className+' songlist__item--hover')"
              onmouseout="this.className=this.className.replace(/ songlist__item--hover/, '')"
            >
              <div class="songlist__edit songlist__edit--check sprite">
                <input type="checkbox" class="songlist__checkbox" />
              </div>

              <div
                class="songlist__number"
                :class="idx < 3 ? 'songlist__number--top' : ''"
              >
                {{ idx + 1 }}
              </div>

              <div class="songlist__rank">
                <i :class="processRanking(song.rankingChange)"></i
                >{{
                  song.rankingChange > 0
                    ? song.rankingChange
                    : song.rankingChange == -9999
                    ? ""
                    : song.rankingChange * -1
                }}
              </div>

              <div class="songlist__songname">
                <!-- <i
                  class="songlist__icon songlist__icon_exclusive sprite"
                  title="独家"
                ></i> -->

                <a
                  class="songlist__icon songlist__icon_mv sprite"
                  rel="noopener"
                  title="MV"
                  :style="{ display: song.mvId == 0 ? 'none' : '' }"
                  @click="gotoMvDetail(song.mvId)"
                  ><span class="icon_txt">MV</span></a
                >

                <span
                  class="songlist__songname_txt"
                  style="visibility: visible"
                >
                  <a class="songlist__cover album_name">
                    <img
                      class="songlist__pic"
                      style="display: block; visibility: visible"
                      src=""
                      v-lazy="song.img"
                      :alt="song.name"
                    />
                  </a>
                  <a :title="song.name" @click="gotoSongDetail(song.id)">
                    {{ song.name }}
                  </a>
                </span>
                <!-- mod list menu -->
                <mod-list-menu :song="song" />
              </div>

              <div class="songlist__artist" :title="song.name">
                <a title="song.artistsText" class="singer_name">{{
                  song.artistsText
                }}</a>
              </div>
              <div class="songlist__time">
                {{ song.durationText }}
              </div>
              <div class="songlist__other"></div>
            </div>
          </li>
        </ul>
      </div>

      <!--commont-->
      <commont-box
        :comments="comments"
        :limit="pageSize"
        :currentPage="commentPage"
        :total="commentCount"
        @current-change="currentChange"
      />
    </div>
  </div>
</template>

<script>
import ModListMenu from "components/common/ModListMenu";
import CommontBox from "components/common/CommontBox";
import {
  topRankingtype,
  aereRankingtype,
  specialRankingtype,
  globalRankingtype,
  getPlaylistDetial,
  getSongDetail,
  getCommentsNew,
} from "api";
import {
  isDef,
  createSong,
  playSonglist,
  gotoSongDetail,
  gotoMvDetail,
  processCount,
  formatDate,
} from "common/utils";

export default {
  data() {
    return {
      loading: true,
      data: {
        巅峰榜: topRankingtype,
        地区榜: aereRankingtype,
        特色榜: specialRankingtype,
        全球榜: globalRankingtype,
      },
      seletedTypeName: "飙升榜",
      seletedType: "19723756",
      desc: "",
      updateTime: "",
      listDatas: [],
      pageSize: 20,
      commentPage: 1,
      commentCount: 0,
      comments: [],
    };
  },
  mounted() {
    this.updatedTopList();
    this.getComment();
  },
  methods: {
    onSelectType(type) {
      this.seletedType = type.dataId;
      this.seletedTypeName = type.name;
    },
    formatTime(duration) {
      return formatTime(duration);
    },
    updatedTopList() {
      getPlaylistDetial(this.seletedType).then((res) => {
        //console.log(res);
        // 获取榜单信息
        this.desc = res.data.playlist.description;
        this.updateTime = formatDate(
          res.data.playlist.updateTime,
          "yyyy-MM-dd"
        );
        // 获取榜单歌曲列表
        let trackIds = res.data.playlist.trackIds;
        let ids = trackIds.map(({ id }) => id);
        getSongDetail(ids).then((res) => {
          let tracks = res.data.songs;
          let songs = [];
          for (let i = 0; i < tracks.length; i++) {
            let song = createSong({
              id: tracks[i].id,
              name: tracks[i].name,
              artists: tracks[i].ar,
              duration: tracks[i].dt,
              mvId: tracks[i].mv,
              albumName: tracks[i].al.name,
              img: tracks[i].al.picUrl,
            });
            if (trackIds[i].lr) {
              song.rankingChange = trackIds[i].lr - i;
            } else {
              song.rankingChange = -9999;
            }
            songs.push(song);
          }
          //console.log(songs);
          this.listDatas = songs;
          this.loading = false;
        });
      });
    },
    processRanking(data) {
      if (data > 0) return "icon_rank_up";
      else if (data == 0) return "icon_rank_keep";
      else if (data == -9999) return "icon_rank_new";
      else return "icon_rank_down";
    },
    getComment() {
      let params = {
        type: 2,
        pageSize: this.pageSize,
        pageNo: this.commentPage,
        id: this.seletedType,
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
    processCount,
    playSonglist,
    gotoSongDetail,
    gotoMvDetail,
  },
  watch: {
    seletedType(newType) {
      this.updatedTopList();
      this.commentPage = 1;
      this.getComment();
    },
    commentPage() {
      this.getComment();
    },
  },
  components: {
    ModListMenu,
    CommontBox,
  },
};
</script>

<style scoped>
/*总体css*/
#mian {
  padding-top: 60px;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  color: #000;
  font-size: 14px;
  line-height: 1.5;
}
a.hover {
  color: #31c27c;
}
dd,
h1,
ul,
li {
  margin: 0;
  padding: 0;
}

/*overwrite*/
.mod_btn,
.mod_btn_green {
  text-align: left;
}
.songlist__item {
  height: 80px;
}
.songlist__album,
.songlist__artist,
.songlist__number,
.songlist__other,
.songlist__rank,
.songlist__songname,
.songlist__time {
  line-height: 80px;
  height: 80px;
}
.songlist__number {
  width: 50px;
  top: 2px;
  left: 0;
  text-align: left;
  font-size: 24px;
  color: #333;
}
.songlist__number--top {
  color: #ff4222;
}
.songlist__header,
.songlist__item {
  padding-left: 122px;
  padding-right: 95px;
}
.songlist__header_name,
.songlist__songname {
  width: 72%;
}
.songlist__album,
.songlist__artist,
.songlist__header_album,
.songlist__header_author {
  float: left;
  padding-left: 15px;
  width: 25.5%;
  box-sizing: border-box;
}
.songlist__rank {
  position: absolute;
  top: 0;
  left: 48px;
  width: 72px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #999;
}
</style>
