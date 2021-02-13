/* 有关歌曲排行榜 */
import { requset } from "./base";

export const toplistTypes = {
  NEW: 3779629,
  SOAR: 19723756,
  ORIGINAL: 2884035,
  HOT: 3778678,
  RB: 991319590
};

export const getTopList = toplistType =>
  requset.get(`/top/list?id=${toplistType}`);
