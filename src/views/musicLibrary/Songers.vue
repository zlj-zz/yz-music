<template>
  <div class="mod_slide_box" style="position: relative">
    <div class="main" v-loading="loading">
      <type-select-bar>
        <type-select-sub-bar
          :selectId="initial"
          :items="initials"
          @selectId="initialClick"
        />
        <type-select-sub-bar
          :selectId="type"
          :items="types"
          @selectId="typeClick"
        />
        <type-select-sub-bar
          :selectId="area"
          :items="areas"
          @selectId="areaClick"
        />
      </type-select-bar>

      <ul class="singer_list_txt" v-loading="loading">
        <li
          class="singer_list_txt__item"
          v-for="item in artists"
          :key="item.id"
        >
          <a
            href="javascript:;"
            class="singer_list_txt__link js_singer"
            :title="item.name"
            @click="
              gotoSongerDetail({ id: item.id, accountId: item.accountId })
            "
            >{{ item.name }}</a
          >
        </li>
      </ul>
    </div>

    <div class="mod_slide_action">
      <div class="slide_action slide_action--left">
        <a
          href="javascript:;"
          class="slide_action__btn slide_action__btn--left js_jump"
          data-p="prev"
          tabindex="-1"
          @click="prevPage()"
        >
          <i class="icon_txt">上一页</i
          ><i class="slide_action__arrow slide_action__arrow--left sprite"></i>
        </a>
      </div>
      <div class="slide_action slide_action--right">
        <a
          href="javascript:;"
          class="slide_action__btn slide_action__btn--right js_jump"
          data-p="next"
          tabindex="-1"
          @click="nextPage()"
        >
          <i class="icon_txt">下一页</i
          ><i class="slide_action__arrow slide_action__arrow--right sprite"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getSongers, songerInitials, songerTypes, songerAreas } from "api";

import TypeSelectBar from "components/common/TypeSelectBar";
import TypeSelectSubBar from "components/common/TypeSelectSubBar";

export default {
  name: "Songers",
  data() {
    return {
      loading: true,
      page: 1,
      more: true,
      initial: songerInitials.DEFAULT.dataId,
      area: songerTypes.DEFAULT.dataId,
      type: songerAreas.DEFAULT.dataId,
      initials: songerInitials,
      types: songerTypes,
      areas: songerAreas,
      artists: [],
    };
  },
  mounted() {
    this.updateArtists();
  },
  methods: {
    updateArtists() {
      getSongers(this.initial, this.type, this.area, this.page)
        .then((res) => {
          console.log(res);
          this.artists = res.data.artists;
          this.more = res.data.more;
          this.loading = false;
        })
        .catch((err) => console.log("updateArtists Error:", err));
    },
    initialClick(id) {
      if (id != this.initial) {
        this.initial = id;
        this.updateArtists();
      }
    },
    typeClick(id) {
      if (id != this.type) {
        this.type = id;
        this.updateArtists();
      }
    },
    areaClick(id) {
      if (id != this.area) {
        this.area = id;
        this.updateArtists();
      }
    },
    nextPage() {
      if (this.more == true) {
        this.page++;
        this.updateArtists();
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
        this.updateArtists();
      }
    },
    gotoSongerDetail(query) {
      this.$router.push({ path: "/musicLibrary/songerDetail", query: query });
    },
  },
  components: {
    TypeSelectBar,
    TypeSelectSubBar,
  },
};
</script>

<style scoped>
.main {
  z-index: 2;
}

.main,
.section_inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}
</style>
