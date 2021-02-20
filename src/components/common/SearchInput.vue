<template>
  <el-autocomplete
    id="my-search-input"
    placeholder="单曲/专辑/MV/歌手/用户/歌词"
    v-model="state"
    clearable="clearable"
    popper-class="my-autocomplete"
    :fetch-suggestions="querySearchAsync"
    @select="handleSelect"
    @keyup.enter="normalSearch"
  >
    <template #suffix>
      <i
        class="el-icon-search el-input__icon my-search-btn"
        @click="normalSearch"
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
    normalSearch() {
      let key = document.getElementById("my-search-input").value;
      if (key)
        this.$router.push({
          path: "/musicLibrary/searchResultDetail",
          query: { keyword: key },
        });
    },
    handleSelect(item) {
      if (item.id && item.id != 0) {
        switch (item.type) {
          case "歌曲":
            this.$router.push({
              path: "/musicLibrary/songDetail",
              query: { id: item.id },
            });
            break;
          case "歌手":
            this.$router.push({
              path: "/musicLibrary/songerDetail",
              query: { id: item.id },
            });
            break;
          case "专辑":
            this.$router.push({
              path: "/musicLibrary/albumDetail",
              query: { id: item.id },
            });
            break;
          default:
            console.log(item.type);
        }
      } else {
        if (item.value)
          this.$router.push({
            path: "/musicLibrary/searchResultDetail",
            query: { keyword: item.value },
          });
      }
    },
    querySearchAsync(queryString, cb) {
      if (!queryString) {
        let results = this.defaultSuggest;
        cb(results);
        return;
      } else {
        getSearchSuggst(queryString).then((res) => {
          let rest = res.data.result;
          let results = prcessSuggest(rest);
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
