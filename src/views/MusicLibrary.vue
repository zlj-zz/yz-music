<template>
  <div>
    <nav-menu />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import NavMenu from "components/common/NavMenu";

export default {
  name: "MusicLibrary",
  components: { NavMenu },
};
</script>

<style scoped>
</style>
