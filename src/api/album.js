import { request } from "./base";

export const albumAreas = {
  ALL: { name: "全部", dataId: "ALL" },
  ZH: { name: "华语", dataId: "ZH" },
  EA: { name: "欧美", dataId: "EA" },
  KR: { name: "韩国", dataId: "KR" },
  JP: { name: "日本", dataId: "JP" }
};

// 获得专辑内容
export const getAlbum = id => request.get(`/album?id=${id}`);

// 获得专辑动态信息,如是否收藏,收藏数,评论数,分享数
export const getAlbumDetail = id => request.get(`/album/detail?id=${id}`);

export const getTopAlbum = params =>
  request.get("/top/album", { params: params });

/* 登陆后使用 */
export const getCollectedAlbum = () => request.get("album/sublist");
