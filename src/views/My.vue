<template>
  <div class="mod_profile_unlogin" v-if="!isLogged">
    <div class="section_inner">
      <h2 class="profile_unlogin__tit">
        <div class="icon_txt">听我喜欢听的歌</div>
      </h2>
      <div class="profile_unlogin__desc"></div>
      <a
        href="javascript:;"
        data-stat="y_new.profile.login"
        class="mod_btn_green profile_unlogin__btn js_login"
        >立即登录</a
      >
    </div>
  </div>

  <div v-if="isLogged">
    <div class="mod_profile js_user_data" style="">
      <div class="section_inner">
        <div class="profile__cover_link">
          <img
            src="//y.gtimg.cn/mediastyle/global/img/person_300.png?max_age=31536000"
            v-lazy="$store.state.user.user.avatarUrl"
            alt="$store.state.user.user.nickname"
            class="profile__cover"
            id="profileHead"
          />
        </div>
        <h1 class="profile__tit">
          <span class="profile__name">{{
            $store.state.user.user.nickname
          }}</span>
        </h1>
        <ul class="mod_user_statistic">
          <li class="user_statistic__item">
            <a
              href="javascript:;"
              class="js_tab"
              data-tab="focus_singer"
              data-stat="y_new.profile.header.focus_click"
              ><strong class="user_statistic__number js_num_follow">5</strong
              ><span class="user_statistic__tit">关注</span></a
            >
          </li>
          <li class="user_statistic__item user_statistic__item--last">
            <a
              href="javascript:;"
              class="js_tab"
              data-tab="fans"
              data-stat="y_new.profile.header.fans_click"
              ><strong class="user_statistic__number js_num_fans">0</strong
              ><span class="user_statistic__tit">粉丝</span></a
            >
          </li>
        </ul>

        <button
          class="btn_unlock sprite js_btn_lock"
          title="主页非公开"
          data-status="1"
        >
          <span class="icon_txt">主页非公开</span>
        </button>
      </div>
    </div>
    <div class="main main--profile">
      <div class="mod_tab profile_nav" role="nav" id="nav">
        <router-link
          class="mod_tab__item"
          id="like_tab"
          :class="$route.meta.name == 'like' ? 'mod_tab__current' : ''"
          :to="'/my/like'"
          >我的收藏</router-link
        >
        <router-link
          class="mod_tab__item"
          id="focus_tab"
          :class="$route.meta.name == 'follows' ? 'mod_tab__current' : ''"
          :to="'/my/follows'"
          >关注</router-link
        >
        <router-link
          class="mod_tab__item"
          id="fans_tab"
          :class="$route.meta.name == 'followeds' ? 'mod_tab__current' : ''"
          :to="'/my/followeds'"
          >粉丝</router-link
        >
      </div>
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
import { getUserDetail } from "api";

export default {
  mounted() {
    this.getUserDetail();
  },
  methods: {
    getUserDetail() {
      getUserDetail(this.userId).then((res) => {
        console.log(res);
      });
    },
  },
  computed: {
    isLogged() {
      return this.$store.state.user.isLogged;
    },
    userId() {
      return this.$store.state.user.user.userId;
    },
  },
};
</script>

<style scoped>
/*
  未登录 */
.mod_profile_unlogin {
  height: 922px;
  background: url(../assets/img/bg_profile_unlogin.jpg) 50% no-repeat;
  background-size: auto;
  background-size: cover;
  overflow: hidden;
}
.mod_profile_unlogin {
  height: 622px;
}
.section_inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.profile_unlogin__desc,
.profile_unlogin__tit {
  background-image: url(https://y.gtimg.cn/mediastyle/yqq/img/profile_tit.png?max_age=2592000&v=e6091d7cd6e4142e075c91798c5d51cc);
  margin-left: auto;
  margin-right: auto;
}
.profile_unlogin__tit {
  width: 735px;
  height: 64px;
  background-position: 0 0;
  margin-top: 350px;
}
.profile_unlogin__tit {
  margin-top: 210px;
}
.profile_unlogin__desc {
  width: 345px;
  height: 30px;
  background-position: 0 -70px;
  margin-top: 30px;
  margin-bottom: 36px;
}
.profile_unlogin__btn {
  display: block;
  font-size: 20px;
  height: 48px;
  line-height: 48px;
  width: 128px;
  text-align: center;
  margin: 0 auto;
}

/*
 已登陆 */
.mod_profile {
  height: 315px;
  padding-top: 65px;
  background: url(https://y.gtimg.cn/mediastyle/yqq/img/bg_profile.jpg?max_age=2592000&v=a81e58d2beb14c0122de6513faaead8d)
    50% no-repeat;
  background-size: auto;
  background-size: cover;
  text-align: center;
  color: #fff;
}
.mod_profile,
.mod_profile .section_inner {
  height: 315px;
}

.main,
.section_inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}
.mod_profile,
.mod_profile .section_inner {
  height: 315px;
}
.profile__cover_link {
  position: relative;
  width: 102px;
  height: 102px;
  margin: 0 auto;
}
.profile__cover {
  display: block;
  width: 100%;
  height: 100%;
  border: 4px solid #fff;
  border-radius: 99px;
  background: #fff;
}
.profile__name {
  font-size: 30px;
  font-weight: 400;
  line-height: 64px;
  margin-right: 4px;
}
.mod_user_statistic {
  height: 40px;
  margin: 4px 15px 26px;
  overflow: hidden;
  font-size: 0;
}
.user_statistic__item {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  border-right: solid 1px #24313d;
  width: auto;
  text-align: center;
  padding: 0 25px;
}
.user_statistic__number {
  display: block;
  font-size: 22px;
  line-height: 24px;
  margin-top: -1px;
  font-weight: 400;
}
.user_statistic__tit {
  display: block;
  color: #999;
  font-size: 14px;
}
.user_statistic__number,
.user_statistic__tit {
  color: #fff;
}
.btn_lock,
.btn_unlock {
  position: absolute;
  right: 0;
  bottom: 17px;
  width: 16px;
  height: 20px;
  background-color: transparent;
  background-repeat: no-repeat;
  border: 0 none;
  z-index: 2;
  overflow: hidden;
}
.btn_unlock {
  background-position: -80px -180px;
}
.mod_tab,
.mod_tab__item {
  height: 56px;
  line-height: 56px;
}
.mod_tab {
  position: relative;
  zoom: 1;
  border-bottom: 1px solid #f7f7f7;
  margin-bottom: 30px;
}
.mod_tab {
  /*margin-bottom: -20px;*/
  overflow: hidden;
  border-bottom: 0 none;
}
.profile_nav {
  position: absolute;
  top: -56px;
  left: 0;
  margin-bottom: 0;
  width: 80%;
}
.mod_tab,
.mod_tab__item {
  height: 56px;
  line-height: 56px;
}
.mod_tab__item {
  position: relative;
  float: left;
  font-size: 16px;
  overflow: hidden;
  margin-right: 55px;
}
.profile_nav .mod_tab__item {
  color: #fff;
  margin-right: 40px;
}
.profile_nav .mod_tab__current,
.profile_nav .mod_tab__item:hover {
  color: #31c27c;
}
</style>
