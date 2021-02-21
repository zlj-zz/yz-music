<template>
  <div id="nav">
    <div class="mod_header">
      <div class="section_inner">
        <h1 class="qqmusic_title">
          <!-- <a>
            <img src="" alt="YZ-music" class="logo" />
          </a> -->
          <h1 class="logo">YZ-music</h1>
        </h1>
        <!-- 导航 S -->
        <ul class="mod_top_nav" role="nav">
          <li
            class="top_nav__item"
            v-for="(item, idx) in navData"
            :key="item.title"
          >
            <router-link
              class="top_nav__link"
              :class="$route.meta.index == idx ? 'top_nav__link--current' : ''"
              :data="$route.meta.index"
              :to="item.path"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
        <!-- 子导航 -->
        <ul class="mod_top_subnav" v-if="$route.meta.index == 0">
          <li
            class="top_subnav__item"
            v-for="(item, idx) in subNavData"
            :key="idx"
          >
            <router-link
              class="top_subnav__link"
              :class="
                $route.meta.name == item.name ? 'top_subnav__link--current' : ''
              "
              :data="$route.meta.name"
              :to="item.path"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
        <!-- 搜索 -->
        <div class="mod_top_search" role="search">
          <div class="mod_search_input">
            <search-input />
          </div>
        </div>
        <!-- 登陆 -->
        <login-opt />
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "components/common/SearchInput";
import LoginOpt from "components/common/LoginOpt";

export default {
  name: "NavBar",
  data() {
    return {
      navData: [
        { title: "音乐库", path: "/" },
        { title: "我的音乐", path: "/My" },
      ],
      subNavData: [
        { title: "首页", name: "home", path: "/MusicLibrary/home" },
        { title: "歌手", name: "songers", path: "/MusicLibrary/songers" },
        { title: "新碟", name: "newdisc", path: "/MusicLibrary/newdisc" },
        { title: "排行榜", name: "ranking", path: "/MusicLibrary/ranking" },
        {
          title: "分类歌单",
          name: "classified",
          path: "/MusicLibrary/classified",
        },
        { title: "电台", name: "radions", path: "/MusicLibrary/radions" },
        { title: "MV", name: "mv", path: "/MusicLibrary/mv" },
      ],
    };
  },
  components: {
    SearchInput,
    LoginOpt,
  },
};
</script>

<style scoped>
h1,
h2,
ul,
li,
p {
  margin: 0;
  padding: 0;
}
.mod_header {
  background-color: #fff;
  position: relative;
  z-index: 4;
}
.mod_header .section_inner {
  padding-top: 90px;
}
.main,
.section_inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.qqmusic_title {
  position: absolute;
  left: 0;
  top: 22px;
}
.mod_top_nav {
  position: absolute;
  left: 198px;
  top: 0;
}
.top_nav__item {
  position: relative;
  float: left;
  margin-right: -5px;
}
.top_nav__link {
  display: block;
  padding: 0 20px;
  line-height: 90px;
  height: 90px;
  text-align: center;
  font-size: 18px;
}
.top_nav__link--current,
.top_nav__link--current:hover {
  background-color: #31c27c;
  color: #fff;
}

.mod_top_subnav {
  height: 51px;
  line-height: 51px;
  border-top: 1px solid #f2f2f2;
  padding-left: 230px;
  margin-right: -50px;
}
.top_subnav__item {
  float: left;
  font-size: 15px;
  color: #c1c1c1;
  margin-right: 47px;
}
.top_subnav__link {
  display: block;
}
.top_subnav__link--current {
  color: #31c27c;
}

.mod_top_search {
  position: absolute;
  top: 0;
  right: 284px;
}
.mod_search_input {
  padding: 0 33px 0 11px;
  line-height: 36px;
  height: 36px;
  margin-top: 26px;
  position: relative;
  background-color: #fff;
  transition: width 0.6s ease-out;
}

a:hover {
  color: #31c27c;
}

.logo {
  font-size: 38px;
  padding-left: 20px;
}
</style>
