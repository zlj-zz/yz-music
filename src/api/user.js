import { requset } from "./base";

export const getUserDetail = id => requset.get(`/user/detail?uid=${id}`);

/* 登陆后使用 */
export const getUserAccount = () => requset.get("/user/account");

/* 登陆后使用 */
export const getUserSubcount = () => requset.get("/user/subcount");

/* 登陆后使用， 获取用户喜爱歌曲 ID 列表 */
export const getUserLikeSongs = id => requset.get(`/likelist?uid=${id}`);
