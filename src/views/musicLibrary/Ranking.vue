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
            @click="onSelectType(item.dataId)"
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
            @click="onSelectType(item.dataId)"
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
            @click="onSelectType(item.dataId)"
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
            @click="onSelectType(item.dataId)"
            >{{ item.name }}</a
          >
        </dd>
      </dl>
    </div>

    <div class="mod_toplist">
      <div class="toplist__hd_rk">
        <h1 class="toplist__tit1">飙升榜</h1>
        <span class="toplist_switch">
          <a
            href="javascript:;"
            class="toplist_switch__btn js_prev_week"
            style="display: none"
            ><i class="toplist_switch__arrow_prev sprite"></i
            ><i class="icon_txt">上一期</i></a
          >
          <span class="toplist_switch__data js_chosed_week">2021-02-13</span>
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
        <a class="mod_btn_green js_all_play" @click="playAll"
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

      <div class="mod_songlist">
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
                >{{ song.rankingChange == -9999 ? "" : song.rankingChange }}
              </div>

              <div class="songlist__songname">
                <i
                  class="songlist__icon songlist__icon_exclusive sprite"
                  title="独家"
                ></i>

                <a
                  class="songlist__icon songlist__icon_mv sprite"
                  rel="noopener"
                  title="MV"
                  ><span class="icon_txt">MV</span></a
                >

                <span
                  class="songlist__songname_txt"
                  style="visibility: visible"
                >
                  <a
                    class="songlist__cover album_name"
                    data-albummid="002pDbf73FEsT9"
                    data-albumid="1080467"
                  >
                    <img
                      class="songlist__pic"
                      style="display: block; visibility: visible"
                      :src="song.img"
                      :alt="song.name"
                    />
                  </a>
                  <a class="js_song" :title="song.name">
                    {{ song.name }}
                  </a>
                </span>
                <div class="mod_list_menu">
                  <a
                    href="javascript:;"
                    class="list_menu__item list_menu__play js_play"
                    title="播放"
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
                    title="VIP下载"
                    aria-haspopup="true"
                    data-target="menu_down"
                  >
                    <i class="list_menu__icon_down_vip"></i>
                    <span class="icon_txt">VIP下载</span>
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

              <div class="songlist__artist" title="陆海涛">
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
import { getPlaylistDetial, getSongDetail } from "api";
import { isDef, createSong } from "common/utils";

export default {
  data() {
    return {
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
        { name: "电子榜", dataId: "187894795" },
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
      seletedType: "19723756",
      listDatas: [],
    };
  },
  mounted() {
    this.updatedTopList();
  },
  methods: {
    onSelectType(id) {
      this.seletedType = id;
    },
    formatTime(duration) {
      return formatTime(duration);
    },
    updatedTopList() {
      getPlaylistDetial(this.seletedType).then((res) => {
        console.log(res);
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
          console.log(songs);
          this.listDatas = songs;
        });
      });
    },
    processRanking(data) {
      if (data > 0) return "icon_rank_up";
      else if (data == 0) return "icon_rank_keep";
      else if (data == -9999) return "icon_rank_new";
      else return "icon_rank_down";
    },
    playAll() {
      this.$store.commit("music/setPlaylist", this.listDatas);
      this.$store.dispatch("music/startSong", this.listDatas[0]);
      //this.$store.commit("music/setCurrentSong", songs[0]);
    },
  },
  watch: {
    seletedType(newType) {
      this.updatedTopList();
    },
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
dd,
dt,
h1,
ul,
li,
h2 {
  margin: 0;
  padding: 0;
}

a {
  font-family: poppin, Tahoma, Arial, 微软雅黑, sans-serif;
}
input,
select,
textarea,
th {
  color: #000;
  background-color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-family: poppin, Tahoma, Arial, 微软雅黑, sans-serif;
  font-family: Tahoma, Arial, 微软雅黑, sans-serif/9;
}
</style>
