<template>
  <div
    class="mod_popup_tips"
    id="popup"
    style="z-index: 2147483647; left: 646px; top: 326px"
    :style="{ display: ifShow ? '' : 'none' }"
  >
    <i :class="processIcon()"></i>
    <h2 class="popup_tips__tit">{{ tip }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    ifShow: {
      default: false,
    },
    tip: {
      type: String,
      default: "",
    },
    // 0: tip, 1: warn
    iconType: { default: 0 },
  },
  methods: {
    processIcon() {
      switch (this.iconType) {
        case 0:
          return "popup_tips__icon";
          break;
        case 1:
          return "popup_tips__icon_warn";
          break;
        default:
          return "";
      }
    },
  },
};
</script>
