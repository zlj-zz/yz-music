/* 有关歌曲排行榜 */
import { requset } from "./base";

export const toplistTypes = {
  0: { name: "新歌榜", id: 3779629 },
  1: { name: "飙升榜", id: 19723756 },
  2: { name: "原创榜", id: 2884035 },
  3: { name: "热歌榜", id: 3778678 },
  4: { name: "R&B榜", id: 991319590 }
};

export const getTopList = toplistType =>
  requset.get(`/top/list?id=${toplistType}`);
