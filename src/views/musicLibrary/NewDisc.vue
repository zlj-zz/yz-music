<template>
  <div class="main">
    <!-- 标签筛选 -->
    <div class="mod_tag">
      <div class="tag__list">
        <type-select-sub-bar
          :selectId="selectArea"
          :items="areas"
          @selectId="areaSelect"
        />
      </div>
    </div>

    <div class="mod_part_detail" v-loading="loading">
      <div class="mod_playlist mod_playlist--all">
        <ul class="playlist__list" id="album_list">
          <li
            class="playlist__item"
            v-for="album in currentAlbums"
            :key="album.id"
          >
            <div class="playlist__item_box">
              <div
                class="playlist__cover mod_cover"
                style="visibility: visible"
              >
                <a class="js_album">
                  <img
                    src="//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000"
                    v-lazy="album.img"
                    :alt="album.name"
                    class="playlist__pic"
                    style="display: block; visibility: visible"
                  />
                  <i class="mod_cover__icon_play js_play"></i>
                </a>
              </div>
              <h4 class="playlist__title">
                <span class="playlist__title_txt">
                  <a :title="album.name" @click="gotoAlbumDetail(album.id)">{{
                    album.name
                  }}</a>
                </span>
              </h4>

              <div class="playlist__author" :title="album.artistsText">
                <span
                  v-for="artist in album.artists.slice(
                    0,
                    album.artists.length - 2
                  )"
                  :key="artist.id"
                  @click="gotoSongerDetail(artist.id)"
                >
                  <a> {{ artist.name }}</a>
                  /
                </span>
                <a
                  @click="
                    gotoSongerDetail(album.artists[album.artists.length - 1].id)
                  "
                >
                  {{ album.artists[album.artists.length - 1].name }}</a
                >
              </div>
              <div class="playlist__other">{{ album.publishTime }}</div>
            </div>
          </li>
        </ul>
      </div>
      <el-pagination
        background
        style="text-align: center"
        layout="prev, pager, next"
        :page-size="limit"
        :total="allAlbumsLength"
        :current-page="page"
        @current-change="currentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import TypeSelectSubBar from "components/common/TypeSelectSubBar";
import { albumAreas, getTopAlbum } from "api";
import { createAlbums, gotoAlbumDetail, gotoSongerDetail } from "common/utils";

export default {
  setup() {
    const areas = ref(albumAreas);

    const loading = ref(true);
    const page = ref(0);
    const selectArea = ref(albumAreas.ALL.dataId);
    const allAlbums = ref(null);
    const allAlbumsLength = ref(0);
    function updateAlbum() {
      //page.value = 0;
      getTopAlbum({
        area: selectArea.value,
      }).then((res) => {
        console.log(res);
        let ds = res.data.monthData;
        let albums = createAlbums(ds);
        console.log(albums);
        allAlbums.value = albums;
        allAlbumsLength.value = albums.length;
        page.value = 1;
        loading.value = false;
        updateCurrentAlbums();
      });
    }
    function areaSelect(id) {
      if (id != selectArea.value) selectArea.value = id;
    }
    function currentChange(v) {
      page.value = v;
      updateCurrentAlbums();
    }
    watch(selectArea, () => {
      updateAlbum();
    });

    const limit = ref(20);
    const currentAlbums = ref([]);
    function updateCurrentAlbums() {
      if (allAlbums.value.length > 0) {
        if (page.value * limit.value < allAlbumsLength.value) {
          currentAlbums.value = allAlbums.value.slice(
            (page.value - 1) * limit.value,
            page.value * limit.value
          );
        } else {
          currentAlbums.value = allAlbums.value.slice(
            (page.value - 1) * limit.value,
            allAlbumsLength.value
          );
        }
      }
    }

    updateAlbum();

    return {
      areas,
      loading,
      page,
      selectArea,
      allAlbums,
      allAlbumsLength,
      updateAlbum,
      areaSelect,
      currentChange,
      limit,
      currentAlbums,
      gotoAlbumDetail,
      gotoSongerDetail,
    };
  },
  components: {
    TypeSelectSubBar,
  },
};
</script>

<style scoped>
/*导航条*/
.mod_tag {
  position: relative;
  margin: 52px 0 0;
}
.tag__list {
  position: relative;
  height: auto;
  zoom: 1;
  clear: both;
  overflow: hidden;
  line-height: 26px;
  padding-left: 65px;
}
a:hover {
  color: #31c27c;
}
</style>


