import { requset } from "./base";

export const getSearchHot = () => requset.get("/search/hot");

export const getSearchHotDetail = () => requset.get("/search/hot/detail");

export const getSearchSuggst = keyword =>
  requset.get(`/search/suggest?keywords=${keyword}`);

export const getMobileSearchSuggst = keyword =>
  requset.get(`/search/suggest?keywords=${keyword}&type=mobile`);
