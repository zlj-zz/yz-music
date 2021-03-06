import { request } from "./base";

export const getSongUrl = id => request.get(`/song/url?id=${id}`);

export const getSongDetail = ids => request.get(`/song/detail?ids=${ids}`);

export const getSongLiyric = id => request.get(`/lyric?id=${id}`);

export const getSimiSong = id => request.get(`/simi/song?id=${id}`);

/*
 * 喜爱音乐
 * 登陆后可用 */
export const likeSong = params => request.get("/like", { params: params });
