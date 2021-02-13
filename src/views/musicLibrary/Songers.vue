<template>

<div class='main' v-loading='loading'>

  <TypeSelectBar>
    <TypeSelectSubBar
      :selectId="initial"
      :items="initials"
      @selectId="initialClick"/>
    <TypeSelectSubBar
      :selectId="type"
      :items="types"
      @selectId="typeClick"/>
    <TypeSelectSubBar
      :selectId="area"
      :items="areas"
      @selectId="areaClick"/>
  </TypeSelectBar>

  <ul class="singer_list_txt" v-loading='loading'>
    <li class="singer_list_txt__item" v-for="item in artists" :key="item.id">
      <router-link href="javascript:;"
         class="singer_list_txt__link js_singer"
         :to="{name: 'songer-detail', query: {id: item.id, accountId: item.accountId}}"
         title="item.name">{{item.name}}</router-link>
    </li>
  </ul>

  <div class='arrow-btn arrow-btn-left' >
    <a href="javascript:;" @click="prevPage()" ><i class='el-icon-arrow-left el-icon-arrow'></i></a>
  </div>
  <div class='arrow-btn arrow-btn-right' >
    <a href="javascript:;" @click="nextPage()" ><i class='el-icon-arrow-right el-icon-arrow'></i></a>
  </div>

</div>

</template>

<script>
import { getSongers, songerInitials, songerTypes, songerAreas } from "api";

import TypeSelectBar from 'components/common/TypeSelectBar';
import TypeSelectSubBar from 'components/common/TypeSelectSubBar';

export default {
  name: 'Songers',
  data() {
    return {
      loading: true,
      page: 1,
      more: true,
      initial: songerInitials.DEFAULT.dataId,
      area: songerTypes.DEFAULT.dataId,
      type: songerAreas.DEFAULT.dataId,
      initials:songerInitials,
      types:songerTypes,
      areas: songerAreas,
      artists: []
    };
  },
  mounted() {
    this.updateArtists()
  },
  methods: {
    updateArtists() {
      getSongers(this.initial, this.type,this.area,this.page)
       .then(res => {
            console.log(res);
            this.artists = res.data.artists;
            this.more = res.data.more;
            this.loading = false;
          })
       .catch(err => console.log('updateArtists Error:', err));
    },
    initialClick(id) {
      if (id != this.initial){
        this.initial = id;
        this.updateArtists();
      }
    },
    typeClick(id) {
      if (id != this.type){
        this.type = id;
        this.updateArtists();
      }
    },
    areaClick(id) {
      if (id != this.area){
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
      if (this.page > 1){
        this.page--;
        this.updateArtists();
      }
    },
  },
  components: {
    TypeSelectBar,
    TypeSelectSubBar
  }
}
</script>

<style scoped>
.el-icon-arrow {
  top: 20%;
}

.main {
  z-index: 2;
}
.main,
.section_inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}


.singer_list_txt {
  margin-right: -20px;
  overflow: hidden;
  margin-bottom: 60px;
}

.singer_list_txt__item {
  float: left;
  width: 20%;
}

.singer_list_txt__link {
  float: left;
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 36px;
}
</style>
