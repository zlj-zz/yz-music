<template>
  <div class="main">
    <info-list
      :title="关注列表"
      :items="followeds"
      v-if="followeds.length > 0"
    />
    <el-empty description="还没有粉丝..." v-else></el-empty>
  </div>
</template>

<script>
import InfoList from "components/common/InfoList";
import { followedsList } from "api";
import { createUsers } from "common/utils";

export default {
  data() {
    return {
      lasttime: -1,
      followeds: [],
    };
  },
  created() {
    this.getFans();
  },
  methods: {
    getFans() {
      let params = {
        uid: this.id,
        lasttime: this.lasttime,
      };
      followedsList(params).then((res) => {
        //console.log(res);
        this.followeds = createUsers(res.data.followeds);
      });
    },
  },
  computed: {
    id() {
      return this.$store.state.user.user.userId;
    },
  },
  components: {
    InfoList,
  },
};
</script>
