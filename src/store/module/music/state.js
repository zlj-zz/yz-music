import { playModeMap } from "common/config.js";

export default {
  currentSong: {},
  currentTime: 0,
  playing: false,
  playMode: playModeMap.sequence.code,
  volume: 100,
  playlist: []
};
