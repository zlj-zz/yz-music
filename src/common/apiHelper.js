export function createSonger(songer) {
  return {
    id: songer.artist.id,
    name: songer.artist.name,
    img: songer.artist.cover,
    desc: songer.artist.briefDesc,
    musicSize: songer.artist.musicSize,
    albumSize: songer.artist.albumSize,
    mvSize: songer.artist.mvSize
  };
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

export function createOneSong(song) {
  const { id, name, al, dt, ar, mv, publishTime, lyrics } = song;
  return {
    id,
    name,
    img: al.picUrl,
    url: genSongPlayUrl(song.id),
    artists: ar,
    artistsText: genArtistisText(ar),
    duration: dt,
    durationSecond: dt / 1000,
    durationText: formatTime(dt / 1000),
    publishTime: formatDate(publishTime, "yyyy-MM-dd"),
    albumId: al.id,
    albumName: al.name,
    mvId: mv,
    lyrics
  };
}
export function createSongs(songs) {
  return songs.map(song => createOneSong(song));
}

export function createAlbum(album) {
  const {
    id,
    name,
    picUrl,
    artists,
    description,
    company,
    publishTime,
    size,
    type,
    tags
  } = album;

  return {
    id,
    name,
    img: picUrl,
    artists,
    artistsText: genArtistisText(artists),
    desc: description,
    company,
    publishTime: formatDate(publishTime, "yyyy-MM-dd"),
    size,
    type,
    tags
  };
}
export function createAlbums(albums) {
  return albums.map(album => createAlbum(album));
}

export function createMv(mv) {
  const {
    id,
    name,
    cover,
    artists,
    duration,
    publishTime,
    playCount,
    imgurl,
    vid,
    title,
    coverUrl,
    creator,
    durationms,
    playTime
  } = mv;
  let dt = duration ? duration : durationms;
  let times = playCount ? playCount : playTime;
  let c = artists ? artists : creator;

  return {
    id: id ? id : vid,
    name: name ? name : title,
    img: cover ? cover : imgurl ? imgurl : coverUrl,
    artists: c,
    artistsText: genArtistisText(c),
    duration: dt,
    durationSecond: dt / 1000,
    durationText: formatTime(dt / 1000),
    publishTime,
    playCount: processCount(times)
  };
}
export function createMvs(mvs) {
  return mvs.map(mv => createMv(mv));
}

export function createPlaylist(list) {
  const {
    id,
    name,
    coverImgUrl,
    creator,
    description,
    playCount,
    bookCount,
    trackCount
  } = list;

  return {
    id,
    name,
    img: coverImgUrl,
    creator,
    creatorId: creator.userId,
    creatorName: creator.nickname,
    desc: description,
    playCount: processCount(playCount),
    bookCount: processCount(bookCount),
    trackCount: processCount(trackCount)
  };
}
export function createPlaylists(lists) {
  return lists.map(list => createPlaylist(list));
}

export function createUser(user) {
  const {
    userId,
    nickname,
    avatarUrl,
    followeds,
    follows,
    gender,
    birthday,
    playlistCount,
    playlistBeSubscribedCount,
    detailDescription,
    signature,
    city,
    vipType
  } = user;

  return {
    id: userId,
    name: nickname,
    img: avatarUrl,
    followeds: processCount(followeds),
    follows: processCount(follows),
    gender,
    birthday: formatDate(birthday, "yyyy-MM-dd"),
    playlistCount,
    playlistBeSubscribedCount,
    desc: detailDescription,
    signature,
    city,
    vipType
  };
}
export function createUsers(users) {
  return users.map(user => createUser(user));
}

export function createSimiSonger(songer) {
  return {
    id: songer.id,
    name: songer.name,
    img: songer.picUrl
  };
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

export function processCount(count) {
  if (count > 10000000) {
    return (count / 10000000).toFixed(2) + "亿";
  } else if (count > 10000) {
    return (count / 10000).toFixed(2) + "万";
  }
  return count;
}
