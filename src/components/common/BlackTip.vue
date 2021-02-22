<template>
  <div
    class="mod_popup_tips"
    id="popup"
    style="z-index: 2147483647; left: 646px; top: 326px"
    :style="{ display: ifShow ? '' : 'none' }"
  >
    <i class="popup_tips__icon"></i>
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
  },
};
</script>
