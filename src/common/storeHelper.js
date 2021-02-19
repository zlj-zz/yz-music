import Store from "@/store";

// 替换播放列表，并播放
export function playSonglist(list) {
  Store.commit("music/setPlaylist", list);
  Store.dispatch("music/startSong", list[0]);
}

// 将歌曲添加到列表尾部，并播放该歌曲
export function playTheSong(song) {
  Store.dispatch("music/addToPlaylist", song);
  Store.dispatch("music/startSong", song);
}
