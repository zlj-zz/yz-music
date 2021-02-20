<template>
  <back-top />
  <nav-bar />
  <router-view />
  <bottom-footer />
  <player />
</template>

<script>
import NavBar from "components/content/NavBar";
import BackTop from "components/content/BackTop";
import Player from "components/content/Player";
import BottomFooter from "components/content/BottomFooter";

export default {
  name: "#app",
  components: { NavBar, BackTop, BottomFooter, Player },
};
</script>

<style lang="scss">
@import "./assets/css/base.css";
@import "./assets/css/fakeqqmusic.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
