import { requset } from "./base";

export const getSongUrl = id => requset.get(`/song/url?id=${id}`);

export const getSongDetail = ids => requset.get(`/song/detail?ids=${ids}`);

export const getSongLiyric = id => requset.get(`/lyric?id=${id}`);

export const getSimiSong = id => requset.get(`/simi/song?id=${id}`);

/*
 * 喜爱音乐
 * 登陆后可用 */
export const likeSong = params => requset.get("/like", { params: params });
