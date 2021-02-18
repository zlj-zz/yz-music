<template>

  <el-carousel height="300px" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="item in 3" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>

  <div class="main" style="">
        <!-- 标签筛选 -->
        <div class="mod_tag" id="tag_list">
            <div class="tag__list">
		
                <a href="javascript:;" class="tag__item tag__item--select" data-id="area|1">内地</a>
		
                <a href="javascript:;" class="tag__item " data-id="area|2">港台</a>
		
                <a href="javascript:;" class="tag__item " data-id="area|3">欧美</a>
		
                <a href="javascript:;" class="tag__item " data-id="area|4">韩国</a>
		
                <a href="javascript:;" class="tag__item " data-id="area|5">日本</a>
		
                <a href="javascript:;" class="tag__item " data-id="area|6">其他</a>
		
            </div>
</div>
            
        <div class="mod_part_detail">
            <div class="mod_playlist mod_playlist--all">
                <ul class="playlist__list" id="album_list">
<li class="playlist__item" data-albummid="002ksL5a0hO4A1" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
	<div class="playlist__item_box">
		<div class="playlist__cover mod_cover" style="visibility: visible;">
			<a href="https://y.qq.com/n/yqq/album/002ksL5a0hO4A1.html#stat=y_new.album_lib.album_pic" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_pic" data-albummid="002ksL5a0hO4A1">
				<img src="//y.gtimg.cn/music/photo_new/T002R300x300M000002ksL5a0hO4A1_1.jpg?max_age=2592000" data-original="//y.gtimg.cn/music/photo_new/T002R300x300M000002ksL5a0hO4A1_1.jpg?max_age=2592000" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;" alt="终于等到这一句" class="playlist__pic" style="display: block; visibility: visible;">
				<i class="mod_cover__icon_play js_play" data-stat="y_new.album_lib.album_play"></i>
			</a>
		</div>
		<h4 class="playlist__title">
			<span class="playlist__title_txt">
				<a href="https://y.qq.com/n/yqq/album/002ksL5a0hO4A1.html#stat=y_new.album_lib.album_name" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_name" data-albummid="002ksL5a0hO4A1" title="终于等到这一句">终于等到这一句</a>
			</span>
		</h4>
		
		
		<div class="playlist__author" title="小乐哥">
			
				
				
				<a href="https://y.qq.com/n/yqq/singer/002ul7D70CpXpI.html" class="js_singer" data-singermid="002ul7D70CpXpI">小乐哥</a>
				
			
		</div>
		<div class="playlist__other">
			2021-02-15
		</div>
		<a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-type="2" data-mid="002ksL5a0hO4A1" data-stat="y_new.album_lib.more">
			<span class="icon_txt">更多</span>
		</a>
	</div>
</li>

<li class="playlist__item" data-albummid="0018LIQ436pEoG" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
	<div class="playlist__item_box">
		<div class="playlist__cover mod_cover" style="visibility: visible;">
			<a href="https://y.qq.com/n/yqq/album/0018LIQ436pEoG.html#stat=y_new.album_lib.album_pic" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_pic" data-albummid="0018LIQ436pEoG">
				<img src="//y.gtimg.cn/music/photo_new/T002R300x300M0000018LIQ436pEoG_1.jpg?max_age=2592000" data-original="//y.gtimg.cn/music/photo_new/T002R300x300M0000018LIQ436pEoG_1.jpg?max_age=2592000" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;" alt="放飞" class="playlist__pic" style="display: block; visibility: visible;">
				<i class="mod_cover__icon_play js_play" data-stat="y_new.album_lib.album_play"></i>
			</a>
		</div>
		<h4 class="playlist__title">
			<span class="playlist__title_txt">
				<a href="https://y.qq.com/n/yqq/album/0018LIQ436pEoG.html#stat=y_new.album_lib.album_name" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_name" data-albummid="0018LIQ436pEoG" title="放飞">放飞</a>
			</span>
		</h4>
		
		
		<div class="playlist__author" title="许嵩">
			
				
				
				<a href="https://y.qq.com/n/yqq/singer/000CK5xN3yZDJt.html" class="js_singer" data-singermid="000CK5xN3yZDJt">许嵩</a>
				
			
		</div>
		<div class="playlist__other">
			2021-02-15
		</div>
		<a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-type="2" data-mid="0018LIQ436pEoG" data-stat="y_new.album_lib.more">
			<span class="icon_txt">更多</span>
		</a>
	</div>
</li>

<li class="playlist__item" data-albummid="0045Zi3L4E0KRZ" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
	<div class="playlist__item_box">
		<div class="playlist__cover mod_cover" style="visibility: visible;">
			<a href="https://y.qq.com/n/yqq/album/0045Zi3L4E0KRZ.html#stat=y_new.album_lib.album_pic" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_pic" data-albummid="0045Zi3L4E0KRZ">
				<img src="//y.gtimg.cn/music/photo_new/T002R300x300M0000045Zi3L4E0KRZ_1.jpg?max_age=2592000" data-original="//y.gtimg.cn/music/photo_new/T002R300x300M0000045Zi3L4E0KRZ_1.jpg?max_age=2592000" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;" alt="只想对你说" class="playlist__pic" style="display: block; visibility: visible;">
				<i class="mod_cover__icon_play js_play" data-stat="y_new.album_lib.album_play"></i>
			</a>
		</div>
		<h4 class="playlist__title">
			<span class="playlist__title_txt">
				<a href="https://y.qq.com/n/yqq/album/0045Zi3L4E0KRZ.html#stat=y_new.album_lib.album_name" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_name" data-albummid="0045Zi3L4E0KRZ" title="只想对你说">只想对你说</a>
			</span>
		</h4>
		
		
		<div class="playlist__author" title="Vaniah维">
			
				
				
				<a href="https://y.qq.com/n/yqq/singer/003R6z7y3QiyFh.html" class="js_singer" data-singermid="003R6z7y3QiyFh">Vaniah维</a>
				
			
		</div>
		<div class="playlist__other">
			2021-02-15
		</div>
		<a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-type="2" data-mid="0045Zi3L4E0KRZ" data-stat="y_new.album_lib.more">
			<span class="icon_txt">更多</span>
		</a>
	</div>
</li>

<li class="playlist__item" data-albummid="0017frPK3THUo8" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
	<div class="playlist__item_box">
		<div class="playlist__cover mod_cover" style="visibility: visible;">
			<a href="https://y.qq.com/n/yqq/album/0017frPK3THUo8.html#stat=y_new.album_lib.album_pic" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_pic" data-albummid="0017frPK3THUo8">
				<img src="//y.gtimg.cn/music/photo_new/T002R300x300M0000017frPK3THUo8_1.jpg?max_age=2592000" data-original="//y.gtimg.cn/music/photo_new/T002R300x300M0000017frPK3THUo8_1.jpg?max_age=2592000" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;" alt="后来才知道" class="playlist__pic" style="display: block; visibility: visible;">
				<i class="mod_cover__icon_play js_play" data-stat="y_new.album_lib.album_play"></i>
			</a>
		</div>
		<h4 class="playlist__title">
			<span class="playlist__title_txt">
				<a href="https://y.qq.com/n/yqq/album/0017frPK3THUo8.html#stat=y_new.album_lib.album_name" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_name" data-albummid="0017frPK3THUo8" title="后来才知道">后来才知道</a>
			</span>
		</h4>
		
		
		<div class="playlist__author" title="格桑措姆">
			
				
				
				<a href="https://y.qq.com/n/yqq/singer/002oNmFH4cQBzS.html" class="js_singer" data-singermid="002oNmFH4cQBzS">格桑措姆</a>
				
			
		</div>
		<div class="playlist__other">
			2021-02-15
		</div>
		<a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-type="2" data-mid="0017frPK3THUo8" data-stat="y_new.album_lib.more">
			<span class="icon_txt">更多</span>
		</a>
	</div>
</li>

<li class="playlist__item" data-albummid="001mp26T1lxePu" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
	<div class="playlist__item_box">
		<div class="playlist__cover mod_cover" style="visibility: visible;">
			<a href="https://y.qq.com/n/yqq/album/001mp26T1lxePu.html#stat=y_new.album_lib.album_pic" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_pic" data-albummid="001mp26T1lxePu">
				<img src="//y.gtimg.cn/music/photo_new/T002R300x300M000001mp26T1lxePu_1.jpg?max_age=2592000" data-original="//y.gtimg.cn/music/photo_new/T002R300x300M000001mp26T1lxePu_1.jpg?max_age=2592000" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;" alt="深海里的光" class="playlist__pic" style="display: block; visibility: visible;">
				<i class="mod_cover__icon_play js_play" data-stat="y_new.album_lib.album_play"></i>
			</a>
		</div>
		<h4 class="playlist__title">
			<span class="playlist__title_txt">
				<a href="https://y.qq.com/n/yqq/album/001mp26T1lxePu.html#stat=y_new.album_lib.album_name" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_name" data-albummid="001mp26T1lxePu" title="深海里的光">深海里的光</a>
			</span>
		</h4>
		
		
		<div class="playlist__author" title="伏仪">
			
				
				
				<a href="https://y.qq.com/n/yqq/singer/001z3A9h2JqVQH.html" class="js_singer" data-singermid="001z3A9h2JqVQH">伏仪</a>
				
			
		</div>
		<div class="playlist__other">
			2021-02-15
		</div>
		<a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-type="2" data-mid="001mp26T1lxePu" data-stat="y_new.album_lib.more">
			<span class="icon_txt">更多</span>
		</a>
	</div>
</li>

<li class="playlist__item" data-albummid="002IBFi53btp9J" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
	<div class="playlist__item_box">
		<div class="playlist__cover mod_cover" style="visibility: visible;">
			<a href="https://y.qq.com/n/yqq/album/002IBFi53btp9J.html#stat=y_new.album_lib.album_pic" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_pic" data-albummid="002IBFi53btp9J">
				<img src="//y.gtimg.cn/music/photo_new/T002R300x300M000002IBFi53btp9J_1.jpg?max_age=2592000" data-original="//y.gtimg.cn/music/photo_new/T002R300x300M000002IBFi53btp9J_1.jpg?max_age=2592000" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;" alt="经典咏流传第四季 第5期" class="playlist__pic" style="display: block; visibility: visible;">
				<i class="mod_cover__icon_play js_play" data-stat="y_new.album_lib.album_play"></i>
			</a>
		</div>
		<h4 class="playlist__title">
			<span class="playlist__title_txt">
				<a href="https://y.qq.com/n/yqq/album/002IBFi53btp9J.html#stat=y_new.album_lib.album_name" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_name" data-albummid="002IBFi53btp9J" title="经典咏流传第四季 第5期">经典咏流传第四季 第5期</a>
			</span>
		</h4>
		
		
		<div class="playlist__author" title="经典咏流传">
			
				
				
				<a href="https://y.qq.com/n/yqq/singer/004Z7Lqs3zt8hh.html" class="js_singer" data-singermid="004Z7Lqs3zt8hh">经典咏流传</a>
				
			
		</div>
		<div class="playlist__other">
			2021-02-14
		</div>
		<a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-type="2" data-mid="002IBFi53btp9J" data-stat="y_new.album_lib.more">
			<span class="icon_txt">更多</span>
		</a>
	</div>
</li>

<li class="playlist__item" data-albummid="003kMYZy1sietN" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
	<div class="playlist__item_box">
		<div class="playlist__cover mod_cover" style="visibility: visible;">
			<a href="https://y.qq.com/n/yqq/album/003kMYZy1sietN.html#stat=y_new.album_lib.album_pic" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_pic" data-albummid="003kMYZy1sietN">
				<img src="//y.gtimg.cn/music/photo_new/T002R300x300M000003kMYZy1sietN_1.jpg?max_age=2592000" data-original="//y.gtimg.cn/music/photo_new/T002R300x300M000003kMYZy1sietN_1.jpg?max_age=2592000" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;" alt="经典咏流传第四季 第5期（3D版）" class="playlist__pic" style="display: block; visibility: visible;">
				<i class="mod_cover__icon_play js_play" data-stat="y_new.album_lib.album_play"></i>
			</a>
		</div>
		<h4 class="playlist__title">
			<span class="playlist__title_txt">
				<a href="https://y.qq.com/n/yqq/album/003kMYZy1sietN.html#stat=y_new.album_lib.album_name" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_name" data-albummid="003kMYZy1sietN" title="经典咏流传第四季 第5期（3D版）">经典咏流传第四季 第5期（3D版）</a>
			</span>
		</h4>
		
		
		<div class="playlist__author" title="经典咏流传">
			
				
				
				<a href="https://y.qq.com/n/yqq/singer/004Z7Lqs3zt8hh.html" class="js_singer" data-singermid="004Z7Lqs3zt8hh">经典咏流传</a>
				
			
		</div>
		<div class="playlist__other">
			2021-02-14
		</div>
		<a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-type="2" data-mid="003kMYZy1sietN" data-stat="y_new.album_lib.more">
			<span class="icon_txt">更多</span>
		</a>
	</div>
</li>

<li class="playlist__item" data-albummid="002FAp5F1Przlj" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
	<div class="playlist__item_box">
		<div class="playlist__cover mod_cover" style="visibility: visible;">
			<a href="https://y.qq.com/n/yqq/album/002FAp5F1Przlj.html#stat=y_new.album_lib.album_pic" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_pic" data-albummid="002FAp5F1Przlj">
				<img src="//y.gtimg.cn/music/photo_new/T002R300x300M000002FAp5F1Przlj_1.jpg?max_age=2592000" data-original="//y.gtimg.cn/music/photo_new/T002R300x300M000002FAp5F1Przlj_1.jpg?max_age=2592000" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;" alt="黑马" class="playlist__pic" style="display: block; visibility: visible;">
				<i class="mod_cover__icon_play js_play" data-stat="y_new.album_lib.album_play"></i>
			</a>
		</div>
		<h4 class="playlist__title">
			<span class="playlist__title_txt">
				<a href="https://y.qq.com/n/yqq/album/002FAp5F1Przlj.html#stat=y_new.album_lib.album_name" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_name" data-albummid="002FAp5F1Przlj" title="黑马">黑马</a>
			</span>
		</h4>
		
		
		<div class="playlist__author" title="马思唯">
			
				
				
				<a href="https://y.qq.com/n/yqq/singer/004YErTX4RYTgl.html" class="js_singer" data-singermid="004YErTX4RYTgl">马思唯</a>
				
			
		</div>
		<div class="playlist__other">
			2021-02-14
		</div>
		<a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-type="2" data-mid="002FAp5F1Przlj" data-stat="y_new.album_lib.more">
			<span class="icon_txt">更多</span>
		</a>
	</div>
</li>

<li class="playlist__item" data-albummid="0009xssS41Hy3U" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
	<div class="playlist__item_box">
		<div class="playlist__cover mod_cover" style="visibility: visible;">
			<a href="https://y.qq.com/n/yqq/album/0009xssS41Hy3U.html#stat=y_new.album_lib.album_pic" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_pic" data-albummid="0009xssS41Hy3U">
				<img src="//y.gtimg.cn/music/photo_new/T002R300x300M0000009xssS41Hy3U_1.jpg?max_age=2592000" data-original="//y.gtimg.cn/music/photo_new/T002R300x300M0000009xssS41Hy3U_1.jpg?max_age=2592000" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;" alt="Season for Love" class="playlist__pic" style="display: block; visibility: visible;">
				<i class="mod_cover__icon_play js_play" data-stat="y_new.album_lib.album_play"></i>
			</a>
		</div>
		<h4 class="playlist__title">
			<span class="playlist__title_txt">
				<a href="https://y.qq.com/n/yqq/album/0009xssS41Hy3U.html#stat=y_new.album_lib.album_name" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_name" data-albummid="0009xssS41Hy3U" title="Season for Love">Season for Love</a>
			</span>
		</h4>
		
		
		<div class="playlist__author" title="汪苏泷 / Lenka">
			
				
				
				<a href="https://y.qq.com/n/yqq/singer/001z2JmX09LLgL.html" class="js_singer" data-singermid="001z2JmX09LLgL">汪苏泷</a>
				
				/
				<a href="https://y.qq.com/n/yqq/singer/001YBQ2f1IVTe2.html" class="js_singer" data-singermid="001YBQ2f1IVTe2">Lenka</a>
				
			
		</div>
		<div class="playlist__other">
			2021-02-14
		</div>
		<a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-type="2" data-mid="0009xssS41Hy3U" data-stat="y_new.album_lib.more">
			<span class="icon_txt">更多</span>
		</a>
	</div>
</li>

<li class="playlist__item" data-albummid="0035hMp81Fj1PT" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
	<div class="playlist__item_box">
		<div class="playlist__cover mod_cover" style="visibility: visible;">
			<a href="https://y.qq.com/n/yqq/album/0035hMp81Fj1PT.html#stat=y_new.album_lib.album_pic" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_pic" data-albummid="0035hMp81Fj1PT">
				<img src="//y.gtimg.cn/music/photo_new/T002R300x300M0000035hMp81Fj1PT_1.jpg?max_age=2592000" data-original="//y.gtimg.cn/music/photo_new/T002R300x300M0000035hMp81Fj1PT_1.jpg?max_age=2592000" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;" alt="Real love" class="playlist__pic" style="display: block; visibility: visible;">
				<i class="mod_cover__icon_play js_play" data-stat="y_new.album_lib.album_play"></i>
			</a>
		</div>
		<h4 class="playlist__title">
			<span class="playlist__title_txt">
				<a href="https://y.qq.com/n/yqq/album/0035hMp81Fj1PT.html#stat=y_new.album_lib.album_name" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_name" data-albummid="0035hMp81Fj1PT" title="Real love">Real love</a>
			</span>
		</h4>
		
		
		<div class="playlist__author" title="洛天依">
			
				
				
				<a href="https://y.qq.com/n/yqq/singer/003ktdcg3E4kaG.html" class="js_singer" data-singermid="003ktdcg3E4kaG">洛天依</a>
				
			
		</div>
		<div class="playlist__other">
			2021-02-14
		</div>
		<a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-type="2" data-mid="0035hMp81Fj1PT" data-stat="y_new.album_lib.more">
			<span class="icon_txt">更多</span>
		</a>
	</div>
</li>

<li class="playlist__item" data-albummid="000w8hMp4OZtLM" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
	<div class="playlist__item_box">
		<div class="playlist__cover mod_cover" style="visibility: visible;">
			<a href="https://y.qq.com/n/yqq/album/000w8hMp4OZtLM.html#stat=y_new.album_lib.album_pic" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_pic" data-albummid="000w8hMp4OZtLM">
				<img src="//y.gtimg.cn/music/photo_new/T002R300x300M000000w8hMp4OZtLM_1.jpg?max_age=2592000" data-original="//y.gtimg.cn/music/photo_new/T002R300x300M000000w8hMp4OZtLM_1.jpg?max_age=2592000" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;" alt="气象站台" class="playlist__pic" style="display: block; visibility: visible;">
				<i class="mod_cover__icon_play js_play" data-stat="y_new.album_lib.album_play"></i>
			</a>
		</div>
		<h4 class="playlist__title">
			<span class="playlist__title_txt">
				<a href="https://y.qq.com/n/yqq/album/000w8hMp4OZtLM.html#stat=y_new.album_lib.album_name" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_name" data-albummid="000w8hMp4OZtLM" title="气象站台">气象站台</a>
			</span>
		</h4>
		
		
		<div class="playlist__author" title="Uu">
			
				
				
				<a href="https://y.qq.com/n/yqq/singer/003yGiqM2qF7Gm.html" class="js_singer" data-singermid="003yGiqM2qF7Gm">Uu</a>
				
			
		</div>
		<div class="playlist__other">
			2021-02-14
		</div>
		<a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-type="2" data-mid="000w8hMp4OZtLM" data-stat="y_new.album_lib.more">
			<span class="icon_txt">更多</span>
		</a>
	</div>
</li>

<li class="playlist__item" data-albummid="000TvNju2yH2e5" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
	<div class="playlist__item_box">
		<div class="playlist__cover mod_cover" style="visibility: visible;">
			<a href="https://y.qq.com/n/yqq/album/000TvNju2yH2e5.html#stat=y_new.album_lib.album_pic" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_pic" data-albummid="000TvNju2yH2e5">
				<img src="//y.gtimg.cn/music/photo_new/T002R300x300M000000TvNju2yH2e5_1.jpg?max_age=2592000" data-original="//y.gtimg.cn/music/photo_new/T002R300x300M000000TvNju2yH2e5_1.jpg?max_age=2592000" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;" alt="致命危险" class="playlist__pic" style="display: block; visibility: visible;">
				<i class="mod_cover__icon_play js_play" data-stat="y_new.album_lib.album_play"></i>
			</a>
		</div>
		<h4 class="playlist__title">
			<span class="playlist__title_txt">
				<a href="https://y.qq.com/n/yqq/album/000TvNju2yH2e5.html#stat=y_new.album_lib.album_name" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_name" data-albummid="000TvNju2yH2e5" title="致命危险">致命危险</a>
			</span>
		</h4>
		
		
		<div class="playlist__author" title="王者荣耀 / 余佳运 / 张钰琪">
			
				
				
				<a href="https://y.qq.com/n/yqq/singer/002KASw53FQbTK.html" class="js_singer" data-singermid="002KASw53FQbTK">王者荣耀</a>
				
				/
				<a href="https://y.qq.com/n/yqq/singer/001PZ4z50dbbDo.html" class="js_singer" data-singermid="001PZ4z50dbbDo">余佳运</a>
				
				/
				<a href="https://y.qq.com/n/yqq/singer/0028F2cT0zWp5a.html" class="js_singer" data-singermid="0028F2cT0zWp5a">张钰琪</a>
				
			
		</div>
		<div class="playlist__other">
			2021-02-14
		</div>
		<a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-type="2" data-mid="000TvNju2yH2e5" data-stat="y_new.album_lib.more">
			<span class="icon_txt">更多</span>
		</a>
	</div>
</li>

<li class="playlist__item" data-albummid="000JOLuP2dXjB8" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
	<div class="playlist__item_box">
		<div class="playlist__cover mod_cover" style="visibility: visible;">
			<a href="https://y.qq.com/n/yqq/album/000JOLuP2dXjB8.html#stat=y_new.album_lib.album_pic" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_pic" data-albummid="000JOLuP2dXjB8">
				<img src="//y.gtimg.cn/music/photo_new/T002R300x300M000000JOLuP2dXjB8_1.jpg?max_age=2592000" data-original="//y.gtimg.cn/music/photo_new/T002R300x300M000000JOLuP2dXjB8_1.jpg?max_age=2592000" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;" alt="相信我" class="playlist__pic" style="display: block; visibility: visible;">
				<i class="mod_cover__icon_play js_play" data-stat="y_new.album_lib.album_play"></i>
			</a>
		</div>
		<h4 class="playlist__title">
			<span class="playlist__title_txt">
				<a href="https://y.qq.com/n/yqq/album/000JOLuP2dXjB8.html#stat=y_new.album_lib.album_name" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_name" data-albummid="000JOLuP2dXjB8" title="相信我">相信我</a>
			</span>
		</h4>
		
		
		<div class="playlist__author" title="ONER">
			
				
				
				<a href="https://y.qq.com/n/yqq/singer/001O93tk2nlY9T.html" class="js_singer" data-singermid="001O93tk2nlY9T">ONER</a>
				
			
		</div>
		<div class="playlist__other">
			2021-02-14
		</div>
		<a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-type="2" data-mid="000JOLuP2dXjB8" data-stat="y_new.album_lib.more">
			<span class="icon_txt">更多</span>
		</a>
	</div>
</li>

<li class="playlist__item" data-albummid="001RLwn40Uwp39" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
	<div class="playlist__item_box">
		<div class="playlist__cover mod_cover" style="visibility: visible;">
			<a href="https://y.qq.com/n/yqq/album/001RLwn40Uwp39.html#stat=y_new.album_lib.album_pic" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_pic" data-albummid="001RLwn40Uwp39">
				<img src="//y.gtimg.cn/music/photo_new/T002R300x300M000001RLwn40Uwp39_1.jpg?max_age=2592000" data-original="//y.gtimg.cn/music/photo_new/T002R300x300M000001RLwn40Uwp39_1.jpg?max_age=2592000" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;" alt="与君相依" class="playlist__pic" style="display: block; visibility: visible;">
				<i class="mod_cover__icon_play js_play" data-stat="y_new.album_lib.album_play"></i>
			</a>
		</div>
		<h4 class="playlist__title">
			<span class="playlist__title_txt">
				<a href="https://y.qq.com/n/yqq/album/001RLwn40Uwp39.html#stat=y_new.album_lib.album_name" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_name" data-albummid="001RLwn40Uwp39" title="与君相依">与君相依</a>
			</span>
		</h4>
		
		
		<div class="playlist__author" title="等什么君">
			
				
				
				<a href="https://y.qq.com/n/yqq/singer/001B2drs3Jq4EX.html" class="js_singer" data-singermid="001B2drs3Jq4EX">等什么君</a>
				
			
		</div>
		<div class="playlist__other">
			2021-02-14
		</div>
		<a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-type="2" data-mid="001RLwn40Uwp39" data-stat="y_new.album_lib.more">
			<span class="icon_txt">更多</span>
		</a>
	</div>
</li>

<li class="playlist__item" data-albummid="003wvcif1mplbC" onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
	<div class="playlist__item_box">
		<div class="playlist__cover mod_cover" style="visibility: visible;">
			<a href="https://y.qq.com/n/yqq/album/003wvcif1mplbC.html#stat=y_new.album_lib.album_pic" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_pic" data-albummid="003wvcif1mplbC">
				<img src="//y.gtimg.cn/music/photo_new/T002R300x300M000003wvcif1mplbC_1.jpg?max_age=2592000" data-original="//y.gtimg.cn/music/photo_new/T002R300x300M000003wvcif1mplbC_1.jpg?max_age=2592000" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;" alt="没有海的时候我们怎么游泳" class="playlist__pic" style="display: block; visibility: visible;">
				<i class="mod_cover__icon_play js_play" data-stat="y_new.album_lib.album_play"></i>
			</a>
		</div>
		<h4 class="playlist__title">
			<span class="playlist__title_txt">
				<a href="https://y.qq.com/n/yqq/album/003wvcif1mplbC.html#stat=y_new.album_lib.album_name" onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album" data-stat="y_new.album_lib.album_name" data-albummid="003wvcif1mplbC" title="没有海的时候我们怎么游泳">没有海的时候我们怎么游泳</a>
			</span>
		</h4>
		
		
		<div class="playlist__author" title="电气樱桃">
			
				
				
				<a href="https://y.qq.com/n/yqq/singer/000nOE7c4G5A3c.html" class="js_singer" data-singermid="000nOE7c4G5A3c">电气樱桃</a>
				
			
		</div>
		<div class="playlist__other">
			2021-02-14
		</div>
		<a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-type="2" data-mid="003wvcif1mplbC" data-stat="y_new.album_lib.more">
			<span class="icon_txt">更多</span>
		</a>
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
/*组件*/
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

/*总体*/
.main, .section_inner {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
}
.main {
    z-index: 2;
}

/*导航条*/
.mod_tag {
    position: relative;
    margin: 52px 0 0;
}
.tag__list {
    position: relative;
    height: auto;
    zoom: 1;
    clear: both;
    overflow: hidden;
    line-height: 26px;
    padding-left: 65px;
}
.tag__item--expand, .tag__item--expand:hover, .tag__item--select, .tag__item--select:hover {
    background-color: #31c27c;
    color: #fff;
}
.tag__item {
    float: left;
    padding: 0 8px;
    margin: 0 24px 15px 0;
}

/*下*/
.mod_part, .mod_part_detail {
    position: relative;
    margin-bottom: 30px;
}
.mod_playlist {
    overflow: hidden;
    font-size: 0;
}
.mod_playlist .playlist__list {
    margin-right: -20px;
}
blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, html, input, lengend, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
}
.mod_playlist .playlist__item {
    display: inline-block;
    width: 20%;
    padding-bottom: 44px;
    overflow: hidden;
    font-size: 14px;
    vertical-align: top;
}
.mod_playlist .playlist__item_box {
    position: relative;
    margin-right: 20px;
    text-align: left;
    margin-top: -200px;
}
.mod_playlist .playlist__cover {
    position: relative;
    display: block;
    overflow: hidden;
    padding-top: 100%;
    margin-bottom: 15px;
}
.mod_playlist .playlist__title {
    overflow: hidden;
}
h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
}
.mod_playlist .playlist__author, .mod_playlist .playlist__author a, .mod_playlist .playlist__other {
    color: #999;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 22px;
}
img.playlist__pic
{
    display: block;
    visibility: visible;
    width: 250px;
}
</style>

