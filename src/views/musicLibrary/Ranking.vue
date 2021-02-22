<template>
  <div id="mian">
    <div class="toplist_nav">
      <dl class="toplist_nav__list">
        <dt class="toplist_nav__tit">巅峰榜</dt>

        <dd class="toplist_nav__item">
          <a
            class="toplist_nav__link"
            v-for="item in topRankingtype"
            :key="item.dataId"
            :class="
              item.dataId == seletedType ? 'toplist_nav__link--current' : ''
            "
            @click="onSelectType(item)"
            >{{ item.name }}</a
          >
        </dd>
      </dl>

      <dl class="toplist_nav__list">
        <dt class="toplist_nav__tit">地区榜</dt>

        <dd class="toplist_nav__item">
          <a
            class="toplist_nav__link"
            v-for="item in aereRankingtype"
            :key="item.dataId"
            :class="
              item.dataId == seletedType ? 'toplist_nav__link--current' : ''
            "
            @click="onSelectType(item)"
            >{{ item.name }}</a
          >
        </dd>
      </dl>

      <dl class="toplist_nav__list">
        <dt class="toplist_nav__tit">特色榜</dt>

        <dd class="toplist_nav__item">
          <a
            class="toplist_nav__link"
            v-for="item in specialRankingtype"
            :key="item.dataId"
            :class="
              item.dataId == seletedType ? 'toplist_nav__link--current' : ''
            "
            @click="onSelectType(item)"
            >{{ item.name }}</a
          >
        </dd>
      </dl>

      <dl class="toplist_nav__list">
        <dt class="toplist_nav__tit">全球榜</dt>

        <dd class="toplist_nav__item">
          <a
            class="toplist_nav__link"
            v-for="item in globalRankingtype"
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
          <a
            href="javascript:;"
            class="toplist_switch__btn js_prev_week"
            style="display: none"
            ><i class="toplist_switch__arrow_prev sprite"></i
            ><i class="icon_txt">上一期</i></a
          >
          <!-- <span class="toplist_switch__data js_chosed_week">2021-02-13</span> -->
          <a
            href="javascript:;"
            class="toplist_switch__btn js_next_week"
            style="display: none"
            ><i class="toplist_switch__arrow_next sprite"></i
            ><i class="icon_txt">下一期</i></a
          >
        </span>
        <a
          href="javascript:;"
          class="toplist__rule js_desc"
          data-left="-650"
          data-top="-78"
          data-target="popup_data_detail"
          >榜单规则</a
        >
      </div>
      <div class="mod_songlist_toolbar">
        <a class="mod_btn_green js_all_play" @click="playSonglist(listDatas)"
          ><i class="mod_btn_green__icon_play"></i>播放全部</a
        >
        <a href="javascript:;" class="mod_btn js_all_fav"
          ><i class="mod_btn__icon_add"></i>添加到</a
        >
        <a href="javascript:;" class="mod_btn js_all_down"
          ><i class="mod_btn__icon_down"></i>下载</a
        >
        <a href="javascript:;" class="mod_btn js_batch"
          ><i class="mod_btn__icon_batch"></i>批量操作</a
        >
        <a class="mod_btn js_into_comment" href="#comment_box"
          ><i class="mod_btn__icon_comment"></i>评论(913)</a
        >
      </div>

      <div class="mod_songlist" v-loading="loading">
        <ul class="songlist__header">
          <li class="songlist__edit sprite">
            <input type="checkbox" class="songlist__checkbox js_check_all" />
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
                      :src="song.img"
                      :alt="song.name"
                    />
                  </a>
                  <a
                    class="js_song"
                    :title="song.name"
                    @click="gotoSongDetail(song.id)"
                  >
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
    </div>
  </div>
</template>

<script>
import ModListMenu from "components/common/ModListMenu";
import { getPlaylistDetial, getSongDetail } from "api";
import { isDef, createSong, playSonglist, gotoSongDetail } from "common/utils";

export default {
  data() {
    return {
      loading: true,
      topRankingtype: [
        { name: "飙升榜", dataId: "19723756" },
        { name: "新歌榜", dataId: "3779629" },
        { name: "热歌榜", dataId: "3778678" },
        { name: "原创榜", dataId: "2884035" },
      ],
      aereRankingtype: [
        { name: "欧美榜", dataId: "2809513713" },
        { name: "韩语榜", dataId: "745956260" },
        { name: "日语榜", dataId: "5059644681" },
      ],
      specialRankingtype: [
        { name: "古典榜", dataId: "71384707" },
        { name: "说唱榜", dataId: "99131959" },
        { name: "电子榜", dataId: "1978921795" },
        { name: "ACG榜", dataId: "71385702" },
        { name: "乡村榜", dataId: "3112516681" },
        { name: "摇滚榜", dataId: "5059633707" },
        { name: "古风榜", dataId: "5059642708" },
        { name: "民谣榜", dataId: "5059661515" },
      ],
      globalRankingtype: [
        { name: "UK排行周榜", dataId: "180106" },
        { name: "美国Billboard榜", dataId: "60198" },
        { name: "Beatport全球电子舞曲榜", dataId: "3812895" },
        { name: "iTuness榜", dataId: "11641012" },
        { name: "日本Oricon", dataId: "60131" },
        { name: "法国 NRJ Vos Hits 周榜", dataId: "27135204" },
      ],
      seletedTypeName: "飙升榜",
      seletedType: "19723756",
      listDatas: [],
    };
  },
  mounted() {
    this.updatedTopList();
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
    playSonglist,
    gotoSongDetail,
  },
  watch: {
    seletedType(newType) {
      this.updatedTopList();
    },
  },
  components: {
    ModListMenu,
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
