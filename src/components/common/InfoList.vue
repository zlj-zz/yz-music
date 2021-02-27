<template>
  <div class="mod_part" id="similar" style="">
    <div class="part__hd">
      <h2 class="part__tit">{{ title }}</h2>
    </div>
    <div class="mod_singer_list">
      <ul class="singer_list__list">
        <li class="singer_list__item" v-for="songer in items" :key="songer.id">
          <div class="singer_list__item_box">
            <a
              class="singer_list__cover js_singer"
              hidefocus="true"
              :title="songer.name"
              @click="btnClick(songer)"
            >
              <img
                class="singer_list__pic"
                src="//y.gtimg.cn/mediastyle/global/img/singer_300.png?max_age=31536000"
                v-lazy="songer.img"
                :alt="songer.name"
              />
            </a>
            <h3 class="singer_list__title">
              <a
                class="js_singer"
                :title="songer.name"
                @click="btnClick(songer)"
                >{{ songer.name }}</a
              >
            </h3>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "",
    },
    items: {
      type: Array,
      default: [],
    },
  },
  methods: {
    btnClick(item) {
      this.$emit("btnClick", item);
    },
  },
};
</script>

<style scoped>
a:hover {
  color: #31c27c;
}
ul,
li {
  margin: 0;
  padding: 0;
}
.mod_singer_list {
  overflow: hidden;
  text-align: center;
}
.singer_list__list {
  margin-right: -20px;
  overflow: hidden;
  zoom: 1;
  margin-bottom: -24px;
}

.singer_list__item {
  float: left;
  width: 20%;
  margin-bottom: 20px;
  overflow: hidden;
}
.singer_list__cover,
.singer_list__pic {
  float: none;
  display: block;
  width: 140px;
  height: 140px;
  border-radius: 126px;
}
</style>
