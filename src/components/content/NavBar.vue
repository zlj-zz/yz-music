<template>
  <div id="nav">
    <router-link v-for="item in navData" :to="item.path">{{item.title}}</router-link> 
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
                {title:'Home', path:'/'},
                {title:'My', path:'/My'},
            ]
        }
    },
}
</script>

<style lang="css">
    
</style>