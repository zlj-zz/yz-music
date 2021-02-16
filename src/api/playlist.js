import { requset } from "./base";

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

export const getPlaylistDetial = id => requset.get(`playlist/detail?id=${id}`);

export const getPlaylistDynamicDetial = id =>
  requset.get(`/playlist/detail/dynamic?id=${id}`);
