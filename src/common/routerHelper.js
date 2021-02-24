import Router from "@/router";

export function gotoSongDetail(id) {
  if (id && id != 0)
    Router.push({
      path: "/musicLibrary/songDetail",
      query: { id: id }
    });
}

export function gotoSongerDetail(id) {
  if (id && id != 0)
    Router.push({
      path: "/musicLibrary/songerDetail",
      query: { id: id }
    });
}

export function gotoPlaylistDetail(id) {
  if (id && id != 0)
    Router.push({
      path: "/musicLibrary/playlistDetail",
      query: { id: id }
    });
}

export function gotoAlbumDetail(id) {
  if (id && id != 0)
    Router.push({
      path: "/musicLibrary/albumDetail",
      query: { id: id }
    });
}

export function gotoMvDetail(id) {
  if (id && id != 0)
    Router.push({
      path: "/musicLibrary/mvDetail",
      query: { id: id }
    });
}
