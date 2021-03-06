import { request } from "./base";

// ( 网友精选碟 )
export const getPlayList = (limit, page, cat, order) => {
  let offset = (parseInt(page) - 1) * limit;
  let params = {
    limit: limit,
    offset: offset,
    cat: cat,
    order: order
  };
  return request.get("/top/playlist", { params: params });
};

// 获取歌单详情
export const getPlaylistDetial = id => request.get(`playlist/detail?id=${id}`);

// 调用后可获取歌单详情动态部分,如评论数,是否收藏,播放数
export const getPlaylistDynamicDetial = id =>
  request.get(`/playlist/detail/dynamic?id=${id}`);

// 获取歌单种类
export const getCatList = () => request.get("/playlist/catlist");

/* 登陆后使用 */
export const getUserPlaylists = id => request.get(`/user/playlist?uid=${id}`);

/* 需要登陆
op: 从歌单增加单曲为 add, 删除为 del
pid: 歌单 id tracks: 歌曲 id,可多个,用逗号隔开 */
export const changePlaylist = params =>
  request.get("/playlist/tracks", { params: params });

/* 收藏/取消收藏歌单
 * 登陆后使用
 * t : 类型,1:收藏,2:取消收藏 id : 歌单 id */
export const toggleLikePlaylist = params =>
  request.get("/playlist/subscribe", { params: params });
