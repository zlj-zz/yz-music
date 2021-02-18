<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#f2f2f2"
    text-colr="#000"
    active-text-color="#31c27c"
  >
    <el-menu-item
      v-for="(item, idx) in homeData"
      :key="item.title"
      :index="idx.toString()"
      @click="onClik(item.path)"
    >
      {{ item.title }}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      activeIndex: "0",
      activeIndex2: "0",
      homeData: [
        { title: "首页", path: "/MusicLibrary/home" },
        { title: "歌手", path: "/MusicLibrary/songers" },
        { title: "新碟", path: "/MusicLibrary/newdisc" },
        { title: "排行榜", path: "/MusicLibrary/ranking" },
        { title: "分类歌单", path: "/MusicLibrary/classified" },
        { title: "电台", path: "/MusicLibrary/radions" },
        { title: "MV", path: "/MusicLibrary/mv" },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    onClik(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
</style>

