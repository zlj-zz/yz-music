<template>
  <div class="mod_songlist">
    <ul class="songlist__header">
      <li class="songlist__edit songlist__edit--check sprite">
        <input type="checkbox" class="songlist__checkbox" />
      </li>
      <li class="songlist__header_name">歌曲</li>
      <li class="songlist__header_author">歌手</li>
      <li class="songlist__header_album" v-if="listType == 'playlist'">专辑</li>
      <li class="songlist__header_time">时长</li>
    </ul>

    <ul class="songlist__list">
      <li v-for="(song, idx) in songs" :key="song.id">
        <div
          class="songlist__item"
          :class="(idx + 1) % 2 == 0 ? 'songlist__item--even' : ''"
        >
          <div class="songlist__edit songlist__edit--check sprite">
            <input type="checkbox" class="songlist__checkbox" />
          </div>
          <div class="songlist__number">{{ idx + 1 }}</div>
          <div class="songlist__songname">
            <span class="songlist__songname_txt">
              <a :title="song.name" @click="gotoSongDetail(song.id)">
                {{ song.name }}<span class="songlist__song_txt"></span>
              </a>
            </span>

            <!-- mod list menu -->
            <mod-list-menu :song="song" />
          </div>

          <div class="songlist__artist">
            <a
              class="singer_name"
              :title="song.artistsText"
              @click="gotoSongerDetail(song.artists[0].id)"
            >
              {{ song.artistsText }}
            </a>
          </div>
          <div class="songlist__album" v-if="listType == 'playlist'">
            <a
              class="album_name"
              :title="song.albumName"
              @click="gotoAlbumDetail(song.albumId)"
            >
              {{ song.albumName }}
            </a>
          </div>
          <div class="songlist__time">{{ song.durationText }}</div>
          <div class="songlist__other"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ModListMenu from "components/common/ModListMenu";
import {
  gotoSongDetail,
  gotoSongerDetail,
  gotoAlbumDetail,
} from "common/utils";
export default {
  props: {
    songs: {
      type: Array,
      default: [],
    },
    listType: {
      type: String,
      default: "",
    },
  },
  methods: {
    gotoSongDetail,
    gotoSongerDetail,
    gotoAlbumDetail,
  },
  components: {
    ModListMenu,
  },
};
</script>

<style scoped>
li,
p,
ul {
  margin: 0;
  margin-right: 0px;
  padding: 0;
}
.songlist__header {
  background-color: #fbfbfd;
}
.songlist__header,
.songlist__item {
  position: relative;
  padding-left: 46px;
  padding-right: 95px;
}
/*overwrite*/
.songlist__songname {
  line-height: 50px;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/*overwrite*/
.songlist__album,
.songlist__artist,
.songlist__header_album,
.songlist__header_author {
  float: left;
  padding-left: 15px;
  width: 25.5%;
  box-sizing: border-box;
}
/*overwrite*/
.songlist__album,
.songlist__artist,
.songlist__number,
.songlist__other,
.songlist__time {
  line-height: 50px;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.songlist__item--even {
  background-color: rgba(0, 0, 0, 0.01);
}
a:hover {
  color: #31c27c;
}
</style>
