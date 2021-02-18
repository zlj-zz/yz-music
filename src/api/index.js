import { requset } from "./base";

export * from "./data";
export * from "./toplist";
export * from "./playlist";
export * from "./song";
export * from "./songer";
export * from "./mv";
export * from "./search";

export const getBanner = () => requset.get("/banner?type=0");

export const getUserDetail = id => requset.get(`/user/detail?uid=${id}`);

export const getCatList = () => requset.get("(/playlist/catlist");
