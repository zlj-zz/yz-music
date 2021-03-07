<template>
  <!-- 是歌手 -->
  <div class="data__singer">
    <i class="icon_singer sprite"></i>
    <a class="data__singer_txt" :title="name">{{ name }}</a>
  </div>
  <!-- 名字 end -->

  <!-- 描述信息 (仅歌手) -->
  <div class="data__desc" id="singer_desc">
    <div class="data__desc_txt" id="short_desc">
      {{ desc }}
    </div>
    <a @click="moreClick">[更多]</a>
  </div>

  <!-- (is songer) -->
  <ul class="mod_data_statistic">
    <li class="data_statistic__item">
      <a>
        <span class="data_statistic__tit">单曲</span>
        <strong class="data_statistic__number">{{ songSize }}</strong>
      </a>
    </li>

    <li class="data_statistic__item">
      <a>
        <span class="data_statistic__tit">专辑</span>
        <strong class="data_statistic__number">{{ albumSize }}</strong>
      </a>
    </li>

    <li class="data_statistic__item data_statistic__item--last">
      <a>
        <span class="data_statistic__tit">MV</span>
        <strong class="data_statistic__number">{{ mvSize }}</strong>
      </a>
    </li>
  </ul>
  <!-- Other Info end -->
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "该歌手还没有详细描述...",
    },
    songSize: { default: 0 },
    albumSize: { default: 0 },
    mvSize: { default: 0 },
  },
  methods: {
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
