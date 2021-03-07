<template>
  <div class="mod_data">
    <!-- avator -->
    <span class="data__cover" id="logo">
      <!-- 头像 S-->
      <img
        class="data__photo"
        onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;"
        :src="avatar_url"
        :alt="alt"
        :class="{ songer__photo: circular }"
      />
      <i class="data__cover_mask" v-if="mask"></i>
    </span>
    <div class="data__cont">
      <slot name="name">
        <!-- 名字 （非歌手）-->
        <div class="data__name">
          <h1 id="p_name_show" class="data__name_txt" :title="name">
            {{ name }}
          </h1>
        </div>
      </slot>

      <slot name="info"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar_url: {
      type: String,
      default:
        "//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000",
    },
    alt: {
      type: String,
      default: "avatar",
    },
    circular: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
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
</style>
