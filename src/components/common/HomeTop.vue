<template>
  <div class="toplist_main">
    <h1 class="list">排行榜</h1>
    <div class="home_toplist">
      <ul class="toplist__list js_list">
        <li
          class="toplist__item mod_cover"
          v-for="(toplist, idx) in toplists"
          :key="idx"
          :class="'item' + (idx + 1)"
        >
          <div class="toplist__box">
            <div id="toplist__bg" :class="'toplist__bg' + idx"></div>
            <i class="mod_cover__icon_play js_play_toplist"></i>
            <i class="toplist__line"></i>
            <h3 class="toplist__hd">
              <a href="javascript:;" class="toplist__tit"
                >{{ toplist.name }}
              </a>
            </h3>

            <ul class="toplist__songlist">
              <li class="toplist__song" v-for="songIdx in 4" :key="songIdx">
                <div class="toplist__number">{{ songIdx }}</div>
                <div class="toplist__songname">
                  <a
                    href="javascript:;"
                    class="js_song"
                    :data-id="toplist.tracks[songIdx - 1].id"
                    @click="gotoSongDetail(toplist.tracks[songIdx - 1].id)"
                  >
                    {{ parseSongName(toplist.tracks[songIdx - 1].name) }}
                  </a>
                </div>
                <div class="toplist__artist">
                  <a href="javascript:;">{{
                    parseArtistsName(toplist.tracks[songIdx - 1].ar)
                  }}</a>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getTopList, toplistTypes } from "api";

export default {
  data() {
    return {
      toplists: [],
    };
  },
  mounted() {
    for (let key in toplistTypes) {
      this.updateTopList(toplistTypes[key]);
    }
  },
  methods: {
    updateTopList(toplistType) {
      getTopList(toplistType).then((res) => {
        //console.log(res);
        this.toplists.push(res.data.playlist);
      });
    },
    parseSongName(name) {
      return name;
    },
    parseArtistsName(nameList) {
      let l = [];
      for (let i of nameList) {
        l.push(i.name);
      }
      let name = l.join("/");
      return name;
    },
    gotoSongDetail(id) {
      this.$router.push({
        path: "/musicLibrary/songDetail",
        query: { id: id },
      });
    },
  },
};
</script>

<style scoped>
.list {
  font-size: 31px;
}
.toplist_main {
  margin: 0 auto;
  text-align: center;
}
.toplist__list {
  font-size: 0;
  margin-right: -20px;
  color: #fff;
  font-size: 14px;
}
.toplist__item {
  display: inline-block;
  width: 18%;
}
.toplist__box {
  position: relative;
  margin-right: 20px;
  height: 500px;
  overflow: hidden;
}
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
#toplist__bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 600px;
}
.toplist__bg0 {
  background-image: linear-gradient(#e66754, #8888e5);
}
.toplist__bg1 {
  background-image: linear-gradient(#987526, #1998e5);
}
.toplist__bg2 {
  background-image: linear-gradient(#335484, #3698e5);
}
.toplist__bg3 {
  background-image: linear-gradient(#7858e5, #654125);
}
.toplist__bg4 {
  background-image: linear-gradient(#985632, #369852);
}

.toplist__item .toplist__bg {
  transform: scale(1);
  transition: transform 0.75s;
}
.toplist__hd {
  position: absolute;
  top: 50px;
  left: 50%;
  margin-left: -100px;
  width: 200px;
  text-align: center;
  font-size: 100%;
  color: #000;
}
.toplist__tit {
  height: 36px;
  line-height: 1;
  font-size: 26px;
  color: #fff;
  font-weight: 400;
}
.toplist__hd::before {
  content: "";
  display: block;
  width: 66px;
  height: 22px;
  margin: 0 auto 9px;
  background-image: url(https://y.gtimg.cn/mediastyle/yqq/img/index_tit.png?max_age=2592000&v=c7310a1eb12fc9fce032314be79ad579);
  background-position: 0 -300px;
}
.toplist__songlist {
  position: absolute;
  top: 188px;
  left: 0px;
  right: 300px;
  white-space: nowrap;
}
.toplist__songlist a {
  color: #fff;
  font-size: 14px;
}
.toplist__song {
  position: relative;
  padding-left: 15px;
  margin-bottom: 27px;
}
.toplist__number {
  position: absolute;
  top: 0;
  left: 0;
}

.target-list:hover .arrow-btn {
  opacity: 1;
  transform: translateX(0);
  transition-duration: 0.5s;
}

.arrow-btn {
  opacity: 0;
}
</style>
