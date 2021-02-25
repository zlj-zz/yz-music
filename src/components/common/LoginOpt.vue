<template>
  <div class="header__opt">
    <span class="mod_top_login">
      <!-- 登录 -->
      <a
        class="top_login__link"
        :style="{ display: isLogged ? '' : 'none' }"
        @mouseover="showUserPopup"
        @mouseleave="hiddenUserPopup"
        ><img
          onerror="this.src='//y.gtimg.cn/mediastyle/global/img/person_300.png?max_age=2592000';this.onerror=null;"
          style="background-color: gray"
          class="top_login__cover js_user_img"
          :src="$store.state.user.user.avatarUrl"
        />
      </a>
      <!-- 未登录 -->
      <a
        class="top_login__link"
        :style="{ display: isLogged ? 'none' : '' }"
        @click="showLoginPopup"
      >
        登录
      </a>
    </span>
    <!-- 用户信息 -->
    <div
      class="popup_user"
      :class="isShowPopup ? 'drop' : ''"
      @mouseover="showUserPopup"
      @mouseleave="hiddenUserPopup"
    >
      <div class="popup_user_data">
        <a class="popup_user_data__cover_link">
          <img
            onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/person_300.png?max_age=2592000\';this.onerror=null;"
            class="popup_user_data__cover js_user_img"
            style="background-color: gray"
            :src="$store.state.user.user.avatarUrl"
          />
        </a>
        <!-- 自动垂直居中 -->
        <div class="popup_user_data__cont">
          <div class="popup_user_data__name">
            <a class="">{{ $store.state.user.user.nickname }}</a>
          </div>
          <div class="popup_user_data__lv" style="overflow: hidden">
            <a class="js_vip_jump" rel="noopener" target="_blank"
              >签名：{{ $store.state.user.user.signature }}
            </a>
          </div>
        </div>
      </div>
      <div class="popup_user_toolbar">
        <div class="popup_user_toolbar__item">
          <div class="popup_user_toolbar__tit js_msgcenterdiv">
            <a>评论通知</a>
          </div>
        </div>
        <div class="popup_user_toolbar__item">
          <div class="popup_user_toolbar__tit">
            <a class="js_logout" @click="logout">退出登录</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 登陆弹框 -->
  <div
    id="divdialog_0"
    class="mod_popup popup_login popup_login--download large"
    data-aria="popup"
    style="
      position: fixed;
      z-index: 100000;
      top: 154.5px;
      margin: 10px;
      left: 369px;
    "
    v-if="isShowLoginPopup"
  >
    <div class="popup__hd">
      <h2 class="popup__tit">
        <a class="popup__tit_item current" style="">扫码登陆</a>
      </h2>
    </div>
    <a class="popup__close" title="关闭" @click="hiddenLoginPopup"
      ><i class="popup__icon_close"></i><i class="icon_txt">关闭</i>
    </a>

    <div class="popup__bd" id="dialogbox">
      <div class="phone"></div>
      <img
        id="frame_tips"
        :src="qrurl"
        class="popup_login_qr"
        width="100%"
        height="400px;"
        frameborder="0"
      />
    </div>
  </div>
  <div
    class="mod_popup_mask"
    :style="{ display: isShowLoginPopup ? 'block' : 'none' }"
  ></div>
</template>

<script>
import {
  getLoginKey,
  getLoginQrCode,
  getLoginQrScanState,
  getLoginStatus,
  logout,
} from "api";
export default {
  data() {
    return {
      isShowLoginPopup: false,
      isShowPopup: false,
      qrurl: "",
    };
  },
  mounted() {
    if (!this.isLogged) this.getLoginStatus();
  },
  methods: {
    getQr() {
      getLoginKey().then((res) => {
        let key = res.data.data.unikey;
        getLoginQrCode(key).then((res) => {
          let qrimg = res.data.data.qrimg;
          this.qrurl = qrimg;
          this.checkScanState(key);
        });
      });
    },
    checkScanState(key) {
      let timer = setInterval(async () => {
        let res = await getLoginQrScanState(key);
        console.log(res);
        let code = res.data.code;
        let cookie = res.data.cookie;
        switch (code) {
          case 800:
            console.log("二维码过期");
            clearInterval(timer);
            break;
          case 801:
            break;
          case 802:
            console.log("已扫描");
            break;
          case 803:
            clearInterval(timer);
            this.isShowLoginPopup = false;
            this.getLoginStatus();
            break;
          default:
            break;
        }
      }, 3000);
    },
    getLoginStatus() {
      getLoginStatus().then((res) => {
        let profile = res.data.data.profile;
        if (profile) {
          this.$store.commit("user/setLoginStatus", true);
          this.$store.commit("user/setUser", profile);
          console.log(this.$store.state.user.isLogged);
          console.log(this.$store.state.user.user);
        }
      });
    },
    logout() {
      logout().then((res) => {
        this.$store.commit("user/setLoginStatus", false);
        alert("成功退出");
      });
    },
    showLoginPopup() {
      this.isShowLoginPopup = true;
      this.getQr();
    },
    hiddenLoginPopup() {
      this.isShowLoginPopup = false;
    },
    showUserPopup() {
      this.isShowPopup = true;
    },
    hiddenUserPopup() {
      this.isShowPopup = false;
    },
  },
  computed: {
    isLogged() {
      return this.$store.state.user.isLogged;
    },
  },
};
</script>

<style scoped>
.header__opt {
  position: absolute;
  top: 0;
  right: 200px;
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
  /*right: 0;*/
  left: -15px;
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
  text-align: center;
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

/* login popup */
.mod_popup {
  position: absolute;
  border: 1px solid #bfbfbf;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 999;
  background-color: #fff;
  font-size: 14px;
  color: #333;
}
.popup_login {
  width: 560px;
  height: 410px;
  overflow: hidden;
}
.popup_login--download {
  position: relative;
  z-index: 2;
  height: 387px;
}
.popup_login.large {
  width: 700px;
}
.popup__hd {
  position: relative;
  line-height: 55px;
  text-align: center;
  border-bottom: 1px solid #f2f2f2;
}
.popup__tit {
  font-size: 16px;
  font-weight: 400;
}
.popup__tit_item {
  margin: 0 60px;
}
.popup__tit_item.current {
  color: #31c27c;
}

.popup__close {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  z-index: 2;
}
.popup__icon_close {
  display: block;
  margin: 6px auto;
  width: 12px;
  height: 12px;
  background-position: 0 -200px;
}

.popup_login.large .popup__bd {
  position: relative;
  overflow: hidden;
  height: 348px;
}
.popup_login.large iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 704px;
  margin-left: -2px;
}
.popup_login.large .popup_login_qr {
  width: 200px;
  height: 200px;
  margin-left: 150px;
}

.mod_popup_mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr='#33000000', endColorstr='#33000000');
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
}
.phone {
  float: left;
  margin-left: 120px;
  width: 125px;
  height: 220px;
  background: url(../../assets/img/qr_guide.png);
  background-size: auto;
  background-size: contain;
}
</style>
