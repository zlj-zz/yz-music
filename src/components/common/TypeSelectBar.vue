<script>
import { h } from "vue";

export default {
  render() {
    return h(
      "div",
      {
        class: "mod_singer_tag",
        id: "tag_box",
      },
      this.$slots.default()
    );
  },
};
</script>
