import { requset } from "./base";

export * from "./data";
export * from "./songer";
export * from "./toplist";
export * from "./mv";

export const getBanner = () => requset.get("/banner?type=0");

export const getUserDetail = id => requset.get(`/user/detail?uid=${id}`);

export const getCatList = () => requset.get("(/playlist/catlist");

export const getPlayList = (limit, page, cat) => {
  let order = "hot";
  let offset = (parseInt(page) - 1) * limit;
  let params = {
    limit: limit,
    offset: offset,
    cat: cat,
    order: order
  };
  return requset.get("/top/playlist", { params: params });
};
