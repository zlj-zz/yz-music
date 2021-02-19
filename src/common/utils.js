export * from "./storeHelper";

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

export function createSong(song) {
  const {
    id,
    name,
    img,
    artists,
    duration,
    albumId,
    albumName,
    mvId,
    ...rest
  } = song;

  return {
    id,
    name,
    img,
    artists,
    duration,
    albumName,
    url: genSongPlayUrl(song.id),
    artistsText: genArtistisText(artists),
    durationSecond: duration / 1000,
    durationText: formatTime(duration / 1000),
    albumId,
    mvId,
    ...rest
  };
}

export function createAlbum(album) {
  const { id, name, img, artists, publishTime, ...rest } = album;

  return {
    id,
    name,
    img,
    artists,
    publishTime: formatDate(publishTime, "yyyy-MM-dd"),
    ...rest
  };
}

export function genSongPlayUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

export function genArtistisText(artists) {
  return (artists || []).map(({ name }) => name).join("/");
}

export function pad(num, n = 2) {
  let len = num.toString().length;
  while (len < n) {
    num = "0" + num;
    len++;
  }
  return num;
}

export function formatTime(interval) {
  interval = interval | 0;
  const minute = pad((interval / 60) | 0);
  const second = pad(interval % 60);
  return `${minute}:${second}`;
}

export function prcessSuggest(rest) {
  let results = [];
  if (rest.songs) {
    for (let song of rest.songs) {
      results.push({
        value: song.name + "-" + genArtistisText(song.artists),
        id: song.id,
        type: "歌曲",
        typeId: 0
      });
    }
  }
  if (rest.artists) {
    for (let artist of rest.artists) {
      results.push({
        value: artist.name,
        id: artist.id,
        type: "歌手",
        typeId: 1
      });
    }
  }
  if (rest.albums) {
    for (let album of rest.albums) {
      results.push({
        value: album.name + "-" + album.artist.name,
        id: album.id,
        type: "专辑",
        typeId: 2
      });
    }
  }
  return results;
}

export function formatDate(date, fmt = "yyyy-MM-dd hh:mm:ss") {
  date = date instanceof Date ? date : new Date(date);
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}
