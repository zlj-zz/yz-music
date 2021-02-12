import { requset } from "./base";
export * from "./data";

export const getBanner = () => requset.get("/banner?type=0");

export const getSongers = (initial, type, area, page) => {
  let limit = 80;
  let offset = (parseInt(page) - 1) * limit;
  let params = {
    initial: initial,
    type: type,
    area: area,
    limit: limit,
    offset: offset
  };
  return requset.get("/artist/list", { params: params });
};

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

export const getTopList = toplistType =>
  requset.get(`/top/list?id=${toplistType}`);
