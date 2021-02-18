import { requset } from "./base";

export const getBanner = () => requset.get("/banner?type=0");

export const getUserDetail = id => requset.get(`/user/detail?uid=${id}`);

export const getCatList = () => requset.get("(/playlist/catlist");
