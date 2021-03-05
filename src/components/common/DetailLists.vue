<template>
  <div class="search_tab_cont" style="display: block">
    <div class="mod_playlist_text">
      <ul class="playlist__header">
        <li class="playlist__header_name">{{ titles[kind][0] }}</li>
        <li class="playlist__header_author">{{ titles[kind][1] }}</li>
        <li class="playlist__header_other">{{ titles[kind][2] }}</li>
      </ul>
      <ul class="playlist__list">
        <li
          class="playlist__item"
          onmouseover="this.className=(this.className+' playlist__item--hover')"
          onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
          v-for="l in lists"
          :key="l.id"
        >
          <div class="playlist__cover" style="visibility: visible">
            <a
              ><img
                class="playlist__pic"
                style="display: block; visibility: visible"
                src="//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000"
                v-lazy="l.img"
                :alt="l.name"
            /></a>
          </div>
          <h4 class="playlist__title">
            <span class="playlist__title_txt">
              <a
                v-if="kind == 0"
                :title="l.name"
                @click="gotoAlbumDetail(l.id)"
              >
                {{ l.name }}
              </a>
              <a
                v-else-if="kind == 1"
                :title="l.name"
                @click="gotoPlaylistDetail(l.id)"
              >
                {{ l.name }}
              </a>
            </span>
          </h4>
          <!-- 功能条 -->
          <mod-list-menu :id="l.id" :kind="kind + 1" />

          <div class="playlist__author">
            <a v-if="kind == 0" :title="l.artistsText">{{ l.artistsText }}</a>
            <a v-else-if="kind == 1" :title="l.artistsText">{{
              l.creatorName
            }}</a>
          </div>
          <div class="playlist__other" v-if="kind == 0">
            {{ l.publishTime }}
          </div>
          <div class="playlist__other" v-else-if="kind == 1">
            {{ l.playCount }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ModListMenu from "components/common/ModListMenu";
import { gotoAlbumDetail, gotoPlaylistDetail } from "common/utils";

export default {
  data() {
    return {
      titles: {
        0: ["专辑", "歌手", "发行时间"],
        1: ["歌单", "创建人", "播放量"],
      },
    };
  },
  props: {
    lists: {
      type: Array,
      default: [],
    },
    // 0: album, 1: playlist
    kind: { default: 0 },
  },
  methods: {
    gotoAlbumDetail,
    gotoPlaylistDetail,
  },
  components: {
    ModListMenu,
  },
};
</script>

<style scoped>
a:hover {
  color: #31c27c;
}
</style>
