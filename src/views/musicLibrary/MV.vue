<template>
  <div class="mod_slide_box" style="position: relative">
    <div class="main" v-loading="mvLoading">
      <type-select-bar>
        <type-select-sub-bar
          :selectId="selectArea"
          :items="areas"
          @selectId="areaSelect"
        />
        <type-select-sub-bar
          :selectId="selectType"
          :items="types"
          @selectId="typeSelect"
        />
      </type-select-bar>

      <div class="mod_part_detail">
        <div class="part_detail__hd">
          <h2 class="part_detail__tit">全部MV</h2>
          <div class="part_switch">
            <a
              class="part_switch__item part_switch__item--left"
              :class="{ part_switch__item__select: order == orders.NEW.dataId }"
              @click="switchOrder(orders.NEW.dataId)"
              >{{ orders.NEW.name }}</a
            >
            <a
              class="part_switch__item part_switch__item--right"
              :class="{ part_switch__item__select: order == orders.HOT.dataId }"
              @click="switchOrder(orders.HOT.dataId)"
              >{{ orders.HOT.name }}</a
            >
          </div>
        </div>
        <div
          class="mod_mv"
          id="mv_list_div"
          ref="mvList"
          style="max-height: 700px; overflow-y: scroll"
        >
          <ul class="mv_list__list" id="mv_list" style="overflow: auto">
            <li class="mv_list__item" v-for="item in mvs" :key="item.id">
              <div class="mv_list__item_box" style="visibility: visible">
                <a
                  class="mv_list__cover mod_cover"
                  :title="item.name"
                  hidefocus="true"
                  @click="gotoMvDetail(item.id)"
                >
                  <img
                    style="display: block; visibility: visible"
                    class="mv_list__pic"
                    src="//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000"
                    v-lazy="item.cover"
                    :alt="item.name"
                  />
                  <i class="mod_cover__icon_play"></i>
                </a>
                <h3 class="mv_list__title">
                  <a :title="item.name" @click="gotoMvDetail(item.id)">{{
                    item.name
                  }}</a>
                </h3>
                <div class="mv_list__singer">
                  <a :title="item.artistName">{{ item.artistName }}</a>
                </div>
                <div class="mv_list__info">
                  <span class="mv_list__listen">
                    <i class="mv_list__listen_icon sprite"></i
                    >{{ processCount(item.playCount) }}
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <div
            style="text-align: center; color: #999"
            :style="{ display: more ? 'none' : '' }"
          >
            <span>我也是有底线的~</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TypeSelectBar from "components/common/TypeSelectBar";
import TypeSelectSubBar from "components/common/TypeSelectSubBar";
import { getAllMV, mvArea, mvOrder, mvType } from "api";
import { processCount, gotoMvDetail } from "common/utils";

export default {
  data() {
    return {
      mvLoading: true,
      limit: 20,
      page: 1,
      allLength: 0,
      more: true,
      order: mvOrder.NEW.dataId,
      orders: mvOrder,
      selectArea: mvArea.ALL.dataId,
      areas: mvArea,
      selectType: mvType.ALL.dataId,
      types: mvType,
      mvs: [],
    };
  },
  mounted() {
    this.initMv();
    this.$refs.mvList.addEventListener("scroll", this.loadMore);
  },
  methods: {
    async getMv() {
      let res;
      try {
        res = await getAllMV(
          this.limit,
          this.page,
          this.order,
          this.selectArea,
          this.selectType
        );
      } catch (e) {
        console.log(e);
      }
      this.mvLoading = false;
      this.allLength = res.data.count;
      this.more = res.data.hasMore;
      return res.data.data;
    },
    async initMv() {
      let mvs = await this.getMv();
      this.mvs = mvs;
    },
    async updateMv() {
      let mvs = await this.getMv();
      this.mvs.push(...mvs);
    },
    areaSelect(id) {
      this.selectArea = id;
      this.page = 1;
      this.initMv();
    },
    typeSelect(id) {
      this.selectType = id;
      this.page = 1;
      this.initMv();
    },
    switchOrder(id) {
      this.order = id;
      this.page = 1;
      this.initMv();
    },
    loadMore() {
      const scrollDom = document.getElementById("mv_list_div");
      if (
        scrollDom.clientHeight + parseInt(scrollDom.scrollTop) ===
        scrollDom.scrollHeight
      ) {
        if (this.more) {
          this.page++;
          this.updateMv();
        }
      }
    },
    processCount,
    gotoMvDetail,
  },
  components: {
    TypeSelectBar,
    TypeSelectSubBar,
  },
};
</script>

<style scoped>
li,
ul {
  margin: 0;
  padding: 0;
}

.mv_list__item {
  padding-bottom: 44px;
}
</style>
