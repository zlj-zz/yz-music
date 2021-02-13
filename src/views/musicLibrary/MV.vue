<template>
<div class="main" v-loading="mvLoading">
  <TypeSelectBar>
    <TypeSelectSubBar
      :selectId="selectArea"
      :items="areas"
      @selectId="areaSelect"/>
    <TypeSelectSubBar
      :selectId="selectType"
      :items="types"
      @selectId="typeSelect"/>
  </TypeSelectBar>

  <div class="mod_part_detail">
    <div class="part_detail__hd">
      <h2 class="part_detail__tit js_lib_title">全部MV</h2>
      <div class="part_switch" aria-label="排列方式">
          <a
            href="javascript:;"
            class="part_switch__item part_switch__item--left"
            :class="order == orders.NEW.dataId ? 'part_switch__item--select':''"
            @click="switchOrder(orders.NEW.dataId)">{{orders.NEW.name}}</a>
          <a
            href="javascript:;"
            class="part_switch__item part_switch__item--right"
            :class="order == orders.HOT.dataId ? 'part_switch__item--select':''"
            @click="switchOrder(orders.HOT.dataId)">{{orders.HOT.name}}</a>
      </div>
    </div>
    <div class="mod_mv">
      <ul class="mv_list__list" id="mv_list">

        <li
          class="mv_list__item" 
          v-for="item in mvs" :key='item.id'>
          <div class="mv_list__item_box" style="visibility: visible;">
            <a href="javascript:;" class="mv_list__cover mod_cover js_mv" :title="item.name" hidefocus="true">
              <img
                style="display: block; visibility: visible;"
                class="mv_list__pic"
                :src="item.cover"
                :alt="item.name">
              <i class="mod_cover__icon_play"></i>
            </a>
            <h3 class="mv_list__title">
              <a href="javascript:;" class="js_mv" :title="item.name">{{item.name}}</a>
            </h3>
            <div class="mv_list__singer" title="5AM">
              <a href="javascript:;" class="js_singer" :title="item.artistName">{{item.artistName}}</a>
            </div>
            <div class="mv_list__info">
              <span class="mv_list__listen">
                <i class="mv_list__listen_icon sprite"></i>{{processCount(item.playCount)}}
              </span>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div> 


</div>
</template>

<script>
import { getAllMV, mvArea, mvOrder, mvType } from 'api';
import { processCount } from "common/utils";
import TypeSelectBar from 'components/common/TypeSelectBar';
import TypeSelectSubBar from 'components/common/TypeSelectSubBar';

export default {
  data() {
    return {
      mvLoading: true,
      page: 1,
      order: mvOrder.NEW.dataId,
      orders: mvOrder,
      selectArea: mvArea.ALL.dataId,
      areas:mvArea,
      selectType: mvType.ALL.dataId,
      types: mvType,
      mvs: []
    };
  },
  mounted() {
    this.updateMv()
  },
  methods: {
    updateMv() {
      let limit = 20;
      getAllMV(limit, this.page, this.order, this.selectArea, this.selectType).then(res =>{
            console.log(res)
            this.mvs = res.data.data
            this.mvLoading = false
          }).catch(err => console.log(err));
    },
    areaSelect(id) {
      this.selectArea=id
      this.updateMv()
    },
    typeSelect(id) {
      this.selectType=id
      this.updateMv()
    },
    switchOrder(id) {
      this.order = id
      this.updateMv()
    },
    processCount(count) {
      return processCount(count)
    }
  },
  components: {
    TypeSelectBar,
    TypeSelectSubBar
  }
}
</script>

<style scoped>
.main,
.section_inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  position: relative;
  text-align: left;
  line-height: 1.5;
  font-size: 14px;
}
blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, html, input, lengend, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
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
.part_switch__item {
    display: inline-block;
    padding: 0 16px;
    height: 38px;
    position: relative;
    font-size: 14px;
    border-width: 1px;
    border-style: solid;
}
.part_switch__item--left {
    right: -1px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    border-color: #c9c9c9;
}
.part_switch__item--right {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-color: #c9c9c9;
}
.part_switch__item--select, .part_switch__item--select:hover {
    background-color: #31c27c;
    color: #fff;
    border-color: #31c27c;
    z-index: 2;
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
}

.mv_list__list {
    margin-right: -20px;
    zoom: 1;
}
.mv_list__item {
    float: left;
    width: 25%;
    padding-bottom: 44px;
    overflow: hidden;
}
.mv_list__item_box {
    position: relative;
    margin-right: 20px;
}
.mv_list__cover {
    position: relative;
    display: block;
    overflow: hidden;
    padding-top: 56.5476%;
    margin-bottom: 15px;
}
.mv_list__pic {
    transform: scale(1);
    transition: transform .75s;
}
.mv_list__pic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
img {
    border: 0 none;
    image-rendering: optimizeQuality;
}
.mv_list__desc, .mv_list__singer, .mv_list__title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.mv_list__title {
    font-weight: 400;
    zoom: 1;
}
.mv_list__desc, .mv_list__info, .mv_list__singer, .mv_list__singer a {
    color: #999;
}
.mv_list__singer {
    height: 24px;
    line-height: 1.5;
}
.mv_list__desc, .mv_list__singer, .mv_list__title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    line-height: 1.5;
    font-family: poppin,Tahoma,Arial,微软雅黑,sans-serif;
}
.mv_list__desc, .mv_list__info, .mv_list__singer, .mv_list__singer a {
    color: #999;
}
.mv_list__info {
    line-height: 18px;
    height: 20px;
}
.mv_list__listen {
    margin-right: 10px;
}
.mv_list__listen_icon {
    display: inline-block;
    width: 19px;
    height: 12px;
    background-position: -180px -20px;
    margin-right: 5px;
    vertical-align: -1px;
}
.sprite, .sprite_before::before {
    background-image: url(https://y.gtimg.cn/mediastyle/yqq/img/icon_sprite.png?max_age=2592000&v=85678e8f28c7b4bcad5c209b21b7e3b3);
}

</style>
