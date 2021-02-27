<template>
  <div class="main">
    <info-list :title="关注列表" :items="follows" v-if="follows.length > 0" />
    <el-empty description="你还没有关注的人" v-else></el-empty>
  </div>
</template>

<script>
import InfoList from "components/common/InfoList";
import { followsList } from "api";
import { createUsers } from "common/utils";

export default {
  data() {
    return {
      lasttime: -1,
      follows: [],
    };
  },
  created() {
    this.getFollows();
  },
  methods: {
    getFollows() {
      let params = { uid: this.id, lasttime: this.lasttime };
      followsList(params).then((res) => {
        //console.log(res);
        let u = createUsers(res.data.follow);
        this.follows = u;
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
