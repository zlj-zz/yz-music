<template>
  <div class="singer_tag__list js_index">
    <a
      href="javascript:;"
      class="singer_tag__item"
      v-for="(item, key) in items"
      :key="key"
      :data-id="item.dataId"
      :class="
        item.dataId == selectId
          ? 'singer_tag__item--all singer_tag__item--select'
          : ''
      "
      @click="selectClick(item.dataId)"
      >{{ item.name }}</a
    >
  </div>
</template>

<script>
export default {
  props: {
    selectId: {},
    items: {
      type: Object,
    },
  },
  methods: {
    selectClick(id) {
      if (id != this.selectId) {
        this.$emit("selectId", id);
      }
    },
  },
};
</script>

<style scoped>
.singer_tag__list {
  padding-bottom: 3px;
  height: auto;
  clear: both;
  overflow: hidden;
}

.singer_tag__item--select,
.singer_tag__item--select:hover {
  background-color: #31c27c;
  color: #fff;
}

.singer_tag__item--all {
  margin-right: 28px;
}

.singer_tag__item {
  height: 26px;
  line-height: 27px;
  overflow: hidden;
  float: left;
  padding: 0 8px;
  margin: 0 12px 14px 0;
  margin-right: 12px;
}
</style>
