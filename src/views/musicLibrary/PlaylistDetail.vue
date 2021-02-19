<template>
  <div class="playlist-main">
    <detail-info-card
      :obj="playlist"
      :cardType="'playlist'"
      @btnClick="cardClick"
    />

    <div class="detail_layout">
      <div class="detail_layout__main js_main">
        <div class="mod_songlist">
          <ul class="songlist__header">
            <li class="songlist__edit songlist__edit--check sprite">
              <input type="checkbox" class="songlist__checkbox js_check_all" />
            </li>
            <li class="songlist__header_name">歌曲</li>
            <li class="songlist__header_author">歌手</li>
            <li class="songlist__header_album">专辑</li>
            <li class="songlist__header_time">时长</li>
          </ul>

          <ul class="songlist__list">
            <li v-for="(song, idx) in songs" :key="song.id">
              <div
                onmouseover="this.className=(this.className+' songlist__item--hover')"
                onmouseout="this.className=this.className.replace(/ songlist__item--hover/, '')"
                class="songlist__item"
                :claa="(idx + 1) % 2 == 0 ? 'songlist__item--even' : ''"
              >
                <div class="songlist__edit songlist__edit--check sprite">
                  <input type="checkbox" class="songlist__checkbox" />
                </div>
                <div class="songlist__number">{{ idx + 1 }}</div>
                <div class="songlist__songname">
                  <span class="songlist__songname_txt"
                    ><a class="js_song" :title="song.name"
                      >{{ song.name
                      }}<span class="songlist__song_txt"></span></a
                  ></span>

                  <!-- mod list menu -->
                  <mod-list-menu :song="song" />
                </div>

                <div class="songlist__artist" title="Dan Gibson's Solitudes">
                  <a class="singer_name" :title="song.artistsText">{{
                    song.artistsText
                  }}</a>
                </div>
                <div class="songlist__album">
                  <a class="album_name" :title="song.albumName">{{
                    song.albumName
                  }}</a>
                </div>
                <div class="songlist__time">{{ song.durationText }}</div>
                <div class="songlist__other"></div>
                <a
                  href="javascript:;"
                  class="songlist__delete js_delete"
                  data-confirm="1"
                  title="删除"
                  ><span class="icon_txt">删除</span></a
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="detail_layout__other">
        <div class="mod_about js_box" id="album_desc" style="display: ">
          <h3 class="about__tit">简介</h3>
          <div class="about__cont">
            <p>
              {{ playlist.desc }}
            </p>
          </div>
          <!-- <a
            href="javascript:;"
            class="about__more"
            data-stat="y_new.gedan.moreinfo"
            data-left="0"
            data-top="-187"
            data-target="popup_data_detail"
            style="display: "
            >[更多]</a
          > -->
          <a href="javascript:;" class="btn_edit js_edit" style="display: none"
            ><i class="icon_txt">编辑</i></a
          >
        </div>

        <div class="other_part" id="similaralbum" style="display: none">
          <h3 class="other_part__tit">相似歌单</h3>
          <div class="mod_playlist">
            <ul class="playlist__list"></ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailInfoCard from "components/common/DetailInfoCard";
import ModListMenu from "components/common/ModListMenu";
import { getPlayList, getPlaylistDetial, getSongDetail } from "api";
import { processCount, createSong, playSonglist } from "common/utils";

export default {
  data() {
    return {
      id: this.$route.query.id,
      playlist: {},
      songs: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      getPlaylistDetial(this.id).then((res) => {
        console.log(res);
        let d = res.data.playlist;
        this.playlist = {
          id: d.id,
          name: d.name,
          img: d.coverImgUrl,
          desc: d.description,
          creator: d.creator.nickname,
          creatorId: d.creator.userId,
          tags: d.creator.expertTags,
          playCount: processCount(d.playCount),
          subscribedCount: processCount(d.subscribedCount),
          shareCount: processCount(d.shareCount),
        };
        console.log(this.playlist);

        let trackIds = res.data.playlist.trackIds.map(({ id }) => id);
        let songDetails = getSongDetail(trackIds.slice(0, 500)).then((res) => {
          let songs = res.data.songs.map(({ id, name, al, ar, mv, dt }) => {
            return createSong({
              id,
              name,
              artists: ar,
              duration: dt,
              mvId: mv,
              albumName: al.name,
              img: al.picUrl,
            });
          });
          this.songs = songs;
          console.log(songs);
        });
      });
    },
    playAll() {
      playSonglist(this.songs);
    },
    cardClick(v) {
      if (v == "all") this.playAll();
    },
  },
  components: {
    DetailInfoCard,
    ModListMenu,
  },
};
</script>

<style scoped>
.playlist-main,
.section_inner {
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.mod_songlist {
  font-size: 14px;
  overflow: hidden;
}
.mod_songlist {
  padding-bottom: 60px;
}
.songlist__header,
.songlist__item {
  position: relative;
  padding-left: 46px;
  padding-right: 95px;
}
.songlist__header {
  height: 50px;
  line-height: 50px;
  background-color: rgba(0, 0, 0, 0.01);
  color: #999;
}
.songlist__header {
  background-color: #fbfbfd;
}

.songlist__header_name,
.songlist__songname {
  float: left;
  width: 47.685185%;
  position: relative;
  white-space: normal;
}
.songlist__header_name,
.songlist__songname {
  width: 54%;
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
.songlist__album,
.songlist__artist,
.songlist__header_album,
.songlist__header_author {
  width: 20%;
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
.songlist__album,
.songlist__artist,
.songlist__header_album,
.songlist__header_author {
  width: 20%;
}
.songlist__header_time,
.songlist__time {
  position: absolute;
  top: 0;
  right: 38px;
  width: 50px;
}

.songlist__list {
  overflow: hidden;
  clear: both;
}
.songlist__header,
.songlist__item {
  position: relative;
  padding-left: 46px;
  padding-right: 95px;
}
.songlist__item {
  clear: both;
  font-size: 0;
  overflow: hidden;
}
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
.songlist__number {
  position: absolute;
  top: 0;
  left: 10px;
  color: #999;
  width: 36px;
}
.songlist__songname {
  line-height: 50px;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.songlist__header_name,
.songlist__songname {
  float: left;
  width: 47.685185%;
  position: relative;
  white-space: normal;
}
.songlist__header_name,
.songlist__songname {
  width: 54%;
}
</style>
