import { getSongDetail, getPlaylistDetial, getAlbum } from "../api";
import { createSongs, playSonglist } from "../common/utils";

//export function generateSongs(ids) {
//return new Promise((resolve, reject) => {
//getSongDetail(ids)
//.then(res => {
//resolve(createSongs(res.data.songs));
//})
//.catch(err => {
//console.log(err);
//reject(err);
//});
//});
//}

export function playTheList(id) {
  getPlaylistDetial(id).then(res => {
    let trackIds = res.data.playlist.trackIds.map(({ id }) => id);
    getSongDetail(trackIds.slice(0, 500)).then(res => {
      let songs = createSongs(res.data.songs);
      //console.log(songs);
      playSonglist(songs);
    });
  });
}

export function playTheAlbum(id) {
  getAlbum(id).then(res => {
    let songs = createSongs(res.data.songs);
    playSonglist(songs);
  });
}
