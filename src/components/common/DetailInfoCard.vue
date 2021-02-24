<template>
  <div class="mod_data">
    <span class="data__cover" id="logo">
      <!-- 头像 S-->
      <img
        class="data__photo"
        onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;"
        :src="obj.img"
        :alt="obj.name"
        :class="cardType == 'songer' ? 'songer__photo' : ''"
      />
      <i class="data__cover_mask" v-if="cardType == 'album'"></i>
    </span>
    <div class="data__cont">
      <div class="data__name js_box">
        <h1 id="p_name_show" class="data__name_txt" :title="obj.name">
          {{ obj.name }}
        </h1>
      </div>
      <!-- 名字 -->
      <div class="data__singer" v-if="cardType != 'songer'">
        <i class="icon_singer sprite"></i>
        <a class="data__singer_txt" v-if="obj.creator" :title="obj.creator">{{
          obj.creator
        }}</a>
        <a
          class="data__singer_txt"
          v-if="obj.artistsText"
          :title="obj.artistsText"
          >{{ obj.artistsText }}</a
        >
      </div>
      <!-- 描述信息 -->
      <div class="data__desc" id="singer_desc" v-if="cardType == 'songer'">
        <div class="data__desc_txt" id="short_desc">
          {{ obj.desc }}
        </div>
        <a class="js_desc" @click="moreClick">[更多]</a>
      </div>
      <!-- Info -->
      <ul class="data__info" v-if="cardType != 'songer'">
        <li class="data_info__item js_box" style="display: ">
          <div class="data_tag_box" v-if="obj.tags">
            标签：<span id="choosebox1">
              <a
                class="data_info__tags js_jump"
                v-for="tag in obj.tags"
                :key="tag"
                >{{ tag }}
              </a>
            </span>
          </div>
        </li>
        <li class="data_info__item" v-if="obj.albumName">
          专辑：<a class="js_album" :title="obj.albumName">{{
            obj.albumName
          }}</a>
        </li>
        <li class="data_info__item" v-if="obj.type">分类：{{ obj.type }}</li>
        <li class="data_info__item" v-if="obj.version">
          类型：{{ obj.version }}
        </li>
        <li class="data_info__item" v-if="obj.durationText">
          时长：{{ obj.durationText }}
        </li>
        <!--li class="data_info__item">创建时间：2018-03-29</li-->
        <li class="data_info__item" v-if="obj.playCount">
          播放量：{{ obj.playCount }}
        </li>
        <li class="data_info__item" v-if="obj.shareCount">
          收藏量：{{ obj.subscribedCount }}
        </li>
        <li class="data_info__item" v-if="obj.shareCount">
          分享量：{{ obj.shareCount }}
        </li>
        <li class="data_info__item" v-if="obj.company">
          唱片公司：<span>{{ obj.company }}</span>
        </li>
        <li class="data_info__item" v-if="obj.publishTime">
          发行时间：{{ obj.publishTime }}
        </li>
      </ul>

      <ul class="mod_data_statistic" v-if="cardType == 'songer'">
        <li class="data_statistic__item">
          <a class="js_goto_tab">
            <span class="data_statistic__tit">单曲</span>
            <strong class="data_statistic__number">{{ obj.musicSize }}</strong>
          </a>
        </li>

        <li class="data_statistic__item">
          <a class="js_goto_tab">
            <span class="data_statistic__tit">专辑</span>
            <strong class="data_statistic__number">{{ obj.albumSize }}</strong>
          </a>
        </li>

        <li class="data_statistic__item data_statistic__item--last">
          <a class="js_goto_tab">
            <span class="data_statistic__tit">MV</span>
            <strong class="data_statistic__number">{{ obj.mvSize }}</strong>
          </a>
        </li>
      </ul>

      <div class="data__actions" v-if="cardType != 'songer'">
        <a class="mod_btn_green js_all_play" @click="btnClick('all')">
          <i class="mod_btn_green__icon_play"></i>
          {{ cardType == "song" ? "播放" : "播放全部" }}
        </a>
        <a class="mod_btn js_fav_taoge" @click="btnClick('collection')">
          <i
            class="mod_btn__icon_like"
            :class="obj.subscribed ? 'mod_btn__icon_like--like' : ''"
          ></i
          >收藏
        </a>
        <a
          class="mod_btn js_into_comment"
          href="#comment_box"
          @click="btnClick('comment')"
        >
          <i class="mod_btn__icon_comment"></i>评论({{ commentCount }})
        </a>
        <a
          class="mod_btn js_more"
          @click="btnClick('more')"
          style="display: none"
        >
          <i class="mod_btn__icon_menu"></i>更多
        </a>
      </div>
      <div class="data__actions" v-if="cardType == 'songer'">
        <a class="mod_btn_green js_singer_radio" @click="btnClick('hot')">
          <i class="mod_btn_green__icon_play"></i>播放歌手热门歌曲
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      default: {},
    },
    cardType: {
      type: String,
      default: "song",
    },
    commentCount: {
      default: 0,
    },
  },
  methods: {
    btnClick(v) {
      this.$emit("btnClick", v);
    },
    moreClick() {
      this.$emit("moreClick", true);
    },
  },
};
</script>

<style scoped>
li,
ul {
  margin: 0;
  margin-right: 0px;
  padding: 0;
}

.songer__photo {
  border-radius: 999px;
}

.data_statistic__item {
  display: inline-block;
  border-right: solid 1px #c9c9c9;
  text-align: center;
  padding-right: 20px;
  margin-right: 20px;
  font-size: 18px;
}
.data_statistic__item--last {
  border-right: 0 none;
}
</style>
