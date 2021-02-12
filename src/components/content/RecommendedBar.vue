<template>
  <h1 class="list">歌单推荐</h1>
  <div>
    <a
      class="playlist"
      href='javascript:;'
      v-for="item in playlistType" :key="item.key"
      @click="onclick(item.key)">{{item.title}}</a>

  </div>

  <div class='target-list' v-loading="listLoading">
    <ul>
        <li class="playlist__i" v-for="item in playList" :key='item.name'>
            <a class="js_playlist" href="" onclick="" >
            <img
              class="playlist__pic"
              :src="item.coverImgUrl"
              onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';"
              :alt="item.name" >
            </a>
            <h4 class="">
              <span class=""><a href="" >{{item.name}}</a></span>
            </h4>
            <div class="">
              播放量：{{item.playCount > 10000 ? (item.playCount / 10000).toFixed(2) + '万':item.playCount}}
            </div>
        </li>
    </ul>
  <!--  <div >
      <a href="" class="arrow-btn arrow-btn-left"><i class="el-icon-arrow el-icon-arrow-left"></i></a> 
      <a href="" class="arrow-btn arrow-btn-right"><i class="el-icon-arrow el-icon-arrow-right"></i></a>
    </div> -->
  </div>
  <div class="mod_slide_switch js_switch" data-stat="y_new.index.playlist.pager">
    <a href="javascript:;" tabindex="-1" class="js_jump slide_switch__item slide_switch__item--current" data-p="0">
      <i class="slide_switch__bg"></i>
      <i class="icon_txt">1</i>
    </a>
    <a href="javascript:;" tabindex="-1" class="js_jump slide_switch__item" data-p="1">
      <i class="slide_switch__bg"></i>
      <i class="icon_txt">2</i>
    </a>
  </div>
</template>

<script>
import { getPlayList } from "api";

export default {
  data() {
    return {
      listLoading: true,
      playlistType: [
        {title: '为你推荐', key: '全部'},
        {title: 'R&B/Soul', key: 'R&B/Soul'},
        {title: '网络歌曲', key: '网络歌曲'},
        {title: 'ACG', key: 'ACG'},
        {title: '怀旧', key: '怀旧'},
        {title: '流行', key: '流行'},
      ],
      playList: [],
      }
  },
  mounted() {
    this.updatePlayList('全部');
  },
  methods: {
    updatePlayList(key) {
      let limit = 10;
      getPlayList(limit, 1, key).then(res => {
          console.log(res)
          this.playList = res.data.playlists
          this.listLoading = false;
          }).catch(err => console.log(err));
    },
    onclick(key) {
      this.updatePlayList(key);
    },
 }
}
</script>

<style>
  /* play list */
  .list{
    letter-spacing:20px;
  }
  .playlist{
    display: inline-block;
    font-size: 18px;
    margin: 0 30px;
    text-decoration:none
  }
  .playlist:hover {
    color: #31c27c;
  }
  .target-list{
    margin-right: -20px;
    overflow: hidden;
    margin-bottom: 20px;
    position: relative;
  }
  .playlist__i{
    display: inline-block;
    width: 18%;
    padding-bottom: 44px;
    overflow: hidden;
    font-size: 14px;
    vertical-align: top;
    color: #000;
    margin-right: 20px;
  }
  .playlist__pic {
    width:100%;height:100%;
  }


  /* 切换小圆点 */
  .mod_slide_switch {
      width: 100%;
      text-align: center;
      font-size: 0;
  }
  .slide_switch__item {
      display: inline-block;
      width: 28px;
      height: 12px;
      padding: 0 0 26px;
      margin: 0 1px;
      background: 0 0;
  }
  .slide_switch__bg {
      display: block;
      width: 8px;
      height: 8px;
      filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr='#19000000', endColorstr='#19000000');
      background-color: rgba(0,0,0,.1);
      border-radius: 12px;
      margin: 0 auto;
  }
  .slide_switch__item--current .slide_switch__bg, .slide_switch__item:hover .slide_switch__bg {
      filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr='#4C000000', endColorstr='#4C000000');
      background-color: rgba(0,0,0,.3);
  }

</style>
