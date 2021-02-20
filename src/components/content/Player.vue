<template>
  <div class="g-btmbar">
    <div
      class="m-playbar"
      style="visibility: visible"
      :class="'m-playbar-' + (isLock ? 'lock' : 'unlock')"
    >
      <div class="updn">
        <div class="left f-fl">
          <a href="javascript:;" class="btn" @click="switchLock"></a>
        </div>
        <div class="right f-fl"></div>
      </div>
      <div class="bg"></div>
      <div class="hand" title="展开播放条"></div>
      <div class="wrap" id="g_player" style="margin-left: -490px">
        <div class="btns">
          <a
            href="javascript:;"
            hidefocus="true"
            class="prv"
            title="上一首(ctrl+←)"
            @click="prev"
            >上一首</a
          >
          <a
            href="javascript:;"
            hidefocus="true"
            class="ply j-flag"
            title="播放/暂停(p)"
            :class="playing ? 'pas' : ''"
            @click="togglePlay"
            >播放/暂停</a
          >
          <a
            href="javascript:;"
            hidefocus="true"
            class="nxt"
            title="下一首(ctrl+→)"
            @click="next"
            >下一首</a
          >
        </div>
        <div class="head j-flag">
          <img v-if="hasCurrentSong" :src="currentSong.img" />
          <a hidefocus="true" class="mask"></a>
        </div>
        <div class="play">
          <div class="j-flag words">
            <a
              hidefocus="true"
              class="f-thide name fc1 f-fl"
              :title="currentSong.name"
              @click="gotoSongDetail(currentSong.id)"
              >{{ currentSong.name }}</a
            >
            <span class="by f-thide f-fl">
              <span :title="currentSong.artistsText">
                <a v-if="hasCurrentSong" class="" hidefocus="true">
                  {{ currentSong.artistsText }}
                </a>
              </span>
            </span>
          </div>
          <div class="m-pbar" data-action="noop">
            <div class="barbg j-flag" @click="clickBar">
              <div class="rdy" :style="'width:' + bufferPrecent + 'px'"></div>
              <div class="cur" :style="'width: ' + barPrecent + '%'">
                <span class="btn f-tdn f-alpha" @mousedown="onChangeBar">
                  <i></i>
                </span>
              </div>
            </div>
            <span class="j-flag time"
              ><em>{{ formatTime(currentTime) }}</em> /
              {{ formatTime(currentSong.duration / 1000) }}</span
            >
          </div>
        </div>
        <div class="oper f-fl">
          <a
            href="javascript:;"
            hidefocus="true"
            class="icn icn-add j-flag"
            title="收藏"
            >收藏</a
          >
          <a
            href="javascript:;"
            hidefocus="true"
            class="icn icn-share"
            title="分享"
            >分享</a
          >
        </div>
        <div class="ctrl f-fl f-pr j-flag">
          <div
            class="m-vol"
            :style="{ visibility: isShowVol ? 'visible' : 'hidden' }"
          >
            <div class="barbg"></div>
            <div class="vbg j-t" @click="clickVolBar">
              <div
                class="curr j-t"
                :style="{ height: volumePrecent * 93 + 'px' }"
              ></div>
              <span
                class="btn f-alpha j-t"
                :style="{ top: (1 - volumePrecent) * 81 + 'px' }"
                @mousedown="onChangeVolBar"
              ></span>
            </div>
          </div>
          <a hidefocus="true" class="icn icn-vol" @click="clickVolBtn"></a>
          <a
            hidefocus="true"
            class="icn"
            :class="currentMode.icon"
            :title="currentMode.name"
            @click="onChangeMode"
          ></a>
          <span class="add f-pr">
            <span class="tip" style="display: none">已添加到播放列表</span>
            <a title="播放列表" hidefocus="true" class="icn icn-list s-fc3"
              >{{ playlist.length }}
            </a>
          </span>
          <div
            class="tip tip-1"
            :style="{ display: isShowModeTip ? '' : 'none' }"
          >
            {{ currentMode.name }}
          </div>
        </div>
      </div>
    </div>
    <audio
      :src="currentSong.url"
      @canplay="ready"
      @ended="end"
      @timeupdate="timeupdate"
      ref="audio"
    ></audio>
  </div>
</template>

<script>
import { isDef, formatTime } from "common/utils";
import { playModeMap } from "common/config";
// import { getSong } from "api";

export default {
  data() {
    return {
      isLock: false,
      isShowVol: false,
      isHoldBtn: false,
      isShowModeTip: false,
      songReady: false,
      volumePrecent: 1,
      volume: 100,
      bufferTime: 0,
    };
  },
  mounted() {
    console.log(this.audio);
    this.audio.volume = this.volumePrecent;
  },
  methods: {
    formatTime(duration) {
      return formatTime(duration);
    },
    switchLock() {
      this.isLock = !this.isLock;
    },
    ready() {
      console.log("ready change");
      this.songReady = true;
    },
    end() {
      this.bufferTime = 0;
      this.next();
    },
    togglePlay() {
      if (!this.currentSong.id) return;
      this.$store.commit("music/setPlayingState", !this.playing);
    },
    async play() {
      console.log("play");
      try {
        await this.audio.play();
      } catch (err) {
        console.log(err);
      }
    },
    pause() {
      console.log("pause");
      this.audio.pause();
    },
    prev() {
      this.bufferTime = 0;
      this.$store.dispatch("music/startSong", this.prevSong);
    },
    next() {
      this.bufferTime = 0;
      this.$store.dispatch("music/startSong", this.nextSong);
    },
    timeupdate(e) {
      const time = e.target.currentTime;
      let timeRang = e.target.buffered;
      let buffer = timeRang.end(timeRang.length - 1);
      this.bufferTime = buffer;
      console.log(buffer);
      this.$store.commit("music/setCurrentTime", time);
    },
    onChangeMode() {
      const modeKeys = Object.keys(playModeMap);
      const currentModeIndex = modeKeys.findIndex(
        (key) => playModeMap[key].code === this.playMode
      );
      const nextIndex = (currentModeIndex + 1) % modeKeys.length;
      const nextModeKey = modeKeys[nextIndex];
      const nextMode = playModeMap[nextModeKey];
      this.$store.commit("music/setPlayMode", nextMode.code);
      this.showModeChangeTip();
    },
    showModeChangeTip() {
      this.isShowModeTip = true;
      if (this.ModeTipTimer) clearTimeout(this.ModeTipTimer);
      this.ModeTipTimer = setTimeout(() => {
        this.isShowModeTip = false;
      }, 1000);
    },
    clickVolBtn() {
      this.isShowVol = !this.isShowVol;
    },
    onChangeVolBar(e) {
      let odiv = e.target;
      let screenH = document.documentElement.clientHeight;
      let percent;
      document.onmousemove = (e) => {
        percent = (screenH - e.clientY - 44) / 101;
        if (percent >= 0 && percent <= 1) this.volumePrecent = percent;
      };
      document.onmouseup = (e) => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    clickVolBar(e) {
      let screenH = document.documentElement.clientHeight;
      let precent = (screenH - e.clientY - 44) / 101;
      this.volumePrecent = precent;
    },
    onChangeBar(e) {
      this.isHoldBtn = true;
      console.log(e);
      let odiv = e.target; //获取目标元素
      console.log(odiv.offsetLeft);
      //算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft;
      console.log(disX);
      let disY = e.clientY - odiv.offsetTop;
      let percent;
      document.onmousemove = (e) => {
        //鼠标按下并移动的事件
        if (e.clientX >= 416 && e.clientX <= 909) {
          percent = (e.clientX - 416) / 493;
          console.log("on change", percent);
          odiv.parentElement.style.width = percent * 100 + "%";
        }
      };
      document.onmouseup = (e) => {
        let targetTime = this.currentSong.durationSecond * percent;
        // this.$store.commit('music/setCurrenTime', targetTime)
        this.audio.currentTime = targetTime;
        this.$store.commit("music/setPlayingState", true);
        this.isHoldBtn = false;
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    clickBar(e) {
      if (!this.isHoldBtn) {
        let percent = e.offsetX / 493;
        let targetTime = this.currentSong.durationSecond * percent;
        // this.$store.commit('music/setCurrenTime', targetTime)
        this.audio.currentTime = targetTime;
        this.$store.commit("music/setPlayingState", true);
      }
    },
    gotoSongDetail(id) {
      console.log(id);
      this.$router.push({
        path: "/musicLibrary/songDetail",
        query: { id: id },
      });
    },
    gotoSongerDetail(id) {},
  },
  computed: {
    audio() {
      return this.$refs.audio;
    },
    playing() {
      return this.$store.state.music.playing;
    },
    playlist() {
      return this.$store.state.music.playlist;
    },
    hasCurrentSong() {
      return isDef(this.currentSong.id);
    },
    currentSong() {
      return this.$store.state.music.currentSong;
    },
    prevSong() {
      return this.$store.getters["music/prevSong"];
    },
    nextSong() {
      console.log(this.$store.getters);
      return this.$store.getters["music/nextSong"];
    },
    playMode() {
      return this.$store.state.music.playMode;
    },
    currentMode() {
      return playModeMap[this.playMode];
    },
    currentTime() {
      return this.$store.state.music.currentTime;
    },
    barPrecent() {
      if (!this.isHoldBtn)
        return (this.currentTime / (this.currentSong.duration / 1000)) * 100;
    },
    bufferPrecent() {
      return (this.bufferTime / (this.currentSong.duration / 1000)) * 493;
    },
  },
  watch: {
    currentSong(newSong, oldSong) {
      console.log("new", newSong, "old", oldSong);
      // 清空歌曲
      if (!newSong.id) {
        this.audio.pause();
        this.audio.currentTime = 0;
        return;
      }

      // 单曲循环
      if (oldSong && newSong.id === oldSong.id) {
        this.$store.commit("music/setCurrentTime", 0);
        this.audio.currentTime = 0;
        this.play();
        return;
      }

      this.songReady = false;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        if (this.playing) this.play();
      }, 1000);
    },
    playing(newPlaying) {
      console.log("new playing", newPlaying);
      this.$nextTick(() => (newPlaying ? this.play() : this.pause()));
    },
    volumePrecent(newVol) {
      this.audio.volume = newVol;
    },
  },
};
</script>

<style scoped>
.m-pbar .btn,
.m-vol .btn {
  background: url(../../assets/img/iconall.png) no-repeat;
}
.m-playbar .listhd,
.m-playbar .listbd {
  background: url(../../assets/img/playlist_bg.png) no-repeat;
}

[hidefocus] {
  outline: none;
}
a {
  text-decoration: none;
  color: grey;
}
img,
.txt {
  border: 0;
}
em,
i {
  font-style: normal;
  text-align: left;
  font-size: inherit;
}

.g-btmbar {
  font-size: 12px;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-text-size-adjust: none;
  position: fixed;
  zoom: 1;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  width: 100%;
  z-index: 1002;
}

.m-playbar .updn .left,
.m-playbar .updn .right,
.m-playbar .updn .btn,
.m-playbar .bg,
.m-playbar .btns a,
.m-playbar .head .mask,
.m-playbar .icn,
.m-playbar .ctrl,
.m-playbar .tip,
.m-vol .curr,
.m-playbar .words .mv,
.m-vol .barbg,
.m-playbar .words .src {
  background: url(../../assets/img/playbar.png) no-repeat 0 9999px;
}
.m-playbar {
  position: absolute;
  z-index: 1;
  top: -7px;
  left: 0;
  width: 100%;
  height: 53px;
  margin: 0 auto;
  transition-duration: 0.5s;
}
.m-playbar:hover {
  top: -53px;
}

.m-playbar .updn {
  position: relative;
  z-index: 11;
}
.m-playbar .updn .left {
  position: absolute;
  top: -14px;
  right: 15px;
  width: 52px;
  height: 67px;
  background-position: 0 -380px;
}
.m-playbar .updn .right {
  position: absolute;
  top: -1px;
  right: 0;
  width: 15px;
  height: 54px;
  background-position: -52px -393px;
  pointer-events: none;
}
.m-playbar .updn .btn {
  display: block;
  width: 18px;
  height: 18px;
  margin: 6px 0 0 17px;
}

.m-playbar-lock {
  top: -53px;
}
.m-playbar-lock .updn .btn {
  background-position: -100px -380px;
}
.m-playbar-unlock .updn .btn {
  background-position: -80px -380px;
}

.m-playbar .bg {
  height: 53px;
  z-index: 5;
  margin-right: 67px;
  background-position: 0 0;
  background-repeat: repeat-x;
}

.m-playbar .hand {
  position: absolute;
  top: -10px;
  width: 100%;
  height: 20px;
  cursor: pointer;
}

.m-playbar .wrap {
  position: absolute;
  left: 50%;
  top: 6px;
  z-index: 15;
  width: 980px;
  height: 47px;
  margin: 0 auto;
}
.m-playbar .btns,
.m-playbar .head,
.m-playbar .play,
.m-playbar .volum,
.m-playbar .oper {
  float: left;
}
.m-playbar .btns {
  width: 137px;
  padding: 6px 0 0 0;
}
.m-playbar .btns a {
  display: block;
  float: left;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  margin-top: 5px;
  text-indent: -9999px;
}

.m-playbar .btns .prv {
  background-position: 0 -130px;
}
.m-playbar .btns .prv:hover {
  background-position: -30px -130px;
}
.m-playbar .btns .ply {
  width: 36px;
  height: 36px;
  margin-top: 0;
  background-position: 0 -204px;
}
.m-playbar .btns .ply:hover {
  background-position: -40px -204px;
}
.m-playbar .btns .pas {
  background-position: 0 -165px;
}
.m-playbar .btns .pas:hover {
  background-position: -40px -165px;
}
.m-playbar .btns .nxt {
  background-position: -80px -130px;
}
.m-playbar .btns .nxt:hover {
  background-position: -110px -130px;
}

.m-playbar .head {
  position: relative;
  *zoom: 1;
  margin: 6px 15px 0 0;
}
.m-playbar .head,
.m-playbar .head img {
  width: 34px;
  height: 34px;
}
.head img {
  width: 34px;
  height: 34px;
}
.m-playbar .head .mask {
  position: absolute;
  top: 0px;
  left: 0px;
  display: block;
  width: 34px;
  height: 35px;
  background-position: 0 -80px;
}

.m-playbar .play {
  position: relative;
  *zoom: 1;
  width: 608px;
}
.m-playbar .words {
  height: 28px;
  overflow: hidden;
  color: #e8e8e8;
  text-shadow: 0 1px 0 #171717;
  line-height: 28px;
}
.m-playbar .words .name {
  max-width: 300px;
}
.m-playbar .words .fc1 {
  color: #e8e8e8;
}
.m-playbar .words .by {
  max-width: 220px;
  margin-left: 15px;
  color: #9b9b9b;
}

.f-thide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.f-fl {
  float: left;
}

.m-pbar .barbg,
.m-pbar .cur,
.m-pbar .rdy,
.m-pbar .left {
  background: url(../../assets/img/statbar.png) no-repeat 0 9999px;
}
.m-pbar,
.m-pbar .barbg {
  width: 493px;
}
.m-pbar {
  position: relative;
  *zoom: 1;
}
.m-pbar .barbg,
.m-pbar .cur,
.m-pbar .rdy {
  height: 9px;
  background-position: right 0;
}
.m-pbar .rdy {
  background-position: right -30px;
}
.m-pbar .cur {
  position: absolute;
  top: 0;
  left: 0;
  width: 1%;
  background-position: left -66px;
}
.m-pbar .btn {
  position: absolute;
  top: -7px;
  right: -13px;
  width: 22px;
  height: 24px;
  margin-left: -11px;
  background-position: 0 -250px;
}
.m-pbar .btn:hover {
  background-position: 0 -280px;
}
.m-pbar .btn i {
  visibility: hidden;
  position: absolute;
  left: 5px;
  top: 5px;
  width: 12px;
  height: 12px;
  background: url(https://s2.music.126.net/style/web2/img/outchain/loading.gif?3bf992a5e22453c9d801bdc5092ee10d);
}
.m-pbar .time {
  position: absolute;
  top: -3px;
  right: -84px;
  color: #797979;
  text-shadow: 0 1px 0 #121212;
}
.m-pbar .time em {
  color: #a1a1a1;
}
.m-playbar .oper {
  width: 60px;
}
.m-playbar .icn {
  float: left;
  width: 25px;
  height: 25px;
  margin: 11px 2px 0 0;
  text-indent: -9999px;
}
.m-playbar .icn-add:hover {
  background-position: -88px -189px;
}
.m-playbar .icn-add {
  background-position: -88px -163px;
}
.m-playbar .icn-share:hover {
  background-position: -114px -189px;
}
.m-playbar .icn-share {
  background-position: -114px -163px;
}
.m-playbar .ctrl {
  position: relative;
  z-index: 10;
  width: 113px;
  padding-left: 13px;
  background-position: -147px -238px;
}
.m-vol {
  position: absolute;
  top: -113px;
  left: 9px;
  clear: both;
  width: 32px;
  height: 113px;
}
.m-vol .barbg {
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 113px;
  background-position: 0 -503px;
}
.m-vol .vbg {
  padding: 4px 0;
  top: 7px;
}
.m-vol .vbg,
.m-vol .curr {
  position: absolute;
  top: 11px;
  left: 14px;
  width: 4px;
  height: 93px;
}
.m-vol .curr {
  top: auto;
  bottom: 4px;
  left: 0;
  background-position: -40px bottom;
  overflow: hidden;
}
.m-vol .btn {
  position: absolute;
  top: 0;
  left: -7px;
  display: block;
  width: 18px;
  height: 20px;
  background-position: -40px -250px;
  _background-position: 0 0;
  cursor: pointer;
}
.m-playbar .icn-vol {
  background-position: -2px -248px;
}
.m-playbar .icn-vol:hover {
  background-position: -31px -248px;
}
.m-playbar .icn {
  float: left;
  width: 25px;
  height: 25px;
  margin: 11px 2px 0 0;
  text-indent: -9999px;
}
.m-playbar .icn-loop:hover {
  background-position: -33px -344px;
}
.m-playbar .icn-loop {
  background-position: -3px -344px;
}
.m-playbar .icn-one:hover {
  background-position: -93px -344px;
}
.m-playbar .icn-one {
  background-position: -66px -344px;
}
.m-playbar .icn-shuffle:hover {
  background-position: -93px -248px;
}
.m-playbar .icn-shuffle {
  background-position: -66px -248px;
}
.m-playbar .add {
  float: left;
  width: 59px;
  height: 36px;
}
.m-playbar .tip {
  position: absolute;
  top: -51px;
  left: -65px;
  clear: both;
  width: 152px;
  height: 49px;
  background-position: 0 -287px;
  text-align: center;
  color: #fff;
  line-height: 37px;
}
.m-playbar .icn-list {
  display: block;
  float: none;
  width: 38px;
  padding-left: 21px;
  background-position: -42px -68px;
  line-height: 27px;
  text-align: center;
  color: #666;
  text-shadow: 0 1px 0 #080707;
  text-indent: 0;
  text-decoration: none;
}
.m-playbar .tip-1 {
  top: -35px;
  left: 12px;
  width: 81px;
  height: 39px;
  line-height: 34px;
  background-position: 0 -457px;
}
</style>
