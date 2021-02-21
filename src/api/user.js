import { requset } from "./base";

export const getUserDetail = id => requset.get(`/user/detail?uid=${id}`);

/* 登陆后使用 */
export const getUserAccount = () => requset.get("/user/account");

/* 登陆后使用 */
export const getUserSubcount = () => requset.get("/user/subcount");
