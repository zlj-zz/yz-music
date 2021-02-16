import { requset } from "./base";

export const getSong = id => requset.get(`/song/url?id=${id}`);

export const getSongDetail = ids => requset.get(`/song/detail?ids=${ids}`);
