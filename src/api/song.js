import { requset } from "./base";

export const getSong = id => requset.get(`/song/url?id=${id}`);
