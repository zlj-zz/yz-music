<template>
  <div id="nav">
    <router-link v-for="item in navData" :key="item.title" :to="item.path">{{item.title}}</router-link> 
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/My">My</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      active: 0,
      navData: [
        {title:'音乐库', path:'/'},
        {title:'我的音乐', path:'/My'},
      ]
    }
  },
}
</script>

<style lang="css">
    
</style>
