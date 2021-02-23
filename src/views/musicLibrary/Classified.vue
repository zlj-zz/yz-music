<template>
  <div class="main">
    <!-- 标签筛选 -->
    <div class="mod_playlist_tag" id="taglist">
      <div class="js_normal" style="display: ">
        <div v-for="(key, idx) in categories" :key="key">
          <div
            class="playlist_tag__list"
            :class="idx == 0 ? 'playlist_tag__list--lang' : ''"
          >
            <h3 class="playlist_tag__tit c_tx_thin">{{ key }}</h3>
            <i class="playlist_tag__line"></i>
            <ul class="playlist_tag__tags">
              <li
                class="playlist_tag__itembox"
                v-for="item in getShowTypes(idx, playlistTpyes[idx].list)"
                :key="item.name"
              >
                <a
                  class="playlist_tag__item js_tag"
                  :class="
                    selectedType == item.name
                      ? 'playlist_tag__item--expand'
                      : ''
                  "
                  @click="selectType(item.name, -999)"
                  >{{ item.name }}</a
                >
              </li>

              <li
                class="playlist_tag__itembox"
                v-if="ifMore(idx, playlistTpyes[idx].list)"
              >
                <a
                  class="playlist_tag__item js_more_tag"
                  :class="
                    playlistTpyes[idx].showMore
                      ? 'playlist_tag__item--expand'
                      : showMoreIdx == idx
                      ? 'playlist_tag__item--expand'
                      : ''
                  "
                  @click="showMoreTypes(idx)"
                  :id="showMoreIdx"
                  >{{ showMoreIdx == idx ? selectedType : "更多"
                  }}<i class="playlist_tag__arrow sprite"></i
                ></a>
              </li>
            </ul>
          </div>
          <!-- 更多标签展示 -->
          <div
            class="popup_tag"
            :style="{
              display: playlistTpyes[idx].showMore ? 'block' : 'none',
            }"
            v-if="ifMore(idx, playlistTpyes[idx].list)"
            @mouseleave="showMoreMouseLeave"
          >
            <ul class="playlist_tag__tags">
              <li
                class="playlist_tag__itembox"
                v-for="item in getHiddenTypes(idx, playlistTpyes[idx].list)"
                :key="item.name"
              >
                <a
                  class="playlist_tag__item js_tag"
                  :class="
                    selectedType == item.name
                      ? 'playlist_tag__item--expand'
                      : ''
                  "
                  @click="selectType(item.name, idx)"
                  >{{ item.name }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="mod_part_detail">
      <!-- 选择类型展示 -->
      <div class="part_detail__hd">
        <h2 class="part_detail__tit">
          <span v-if="selectedType == '全部'">全部歌单</span>
          <span class="part_tags" v-else>
            {{ selectedType }}
            <a
              class="part_tags__delete js_delete_tags sprite"
              @click="deleteSeleted"
              ><i class="icon_txt">删除</i></a
            >
          </span>
        </h2>
        <!-- 排列方式 -->
        <div class="part_switch" id="sortbox" aria-label="排列方式">
          <a
            href="javascript:;"
            class="part_switch__item js_sort part_switch__item--left"
            title="最热"
            :class="selectedOrder == 'hot' ? 'part_switch__item--select' : ''"
            @click="selectOrder('hot')"
            >最热</a
          ><a
            href="javascript:;"
            class="part_switch__item part_switch__item--right js_sort"
            title="最新"
            :class="selectedOrder == 'new' ? 'part_switch__item--select' : ''"
            @click="selectOrder('new')"
            >最新</a
          >
        </div>
      </div>
      <!-- 歌单展示 -->
      <div class="mod_playlist mod_playlist--all">
        <ul class="playlist__list" id="playlist_box">
          <li class="playlist__item" v-for="list in playlists" :key="list.id">
            <div class="playlist__item_box">
              <div
                class="playlist__cover mod_cover"
                style="visibility: visible"
              >
                <a
                  class="js_playlist"
                  :title="list.name"
                  @click="playTheList(list.id)"
                  ><img
                    class="playlist__pic"
                    style="display: block; visibility: visible"
                    src="//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000"
                    v-lazy="list.img"
                    :alt="list.name"
                  />
                  <i class="mod_cover__icon_play js_play"></i>
                </a>
              </div>
              <h4 class="playlist__title">
                <span class="playlist__title_txt">
                  <a
                    class="js_playlist"
                    :title="list.name"
                    @click="gotoPlaylistDetail(list.id)"
                    >{{ list.name }}</a
                  >
                </span>
              </h4>
              <div class="playlist__author">
                <a class="js_user" :title="list.creatorName">{{
                  list.creatorName
                }}</a>
              </div>
              <div class="playlist__other">播放量： {{ list.playCount }}</div>
              <a class="btn_operate_menu js_playlist_more"
                ><span class="icon_txt">更多</span></a
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div style="padding-bottom: 20px">
      <el-pagination
        background
        style="text-align: center"
        layout="prev, pager, next"
        :page-size="limit"
        :total="allLength"
        :current-page="currentPage"
        @current-change="currentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getCatList, getPlayList, getPlaylistDetial, getSongDetail } from "api";
import {
  createPlaylists,
  createSongs,
  playSonglist,
  gotoPlaylistDetail,
} from "common/utils";

export default {
  data() {
    return {
      loading: true,
      subLoading: true,
      limit: 20,
      currentPage: 1,
      allLength: 0,
      allPage: 1,
      showMoreIdx: 0,
      categories: {},
      playlistTpyes: [],
      selectedType: "全部",
      selectedOrder: "hot",
      playlists: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      getCatList().then((res) => {
        this.categories = res.data.categories;
        let subs = res.data.sub;
        let d = {};
        for (let v of Object.keys(this.categories)) {
          d[v] = { showMore: false, list: [] };
        }
        for (let sub of subs) {
          d[sub.category].list.push({
            name: sub.name,
            category: sub.category,
            hot: sub.hot,
            count: sub.resourceCount,
          });
        }
        this.playlistTpyes = d;
        this.updatePlaylist();
      });
    },
    updatePlaylist() {
      getPlayList(
        this.limit,
        this.currentPage,
        this.selectedType,
        this.selectedOrder
      ).then((res) => {
        let lists = createPlaylists(res.data.playlists);
        this.playlists = lists;
        this.allLength = res.data.total;
        //console.log(res.data);
      });
    },
    playTheList(id) {
      getPlaylistDetial(id).then((res) => {
        let trackIds = res.data.playlist.trackIds.map(({ id }) => id);
        let songDetails = getSongDetail(trackIds.slice(0, 500)).then((res) => {
          let songs = createSongs(res.data.songs);
          //console.log(songs);
          playSonglist(songs);
        });
      });
    },
    ifMore(idx, list) {
      if (idx == 0) return list.length > 6 ? true : false;
      else return list.length > 9 ? true : false;
    },
    getShowTypes(idx, list) {
      if (idx == 0) return list.length > 6 ? list.slice(0, 5) : list;
      else return list.length > 9 ? list.slice(0, 8) : list;
    },
    getHiddenTypes(idx, list) {
      if (idx == 0) return list.length > 6 ? list.slice(6) : list;
      else return list.length > 9 ? list.slice(9) : list;
    },
    showMoreTypes(idx) {
      if (this.playlistTpyes[idx].showMore) {
        this.showMoreIdx = -999;
      } else {
        this.showMoreIdx = idx;
      }
      this.playlistTpyes[idx].showMore = !this.playlistTpyes[idx].showMore;
    },
    showMoreMouseLeave() {
      this.playlistTpyes[this.showMoreIdx].showMore = false;
    },
    selectType(type, idx) {
      if (this.selectedType != type) this.selectedType = type;
      if (idx) {
        this.showMoreIdx = idx;
      }
    },
    deleteSeleted() {
      this.selectedType = "全部";
      this.showMoreIdx = -999;
    },
    selectOrder(order) {
      this.selectedOrder = order;
      this.currentPage = 1;
      this.updatePlaylist();
    },
    currentChange(v) {
      this.currentPage = v;
    },
    gotoPlaylistDetail,
  },
  watch: {
    selectedType(type) {
      this.currentPage = 1;
      this.updatePlaylist();
    },
    currentPage(newPage) {
      this.updatePlaylist();
    },
  },
};
</script>

<style scoped>
a:hover {
  color: #31c27c;
}
ul,
li {
  margin: 0;
  padding: 0;
}
.mod_playlist_tag {
  position: relative;
  padding: 60px 0 32px 0;
  margin-right: -24px;
  height: 118px;
}

.playlist_tag__list {
  position: relative;
  float: left;
  width: 238px;
  line-height: 26px;
  margin-right: 22px;
}
.playlist_tag__list--lang {
  width: 160px;
}
.playlist_tag__tit {
  font-weight: 400;
  font-size: 14px;
  padding-left: 8px;
  margin-bottom: 8px;
  margin-top: -6px;
}
.playlist_tag__line {
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 108px;
  background-color: #eeeef0;
}

.playlist_tag__itembox {
  float: left;
  width: 76px;
  margin-bottom: 4px;
}
.playlist_tag__item {
  float: left;
  padding: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 68px;
}
.playlist_tag__item--expand,
.playlist_tag__item--expand:hover,
.playlist_tag__item--select,
.playlist_tag__item--select:hover {
  background-color: #31c27c;
  color: #fff;
}
.playlist_tag__item {
  float: left;
  padding: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 68px;
}

/* 箭头 */
.playlist_tag__arrow {
  display: inline-block;
  width: 10px;
  height: 6px;
  background-position: -120px -260px;
  margin-left: 3px;
  vertical-align: 1px;
}
.playlist_tag__item:hover .playlist_tag__arrow {
  background-position: -140px -260px;
}
.playlist_tag__item--expand .playlist_tag__arrow,
.playlist_tag__item--expand:hover .playlist_tag__arrow {
  background-position: -100px -260px;
}
</style>
