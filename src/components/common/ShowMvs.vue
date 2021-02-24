<template>
  <div
    class="js_search_tab_cont search_tab_cont"
    id="mv_box"
    style="display: block"
  >
    <div class="mod_mv_list">
      <ul class="mv_list__list">
        <li class="mv_list__item" v-for="mv in mvs" :key="mv.id">
          <div class="mv_list__item_box" style="visibility: visible">
            <a
              class="mv_list__cover mod_cover js_mv"
              hidefocus="true"
              @click="gotoMvDetail(mv.id)"
            >
              <img
                class="mv_list__pic"
                style="display: block; visibility: visible"
                src="//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000"
                v-lazy="mv.img"
                :alt="mv.name"
              />
              <i class="mod_cover__icon_play"></i>
              <!--div class="mv_list__time">04:10</div-->
            </a>
            <h3 class="mv_list__title">
              <a class="js_mv" :title="mv.name" @click="gotoMvDetail(mv.id)">{{
                mv.name
              }}</a>
            </h3>
            <p class="mv_list__singer">
              <a class="js_singer" :title="mv.artistsText">{{
                mv.artistsText
              }}</a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { gotoMvDetail } from "common/utils";

export default {
  props: {
    mvs: { type: Array, default: [] },
  },
  methods: {
    gotoMvDetail,
  },
};
</script>

<style scoped>
hr,
li,
ol,
p,
td,
th,
ul {
  margin: 0;
  padding: 0;
}
.mod_lyric_list,
.mod_mv_list,
.mod_playlist_text,
.mod_songlist {
  padding-bottom: 40px;
}

.mv_list__list {
  margin-right: -20px;
  zoom: 1;
}
.mv_list__item {
  float: left;
  width: 25%;
  padding-bottom: 44px;
  overflow: hidden;
}
</style>
