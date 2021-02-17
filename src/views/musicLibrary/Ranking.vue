<template>
<div  id="mian">
<div class="toplist_nav">
           
             
            <dl class="toplist_nav__list">
                <dt class="toplist_nav__tit">巅峰榜</dt>
		
                <dd class="toplist_nav__item">
                <a 
                    class="toplist_nav__link"
                    v-for="item in topRankingtype" 
                    :class="item.dataId == seletedType ? 'toplist_nav__link--current':''"
                    @click="onSelectType(item.dataId)"
                    >{{item.name}}</a>
                </dd>
		
            	
            </dl>
             
            <dl class="toplist_nav__list">
                <dt class="toplist_nav__tit">地区榜</dt>
		
                <dd class="toplist_nav__item">
                <a 
                class="toplist_nav__link"
                v-for="item in aereRankingtype"
                :class="item.dataId == seletedType ? 'toplist_nav__link--current':''"
                @click="onSelectType(item.dataId)"
                >{{item.name}}</a></dd>
		
                
            </dl>
	    
            <dl class="toplist_nav__list">
                <dt class="toplist_nav__tit">特色榜</dt>
		
                <dd class="toplist_nav__item">
                <a
                class="toplist_nav__link"
                v-for="item in specialRankingtype"
                :class="item.dataId == seletedType ? 'toplist_nav__link--current':''"
                @click="onSelectType(item.dataId)"
                >{{item.name}}</a></dd>
		
                
            </dl>
	    
            <dl class="toplist_nav__list">
                <dt class="toplist_nav__tit">全球榜</dt>
		
                <dd class="toplist_nav__item">
                <a 
                class="toplist_nav__link"
                v-for="item in globalRankingtype"
                :class="item.dataId == seletedType ? 'toplist_nav__link--current':''"
                @click="onSelectType(item.dataId)"
                >{{item.name}}</a></dd>
		
               
            </dl>
	    
        </div>



        <div class="mod_toplist">
            <div class="toplist__hd">
                <h1 class="toplist__tit1">飙升榜</h1>
                <span class="toplist_switch">
                    <a href="javascript:;" class="toplist_switch__btn js_prev_week" style="display:none;"><i class="toplist_switch__arrow_prev sprite"></i><i class="icon_txt">上一期</i></a>
                    <span class="toplist_switch__data js_chosed_week">2021-02-13</span>
                    <a href="javascript:;" class="toplist_switch__btn js_next_week" style="display:none;"><i class="toplist_switch__arrow_next sprite"></i><i class="icon_txt">下一期</i></a>
                </span>
                <a href="javascript:;" class="toplist__rule js_desc" data-left="-650" data-top="-78" data-target="popup_data_detail" data-stat="y_new.toplist.rule">榜单规则</a>
            </div>
            <div class="mod_songlist_toolbar">
                <a href="//y.qq.com/portal/player.html" class="mod_btn_green js_all_play" data-stat="y_new.toplist.playall"><i class="mod_btn_green__icon_play"></i>播放全部</a>
                <a href="javascript:;" class="mod_btn js_all_fav" data-stat="y_new.toplist.addall"><i class="mod_btn__icon_add"></i>添加到</a>
                <a href="javascript:;" class="mod_btn js_all_down" data-stat="y_new.toplist.downloadall"><i class="mod_btn__icon_down"></i>下载</a>
                <a href="javascript:;" class="mod_btn js_batch" data-stat="y_new.toplist.batch"><i class="mod_btn__icon_batch"></i>批量操作</a>
		<a class="mod_btn js_into_comment" data-stat="y_new.toplist.gotocomment" href="#comment_box"><i class="mod_btn__icon_comment"></i>评论(913)</a>
            </div>

            <div class="mod_songlist">
                <ul class="songlist__header">
                    <li class="songlist__edit sprite">
                        <input type="checkbox" class="songlist__checkbox js_check_all">
                    </li>
                    <li class="songlist__header_name">歌曲</li>
                    <li class="songlist__header_author">歌手</li>
                    <li class="songlist__header_time">时长</li>
                </ul>


<ul class="songlist__list" v-if="listDatas.length > 0">
	<li  
        mid="103363877" 
        ix="0"
        v-for="idx in 20"
        :id="listDatas[idx -1].al.id">
		<div class="songlist__item" onmouseover="this.className=(this.className+' songlist__item--hover')" onmouseout="this.className=this.className.replace(/ songlist__item--hover/, '')">
			<div class="songlist__edit songlist__edit--check sprite">
			    <input type="checkbox" class="songlist__checkbox">
			</div> 
			
			<div class="songlist__number  songlist__number--top">{{idx}}</div>
			
		
		    <div class="songlist__rank"><i class="icon_rank_popular"></i>178%</div>
		
		    <div class="songlist__songname">
		    
			<i class="songlist__icon songlist__icon_exclusive sprite" title="独家"></i>
		    
		     
			<a href="https://y.qq.com/n/yqq/mv/v/w00175zknsu.html" class="songlist__icon songlist__icon_mv sprite" rel="noopener" target="_blank" title="MV"><span class="icon_txt">MV</span></a>
		     
		    
			<span class="songlist__songname_txt" style="visibility: visible;">
			    <a href="https://y.qq.com/n/yqq/album/002pDbf73FEsT9.html" class="songlist__cover album_name" data-albummid="002pDbf73FEsT9" data-albumid="1080467">
                    <img 
                        class="songlist__pic" 
                        style="display: block; visibility: visible;"
                        :src="listDatas[idx - 1].al.picUrl" 
                        :alt="listDatas[idx - 1].al.name" 
                        >
                    </a>
			    <a  
                    class="js_song" 
                    :title="listDatas[idx - 1].al.name">
                    {{listDatas[idx - 1].al.name}}
                </a>
			    
			</span>
			<div class="mod_list_menu">
				<a href="javascript:;" class="list_menu__item list_menu__play js_play" title="播放">
				    <i class="list_menu__icon_play"></i>
				    <span class="icon_txt">播放</span>
				</a>
				<a href="javascript:;" class="list_menu__item list_menu__add js_fav" title="添加到歌单" aria-haspopup="true" data-target="menu_add">
				    <i class="list_menu__icon_add"></i>
				    <span class="icon_txt">添加到歌单</span>
				</a>
				
				<a href="javascript:;" class="list_menu__item list_menu__down js_down" title="VIP下载" aria-haspopup="true" data-target="menu_down">
					<i class="list_menu__icon_down_vip"></i>
					<span class="icon_txt">VIP下载</span>
				</a>
				
				<a href="javascript:;" class="list_menu__item list_menu__share js_share" title="分享" aria-haspopup="true" data-aria="menu_share">
				    <i class="list_menu__icon_share"></i>
				    <span class="icon_txt">分享</span>
				</a>
			</div>
		    </div>
				
		    <div class="songlist__artist" title="陆海涛">
			
			
			<a href="https://y.qq.com/n/yqq/singer/000MQFmm3Et7ty.html" data-singermid="000MQFmm3Et7ty" data-singerid="195987" title="陆海涛" class="singer_name">陆海涛</a>
			
		    </div>
		    <div class="songlist__time">03:43</div>
		    <div class="songlist__other">
			
		    </div>
		</div>
	</li>




</ul>
            </div>


   </div>    

</div>
</template>

<script>
import {getTopList} from 'api'

export default {
data() {
    return {
        topRankingtype:[
            {name:'飙升榜',dataId:'19723756'},
            {name:'新歌榜',dataId:'3779629'},
            {name:'热歌榜',dataId:'3778678'},
            {name:'原创榜',dataId:'2884035'},
        ],
        aereRankingtype:[
            {name:'欧美榜',dataId:'2809513713'},
            {name:'韩语榜',dataId:'745956260'},
            {name:'日语榜',dataId:'5059644681'},             
        ],
        specialRankingtype:[
            {name:'古典榜',dataId:'71384707'},
            {name:'说唱榜',dataId:'99131959'},
            {name:'电子榜',dataId:'187894795'},
            {name:'ACG榜',dataId:'71385702'},
            {name:'乡村榜',dataId:'3112516681'},
            {name:'摇滚榜',dataId:'5059633707'},
            {name:'古风榜',dataId:'5059642708'},
            {name:'民谣榜',dataId:'5059661515'},
        ],
        globalRankingtype:[
            {name:'UK排行周榜',dataId:'180106'},
            {name:'美国Billboard榜',dataId:'60198'},
            {name:'Beatport全球电子舞曲榜',dataId:'3812895'},
            {name:'iTuness榜',dataId:'11641012'},
            {name:'日本Oricon',dataId:'60131'},
            {name:'法国 NRJ Vos Hits 周榜',dataId:'27135204'},
        ],
        seletedType: '19723756',
        listDatas: [],
    }
},
mounted() {
    this.updatedTopList()
},
methods: {
    onSelectType(id) {
        this.seletedType = id;
    },
    updatedTopList() {
        getTopList(this.seletedType).then((res)=>{
            console.log(res)
            this.listDatas = res.data.playlist.tracks
        })
    },
},
watch: {
    seletedType(newType) {
        this.updatedTopList()
    }
}
  
}
</script>

<style >
/*总体css*/
#mian{
    padding-top: 60px;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    color: #000;
    font-size: 14px;
    line-height: 1.5;
}
dd,dt,h1,ul,li,h2{
    margin: 0;
    padding: 0;
}

/*右边css*/
.toplist_nav {
    float: left;
    width: 178px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(153,153,153,.2);
}
.toplist_nav__list {
    margin-bottom: 20px;
}
.toplist_nav__tit {
    line-height: 60px;
    font-size: 20px;
    font-weight: 400;
    border-bottom: 1px solid #ebebeb;
    margin: 0 17px 10px;
    text-align: left;
}

.toplist_nav__link {
    font-size: 15px;
    display: block;
    line-height: 22px;
    padding: 8px 17px;
    text-align: left;
}
a {
    color: #000;
    text-decoration: none;
    font-family: poppin,Tahoma,Arial,微软雅黑,sans-serif;
}
.toplist_nav__link--current, .toplist_nav__link--current:hover {
    background-color: #31c27c;
    color: #fff;
}


/*左上*/
.mod_toplist {
    position: relative;
    margin-left: 210px;
    text-align: left;
}
.toplist__hd {
    line-height: 64px;
    height: 64px;
    margin-bottom: 10px;
    text-align: left;
}
.toplist__tit1{
    float: left;
    font-weight: 400;
    font-size: 24px;
    margin-right: 15px;
}
.toplist_switch {
    margin-right: 15px;
    font-size: 0;
}
.toplist_switch__data {
    font-size: 14px;
}

.mod_songlist {
    font-size: 14px;
    overflow: hidden;
}
.mod_songlist {
    margin-bottom: 60px;
}
.mod_btn_green {
    border: 1px solid #31c27c;
    background-color: #31c27c;
    color: #fff;
}
.mod_btn, .mod_btn_green {
    border-radius: 2px;
    font-size: 14px;
    margin-right: 6px;
    padding: 0 23px;
    height: 38px;
    line-height: 38px;
    display: inline-block;
    white-space: nowrap;
    box-sizing: border-box;
    overflow: hidden;
    text-align: left;
}
.mod_songlist_toolbar .mod_btn {
    min-width: 122px;
    text-align: center;
}
.mod_btn {
    border: 1px solid #c9c9c9;
    color: #000;
}
.songlist__header {
    height: 50px;
    line-height: 50px;
    background-color: rgba(0,0,0,.01);
    color: #999;
}
.songlist__header {
    height: 50px;
    line-height: 50px;
    background-color: rgba(0,0,0,.01);
    color: #999;
}
.songlist__edit {
    display: none;
}
.sprite, .sprite_before::before {
    background-image: url(https://y.gtimg.cn/mediastyle/yqq/img/icon_sprite.png?max_age=2592000&v=85678e8f28c7b4bcad5c209b21b7e3b3);
    }
li {
    list-style: none;
}
input, select, textarea, th {
    color: #000;
    background-color: #fff;
    font-size: 14px;
    line-height: 1.5;
    font-family: poppin,Tahoma,Arial,微软雅黑,sans-serif;
    font-family: Tahoma,Arial,微软雅黑,sans-serif/9;
}
.songlist__header_name, .songlist__songname {
    width: 72%;
}
.songlist__header_name, .songlist__songname {
    float: left;
    width: 47.685185%;
    position: relative;
    white-space: normal;
}
.songlist__header_name, .songlist__songname {
    width: 72%;
}
.songlist__header_time,.songlist__time {
    position: absolute;
    top: 0;
    right: 38px;
    width: 50px;
}
.songlist__list {
    overflow: hidden;
    clear: both;
}

.songlist__item {
    height: 80px;
}
.songlist__header, .songlist__item {
    padding-left: 122px;
}
.songlist__item {
    clear: both;
    font-size: 0;
    overflow: hidden;
}
.songlist__header, .songlist__item {
    position: relative;
    padding-left: 122px;
    padding-right: 95px;
}

.songlist__album, .songlist__artist, .songlist__number, .songlist__other, .songlist__rank, .songlist__songname, .songlist__time {
    line-height: 80px;
    height: 80px;
}
.songlist__number {
    position: absolute;
    top: 0;
    left: 10px;
    color: #999;
    width: 36px;
}
.songlist__album,.songlist__artist,.songlist__number,.songlist__other,.songlist__time {
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
}
.songlist__number {
    width: 40px;
    top: 2px;
    left: 0;
    text-align: left;
    font-size: 24px;
    color: #333;
}
.songlist__number--top {
    color: #ff4222;
}
.songlist__rank {
    position: absolute;
    top: 0;
    left: 48px;
    width: 72px;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: #999;
}
.icon_rank_popular {
    width: 15px;
    height: 15px;
    margin-top: 27px;
    background-position: 0 -60px;
}
.icon_rank_down, .icon_rank_keep, .icon_rank_new, .icon_rank_popular, .icon_rank_re, .icon_rank_up {
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-image: url(https://y.gtimg.cn/mediastyle/yqq/img/icon_rank.png?max_age=2592000&v=49dbc44baeb6f4644cf6e38ec5ae8576);
}
.songlist__songname {
    overflow: hidden;
    text-overflow: ellipsis;

}
.songlist__icon_exclusive {
    display: inline-block;
    width: 34px;
    height: 16px;
    background-position: -80px -280px;
    vertical-align: middle;
    margin-right: 6px;
}
.songlist__icon_mv {
    display: inline-block;
    width: 33px;
    height: 16px;
    background-position: -40px -280px;
    vertical-align: middle;
    margin-right: 6px;
}
.icon_txt {
    font: 0/0 a;
}
.songlist__item .songlist__icon:nth-child(2) + .songlist__songname_txt {
    max-width: 62%;
    box-sizing: border-box;
}
.songlist__songname_txt {
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 56%;
    margin-right: 8px;
    white-space: nowrap;
    font-size: 14px;
}
.songlist__cover, .songlist__pic {
    width: 70px;
    height: 70px;
}
.songlist__cover {
    float: left;
    margin-right: 20px;
    margin-top: 5px;
}
img {
    border: 0 none;
    image-rendering: optimizeQuality;
}
.songlist__item .mod_list_menu {
    pointer-events: none;
}

.songlist__item .mod_list_menu {
    position: absolute;
    right: -10px;
    right: -9999px\9;
    top: 50%;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
}
.songlist__item--current
.mod_list_menu,
.songlist__item:hover
.mod_list_menu {
    opacity:1;
    pointer-events:inherit;
    right:10px;
    margin-top:-18px
}
.mod_list_menu {
    font-size: 0;
    height: 36px;
}
.list_menu__item {
    display: inline-block;
    margin-right: 10px;
    vertical-align: top;
}
.list_menu__icon_play {
    background-position: 0 0;
}
.list_menu__icon_add {
    background-position: 0 -80px;
}
.list_menu__icon_down_vip {
    background-position: 0 -280px;
}
.list_menu__icon_share {
    background-position: 0 -40px;
}
.list_menu__icon_add, .list_menu__icon_delete, .list_menu__icon_down, .list_menu__icon_down_vip, .list_menu__icon_edit, .list_menu__icon_pause, .list_menu__icon_play, .list_menu__icon_share {
    display: block;
    width: 36px;
    height: 36px;
    background-image: url(https://y.gtimg.cn/mediastyle/yqq/img/icon_list_menu.png?max_age=2592000&v=c7d35bfe7f255b43324a028598ea64a8);
    }

    
   
</style>
