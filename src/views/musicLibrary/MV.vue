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
          <h2 class="part_detail__tit js_lib_title">全部MV</h2>
          <div class="part_switch">
            <a
              class="part_switch__item part_switch__item--left"
              :class="
                order == orders.NEW.dataId ? 'part_switch__item--select' : ''
              "
              @click="switchOrder(orders.NEW.dataId)"
              >{{ orders.NEW.name }}</a
            >
            <a
              class="part_switch__item part_switch__item--right"
              :class="
                order == orders.HOT.dataId ? 'part_switch__item--select' : ''
              "
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
                  class="mv_list__cover mod_cover js_mv"
                  :title="item.name"
                  hidefocus="true"
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
                  <a href="javascript:;" class="js_mv" :title="item.name">{{
                    item.name
                  }}</a>
                </h3>
                <div class="mv_list__singer" title="5AM">
                  <a class="js_singer" :title="item.artistName">{{
                    item.artistName
                  }}</a>
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
import { processCount } from "common/utils";

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
    this.updateMv();
    this.$refs.mvList.addEventListener("scroll", this.loadMore);
  },
  methods: {
    updateMv() {
      getAllMV(
        this.limit,
        this.page,
        this.order,
        this.selectArea,
        this.selectType
      )
        .then((res) => {
          //console.log(res);
          this.mvs.push(...res.data.data);
          this.mvLoading = false;
          this.allLength = res.data.count;
          this.more = res.data.hasMore;
        })
        .catch((err) => console.log(err));
    },
    areaSelect(id) {
      this.selectArea = id;
      this.page = 1;
      this.updateMv();
    },
    typeSelect(id) {
      this.selectType = id;
      this.page = 1;
      this.updateMv();
    },
    switchOrder(id) {
      this.order = id;
      this.page = 1;
      this.updateMv();
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
