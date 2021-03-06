import { request } from "./base";

export const getUserDetail = id => request.get(`/user/detail?uid=${id}`);

/* 登陆后使用 */
export const getUserAccount = () => request.get("/user/account");

/* 登陆后使用 */
export const getUserSubcount = () => request.get("/user/subcount");

/* 登陆后使用， 获取用户喜爱歌曲 ID 列表 */
export const getUserLikeSongs = id => request.get(`/likelist?uid=${id}`);

/* 登陆后使用， 关注/取消关注用户
 * id : 用户 id
 * t : 1为关注,其他为取消关注
 **/
export const followUser = params => request.get("follow", { params: params });

/* 登陆后使用， 获取用户关注列表
 * 必选参数 : uid : 用户 id
 * limit : 返回数量 , 默认为 30
 * offset : 偏移数量，用于分页 ,如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0 */
export const followsList = params =>
  request.get("user/follows", { params: params });

/*
 * 必选参数 : uid : 用户 id
 * limit : 返回数量 , 默认为 30
 * lasttime : 返回数据的 lasttime ,默认-1,传入上一次返回结果的 lasttime,将会返回下一页的数据 */
export const followedsList = params =>
  request.get("/user/followeds", { params: params });
