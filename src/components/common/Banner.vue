<template>
  <el-carousel
    indicator-position="outside"
    type="card"
    height="350px"
    v-loading="bannerLoading"
    v-if="banners.length > 0"
  >
    <el-carousel-item
      v-for="banner in banners"
      :key="banner.targetId"
      :lable="banner.typeTitle"
    >
      <img
        src=""
        v-lazy="banner.imageUrl"
        :alt="banner.typeTitle"
        class="banner-img"
      />
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
    };
  },
  created() {
    this.updateBanner();
  },
  methods: {
    updateBanner() {
      getBanner()
        .then((res) => {
          this.banners = res.data.banners;
          this.bannerLoading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.el-carousel__item img {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.banner-img {
  width: 100%;
  height: 100%;
}
</style>
