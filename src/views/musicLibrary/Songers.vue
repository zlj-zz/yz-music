<template>
<div class='main'>
  <h1>Songers</h1>
  <div class="mod_singer_tag" id="tag_box">
    <div class="singer_tag__list js_index">

      <a href="javascript:;"
         class="singer_tag__item"
         v-for="item in initials" :key="item.title"
         :class="item.dataId == initial ? 'singer_tag__item--all singer_tag__item--select':''"
         @click="initialClick(item.dataId)"
         hidefocus="">{{item.title}}</a>

    </div>

    <div class="singer_tag__list js_type">

      <a href="javascript:;"
         class="singer_tag__item"
         v-for="item in types" :key="item.title"
         :class="item.dataId == type ? 'singer_tag__item--all singer_tag__item--select':''"
         @click="typeClick(item.dataId)"
         hidefocus="">{{item.title}}</a>

    </div>

    <div class="singer_tag__list js_area">

      <a href="javascript:;"
         class="singer_tag__item"
         v-for="item in areas" :key="item.title"
         :class="item.areaId == area ? 'singer_tag__item--all singer_tag__item--select':''"
         @click="areaClick(item.areaId)"
         hidefocus="">{{item.title}}</a>

    </div>

  </div>

  <ul class="singer_list_txt">
    <li class="singer_list_txt__item" v-for="item in artists" :key="item.id">
      <router-link href="javascript:;"
         class="singer_list_txt__link js_singer"
         :to="{name: 'songer-detail', query: {id: item.id, accountId: item.accountId}}"
         title="item.name">{{item.name}}</router-link>
    </li>
  </ul>
</div>
<div class='arrow-btn arrow-btn-left' >
  <a href="javascript:;" @click="prevPage()" ><i class='el-icon-arrow-left el-icon-arrow'></i></a>
</div>
<div class='arrow-btn arrow-btn-right' >
  <a href="javascript:;" @click="nextPage()" ><i class='el-icon-arrow-right el-icon-arrow'></i></a>
</div>
</template>

<script>
import { getSongers } from "api";

export default {
  name: 'Songers',
  data() {
    return {
      page: 1,
      more: true,
      initial: '-1',
      area: -1,
      type: -1,
      initials:[
        {title: '热门', dataId: '-1'},
        {title: 'A', dataId: 'a'},
        {title: 'B', dataId: 'b'},
        {title: 'C', dataId: 'c'},
        {title: 'D', dataId: 'd'},
        {title: 'E', dataId: 'e'},
        {title: 'F', dataId: 'f'},
        {title: 'G', dataId: 'g'},
        {title: 'H', dataId: 'h'},
        {title: 'I', dataId: 'i'},
        {title: 'J', dataId: 'j'},
        {title: 'K', dataId: 'k'},
        {title: 'L', dataId: 'l'},
        {title: 'M', dataId: 'm'},
        {title: 'N', dataId: 'n'},
        {title: 'O', dataId: 'o'},
        {title: 'P', dataId: 'p'},
        {title: 'Q', dataId: 'q'},
        {title: 'R', dataId: 'r'},
        {title: 'S', dataId: 's'},
        {title: 'T', dataId: 't'},
        {title: 'U', dataId: 'u'},
        {title: 'V', dataId: 'v'},
        {title: 'W', dataId: 'w'},
        {title: 'X', dataId: 'x'},
        {title: 'Y', dataId: 'y'},
        {title: 'Z', dataId: 'z'},
        {title: '#', dataId: '0'},
      ],
      types:[
        {title: '全部', dataId: -1},
        {title: '男歌手', dataId: 1},
        {title: '女歌手', dataId: 2},
        {title: '乐队', dataId: 3},
      ],
      areas: [
      {title: '全部', areaId: -1},
      {title: '华语', areaId: 7},
      {title: '欧美', areaId: 96},
      {title: '日本', areaId: 8},
      {title: '韩国', areaId: 16},
      {title: '其他', areaId: 0},
      ],
      artists: []
    };
  },
  created() {
    this.updateArtists()
  },
  methods: {
    updateArtists() {
      getSongers(this.initial, this.type,this.area,this.page)
       .then(res => {
            console.log(res);
            this.artists = res.data.artists
            this.more = res.data.more
          })
       .catch(err => console.log(err));
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
  }

}
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
.mod_singer_tag {
  background-color: #fbfbfd;
  padding: 34px 0 17px 40px;
  margin: 30px 0 20px;
}

.singer_tag__list {
  padding-bottom: 3px;
  height: auto;
  clear: both;
  overflow: hidden;
}

.singer_tag__item--select,
.singer_tag__item--select:hover {
  background-color: #31c27c;
  color: #fff;
}

.singer_tag__item--all {
  margin-right: 28px;
}

.singer_tag__item {
  height: 26px;
  line-height: 27px;
  overflow: hidden;
}

.singer_tag__item {
  float: left;
  padding: 0 8px;
  margin: 0 12px 14px 0;
  margin-right: 12px;
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

li {
  list-style: none;
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
