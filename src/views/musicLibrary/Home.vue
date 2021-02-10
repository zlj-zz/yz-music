<template>
      <div v-for="banner in banners" :key="banner.targetId">
        <img v-bind:src="banner.imageUrl" alt="">
      </div>
</template>

<script>
import { getBanner } from "api";

export default {
  created() {
    getBanner().then(res => {
          console.log(res.data.banners);
          this.banners = res.data.banners;
        });
  },
  data() {
    return {
      banners: []
    };
  },
}
</script>

<style scoped>

</style>
