<template>
  <el-autocomplete
    placeholder="请输入内容"
    v-model="state"
    clearable="clearable"
    popper-class="my-autocomplete"
    :fetch-suggestions="querySearchAsync"
    @select="handleSelect"
  >
    <template #suffix>
      <i
        class="el-icon-search el-input__icon my-search-btn"
        @click="handleSelect"
      >
      </i>
    </template>
    <template #default="{ item }">
      <div class="name">{{ item.value }}</div>
      <span class="addr">{{ item.type }}</span>
    </template>
  </el-autocomplete>
</template>

<script>
import { ref } from "vue";
import { getSearchHot, getSearchSuggst } from "api";
import { prcessSuggest } from "common/utils";

export default {
  name: "SearchInput",
  setup() {
    return {
      state: ref(""),
    };
  },
  data() {
    return {
      clearable: true,
      defaultSuggest: [],
    };
  },
  mounted() {
    this.getDefaultSuggest();
  },
  methods: {
    getDefaultSuggest() {
      getSearchHot().then((res) => {
        this.defaultSuggest = res.data.result.hots.map((item) => {
          item.value = item.first;
          return item;
        });
        //console.log(this.defaultSuggest);
      });
    },
    handleSelect(item) {
      console.log("handleSelect", item);
    },
    querySearchAsync(queryString, cb) {
      console.log(queryString);
      if (!queryString) {
        let results = this.defaultSuggest;
        cb(results);
        return;
      } else {
        getSearchSuggst(queryString).then((res) => {
          let rest = res.data.result;
          let results = prcessSuggest(rest);
          console.log(results);
          cb(results);
          return;
        });
      }
    },
  },
};
</script>

<style scoped>
.my-autocomplete li {
  line-height: normal;
  padding: 7px;
}
.my-autocomplete li .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-autocomplete li .addr {
  font-size: 12px;
  color: #b4b4b4;
}
.my-autocomplete li .highlighted .addr {
  color: #ddd;
}
.my-search-btn:hover {
  color: #31c27c;
}

.el-autocomplete-suggestion li {
  line-height: 20px;
}
</style>
