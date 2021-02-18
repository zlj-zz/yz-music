import { requset } from "./base";

export const getSong = id => requset.get(`/song/url?id=${id}`);

export const getSongDetail = ids => requset.get(`/song/detail?ids=${ids}`);

export const getSongLiyric = id => requset.get(`/lyric?id=${id}`);

export const getSimiSong = id => requset.get(`/simi/song?id=${id}`);
