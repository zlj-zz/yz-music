<template>
  <el-carousel
    indicator-position="outside"
    type="card"
    height="400px"
    v-loading="bannerLoading">
    <el-carousel-item
      v-for="banner in banners" :key="banner.targetId">
        <img :src="banner.imageUrl" :alt="banner.typeTitle">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { getBanner } from "api";

export default {
  data() {
    return {
      bannerLoading: true,
      banners: [],
      }
  },
  mounted() {
    this.updateBanner();
  },
  methods:{
    updateBanner() {
      getBanner().then(res => {
            console.log(res.data.banners);
            this.banners = res.data.banners;
            this.bannerLoading = false;
          }).catch(err => console.log(err));
    },
  }
}
</script>

<style lang="postcss">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 400px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
