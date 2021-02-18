/* 有关MV */
import { requset } from "./base";

export const mvOrder = {
  HOT: { name: "最热", dataId: "最热" },
  NEW: { name: "最新", dataId: "最新" }
};

export const mvArea = {
  ALL: { name: "全部", dataId: "全部" },
  INSLAND: { name: "内地", dataId: "内地" },
  HT: { name: "港台", dataId: "港台" },
  EA: { name: "欧美", dataId: "欧美" },
  JP: { name: "日本", dataId: "日本" },
  KOREA: { name: "韩国", dataId: "韩国" }
};

export const mvType = {
  ALL: { name: "全部", dataId: "全部" },
  OFFICE: { name: "官方版", dataId: "官方版" },
  ORIGIN: { name: "原生", dataId: "原生" },
  LIVE: { name: "现场版", dataId: "现场版" },
  NE: { name: "网易出品", dataId: "网易出品" }
};

export const getAllMV = (limit, page, order, area, type) => {
  let offset = (parseInt(page) - 1) * limit;
  let params = {
    limit: limit,
    offset: offset,
    order: order,
    area: area,
    type: type
  };
  return requset.get("/mv/all", { params: params });
};

export const getMvDetail = id => requset.get(`/mv/detail?mvid=${id}`);
