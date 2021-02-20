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
        <div class="header__opt">
          <!-- 未登录 -->
          <span class="mod_top_login">
            <a
              class="top_login__link js_logined"
              href="//y.qq.com/portal/profile.html#stat=y_new.top.user_pic"
              onclick="setStatCookie&amp;&amp;setStatCookie();"
              style=""
              ><img
                src="http://thirdqq.qlogo.cn/g?b=sdk&amp;k=uwNbKsMJia8ASG007iakGJXA&amp;s=140&amp;t=1586579228"
                onerror="this.src='//y.gtimg.cn/mediastyle/global/img/person_300.png?max_age=2592000';this.onerror=null;"
                class="top_login__cover js_user_img"
              />
            </a>
            <a
              class="top_login__link js_login"
              data-stat="y_new.top.login"
              href="javascript:;"
              style="display: none"
            >
              登录
            </a>

            <a
              class="login__link header__link js_login"
              data-stat="y_new.top.login"
              href="javascript:;"
              style="display: none"
              >登录</a
            >
          </span>
          <!-- 用户信息 -->
          <div class="popup_user">
            <div class="popup_user_data">
              <a
                href="//y.qq.com/portal/profile.html#stat=y_new.top.pop.user_pic"
                class="popup_user_data__cover_link"
                onclick="setStatCookie&amp;&amp;setStatCookie();"
              >
                <img
                  src="http://thirdqq.qlogo.cn/g?b=sdk&amp;k=uwNbKsMJia8ASG007iakGJXA&amp;s=140&amp;t=1586579228"
                  onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/person_300.png?max_age=2592000\';this.onerror=null;"
                  class="popup_user_data__cover js_user_img"
                />

                <img
                  src="//y.gtimg.cn/mediastyle/yqq/img/login_qq.png?max_age=2592000"
                  class="popup_user_data__icon"
                />
              </a>
              <!-- 自动垂直居中 -->
              <div class="popup_user_data__cont">
                <div class="popup_user_data__name">
                  <a
                    href="//y.qq.com/portal/profile.html#stat=y_new.top.pop.user_nickname"
                    onclick="setStatCookie&amp;&amp;setStatCookie();"
                    class=""
                    >Zachary_</a
                  >
                </div>
                <div class="popup_user_data__lv">
                  <a class="js_vip_jump" rel="noopener" target="_blank"
                    ><img
                      src=""
                      alt="one"
                      class="popup_user_data__lv_icon" /></a
                  ><a class="js_vip_jump" rel="noopener" target="_blank"
                    ><img src="" alt="two" class="popup_user_data__lv_icon"
                  /></a>
                </div>
              </div>
            </div>

            <div class="popup_user_toolbar">
              <div class="popup_user_toolbar__item">
                <div class="popup_user_toolbar__tit js_msgcenterdiv">
                  <a
                    href="//y.qq.com/portal/msg_center.html#stat=y_new.top.pop.msg_center"
                    onclick="setStatCookie&amp;&amp;setStatCookie();"
                    >评论通知</a
                  >
                </div>
              </div>
              <div class="popup_user_toolbar__item">
                <div class="popup_user_toolbar__tit">
                  <a
                    href="javascript:;"
                    class="js_logout"
                    data-stat="y_new.top.pop.logout"
                    >退出QQ登录</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "components/common/SearchInput";
export default {
  name: "NavBar",
  data() {
    return {
      active: 0,
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
  methods: {
    text() {
      console.log("test", this.$route.meta.index);
    },
  },
  components: {
    SearchInput,
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

.header__opt {
  position: absolute;
  top: 0;
  right: 0;
  height: 90px;
  line-height: 90px;
}
.mod_top_login {
  font-size: 0;
  height: 90px;
  line-height: 90px;
}
.top_login__link {
  position: relative;
  z-index: 12;
  font-size: 16px;
  float: left;
  width: 38px;
  margin-right: 10px;
  text-align: center;
}
.top_login__cover {
  width: 38px;
  height: 38px;
  border-radius: 90px;
  vertical-align: -14px;
}
.top_login__link {
  position: relative;
  z-index: 12;
  font-size: 16px;
  float: left;
  width: 38px;
  margin-right: 10px;
  text-align: center;
}

.popup_user {
  position: absolute;
  right: 0;
  top: 90px;
  width: 288px;
  background-color: #fff;
  z-index: 9;
  line-height: 1.5;
  border: 1px solid #f2f2f2;
  font-size: 13px;
}
.mod_search_other,
.mod_search_result,
.popup_user {
  max-height: 0;
  visibility: hidden;
  transition: max-height 0.6s ease-out, visibility 1ms 0.6s;
  overflow: hidden;
}
.popup_user_data {
  display: table;
  height: 84px;
  overflow: hidden;
  text-align: left;
  padding: 25px 20px 0;
}
.popup_user_data__cover_link {
  position: relative;
  float: left;
}
.popup_user_data__cover {
  float: left;
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 999px;
  margin-right: 10px;
}
.popup_user_data__cont {
  display: table-cell;
  vertical-align: middle;
}
.popup_user_data__name {
  color: #000;
  padding: 0 0 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.popup_user_data__lv {
  white-space: nowrap;
  margin-bottom: 6px;
}
.popup_user_toolbar {
  padding: 13px 20px 6px;
  font-size: 15px;
}
.popup_user_toolbar__item {
  position: relative;
  margin-bottom: 16px;
}
.drop {
  visibility: visible;
  max-height: 800px;
  transition: max-height 0.6s ease-out;
}
a:hover {
  color: #31c27c;
}

.logo {
  font-size: 38px;
  padding-left: 20px;
}
</style>
