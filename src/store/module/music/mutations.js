export default {
  setCurrentSong(state, song) {
    state.currentSong = song;
  },
  setCurrentTime(state, time) {
    state.currentTime = time;
  },
  setPlayingState(state, playing) {
    state.playing = playing;
  },
  setPlayMode(state, mode) {
    state.playMode = mode;
  },
  setPlaylist(state, list) {
    state.playlist = list;
  }
};
