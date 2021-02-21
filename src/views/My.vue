<template>
  <div class="mod_profile_unlogin" style="display: none">
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
</template>

<script>
</script>

<style scoped>
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
</style>
