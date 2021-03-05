<template>
  <div class="main" v-loading="loading">
    <!-- 标签筛选 -->
    <div class="mod_playlist_tag" id="taglist">
      <div style="display: ">
        <div v-for="(key, idx) in categories" :key="key">
          <div
            class="playlist_tag__list"
            :class="{ playlist_tag__list__lang: idx == 0 }"
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
                  class="playlist_tag__item"
                  :class="{
                    playlist_tag__item__expand: selectedType == item.name,
                  }"
                  @click="selectType(item.name, -999)"
                  >{{ item.name }}</a
                >
              </li>

              <li
                class="playlist_tag__itembox"
                v-if="ifMore(idx, playlistTpyes[idx].list)"
              >
                <a
                  class="playlist_tag__item"
                  :class="{
                    playlist_tag__item__expand:
                      playlistTpyes[idx].showMore || showMoreIdx == idx,
                  }"
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
                  class="playlist_tag__item"
                  :class="{
                    playlist_tag__item__expand: selectedType == item.name,
                  }"
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
            <a class="part_tags__delete sprite" @click="deleteSeleted"
              ><i class="icon_txt">删除</i></a
            >
          </span>
        </h2>
        <!-- 排列方式 -->
        <div class="part_switch" id="sortbox" aria-label="排列方式">
          <a
            class="part_switch__item part_switch__item--left"
            title="最热"
            :class="{ part_switch__item__select: selectedOrder == 'hot' }"
            @click="selectOrder('hot')"
            >最热</a
          ><a
            class="part_switch__item part_switch__item--right"
            title="最新"
            :class="{ part_switch__item__select: selectedOrder == 'new' }"
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
                <a :title="list.name" @click="playTheList(list.id)"
                  ><img
                    class="playlist__pic"
                    style="display: block; visibility: visible"
                    src="//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000"
                    v-lazy="list.img"
                    :alt="list.name"
                  />
                  <i class="mod_cover__icon_play"></i>
                </a>
              </div>
              <h4 class="playlist__title">
                <span class="playlist__title_txt">
                  <a :title="list.name" @click="gotoPlaylistDetail(list.id)">{{
                    list.name
                  }}</a>
                </span>
              </h4>
              <div class="playlist__author">
                <a :title="list.creatorName">{{ list.creatorName }}</a>
              </div>
              <div class="playlist__other">播放量： {{ list.playCount }}</div>
              <a class="btn_operate_menu"><span class="icon_txt">更多</span></a>
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
        :current-page="page"
        @current-change="currentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { getCatList, getPlayList, getPlaylistDetial, getSongDetail } from "api";
import {
  createPlaylists,
  createSongs,
  playSonglist,
  gotoPlaylistDetail,
} from "common/utils";

export default {
  setup() {
    const loading = ref(true);
    const categories = ref({});
    const playlistTpyes = ref([]);
    function init() {
      getCatList().then((res) => {
        categories.value = res.data.categories;
        let subs = res.data.sub;
        let d = {};
        for (let v of Object.keys(categories.value)) {
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
        playlistTpyes.value = d;
        updatePlaylist();
        loading.value = false;
      });
    }
    function ifMore(idx, list) {
      if (idx == 0) return list.length > 6 ? true : false;
      else return list.length > 9 ? true : false;
    }
    function getShowTypes(idx, list) {
      if (idx == 0) return list.length > 6 ? list.slice(0, 5) : list;
      else return list.length > 9 ? list.slice(0, 8) : list;
    }
    function getHiddenTypes(idx, list) {
      if (idx == 0) return list.length > 6 ? list.slice(6) : list;
      else return list.length > 9 ? list.slice(9) : list;
    }

    const showMoreIdx = ref(0);
    function showMoreTypes(idx) {
      if (playlistTpyes.value[idx].showMore) {
        showMoreIdx.value = -999;
      } else {
        showMoreIdx.value = idx;
      }
      playlistTpyes.value[idx].showMore = !playlistTpyes.value[idx].showMore;
    }
    function showMoreMouseLeave() {
      playlistTpyes.value[showMoreIdx].showMore = false;
    }
    function selectType(type, idx) {
      if (selectedType.value != type) selectedType.value = type;
      if (idx) {
        showMoreIdx.value = idx;
        if (idx != -999) playlistTpyes.value[showMoreIdx].showMore = false;
      }
    }
    function deleteSeleted() {
      selectedType.value = "全部";
      showMoreIdx.value = -999;
    }

    const page = ref(1);
    function selectOrder(order) {
      selectedOrder.value = order;
      page.value = 1;
      updatePlaylist();
    }

    const limit = ref(20);
    const selectedType = ref("全部");
    const selectedOrder = ref("hot");
    const allLength = ref(0);
    const playlists = ref([]);
    function updatePlaylist() {
      getPlayList(
        limit.value,
        page.value,
        selectedType.value,
        selectedOrder.value
      ).then((res) => {
        let lists = createPlaylists(res.data.playlists);
        playlists.value = lists;
        allLength.value = res.data.total;
        //console.log(res.data);
      });
    }
    function currentChange(v) {
      page.value = v;
    }
    watch(selectedType, () => {
      page.value = 1;
      updatePlaylist();
    });
    watch(page, () => {
      updatePlaylist();
    });

    function playTheList(id) {
      getPlaylistDetial(id).then((res) => {
        let trackIds = res.data.playlist.trackIds.map(({ id }) => id);
        let songDetails = getSongDetail(trackIds.slice(0, 500)).then((res) => {
          let songs = createSongs(res.data.songs);
          //console.log(songs);
          playSonglist(songs);
        });
      });
    }

    init();

    return {
      loading,
      limit,
      page,
      allLength,
      showMoreIdx,
      categories,
      playlistTpyes,
      selectedType,
      selectedOrder,
      playlists,
      init,
      updatePlaylist,
      playTheList,
      ifMore,
      getShowTypes,
      getHiddenTypes,
      showMoreTypes,
      showMoreMouseLeave,
      selectType,
      deleteSeleted,
      selectOrder,
      currentChange,
      gotoPlaylistDetail,
    };
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
.playlist_tag__list__lang {
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
.playlist_tag__item__expand,
.playlist_tag__item__expand:hover,
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
.playlist_tag__item__expand .playlist_tag__arrow,
.playlist_tag__item__expand:hover .playlist_tag__arrow {
  background-position: -100px -260px;
}
</style>
