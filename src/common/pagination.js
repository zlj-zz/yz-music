import { ref } from "vue";

export default function() {
  const limit = ref(20);
  const currentPage = ref(1);
  const allLength = ref(0);
  const allPage = ref(1);
  const total = ref(0);

  function currentChange(v) {
    currentPage.value = v;
  }

  // api: api func, c: api helper func, args: other need
  function updateList(api, type, params, c) {
    let p = {
      pageSize: limit.value,
      pageNo: currentPage.value,
      ...params
    };
    return new Promise((resolve, reject) => {
      api(p)
        .then(res => {
          //console.log(res);
          let lists;
          switch (type) {
            case "playlist":
              lists = c(res.data.playlist);
              break;
            case "comments":
              total.value =
                res.data.data.totalCount > 5000
                  ? 5000
                  : res.data.data.totalCount;
              lists = res.data.data.comments;
              break;
          }
          resolve(lists);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  return {
    limit,
    currentPage,
    allLength,
    allPage,
    total,
    currentChange,
    updateList
  };
}
