/* 有关歌手 */
import { request } from "./base";

export const songerInitials = {
  DEFAULT: { name: "热门", dataId: "-1" },
  A: { name: "A", dataId: "a" },
  B: { name: "B", dataId: "b" },
  C: { name: "C", dataId: "c" },
  D: { name: "D", dataId: "d" },
  E: { name: "E", dataId: "e" },
  F: { name: "F", dataId: "f" },
  G: { name: "G", dataId: "g" },
  H: { name: "H", dataId: "h" },
  I: { name: "I", dataId: "i" },
  J: { name: "J", dataId: "j" },
  K: { name: "K", dataId: "k" },
  L: { name: "L", dataId: "l" },
  M: { name: "M", dataId: "m" },
  N: { name: "N", dataId: "n" },
  O: { name: "O", dataId: "o" },
  P: { name: "P", dataId: "p" },
  Q: { name: "Q", dataId: "q" },
  R: { name: "R", dataId: "r" },
  S: { name: "S", dataId: "s" },
  T: { name: "T", dataId: "t" },
  U: { name: "U", dataId: "u" },
  V: { name: "V", dataId: "v" },
  W: { name: "W", dataId: "w" },
  X: { name: "X", dataId: "x" },
  Y: { name: "Y", dataId: "y" },
  Z: { name: "Z", dataId: "z" },
  OTHER: { name: "#", dataId: "0" }
};

export const songerTypes = {
  DEFAULT: { name: "全部", dataId: -1 },
  MEN: { name: "男歌手", dataId: 1 },
  WOMEN: { name: "女歌手", dataId: 2 },
  BAND: { name: "乐队", dataId: 3 }
};

export const songerAreas = {
  DEFAULT: { name: "全部", dataId: -1 },
  CN: { name: "华语", dataId: 7 },
  EA: { name: "欧美", dataId: 96 },
  JP: { name: "日本", dataId: 8 },
  KOREA: { name: "韩国", dataId: 16 },
  OTHER: { name: "其他", dataId: 0 }
};

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
  return request.get("/artist/list", { params: params });
};

export const getSongerTop50 = id => request.get(`/artist/top/song?id=${id}`);

export const getSongerAllSong = id => request.get(`/artist/songs?id=${id}`);

export const getSongerDesc = id => request.get(`/artist/desc?id=${id}`);

export const getSongerDetail = id => request.get(`/artist/detail?id=${id}`);

export const getSimiSongers = id => request.get(`/simi/artist?id=${id}`);

export const getSongerAlbums = params =>
  request.get(`/artist/album`, { params: params });

export const getSongerMvs = id => request.get(`/artist/mv?id=${id}`);
