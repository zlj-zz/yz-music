<template>
<div class="mod_slide_box" style="position: relative;">
  <div class="main" style="z-index: 2" v-loading="mvLoading">
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

  <div class="mod_slide_action">
    <div class="slide_action slide_action--left">
        <a 
          href="javascript:;" 
          class="slide_action__btn slide_action__btn--left js_jump" 
          data-p="prev" 
          tabindex="-1" 
          @click="prevPage()">
            <i class="icon_txt">上一页</i><i class="slide_action__arrow slide_action__arrow--left sprite"></i>
          </a>
    </div>
    <div class="slide_action slide_action--right">
        <a 
          href="javascript:;" 
          class="slide_action__btn slide_action__btn--right js_jump" 
          data-p="next" 
          tabindex="-1" 
          @click="nextPage()">
          <i class="icon_txt">下一页</i><i class="slide_action__arrow slide_action__arrow--right sprite"></i>
        </a>
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
      more: true,
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
    },
    nextPage() {
      if (this.more == true) {
        this.page++;
        this.updateMv();
      }
    },
    prevPage() {
      if (this.page > 1){
        this.page--;
        this.updateMv();
      }
    },
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

.mv_list__item {
  padding-bottom: 44px;
}
</style>
