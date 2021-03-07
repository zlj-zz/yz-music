<template>
  <!-- Other Info (not songer) -->
  <ul class="data__info">
    <li class="data_info__item" v-for="(item, key) in infos" :key="key">
      <div v-if="item instanceof Array">
        <div class="data_tag_box">
          {{ key }}：<span id="choosebox1">
            <a class="data_info__tags" v-for="tag in item" :key="tag"
              >{{ tag }}
            </a>
          </span>
        </div>
      </div>
      <div v-else>
        {{ key }}: <a :title="item">{{ item }}</a>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    infos: {
      type: Object,
      default: {},
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
</style>
