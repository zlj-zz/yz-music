export function processCount(count) {
  if (count > 10000000) {
    return (count / 10000000).toFixed(2) + "亿";
  } else if (count > 1000) {
    return (count / 1000).toFixed(2) + "万";
  }
  return count;
}

export function isDef(v) {
  return v !== undefined && v !== null;
}

export function genSongPlayUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}
