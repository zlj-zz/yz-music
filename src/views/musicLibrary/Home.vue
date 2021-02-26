<template>
  <div class="home-main" v-loading="loading">
    <banner />
    <recommended-bar />
    <home-top />
  </div>
</template>

<script>
import Banner from "components/common/Banner";
import RecommendedBar from "components/common/RecommendedBar";
import HomeTop from "components/common/HomeTop";

export default {
  data() {
    return {
      loading: false,
    };
  },
  components: {
    Banner,
    RecommendedBar,
    HomeTop,
  },
};
</script>

<style scoped>
.home-main {
  font-family: poppin, Tahoma, Arial, 微软雅黑, sans-serif;
  line-height: 1.5;
  max-width: 100%;
  margin: 0 auto;
  background-image: linear-gradient(#f5f5f5, #fff);
}
</style>
