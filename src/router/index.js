import { createRouter, createWebHistory } from "vue-router";

const MusicLibrary = () => import("views/MusicLibrary");
const Home = () => import("views/musicLibrary/Home");
const Songers = () => import("views/musicLibrary/Songers");
const NewDisc = () => import("views/musicLibrary/NewDisc");
const Ranking = () => import("views/musicLibrary/Ranking");
const Classified = () => import("views/musicLibrary/Classified");
const Radions = () => import("views/musicLibrary/Radions");
const MV = () => import("views/musicLibrary/MV");
const SongerDetail = () => import("views/musicLibrary/SongerDetail");
const SongDetail = () => import("views/musicLibrary/SongDetail");
const AlbumDetail = () => import("views/musicLibrary/AlbumDetail");
const PlaylistDetail = () => import("views/musicLibrary/PlaylistDetail");
const SearchResultDetail = () =>
  import("views/musicLibrary/SearchResultDetail");

const My = () => import("views/My");

const routes = [
  {
    path: "/",
    redirect: "/MusicLibrary"
  },
  {
    path: "/MusicLibrary",
    name: "MusicLibrary",
    component: MusicLibrary,
    children: [
      { path: "home", component: Home },
      { path: "songers", component: Songers },
      { path: "newdisc", component: NewDisc },
      { path: "ranking", component: Ranking },
      { path: "classified", component: Classified },
      { path: "radions", component: Radions },
      { path: "mv", component: MV },
      { path: "songerDetail", component: SongerDetail },
      { path: "songDetail", component: SongDetail },
      { path: "albumDetail", component: AlbumDetail },
      { path: "playlistDetail", component: PlaylistDetail },
      { path: "searchResultDetail", component: SearchResultDetail }
    ]
  },
  {
    path: "/My",
    name: "My",
    component: My
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
