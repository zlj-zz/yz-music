<template>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-colr="#fff"
  active-text-color="#ffd04b">
  <el-menu-item v-for="(item, idx) in homeData" :key="item.title" :index="idx">
    <router-link :to="item.path">{{item.title}}</router-link>
  </el-menu-item>

</el-menu>
</template>

<script>
  export default {
    name: 'NavMenu',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        homeData:[
        {title: '首页', path: '/MusicLibrary/home'},
        {title: '歌手', path: '/MusicLibrary/songers'},
        {title: '新碟', path: '/MusicLibrary/newdisc'},
        {title: '排行榜', path: '/MusicLibrary/ranking'},
        {title: '分类歌单', path: '/MusicLibrary/classified'},
        {title: '电台', path: '/MusicLibrary/radions'},
        {title: 'MV', path: '/MusicLibrary/mv'},
        ]

      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="postcss" scoped>
  a {
    text-decoration: none;
  }
</style>

