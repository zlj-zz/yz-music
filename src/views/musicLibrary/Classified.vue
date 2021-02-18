<template>
  <div class="main1" style="">    

        <!-- 标签筛选 -->
        <div class="mod_playlist_tag" id="taglist">
	<div class="js_normal" style="display:;">

            <div class="playlist_tag__list playlist_tag__list--lang">
                <h3 class="playlist_tag__tit c_tx_thin">语种</h3>
		
                <i class="playlist_tag__line"></i>
		
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="165">国语</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="167">英语</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="168">韩语</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="166">粤语</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="169">日语</a></li>
		
		    
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_more_tag">更多<i class="playlist_tag__arrow sprite"></i></a></li>
		    
                </ul>
            </div>
	    
            <div class="popup_tag" style="display:none;">
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="170">小语种</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="203">闽南语</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="204">法语</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="205">拉丁语</a></li>
		
                </ul>
            </div>
	    

            <div class="playlist_tag__list ">
                <h3 class="playlist_tag__tit c_tx_thin">流派</h3>
		
                <i class="playlist_tag__line"></i>
		
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="6">流行</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="15">轻音乐</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="11">摇滚</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="28">民谣</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="8">R&amp;B</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="153">嘻哈</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="24">电子</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="27">古典</a></li>
		
		    
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_more_tag">更多<i class="playlist_tag__arrow sprite"></i></a></li>
		    
                </ul>
            </div>
	    
            <div class="popup_tag" style="display:none;">
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="18">乡村</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="22">蓝调</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="21">爵士</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="164">新世纪</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="25">拉丁</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="218">后摇</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="219">中国传统</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="220">世界音乐</a></li>
		
                </ul>
            </div>
	    

            <div class="playlist_tag__list ">
                <h3 class="playlist_tag__tit c_tx_thin">主题</h3>
		
                <i class="playlist_tag__line"></i>
		
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="39">ACG</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="136">经典</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="146">网络歌曲</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="133">影视</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="141">KTV热歌</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="131">儿歌</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="145">中国风</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="194">古风</a></li>
		
		    
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_more_tag">更多<i class="playlist_tag__arrow sprite"></i></a></li>
		    
                </ul>
            </div>
	    
            <div class="popup_tag" style="display:none;">
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="148">情歌</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="196">城市</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="197">现场音乐</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="199">背景音乐</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="200">佛教音乐</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="201">UP主</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="202">乐器</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="226">MC喊麦</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="14">DJ</a></li>
		
                </ul>
            </div>
	    

            <div class="playlist_tag__list ">
                <h3 class="playlist_tag__tit c_tx_thin">心情</h3>
		
                <i class="playlist_tag__line"></i>
		
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="52">伤感</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="122">安静</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="117">快乐</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="116">治愈</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="125">励志</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="59">甜蜜</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="55">寂寞</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="126">宣泄</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="68">思念</a></li>
		
		    
                </ul>
            </div>
	    

            <div class="playlist_tag__list ">
                <h3 class="playlist_tag__tit c_tx_thin">场景</h3>
		
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="78">睡前</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="102">夜店</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="101">学习</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="99">运动</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="85">开车</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="76">约会</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="94">工作</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="81">旅行</a></li>
		
		    
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_more_tag">更多<i class="playlist_tag__arrow sprite"></i></a></li>
		    
                </ul>
            </div>
	    
            <div class="popup_tag" style="display:none;">
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="103">派对</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="222">婚礼</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="223">咖啡馆</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="224">跳舞</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="16">校园</a></li>
		
                </ul>
            </div>
	    

	</div>
	<div class="js_1024" style="display:none;">

            <div class="playlist_tag__list playlist_tag__list--lang">
                <h3 class="playlist_tag__tit c_tx_thin">语种</h3>
		
                <i class="playlist_tag__line"></i>
		
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="165">国语</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="167">英语</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="168">韩语</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="166">粤语</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="169">日语</a></li>
		
		    
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_more_tag">更多<i class="playlist_tag__arrow sprite"></i></a></li>
		    
                </ul>
            </div>
	    
            <div class="popup_tag" style="display:none;">
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="170">小语种</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="203">闽南语</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="204">法语</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="205">拉丁语</a></li>
		
                </ul>
            </div>
	    

            <div class="playlist_tag__list ">
                <h3 class="playlist_tag__tit c_tx_thin">流派</h3>
		
                <i class="playlist_tag__line"></i>
		
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="6">流行</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="15">轻音乐</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="11">摇滚</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="28">民谣</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="8">R&amp;B</a></li>
		
		    
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_more_tag">更多<i class="playlist_tag__arrow sprite"></i></a></li>
		    
                </ul>
            </div>
	    
            <div class="popup_tag" style="display:none;">
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="153">嘻哈</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="24">电子</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="27">古典</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="18">乡村</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="22">蓝调</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="21">爵士</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="164">新世纪</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="25">拉丁</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="218">后摇</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="219">中国传统</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="220">世界音乐</a></li>
		
                </ul>
            </div>
	    

            <div class="playlist_tag__list ">
                <h3 class="playlist_tag__tit c_tx_thin">主题</h3>
		
                <i class="playlist_tag__line"></i>
		
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="39">ACG</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="136">经典</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="146">网络歌曲</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="133">影视</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="141">KTV热歌</a></li>
		
		    
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_more_tag">更多<i class="playlist_tag__arrow sprite"></i></a></li>
		    
                </ul>
            </div>
	    
            <div class="popup_tag" style="display:none;">
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="131">儿歌</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="145">中国风</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="194">古风</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="148">情歌</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="196">城市</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="197">现场音乐</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="199">背景音乐</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="200">佛教音乐</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="201">UP主</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="202">乐器</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="226">MC喊麦</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="14">DJ</a></li>
		
                </ul>
            </div>
	    

            <div class="playlist_tag__list ">
                <h3 class="playlist_tag__tit c_tx_thin">心情</h3>
		
                <i class="playlist_tag__line"></i>
		
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="52">伤感</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="122">安静</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="117">快乐</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="116">治愈</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="125">励志</a></li>
		
		    
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_more_tag">更多<i class="playlist_tag__arrow sprite"></i></a></li>
		    
                </ul>
            </div>
	    
            <div class="popup_tag" style="display:none;">
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="59">甜蜜</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="55">寂寞</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="126">宣泄</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="68">思念</a></li>
		
                </ul>
            </div>
	    

            <div class="playlist_tag__list ">
                <h3 class="playlist_tag__tit c_tx_thin">场景</h3>
		
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="78">睡前</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="102">夜店</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="101">学习</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="99">运动</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="85">开车</a></li>
		
		    
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_more_tag">更多<i class="playlist_tag__arrow sprite"></i></a></li>
		    
                </ul>
            </div>
	    
            <div class="popup_tag" style="display:none;">
                <ul class="playlist_tag__tags">
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="76">约会</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="94">工作</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="81">旅行</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="103">派对</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="222">婚礼</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="223">咖啡馆</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="224">跳舞</a></li>
		
                    <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag" data-id="16">校园</a></li>
		
                </ul>
            </div>
	    
</div></div>
            
        <div class="mod_part_detail">
            <div class="part_detail__hd">
                <h2 class="part_detail__tit">全部歌单</h2>
                <div class="part_switch" id="sortbox" aria-label="排列方式"><a href="javascript:;" class="part_switch__item js_sort part_switch__item--left part_switch__item--select" title="推荐" data-sort="5">推荐</a><a href="javascript:;" class="part_switch__item part_switch__item--right js_sort" title="最新" data-sort="2">最新</a></div>
            </div>
            <div class="mod_playlist mod_playlist--all">
                <ul class="playlist__list" id="playlist_box">
			

		    <li class="playlist__item" data-disstid="5142656683" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/5142656683.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="EA7  俄式硬曲 | 车载低音 稳住油门" data-disstid="5142656683" data-stat="y_new.playlist.pic_click"><img src="//p.qpic.cn/music_cover/Yia6GzQeiaxqw8ZSTicnMPMw3vicFvwJ6NoQLL8IHKoicoJ0O9UmJHfuYMQ/300?n=1" data-original="//p.qpic.cn/music_cover/Yia6GzQeiaxqw8ZSTicnMPMw3vicFvwJ6NoQLL8IHKoicoJ0O9UmJHfuYMQ/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="EA7  俄式硬曲 | 车载低音 稳住油门" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/5142656683.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="5142656683" title="EA7  俄式硬曲 | 车载低音 稳住油门">EA7  俄式硬曲 | 车载低音 稳住油门</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=owol7e6ioinFon**#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="owol7e6ioinFon**" data-stat="y_new.playlist.creater" title="LANNÉ">LANNÉ</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 864.7万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="5142656683" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="7860967835" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/7860967835.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="心动值100%：充满磁性迷人女嗓" data-disstid="7860967835" data-stat="y_new.playlist.pic_click"><img src="//y.gtimg.cn/mediastyle/global/img/playlist_300.png" data-original="//qpic.y.qq.com/music_cover/ciasd4H0Fk83ukIpabgeZbFMgHpnfpcBJib4yicoOmEW6cX9vHaEhfRgtzoYIlEXgK2/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="心动值100%：充满磁性迷人女嗓" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/7860967835.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="7860967835" title="心动值100%：充满磁性迷人女嗓">心动值100%：充满磁性迷人女嗓</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=oK6kowEAoK4z7Kni7wnPoKSlov**#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="oK6kowEAoK4z7Kni7wnPoKSlov**" data-stat="y_new.playlist.creater" title="玖九9丶">玖九9丶</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 203.7万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="7860967835" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="7803304139" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/7803304139.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="可叹惊鸿一瞥，误入眉眼欢喜多年" data-disstid="7803304139" data-stat="y_new.playlist.pic_click"><img src="//p.qpic.cn/music_cover/UhynhXLFdZ5XlKX43mICGqXQXIPlp7W4NELWkALtMKgQF52CVk5vZg/300?n=1" data-original="//p.qpic.cn/music_cover/UhynhXLFdZ5XlKX43mICGqXQXIPlp7W4NELWkALtMKgQF52CVk5vZg/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="可叹惊鸿一瞥，误入眉眼欢喜多年" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/7803304139.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="7803304139" title="可叹惊鸿一瞥，误入眉眼欢喜多年">可叹惊鸿一瞥，误入眉眼欢喜多年</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=oKol7wcioKnq#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="oKol7wcioKnq" data-stat="y_new.playlist.creater" title="Healer.">Healer.</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 387万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="7803304139" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="3856616098" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/3856616098.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="李宗盛：不懂是幸运，听懂是人生" data-disstid="3856616098" data-stat="y_new.playlist.pic_click"><img src="//y.gtimg.cn/mediastyle/global/img/playlist_300.png" data-original="//qpic.y.qq.com/music_cover/gqVaKN4cXQibfxm8NiaDJbZE9ZPe2bK7FFyFQZric5vR4DboDpCiaEsAOA/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="李宗盛：不懂是幸运，听懂是人生" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/3856616098.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="3856616098" title="李宗盛：不懂是幸运，听懂是人生">李宗盛：不懂是幸运，听懂是人生</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=NKczoKCFowEk#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="NKczoKCFowEk" data-stat="y_new.playlist.creater" title="AИAΓKH’">AИAΓKH’</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 1156.8万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="3856616098" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="7594912510" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/7594912510.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="心跳加速！做梦都想哼的神仙歌曲" data-disstid="7594912510" data-stat="y_new.playlist.pic_click"><img src="//y.gtimg.cn/mediastyle/global/img/playlist_300.png" data-original="//qpic.y.qq.com/music_cover/wJVVjg2CMUnGvibBIcaUpQ1pwoPPg3JtBNC8ctN1iaj3U31HAePXhicGA/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="心跳加速！做梦都想哼的神仙歌曲" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/7594912510.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="7594912510" title="心跳加速！做梦都想哼的神仙歌曲">心跳加速！做梦都想哼的神仙歌曲</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=oK4z7wvqNeci7z**#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="oK4z7wvqNeci7z**" data-stat="y_new.playlist.creater" title="Breath">Breath</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 745.8万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="7594912510" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="7617467932" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/7617467932.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="歌单：也许这就是爱情吧" data-disstid="7617467932" data-stat="y_new.playlist.pic_click"><img src="//y.gtimg.cn/mediastyle/global/img/playlist_300.png" data-original="//qpic.y.qq.com/music_cover/icu4vhvBfxQWBQoPSEeWoqia055GViasCA2UUabGy4siagrhwduYDPv80KoOUh6jdSKT/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="歌单：也许这就是爱情吧" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/7617467932.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="7617467932" title="歌单：也许这就是爱情吧">歌单：也许这就是爱情吧</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=oK6kowEAoK4z7KnzNeosNenP7c**#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="oK6kowEAoK4z7KnzNeosNenP7c**" data-stat="y_new.playlist.creater" title="顾辞.">顾辞.</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 873.3万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="7617467932" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="1533954251" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/1533954251.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="日语 丨 耳机炸裂的ACG动漫" data-disstid="1533954251" data-stat="y_new.playlist.pic_click"><img src="//y.gtimg.cn/mediastyle/global/img/playlist_300.png" data-original="//qpic.y.qq.com/music_cover/NVM0QfloUwmiclnbmVblAT8YjBYKPTKoodHCGgI7TDtickFr12d05Yaw/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="日语 丨 耳机炸裂的ACG动漫" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/1533954251.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="1533954251" title="日语 丨 耳机炸裂的ACG动漫">日语 丨 耳机炸裂的ACG动漫</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=oK-s7eC5NK6soz**#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="oK-s7eC5NK6soz**" data-stat="y_new.playlist.creater" title="づ—³搁浅✧٩">づ—³搁浅✧٩</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 507.8万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="1533954251" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="7495335760" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/7495335760.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="男孩 | 愿你的未来都有人在" data-disstid="7495335760" data-stat="y_new.playlist.pic_click"><img src="//p.qpic.cn/music_cover/W7suucKexcjnVj4NHH9SkQBaoteE2Fb157227BZIYlEHPrJH7Tv5vA/300?n=1" data-original="//p.qpic.cn/music_cover/W7suucKexcjnVj4NHH9SkQBaoteE2Fb157227BZIYlEHPrJH7Tv5vA/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="男孩 | 愿你的未来都有人在" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/7495335760.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="7495335760" title="男孩 | 愿你的未来都有人在">男孩 | 愿你的未来都有人在</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=7Kvk7i-ANKS5#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="7Kvk7i-ANKS5" data-stat="y_new.playlist.creater" title="我等等🎶">我等等🎶</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 443.9万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="7495335760" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="7374849493" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/7374849493.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="【Rap】宝藏快要藏不住啦" data-disstid="7374849493" data-stat="y_new.playlist.pic_click"><img src="//y.gtimg.cn/mediastyle/global/img/playlist_300.png" data-original="//qpic.y.qq.com/music_cover/Rr6HwC54LYJMgCafbRgA7AeljKo687LNfr4IDFCv6JuTeCteF8capg/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="【Rap】宝藏快要藏不住啦" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/7374849493.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="7374849493" title="【Rap】宝藏快要藏不住啦">【Rap】宝藏快要藏不住啦</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=owv5oKcq7wCq7c**#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="owv5oKcq7wCq7c**" data-stat="y_new.playlist.creater" title="赫卡忒">赫卡忒</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 24.1万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="7374849493" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="2057471858" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/2057471858.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="『舒缓钢琴曲』心灵最深处的宁静" data-disstid="2057471858" data-stat="y_new.playlist.pic_click"><img src="//y.gtimg.cn/mediastyle/global/img/playlist_300.png" data-original="//qpic.y.qq.com/music_cover/mux4gBFUFLuIK5dIIpFXcztenibJCQAJw7DU2GmWcr9icGibiaLPflq3bA/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="『舒缓钢琴曲』心灵最深处的宁静" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/2057471858.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="2057471858" title="『舒缓钢琴曲』心灵最深处的宁静">『舒缓钢琴曲』心灵最深处的宁静</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=7wvFownqoK4P#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="7wvFownqoK4P" data-stat="y_new.playlist.creater" title="大山">大山</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 52.7万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="2057471858" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="7715817710" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/7715817710.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="宋冬野：让生活富有韵律感" data-disstid="7715817710" data-stat="y_new.playlist.pic_click"><img src="//p.qpic.cn/music_cover/HGBmafr2G4eXLUAHnNn0FGMhicPAFX9rmnviaHxAMaWHlT3MqaeqD8dg/300?n=1" data-original="//p.qpic.cn/music_cover/HGBmafr2G4eXLUAHnNn0FGMhicPAFX9rmnviaHxAMaWHlT3MqaeqD8dg/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="宋冬野：让生活富有韵律感" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/7715817710.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="7715817710" title="宋冬野：让生活富有韵律感">宋冬野：让生活富有韵律感</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=ow6FoKE57K6FNv**#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="ow6FoKE57K6FNv**" data-stat="y_new.playlist.creater" title="欢乐俱乐部">欢乐俱乐部</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 142.1万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="7715817710" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="7611086736" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/7611086736.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="超仙古韵｜赋情入曲，邂逅好人间" data-disstid="7611086736" data-stat="y_new.playlist.pic_click"><img src="//y.gtimg.cn/mediastyle/global/img/playlist_300.png" data-original="//qpic.y.qq.com/music_cover/iblnmzfIbSD8g00LPlTRaPIib2VN00JCDic6ZXDhJWmbichtjZwpVtDmmQ/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="超仙古韵｜赋情入曲，邂逅好人间" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/7611086736.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="7611086736" title="超仙古韵｜赋情入曲，邂逅好人间">超仙古韵｜赋情入曲，邂逅好人间</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=oKcPoKoqoioq7n**#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="oKcPoKoqoioq7n**" data-stat="y_new.playlist.creater" title="妖小柔">妖小柔</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 286.3万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="7611086736" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="7347300045" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/7347300045.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="欢度新春：佳节必备祝福曲" data-disstid="7347300045" data-stat="y_new.playlist.pic_click"><img src="//p.qpic.cn/music_cover/ywGiaJWOnRwHqNHArZSRge6VA7bM4xqYXciaNHOKBXxhiarNp2M1pANSA/300?n=1" data-original="//p.qpic.cn/music_cover/ywGiaJWOnRwHqNHArZSRge6VA7bM4xqYXciaNHOKBXxhiarNp2M1pANSA/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="欢度新春：佳节必备祝福曲" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/7347300045.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="7347300045" title="欢度新春：佳节必备祝福曲">欢度新春：佳节必备祝福曲</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=oK-A7iEAoKCANn**#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="oK-A7iEAoKCANn**" data-stat="y_new.playlist.creater" title="人间歌单天堂">人间歌单天堂</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 19.9万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="7347300045" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="7765191765" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/7765191765.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="Rapper超甜｜沉浸在你爱的告白" data-disstid="7765191765" data-stat="y_new.playlist.pic_click"><img src="//y.gtimg.cn/mediastyle/global/img/playlist_300.png" data-original="//qpic.y.qq.com/music_cover/EKxMrrcKRDgB6HbqEtjhCpNvuazuQuib4l2IU6ckCqOkjuBtJgcNHhw/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="Rapper超甜｜沉浸在你爱的告白" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/7765191765.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="7765191765" title="Rapper超甜｜沉浸在你爱的告白">Rapper超甜｜沉浸在你爱的告白</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=owcl7w6z7Kck#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="owcl7w6z7Kck" data-stat="y_new.playlist.creater" title="九离">九离</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 31.1万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="7765191765" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="4213000588" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/4213000588.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="西西弗书店的英文歌单列表" data-disstid="4213000588" data-stat="y_new.playlist.pic_click"><img src="//p.qpic.cn/music_cover/ZxFhHIic15equyHQJ4akclQdELjISARImyu5V8T4Gvicfdo0lwuNhiclg/300?n=1" data-original="//p.qpic.cn/music_cover/ZxFhHIic15equyHQJ4akclQdELjISARImyu5V8T4Gvicfdo0lwuNhiclg/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="西西弗书店的英文歌单列表" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/4213000588.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="4213000588" title="西西弗书店的英文歌单列表">西西弗书店的英文歌单列表</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=owvi7iE5oe-son**#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="owvi7iE5oe-son**" data-stat="y_new.playlist.creater" title="谜一般的年轻人">谜一般的年轻人</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 861.1万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="4213000588" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="7747870306" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/7747870306.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="说唱｜甜度爆表的旋律说唱" data-disstid="7747870306" data-stat="y_new.playlist.pic_click"><img src="//y.gtimg.cn/mediastyle/global/img/playlist_300.png" data-original="//qpic.y.qq.com/music_cover/ia3EctBodpGv1HTtMoXrWsZPE00n2pzXoqrlZyPbFMbGPBoTric5Mttg/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="说唱｜甜度爆表的旋律说唱" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/7747870306.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="7747870306" title="说唱｜甜度爆表的旋律说唱">说唱｜甜度爆表的旋律说唱</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=owCi7KSiow4k7v**#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="owCi7KSiow4k7v**" data-stat="y_new.playlist.creater" title="神仙妹妹">神仙妹妹</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 22.8万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="7747870306" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="5002591685" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/5002591685.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="高燃游戏BGM:音乐冠军必备！" data-disstid="5002591685" data-stat="y_new.playlist.pic_click"><img src="//y.gtimg.cn/mediastyle/global/img/playlist_300.png" data-original="//qpic.y.qq.com/music_cover/7Qh16IdjhTXXiaAUnwWT3ALVJ7VxhT5MQFvia7PPyw5dxmFOOD4GpibGw/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="高燃游戏BGM:音乐冠军必备！" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/5002591685.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="5002591685" title="高燃游戏BGM:音乐冠军必备！">高燃游戏BGM:音乐冠军必备！</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=oi4AoiEioKEsoc**#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="oi4AoiEioKEsoc**" data-stat="y_new.playlist.creater" title="惜辰.">惜辰.</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 158.1万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="5002591685" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="7426529126" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/7426529126.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="「片段」你与星河皆不可及" data-disstid="7426529126" data-stat="y_new.playlist.pic_click"><img src="//y.gtimg.cn/mediastyle/global/img/playlist_300.png" data-original="//qpic.y.qq.com/music_cover/LQ4zic8aEyNEreHko5rQ2a6S0JjhXjvoxzTWXvqiaZDDvJWlibGcCWa4g/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="「片段」你与星河皆不可及" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/7426529126.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="7426529126" title="「片段」你与星河皆不可及">「片段」你与星河皆不可及</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=owozoenkoiC57z**#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="owozoenkoiC57z**" data-stat="y_new.playlist.creater" title="✘">✘</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 127.8万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="7426529126" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="7642348321" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/7642348321.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="梨涡少年【易烊千玺Live精选】" data-disstid="7642348321" data-stat="y_new.playlist.pic_click"><img src="//y.gtimg.cn/mediastyle/global/img/playlist_300.png" data-original="//qpic.y.qq.com/music_cover/Fb45aBbVLegttnxiaLc7iciaWjg47cOjgB6Pj6vQs5wMxkuYIQicfjKXUw/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="梨涡少年【易烊千玺Live精选】" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/7642348321.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="7642348321" title="梨涡少年【易烊千玺Live精选】">梨涡少年【易烊千玺Live精选】</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=oi6PoiEPoK4q7v**#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="oi6PoiEPoK4q7v**" data-stat="y_new.playlist.creater" title="途中.">途中.</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 376.5万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="7642348321" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			

		    <li class="playlist__item" data-disstid="7229893667" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
                                <div class="playlist__item_box">
                                <div class="playlist__cover mod_cover" style="visibility: visible;"><a href="https://y.qq.com/n/yqq/playsquare/7229893667.html#stat=y_new.playlist.pic_click" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" title="我是怪人听歌也会哭" data-disstid="7229893667" data-stat="y_new.playlist.pic_click"><img src="//y.gtimg.cn/mediastyle/global/img/playlist_300.png" data-original="//qpic.y.qq.com/music_cover/jgHXm3m5yAic5NqDAMOKdf1vbJMaVpj7sva7MlO52FkFQhpYRsGL8kg/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;" alt="我是怪人听歌也会哭" class="playlist__pic" style="display: block; visibility: visible;"><i class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/7229893667.html#stat=y_new.playlist.dissname" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" data-stat="y_new.playlist.dissname" data-disstid="7229893667" title="我是怪人听歌也会哭">我是怪人听歌也会哭</a></span></h4>
                               <div class="playlist__author">
					
					    <a href="//y.qq.com/portal/profile.html?uin=owSlNK-ANeEF7c**#stat=y_new.playlist.creater" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="owSlNK-ANeEF7c**" data-stat="y_new.playlist.creater" title="瞎子">瞎子</a>
					
			       </div>
			       <div class="playlist__other">
					播放量： 151.9万
			       </div>
                            <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="3" data-id="7229893667" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
				</div>
                            </li>	
			</ul>
            </div>
            

        </div>

        
    </div>
  
</template>

<script>
export default {
  
}
</script>

<style scoped>
.main1 {
    z-index: 2;
}
.main1, .section_inner {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
}


.mod_playlist_tag {
    position: relative;
    padding: 60px 0 32px 0;
    margin-right: -24px;
    height: 118px;
}

.playlist_tag__list {
    position: relative;
    float: left;
    width: 238px;
    line-height: 26px;
    margin-right: 22px;
}
.playlist_tag__list--lang {
    width: 160px;
}
.playlist_tag__tit {
    font-weight: 400;
    font-size: 14px;
    padding-left: 8px;
    margin-bottom: 8px;
    margin-top: -6px;
}
.c_tx_thin {
    color: #999;
}
.playlist_tag__line {
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 108px;
    background-color: #eeeef0;
}
blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, html, input, lengend, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
}
.playlist_tag__itembox {
    float: left;
    width: 76px;
    margin-bottom: 4px;
}
li {
    list-style: none;
}

.playlist_tag__item {
    float: left;
    padding: 0 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 68px;
}
a {
    color: #000;
    text-decoration: none;
}
.playlist_tag__item--expand, .playlist_tag__item--expand:hover, .playlist_tag__item--select, .playlist_tag__item--select:hover {
    background-color: #31c27c;
    color: #fff;
}
.playlist_tag__item {
    float: left;
    padding: 0 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 68px;
}


.mod_part, .mod_part_detail {
    position: relative;
    margin-bottom: 30px;
}
.part__hd, .part_detail__hd {
    overflow: hidden;
    height: 60px;
}
.part__tit, .part_detail__tit {
    float: left;
    font-size: 24px;
    font-weight: 400;
    line-height: 58px;
}
.part_switch {
    position: absolute;
    top: 7px;
    right: 0;
    height: 40px;
    line-height: 40px;
    border-radius: 2px;
    font-size: 0;
}
.part_switch__item--select, .part_switch__item--select:hover {
    background-color: #31c27c;
    color: #fff;
    border-color: #31c27c;
    z-index: 2;
}
.part_switch__item--left {
    right: -1px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    border-color: #c9c9c9;
}
.part_switch__item {
    position: relative;
    display: inline-block;
    padding: 0 16px;
    height: 38px;
    position: relative;
    font-size: 14px;
    border-width: 1px;
    border-style: solid;
    border-color: #c9c9c9 transparent #c9c9c9 transparent;
}
.part_switch__item--right {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-color: #c9c9c9;
}


.mod_playlist .playlist__item {
    display: inline-block;
    width: 20%;
    padding-bottom: 44px;
    overflow: hidden;
    font-size: 14px;
    vertical-align: top;
}
.mod_playlist .playlist__cover {
    position: relative;
    display: block;
    overflow: hidden;
    margin-bottom: 15px;
}
.mod_playlist .playlist__title {
    overflow: hidden;
}
h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
}
.mod_playlist .playlist__title_txt {
    float: left;
    max-width: 100%;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 22px;
    max-height: 44px;
}
.mod_playlist .playlist__author, .mod_playlist .playlist__author a, .mod_playlist .playlist__other {
    color: #999;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 22px;
}
.mod_playlist .playlist__item_box {
    position: relative;
    margin-right: 20px;
}
.mod_playlist {
    overflow: hidden;
    font-size: 0;
}
.mod_playlist .playlist__list {
    margin-right: -20px;
}
img{
    width:250px;
}

</style>
