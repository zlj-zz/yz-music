<template>
  <div>
    <nav-menu />
    <router-view></router-view>
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
