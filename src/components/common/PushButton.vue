<template>
  <div class="mod_slide_action">
    <div class="slide_action slide_action--left">
      <a
        class="slide_action__btn slide_action__btn--left js_jump"
        data-p="prev"
        tabindex="-1"
        @click="btnClick('left')"
      >
        <i class="icon_txt">上一页</i
        ><i class="slide_action__arrow slide_action__arrow--left sprite"></i>
      </a>
    </div>
    <div class="slide_action slide_action--right">
      <a
        class="slide_action__btn slide_action__btn--right js_jump"
        data-p="next"
        tabindex="-1"
        @click="btnClick('right')"
      >
        <i class="icon_txt">下一页</i
        ><i class="slide_action__arrow slide_action__arrow--right sprite"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btnClick(key) {
      this.$emit("btnClick", key);
    },
  },
};
</script>
