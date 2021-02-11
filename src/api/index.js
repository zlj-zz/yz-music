import { requset } from "./base";

export const getBanner = () => requset.get("/banner?type=0");

export const getSongers = (initial, type, area, page) => {
  let offset = parseInt(page) - 1;
  let params = {
    initial: initial,
    type: type,
    area: area,
    limit: 80,
    offset: offset
  };
  return requset.get("/artist/list", { params: params });
};

export const getUserDetail = id => requset.get(`/user/detail?uid=${id}`);
