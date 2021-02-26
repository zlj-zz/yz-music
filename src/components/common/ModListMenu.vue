<template>
  <div class="mod_list_menu">
    <a class="list_menu__item list_menu__play" title="播放" @click="play">
      <i class="list_menu__icon_play"></i>
      <span class="icon_txt">播放</span>
    </a>
    <a
      class="list_menu__item list_menu__add"
      title="添加到歌单"
      aria-haspopup="true"
    >
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <i class="list_menu__icon_add"></i>
          <span class="icon_txt">添加到歌单</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu v-if="createdList.length > 0">
            <el-dropdown-item
              icon="el-icon-circle-plus-outline"
              v-for="item in createdList"
              :key="item.id"
              @click="addToList(song.id, item.id)"
            >
              {{ item.name }}
            </el-dropdown-item>
          </el-dropdown-menu>
          <el-dropdown-menu v-else>
            <el-dropdown-item> 请先登陆 </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </a>
    <a
      class="list_menu__item list_menu__down"
      title="下载"
      aria-haspopup="true"
      v-if="kind == 0"
      @click="download(song.id)"
    >
      <i class="list_menu__icon_down"></i>
      <span class="icon_txt">下载</span>
    </a>
    <a
      class="list_menu__item list_menu__share"
      title="分享"
      aria-haspopup="true"
      @click="share"
    >
      <i class="list_menu__icon_share"></i>
      <span class="icon_txt">分享</span>
    </a>
  </div>
  <black-tip :ifShow="true" :tip="tip" v-if="ifShow" />
</template>

<script>
import BlackTip from "components/common/BlackTip";
import { playTheSong, playSonglist, createSongs, copyText } from "common/utils";
import {
  getPlaylistDetial,
  getSongDetail,
  getAlbum,
  getSongUrl,
  changePlaylist,
} from "api";

export default {
  data() {
    return {
      ifShow: false,
      tip: "",
    };
  },
  props: {
    song: {
      type: Object,
      default: {},
    },
    id: { default: 0 },
    // 0: song, 1: album , 2: playlist
    kind: { default: 0 },
  },
  computed: {
    createdList() {
      return this.$store.state.user.createdList;
    },
  },
  methods: {
    play() {
      switch (this.kind) {
        case 0:
          if (this.song) {
            playTheSong(this.song);
          }
          console.log(this.song);
          break;
        case 1:
          this.playAlbum(this.id);
          break;
        case 2:
          this.playTheList(this.id);
          break;
        default:
          console.log(this.kind);
      }
    },
    playTheList(listId) {
      getPlaylistDetial(listId).then((res) => {
        let trackIds = res.data.playlist.trackIds.map(({ id }) => id);
        let songDetails = getSongDetail(trackIds.slice(0, 500)).then((res) => {
          let songs = createSongs(res.data.songs);
          //console.log(songs);
          playSonglist(songs);
        });
      });
    },
    playAlbum(id) {
      getAlbum(this.id).then((res) => {
        let ds = res.data;
        let songs = createSongs(ds.songs);
        console.log(this.songs);
        playSonglist(songs);
      });
    },
    addToList(id, listId) {
      changePlaylist({ op: "add", pid: listId, tracks: id }).then((res) => {
        this.tip = "已成功添加至歌单";
        this.ifShow = true;
        if (this.timer) clearTimeout(this.timer);
        setTimeout(() => {
          this.ifShow = false;
        }, 1000);
      });
    },
    share() {
      switch (this.kind) {
        case 0:
          this.tip = "已复制歌曲链接";
          let txt = this.song.url;
          copyText(txt);
          this.ifShow = true;
          if (this.timer) clearTimeout(this.timer);
          setTimeout(() => {
            this.ifShow = false;
          }, 1000);
          break;
        case 1:
          break;
        case 2:
          break;
        default:
          console.log(this.kind);
      }
    },
    download(id) {
      getSongUrl(id).then((res) => {
        console.log(res);
        let url = res.data.data[0].url;
        this.downloadFile(url);
        //window.open(url, "_self");
      });
    },
    downloadFile(url) {
      url = url.replace(/\\/g, "/");
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "blob";
      // 文件下载进度
      xhr.onprogress = (res) => {
        this.loadingTip =
          "源文件下载中: " + ((res.loaded / res.total) * 100).toFixed(2) + "%";
      };
      xhr.onload = () => {
        this.loadingTip = "";
        this.loading = false;

        if (xhr.status === 200) {
          // 获取文件blob数据并保存
          var num = url.lastIndexOf("/") + 1;
          //把参数和文件名分割开
          var fileName = url.substring(num).split("?")[0];
          var export_blob = new Blob([xhr.response]);
          var save_link = document.createElementNS(
            "http://www.w3.org/1999/xhtml",
            "a"
          );
          save_link.href = URL.createObjectURL(export_blob);
          save_link.download = fileName;
          save_link.click();
        }
      };
      this.loading = true;
      xhr.send();
    },
  },
  components: {
    BlackTip,
  },
};
</script>

<style lang="scss">
.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: #fff;
  color: #31c27c;
}
</style>
