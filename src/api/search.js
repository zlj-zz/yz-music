import { request } from "./base";

export const getSearchHot = () => request.get("/search/hot");

export const getSearchHotDetail = () => request.get("/search/hot/detail");

export const getSearchSuggst = keyword =>
  request.get(`/search/suggest?keywords=${keyword}`);

export const getMobileSearchSuggst = keyword =>
  request.get(`/search/suggest?keywords=${keyword}&type=mobile`);

//type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
export const getSearchResult = params =>
  request.get("/cloudsearch", { params: params });
