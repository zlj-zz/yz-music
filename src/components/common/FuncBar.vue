<template>
  <!-- Func button (not songer) -->
  <div class="data__actions">
    <a
      class="mod_btn_green"
      @click="btnClick('all')"
      v-if="exclude.indexOf('play') == -1"
    >
      <i class="mod_btn_green__icon_play"></i>
      {{ playBtnName }}
    </a>
    <a
      class="mod_btn"
      @click="btnClick('collection')"
      v-if="exclude.indexOf('collection') == -1"
    >
      <i
        class="mod_btn__icon_like"
        :class="whetherCollection ? 'mod_btn__icon_like--like' : ''"
      ></i
      >{{ collectionBtnName }}
    </a>
    <a
      class="mod_btn"
      href="#comment_box"
      @click="btnClick('comment')"
      v-if="exclude.indexOf('comment') == -1"
    >
      <i class="mod_btn__icon_comment"></i>{{ commentBtnName }}
    </a>
    <a
      class="mod_btn"
      @click="btnClick('more')"
      style="display: none"
      v-if="exclude.indexOf('more') == -1"
    >
      <i class="mod_btn__icon_menu"></i>{{ moreBtnName }}
    </a>
  </div>
  <!-- Func button end -->
</template>

<script>
export default {
  props: {
    exclude: { type: Array, default: [] },
    whetherCollection: { type: Boolean, default: false },
    playBtnName: { type: String, default: "播放" },
    collectionBtnName: { type: String, default: "收藏" },
    commentBtnName: { type: String, default: "评论" },
    moreBtnName: { type: String, default: "更多" },
  },
  methods: {
    btnClick(v) {
      this.$emit("btnClick", v);
    },
  },
};
</script>
