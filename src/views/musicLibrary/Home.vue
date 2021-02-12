<template>
  <el-carousel indicator-position="outside" type="card" height="400px">
    <el-carousel-item v-for="banner in banners" :key="banner.targetId">
        <img v-bind:src="banner.imageUrl" alt="">
    </el-carousel-item>
  </el-carousel>

 <div >
  <h1 class="list">{{a}}</h1>
  <a href="#" class="playlist"  data-id="1">为你推荐</a>
  <a href="#" class="playlist"  data-id="2">官方歌单</a>
  <a href="#" class="playlist"  data-id="3">愉悦</a>
  <a href="#" class="playlist"  data-id="4">睡前</a>
  <a href="#" class="playlist"  data-id="5">网络歌曲</a>
  <a href="#" class="playlist"  data-id="6">流行</a>

<div class='target-list'>
  <ul>
      <li class="playlist__i" >
          <a href="" onclick="" >          
          <img src="" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';" alt="女神降临 韩剧OST" >      
          </a>
          <h4 class="">
          <span class=""><a href="" onclick="setStatCookie&amp;&amp;setStatCookie();" >女神降临 韩剧OST</a></span>
          </h4>
          <div class="">
          播放量：91.6万
          </div>
      </li>
         <li class="playlist__i" >
          <a href="" onclick="" >          
          <img src="" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';" alt="女神降临 韩剧OST" >      
          </a>
          <h4 class="">
          <span class=""><a href="" onclick="setStatCookie&amp;&amp;setStatCookie();" >女神降临 韩剧OST</a></span>
          </h4>
          <div class="">
          播放量：91.6万
          </div>
      </li>
         <li class="playlist__i" >
          <a href="" onclick="" >          
          <img src="" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';" alt="女神降临 韩剧OST" >      
          </a>
          <h4 class="">
          <span class=""><a href="" onclick="setStatCookie&amp;&amp;setStatCookie();" >女神降临 韩剧OST</a></span>
          </h4>
          <div class="">
          播放量：91.6万
          </div>
      </li>
         <li class="playlist__i" >
          <a href="" onclick="" >          
          <img src="" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';" alt="女神降临 韩剧OST" >      
          </a>
          <h4 class="">
          <span class=""><a href="" onclick="setStatCookie&amp;&amp;setStatCookie();" >女神降临 韩剧OST</a></span>
          </h4>
          <div class="">
          播放量：91.6万
          </div>
      </li>
         <li class="playlist__i" >
          <a href="" onclick="" >          
          <img src="" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';" alt="女神降临 韩剧OST" >      
          </a>
          <h4 class="">
          <span class=""><a href="" onclick="setStatCookie&amp;&amp;setStatCookie();" >女神降临 韩剧OST</a></span>
          </h4>
          <div class="">
          播放量：91.6万
          </div>
      </li>

    <div >
      <a href="" class="arrow-btn arrow-btn-left"><i class="el-icon-arrow el-icon-arrow-left"></i></a> 
      <a href="" class="arrow-btn arrow-btn-right"><i class="el-icon-arrow el-icon-arrow-right"></i></a>
    </div>
  </ul>
</div>
   <h1 class="list">{{b}}</h1>
   <div class="mod_toplist">
                <ul class="toplist__list js_list"> 
    <li class="toplist__item item1 mod_cover">
	<div class="toplist__box">
	    <div id='toplist__bg' class="toplist__bg0" ></div>
	    <i class="mod_cover__icon_play js_play_toplist" data-stat="y_new.index.toplist.play.26" data-id="26" data-type="0" data-date="2021_5"></i>
	    <i class="toplist__line"></i>
	    <h3 class="toplist__hd"><a href="https://y.qq.com/n/yqq/toplist/26.html#stat=y_new.index.toplist.detail.26" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.detail.26" class="toplist__tit">热歌</a></h3>
	    <ul class="toplist__songlist">

	    
	    <li class="toplist__song">
		<div class="toplist__number">1</div>
		<div class="toplist__songname">
		    <a href="https://y.qq.com/n/yqq/song/294235538_num.html#stat=y_new.index.toplist.songname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_song" data-id="294235538" data-stat="y_new.index.toplist.songname">清空</a>
		</div>
		<div class="toplist__artist">
		    <a href="https://y.qq.com/n/yqq/singer/004W8PqQ0EYrEr.html#stat=y_new.index.toplist.singername" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.singername">王忻辰/苏星婕</a>
		</div>
	    </li>
	    
	    <li class="toplist__song">
		<div class="toplist__number">2</div>
		<div class="toplist__songname">
		    <a href="https://y.qq.com/n/yqq/song/293695482_num.html#stat=y_new.index.toplist.songname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_song" data-id="293695482" data-stat="y_new.index.toplist.songname">星辰大海</a>
		</div>
		<div class="toplist__artist">
		    <a href="https://y.qq.com/n/yqq/singer/000oCQfT3kdonw.html#stat=y_new.index.toplist.singername" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.singername">黄霄雲</a>
		</div>
	    </li>
	    
	    <li class="toplist__song">
		<div class="toplist__number">3</div>
		<div class="toplist__songname">
		    <a href="https://y.qq.com/n/yqq/song/291911135_num.html#stat=y_new.index.toplist.songname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_song" data-id="291911135" data-stat="y_new.index.toplist.songname">白月光与朱砂痣</a>
		</div>
		<div class="toplist__artist">
		    <a href="https://y.qq.com/n/yqq/singer/002sT7040IAT6z.html#stat=y_new.index.toplist.singername" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.singername">大籽</a>
		</div>
	    </li>
	    
	    </ul>
	</div>
    </li>
 
    <li class="toplist__item item2 mod_cover">
	<div class="toplist__box">
	    <div id='toplist__bg' class="toplist__bg1"></div>
	    <i class="mod_cover__icon_play js_play_toplist" data-stat="y_new.index.toplist.play.27" data-id="27" data-type="0" data-date="2021-02-10"></i>
	    <i class="toplist__line"></i>
	    <h3 class="toplist__hd"><a href="https://y.qq.com/n/yqq/toplist/27.html#stat=y_new.index.toplist.detail.27" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.detail.27" class="toplist__tit">新歌</a></h3>
	    <ul class="toplist__songlist">

	    
	    <li class="toplist__song">
		<div class="toplist__number">1</div>
		<div class="toplist__songname">
		    <a href="https://y.qq.com/n/yqq/song/293695482_num.html#stat=y_new.index.toplist.songname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_song" data-id="293695482" data-stat="y_new.index.toplist.songname">星辰大海</a>
		</div>
		<div class="toplist__artist">
		    <a href="https://y.qq.com/n/yqq/singer/000oCQfT3kdonw.html#stat=y_new.index.toplist.singername" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.singername">黄霄雲</a>
		</div>
	    </li>
	    
	    <li class="toplist__song">
		<div class="toplist__number">2</div>
		<div class="toplist__songname">
		    <a href="https://y.qq.com/n/yqq/song/297282205_num.html#stat=y_new.index.toplist.songname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_song" data-id="297282205" data-stat="y_new.index.toplist.songname">清空</a>
		</div>
		<div class="toplist__artist">
		    <a href="https://y.qq.com/n/yqq/singer/000985uR2CKS2P.html#stat=y_new.index.toplist.singername" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.singername">艾辰</a>
		</div>
	    </li>
	    
	    <li class="toplist__song">
		<div class="toplist__number">3</div>
		<div class="toplist__songname">
		    <a href="https://y.qq.com/n/yqq/song/293824825_num.html#stat=y_new.index.toplist.songname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_song" data-id="293824825" data-stat="y_new.index.toplist.songname">漫长的告白</a>
		</div>
		<div class="toplist__artist">
		    <a href="https://y.qq.com/n/yqq/singer/001t94rh4OpQn0.html#stat=y_new.index.toplist.singername" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.singername">双笙</a>
		</div>
	    </li>
	    
	    </ul>
	</div>
    </li>
 
    <li class="toplist__item item3 mod_cover">
	<div class="toplist__box">
	    <div id='toplist__bg' class="toplist__bg2"></div>
	    <i class="mod_cover__icon_play js_play_toplist" data-stat="y_new.index.toplist.play.4" data-id="4" data-type="0" data-date="2021-02-10"></i>
	    <i class="toplist__line"></i>
	    <h3 class="toplist__hd"><a href="https://y.qq.com/n/yqq/toplist/4.html#stat=y_new.index.toplist.detail.4" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.detail.4" class="toplist__tit">流行指数</a></h3>
	    <ul class="toplist__songlist">

	    
	    <li class="toplist__song">
		<div class="toplist__number">1</div>
		<div class="toplist__songname">
		    <a href="https://y.qq.com/n/yqq/song/297282205_num.html#stat=y_new.index.toplist.songname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_song" data-id="297282205" data-stat="y_new.index.toplist.songname">清空</a>
		</div>
		<div class="toplist__artist">
		    <a href="https://y.qq.com/n/yqq/singer/000985uR2CKS2P.html#stat=y_new.index.toplist.singername" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.singername">艾辰</a>
		</div>
	    </li>
	    
	    <li class="toplist__song">
		<div class="toplist__number">2</div>
		<div class="toplist__songname">
		    <a href="https://y.qq.com/n/yqq/song/290321542_num.html#stat=y_new.index.toplist.songname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_song" data-id="290321542" data-stat="y_new.index.toplist.songname">送你一朵小红花</a>
		</div>
		<div class="toplist__artist">
		    <a href="https://y.qq.com/n/yqq/singer/002sfdNU1f3nHD.html#stat=y_new.index.toplist.singername" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.singername">赵英俊</a>
		</div>
	    </li>
	    
	    <li class="toplist__song">
		<div class="toplist__number">3</div>
		<div class="toplist__songname">
		    <a href="https://y.qq.com/n/yqq/song/297277345_num.html#stat=y_new.index.toplist.songname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_song" data-id="297277345" data-stat="y_new.index.toplist.songname">策马正少年</a>
		</div>
		<div class="toplist__artist">
		    <a href="https://y.qq.com/n/yqq/singer/0022eAG537I1bg.html#stat=y_new.index.toplist.singername" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.singername">肖战</a>
		</div>
	    </li>
	    
	    </ul>
	</div>
    </li>
 
    <li class="toplist__item item4 mod_cover">
	<div class="toplist__box">
	    <div id='toplist__bg' class="toplist__bg3"></div>
	    <i class="mod_cover__icon_play js_play_toplist" data-stat="y_new.index.toplist.play.3" data-id="3" data-type="0" data-date="2021_5"></i>
	    <i class="toplist__line"></i>
	    <h3 class="toplist__hd"><a href="https://y.qq.com/n/yqq/toplist/3.html#stat=y_new.index.toplist.detail.3" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.detail.3" class="toplist__tit">欧美</a></h3>
	    <ul class="toplist__songlist">

	    
	    <li class="toplist__song">
		<div class="toplist__number">1</div>
		<div class="toplist__songname">
		    <a href="https://y.qq.com/n/yqq/song/296051221_num.html#stat=y_new.index.toplist.songname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_song" data-id="296051221" data-stat="y_new.index.toplist.songname">Baila Conmigo</a>
		</div>
		<div class="toplist__artist">
		    <a href="https://y.qq.com/n/yqq/singer/0046fVNz3ruk2r.html#stat=y_new.index.toplist.singername" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.singername">Selena Gomez/Rauw Alejandro</a>
		</div>
	    </li>
	    
	    <li class="toplist__song">
		<div class="toplist__number">2</div>
		<div class="toplist__songname">
		    <a href="https://y.qq.com/n/yqq/song/294068448_num.html#stat=y_new.index.toplist.songname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_song" data-id="294068448" data-stat="y_new.index.toplist.songname">Sorry</a>
		</div>
		<div class="toplist__artist">
		    <a href="https://y.qq.com/n/yqq/singer/0020PeOh4ZaCw1.html#stat=y_new.index.toplist.singername" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.singername">Alan Walker/ISÁK</a>
		</div>
	    </li>
	    
	    <li class="toplist__song">
		<div class="toplist__number">3</div>
		<div class="toplist__songname">
		    <a href="https://y.qq.com/n/yqq/song/294346338_num.html#stat=y_new.index.toplist.songname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_song" data-id="294346338" data-stat="y_new.index.toplist.songname">Lo Vas A Olvidar</a>
		</div>
		<div class="toplist__artist">
		    <a href="https://y.qq.com/n/yqq/singer/0034MZS446AF7O.html#stat=y_new.index.toplist.singername" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.singername">Billie Eilish/ROSALÍA</a>
		</div>
	    </li>
	    
	    </ul>
	</div>
    </li>
 
    <li class="toplist__item item5 mod_cover">
	<div class="toplist__box">
	    <div id='toplist__bg' class="toplist__bg4" ></div>
	    <i class="mod_cover__icon_play js_play_toplist" data-stat="y_new.index.toplist.play.16" data-id="16" data-type="0" data-date="2021_5"></i>
	    <i class="toplist__line"></i>
	    <h3 class="toplist__hd"><a href="https://y.qq.com/n/yqq/toplist/16.html#stat=y_new.index.toplist.detail.16" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.detail.16" class="toplist__tit">韩国</a></h3>
	    <ul class="toplist__songlist">

	    
	    <li class="toplist__song">
		<div class="toplist__number">1</div>
		<div class="toplist__songname">
		    <a href="https://y.qq.com/n/yqq/song/294292974_num.html#stat=y_new.index.toplist.songname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_song" data-id="294292974" data-stat="y_new.index.toplist.songname">Runner</a>
		</div>
		<div class="toplist__artist">
		    <a href="https://y.qq.com/n/yqq/singer/0035rJ5h1ghqLk.html#stat=y_new.index.toplist.singername" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.singername">T1/Raiden/伯贤 (백현)/CHANGMO (창모)</a>
		</div>
	    </li>
	    
	    <li class="toplist__song">
		<div class="toplist__number">2</div>
		<div class="toplist__songname">
		    <a href="https://y.qq.com/n/yqq/song/294391697_num.html#stat=y_new.index.toplist.songname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_song" data-id="294391697" data-stat="y_new.index.toplist.songname">I'm Not Cool</a>
		</div>
		<div class="toplist__artist">
		    <a href="https://y.qq.com/n/yqq/singer/0040tgjy2qm5bG.html#stat=y_new.index.toplist.singername" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.singername">泫雅 (현아)</a>
		</div>
	    </li>
	    
	    <li class="toplist__song">
		<div class="toplist__number">3</div>
		<div class="toplist__songname">
		    <a href="https://y.qq.com/n/yqq/song/296935924_num.html#stat=y_new.index.toplist.songname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_song" data-id="296935924" data-stat="y_new.index.toplist.songname">Love so Fine</a>
		</div>
		<div class="toplist__artist">
		    <a href="https://y.qq.com/n/yqq/singer/002xWtEd1KMLmx.html#stat=y_new.index.toplist.singername" onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.singername">车银优 (차은우)</a>
		</div>
	    </li>
	    
	    </ul>
	</div>
    </li>

</ul>
            </div>
 
   
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
      banners: [],
      a:'歌单推荐',
      b:'排行榜',
      c:'新歌首发'

      }
  },
  
}

  
</script>

<style>
  div{
      font-family: poppin,Tahoma,Arial,微软雅黑,sans-serif;
      line-height: 1.5;
      
  }
  .list{
    letter-spacing:20px;
  }
  .playlist{
    display: inline-block;
    font-size: 18px;
    margin: 0 30px;
    text-decoration:none
  }
  .playlist__i{
    display: inline-block;
    width: 18%;
    padding-bottom: 44px;
    overflow: hidden;
    font-size: 14px;
    vertical-align: top;
    color: #000;
}
.toplist__list {
    font-size: 0;
    margin-right: -20px;
    color: #fff;
    font-size: 14px;
}
.toplist__item {
    display: inline-block;
    width: 16%;
}
.toplist__box {
    position: relative;
    margin-right: 20px;
    height: 500px;
    overflow: hidden;
}
li {
    list-style: none;
    margin: 0;
    padding: 0;
}
#toplist__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 600px;

}
.toplist__bg0 {
    background-image: linear-gradient(#e66754, #8888e5)
}
.toplist__bg1 {
    background-image: linear-gradient(#987526, #1998e5)
}
.toplist__bg2{
    background-image: linear-gradient(#335484, #3698e5)
}
.toplist__bg3{
    background-image: linear-gradient(#7858e5, #654125)
}
.toplist__bg4 {
    background-image: linear-gradient(#985632, #369852)
}



.toplist__item .toplist__bg{
    transform: scale(1);
    transition: transform .75s;
}

.toplist__hd {
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -100px;
    width: 200px;
    text-align: center;
    font-size: 100%;
    color: #000;

}
.toplist__tit {
    height: 36px;
    line-height: 1;
    font-size: 26px;
    color: #fff;
    font-weight: 400;
}
a {
    text-decoration: none;
}
.toplist__hd::before {
    content: "";
    display: block;
    width: 66px;
    height: 22px;
    margin: 0 auto 9px;
    background-image: url(https://y.gtimg.cn/mediastyle/yqq/img/index_tit.png?max_age=2592000&v=c7310a1eb12fc9fce032314be79ad579);
    background-position: 0 -300px;
}
.toplist__songlist {
    position: absolute;
    top: 188px;
    left: 30px;
    right: 300px;
    white-space: nowrap;
}
.toplist__songlist a {
    color: #fff;
    font-size: 14px;
}
.toplist__song {
    position: relative;
    padding-left: 15px;
    margin-bottom: 27px;
}
.toplist__number {
    position: absolute;
    top: 0;
    left: 0;
}


   


  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 400px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .target-list:hover .arrow-btn{
    opacity: 1;
    transform: translateX(0);
    transition-duration: .5s;
  }
  .arrow-btn {
    opacity: 0;
  }

</style>
