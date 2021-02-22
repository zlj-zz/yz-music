<template>
  <div
    class="js_search_tab_cont search_tab_cont"
    id="lyric_box"
    style="display: block"
  >
    <div class="mod_lyric_list">
      <ul class="lyric_list__list">
        <li class="lyric_list__item" v-for="lyric in lyrics" :key="lyric.id">
          <h3 class="lyric_list__tit">
            <a title="">{{ lyric.name }}</a>
            －
            <a class="singer_name" :title="lyric.artistsText">{{
              lyric.artistsText
            }}</a>
          </h3>
          <h4 class="lyric_list__album">
            <a class="album_name" :title="lyric.albumName">{{
              lyric.albumName
            }}</a>
          </h4>
          <div class="lyric_list__cont" :class="lyric.class">
            <div v-html="processLyric(lyric.lyrics)"></div>
          </div>
          <div class="lyric_list__toolbar">
            <button class="mod_btn js_clip" @click="moreLyric(lyric)">
              <i class="mod_btn__icon_more"></i>
              {{ lyric.class ? "收起" : "展开" }}
            </button>
            <button
              class="mod_btn js_lyric_copy"
              :copy-content="lyric.lyrics"
              @click="copyLyric(lyric.lyrics)"
            >
              <i class="mod_btn__icon_copy"></i>复制歌词
            </button>
          </div>
        </li>
      </ul>
    </div>
    <black-tip :ifShow="ifShowTip" :tip="'复制成功'" />
  </div>
</template>

<script>
import BlackTip from "components/common/BlackTip";
import { copyText } from "common/utils";

export default {
  data() {
    return {
      ifShowTip: false,
    };
  },
  props: {
    lyrics: {
      type: Array,
      default: [],
    },
  },
  methods: {
    moreLyric(l) {
      l.class = l.class ? "" : "lyric_list__cont--max";
    },
    processLyric(lyrics) {
      return lyrics.join("<br/>");
    },
    copyLyric(lyrics) {
      let lyricText = lyrics.join(" ");
      copyText(lyricText);
      this.showTip("复制成功");
    },
    showTip(tip) {
      this.tip = tip;
      this.ifShowTip = true;
      if (this.tipTimer) clearTimeout(this.tipTimer);
      setTimeout(() => {
        this.ifShowTip = false;
      }, 1000);
    },
  },
  components: {
    BlackTip,
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
.mod_btn {
  border: 1px solid #c9c9c9;
  color: #000;
}
.mod_btn,
.mod_btn_green {
  background-color: #fff;
  border-radius: 2px;
  font-size: 14px;
  margin-right: 6px;
  padding: 0 23px;
  height: 38px;
  line-height: 38px;
  display: inline-block;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
}
.mod_btn__icon_new {
  width: 16px;
  height: 16px;
  background-position: 0 -180px;
}
.mod_btn__icon_copy {
  width: 16px;
  height: 14px;
  background-position: -40px -100px;
  vertical-align: -2px;
}
.mod_lyric_list {
  margin-top: -20px;
}
.lyric_list__item {
  position: relative;
  font-size: 14px;
  line-height: 28px;
  padding: 20px 0 20px;
  border-bottom: 1px solid #f7f7f7;
}
.lyric_list__album,
.lyric_list__tit {
  font-weight: 400;
}
.lyric_list__cont {
  height: 196px;
  overflow: hidden;
  color: #999;
}
.lyric_list__cont--max {
  height: initial;
}
.lyric_list__toolbar {
  margin-top: 10px;
}
</style>
