<template>
  <back-top />
  <nav-bar />
  <router-view />
  <player />
</template>

<script>
import NavBar from "components/content/NavBar";
import BackTop from "components/common/BackTop";
import Player from "components/common/Player";

export default {
  name: "#app",
  components: { NavBar, BackTop, Player },
};
</script>

<style lang="scss">
@import "./assets/css/coustom.css";
@import "./assets/css/base.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
