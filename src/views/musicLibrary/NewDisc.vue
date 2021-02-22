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
            data-albummid="002ksL5a0hO4A1"
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
                    onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                    :src="album.img"
                    :alt="album.name"
                    class="playlist__pic"
                    style="display: block; visibility: visible"
                  />
                  <i class="mod_cover__icon_play js_play"></i>
                </a>
              </div>
              <h4 class="playlist__title">
                <span class="playlist__title_txt">
                  <a
                    class="js_album"
                    :title="album.name"
                    @click="gotoAlbumDetail(album.id)"
                    >{{ album.name }}</a
                  >
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
                  <a class="js_singer"> {{ artist.name }}</a
                  >/
                </span>
                <a
                  class="js_singer"
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
import TypeSelectSubBar from "components/common/TypeSelectSubBar";
import { albumAreas, getTopAlbum } from "api";
import { createAlbums, gotoAlbumDetail, gotoSongerDetail } from "common/utils";

export default {
  data() {
    return {
      loading: true,
      limit: 20,
      page: 0,
      selectArea: albumAreas.ALL.dataId,
      areas: albumAreas,
      allAlbums: null,
      allAlbumsLength: 0,
      currentAlbums: [],
    };
  },
  mounted() {
    this.updateAlbum();
  },
  methods: {
    updateAlbum() {
      this.page = 0;
      getTopAlbum({
        area: this.selectArea,
      }).then((res) => {
        let ds = res.data.monthData;
        let albums = createAlbums(ds);
        //console.log(albums);
        this.allAlbums = albums;
        this.allAlbumsLength = albums.length;
        this.page = 1;
        this.loading = false;
      });
    },
    areaSelect(id) {
      if (id != this.selectArea) this.selectArea = id;
    },
    currentChange(v) {
      this.page = v;
    },
    gotoAlbumDetail,
    gotoSongerDetail,
  },
  watch: {
    page(newPage) {
      if (this.allAlbums) {
        if (newPage * this.limit < this.allAlbumsLength) {
          this.currentAlbums = this.allAlbums.slice(
            (newPage - 1) * this.limit,
            newPage * this.limit
          );
        } else {
          this.currentAlbums = this.allAlbums.slice(
            (newPage - 1) * this.limit,
            this.allAlbumsLength
          );
        }
      }
      console.log(this.currentAlbums);
    },
    selectArea(n) {
      this.updateAlbum();
    },
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


