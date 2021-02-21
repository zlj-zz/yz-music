<template>
  <div class="disc-main" style="">
    <!-- 标签筛选 -->
    <div class="mod_tag" id="tag_list">
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
            onmouseover="this.className=(this.className+' playlist__item--hover')"
            onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
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
                  <i
                    class="mod_cover__icon_play js_play"
                    data-stat="y_new.album_lib.album_play"
                  ></i>
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

              <div class="playlist__author" title="album.artists">
                <a class="js_singer">{{ album.artistsText }}</a>
              </div>
              <div class="playlist__other">{{ album.publishTime }}</div>
              <a href="javascript:;" class="btn_operate_menu js_albumlist_more">
                <span class="icon_txt">更多</span>
              </a>
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
import { createAlbums, gotoAlbumDetail } from "common/utils";

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
      getTopAlbum({
        area: this.selectArea,
      }).then((res) => {
        let ds = res.data.monthData;
        console.log(ds);
        let albums = createAlbums(ds);
        console.log(albums);
        this.allAlbums = albums;
        this.allAlbumsLength = albums.length;
        this.page = 1;
        this.loading = false;
      });
    },
    areaSelect(id) {
      this.selectArea = id;
      this.updateAlbum();
    },
    currentChange(v) {
      console.log(v);
      this.page = v;
    },
    gotoAlbumDetail,
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
  },
  components: {
    TypeSelectSubBar,
  },
};
</script>

<style scoped>
blockquote,
body,
button,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
html,
input,
lengend,
li,
ol,
p,
pre,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}

/*总体*/
.disc-main,
.section_inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}
.disc-main {
  z-index: 2;
}

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
</style>

<style>
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #31c27c;
  color: #fff;
}
.el-pagination.is-background .el-pager li.active {
  color: #fff;
  cursor: default;
}
.el-pagination.is-background .el-pager li:hover {
  color: #31c27c;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #31c27c;
}
.el-pagination.is-background .el-pager li:not(.disabled).active:hover {
  background-color: #31c27c;
  color: #fff;
}
</style>

