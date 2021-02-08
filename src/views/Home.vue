<template>
    <div>
    <h1>Home</h1>
      <div v-for="banner in banners" :key="banner.targetId">
        <img v-bind:src="banner.imageUrl" alt="">
      </div>
    </div>
</template>

<script>
import { getBanner } from "../api";

export default {
  name: 'Home',
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
  }
}

</script>

<style scoped>
</style>
