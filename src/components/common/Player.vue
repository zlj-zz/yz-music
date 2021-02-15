<template>
  <div class="g-btmbar">
    <div
      class="m-playbar"
      style="visibility: visible"
      id="auto-id-tpJNW0OTTZUKHGT6"
      :class="'m-playbar-' + (isLock ? 'lock' : 'unlock')"
      @click="switchIsLock"
    >
      <div class="updn">
        <div class="left f-fl">
          <a
            href="javascript:;"
            class="btn"
            hidefocus="true"
            data-action="lock"
          ></a>
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
            data-action="prev"
            class="prv"
            title="上一首(ctrl+←)"
            >上一首</a
          >
          <a
            href="javascript:;"
            hidefocus="true"
            data-action="play"
            class="ply j-flag"
            title="播放/暂停(p)"
            >播放/暂停</a
          >
          <a
            href="javascript:;"
            hidefocus="true"
            data-action="next"
            class="nxt"
            title="下一首(ctrl+→)"
            >下一首</a
          >
        </div>
        <div class="head j-flag">
          <img
            src="https://p1.music.126.net/jnSajZlbE9ed8QGVlbwK0A==/109951165666607256.jpg?param=34y34"
          />
          <a href="/song?id=1815105886" hidefocus="true" class="mask"></a>
        </div>
        <div class="play">
          <div class="j-flag words">
            <a
              hidefocus="true"
              href="/song?id=1815105886"
              class="f-thide name fc1 f-fl"
              title="狐狸的童话"
              >狐狸的童话</a
            >
            <span class="by f-thide f-fl">
              <span title="Santa_SA/马也_Crabbit">
                <a class="" href="/artist?id=34230619" hidefocus="true">
                  Santa_SA </a
                >/
                <a class="" href="/artist?id=13288861" hidefocus="true">
                  马也_Crabbit
                </a>
              </span>
            </span>
          </div>
          <div class="m-pbar" data-action="noop">
            <div class="barbg j-flag" id="auto-id-olG5f2Dl4lPPaFuS">
              <div class="rdy" style="width: 0px"></div>
              <div class="cur" style="width: 0%">
                <span class="btn f-tdn f-alpha" id="auto-id-h1TVIntmP6HVDr4a">
                  <i></i>
                </span>
              </div>
            </div>
            <span class="j-flag time"><em>00:00</em> / 00:00</span>
          </div>
        </div>
        <div class="oper f-fl">
          <a
            href="javascript:;"
            hidefocus="true"
            data-action="like"
            class="icn icn-add j-flag"
            title="收藏"
            >收藏</a
          >
          <a
            href="javascript:;"
            hidefocus="true"
            data-action="share"
            class="icn icn-share"
            title="分享"
            >分享</a
          >
        </div>
        <div class="ctrl f-fl f-pr j-flag">
          <div
            class="m-vol"
            style="visibility: hidden"
            id="auto-id-0LRPddCu7aNCIboc"
          >
            <div class="barbg"></div>
            <div class="vbg j-t" id="auto-id-L68XOkib47dr55Wt">
              <div class="curr j-t" style="height: 74.4px"></div>
              <span class="btn f-alpha j-t" style="top: 16.2px"></span>
            </div>
          </div>
          <a
            href="javascript:;"
            hidefocus="true"
            data-action="volume"
            class="icn icn-vol"
          ></a>
          <a
            href="javascript:;"
            hidefocus="true"
            data-action="mode"
            class="icn icn-loop"
            title="循环"
          ></a>
          <span class="add f-pr">
            <span class="tip" style="display: none">已添加到播放列表</span>
            <a
              href="javascript:;"
              title="播放列表"
              hidefocus="true"
              data-action="panel"
              class="icn icn-list s-fc3"
              >1
            </a>
          </span>
          <div class="tip tip-1" style="display: none">循环</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLock: false,
    };
  },
  methods: {
    switchIsLock() {
      this.isLock = !this.isLock;
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
  _background-position: 0 0;
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
.m-playbar .icn-add {
  background-position: -88px -163px;
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
.m-playbar .icn {
  float: left;
  width: 25px;
  height: 25px;
  margin: 11px 2px 0 0;
  text-indent: -9999px;
}
.m-playbar .icn-loop {
  background-position: -3px -344px;
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
