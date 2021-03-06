/* 有关歌曲排行榜 */
import { request } from "./base";

export const toplistTypes = {
  0: { name: "新歌榜", id: 3779629 },
  1: { name: "飙升榜", id: 19723756 },
  2: { name: "原创榜", id: 2884035 },
  3: { name: "热歌榜", id: 3778678 },
  4: { name: "R&B榜", id: 991319590 }
};

export const getTopList = toplistType =>
  request.get(`/top/list?id=${toplistType}`);

export const topRankingtype = [
  { name: "飙升榜", dataId: "19723756" },
  { name: "新歌榜", dataId: "3779629" },
  { name: "热歌榜", dataId: "3778678" },
  { name: "原创榜", dataId: "2884035" }
];
export const aereRankingtype = [
  { name: "欧美榜", dataId: "2809513713" },
  { name: "韩语榜", dataId: "745956260" },
  { name: "日语榜", dataId: "5059644681" }
];
export const specialRankingtype = [
  { name: "古典榜", dataId: "71384707" },
  { name: "说唱榜", dataId: "99131959" },
  { name: "电子榜", dataId: "1978921795" },
  { name: "ACG榜", dataId: "71385702" },
  { name: "乡村榜", dataId: "3112516681" },
  { name: "摇滚榜", dataId: "5059633707" },
  { name: "古风榜", dataId: "5059642708" },
  { name: "民谣榜", dataId: "5059661515" }
];
export const globalRankingtype = [
  { name: "UK排行周榜", dataId: "180106" },
  { name: "美国Billboard榜", dataId: "60198" },
  { name: "Beatport全球电子舞曲榜", dataId: "3812895" },
  { name: "iTuness榜", dataId: "11641012" },
  { name: "日本Oricon", dataId: "60131" },
  { name: "法国 NRJ Vos Hits 周榜", dataId: "27135204" }
];
