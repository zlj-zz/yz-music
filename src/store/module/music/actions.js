export default {
  async startSong({ commit, state }, rawSong) {
    const song = Object.assign({}, rawSong);
    if (!song.img) {
      if (song.albumId) {
        song.img = await getSongImg(song.id, song.albumId);
      }
    }
    commit("setCurrentSong", song);
    commit("setPlayingState", true);
    commit("setPlayHistory", playHistoryCopy);
  },
  clearCurrentSong({ commit }) {
    commit("setCurrentSong", {});
    commit("setPlayingState", false);
    commit("setCurrentTime", 0);
  },
  clearPlaylist({ commit, dispatch }) {
    commit("setPlaylist", []);
    dispatch("clearCurrentSong");
  },
  addToPlaylist({ commit, state }, song) {
    const { playlist } = state;
    const copy = playlist.slice();
    if (!copy.find(({ id }) => id === song.id)) {
      copy.unshift(song);
      commit("setPlaylist", copy);
    }
  }
};
