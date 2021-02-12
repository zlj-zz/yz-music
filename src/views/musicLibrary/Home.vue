<template>
  <div >
    <Banner/>
    <RecommendedBar/>
    <HomeTop/>
  </div>
</template>

<script>
import Banner from 'components/content/Banner';
import RecommendedBar from 'components/content/RecommendedBar';
import HomeTop from 'components/content/HomeTop';

export default {
  components:{
    Banner,
    RecommendedBar,
    HomeTop
  }
}


</script>

<style>
  div{
    font-family: poppin,Tahoma,Arial,微软雅黑,sans-serif;
    line-height: 1.5;
  }
</style>
