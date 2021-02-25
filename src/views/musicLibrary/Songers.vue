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
            class="singer_list_txt__link"
            :title="item.name"
            @click="gotoSongerDetail(item.id)"
            >{{ item.name }}</a
          >
        </li>
      </ul>
    </div>
    <push-button @btnClick="btnClick" />
  </div>
</template>

<script>
import TypeSelectBar from "components/common/TypeSelectBar";
import TypeSelectSubBar from "components/common/TypeSelectSubBar";
import PushButton from "components/common/PushButton";
import { getSongers, songerInitials, songerTypes, songerAreas } from "api";
import { gotoSongerDetail } from "common/utils";

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
    btnClick(key) {
      console.log(key);
      if (key == "left") this.prevPage();
      else if (key == "right") this.nextPage();
    },
    gotoSongerDetail,
  },
  components: {
    TypeSelectBar,
    TypeSelectSubBar,
    PushButton,
  },
};
</script>

<style lang="scss" scoped>
.main {
  ul,
  li {
    margin: auto;
    padding: auto;
  }
}
</style>
<style scoped>
</style>
