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
const Like = () => import("views/my/Like");
const Follows = () => import("views/my/Follows");
const Followeds = () => import("views/my/Followeds");

const routes = [
  {
    path: "/",
    redirect: "/MusicLibrary"
  },
  {
    name: "MusicLibrary",
    path: "/MusicLibrary",
    component: MusicLibrary,
    meta: {
      index: 0
    },
    children: [
      {
        path: "",
        component: Home,
        meta: { name: "home" }
      },
      {
        path: "home",
        component: Home,
        meta: { name: "home" }
      },
      {
        path: "songers",
        component: Songers,
        meta: { name: "songers" }
      },
      {
        path: "newdisc",
        component: NewDisc,
        meta: { name: "newdisc" }
      },
      {
        path: "ranking",
        component: Ranking,
        meta: { name: "ranking" }
      },
      {
        path: "classified",
        component: Classified,
        meta: { name: "classified" }
      },
      {
        path: "radions",
        component: Radions,
        meta: { name: "ranking" }
      },
      {
        path: "mv",
        component: MV,
        meta: { name: "mv" }
      },
      {
        path: "songerDetail",
        component: SongerDetail,
        meta: { name: "songerDetail" }
      },
      {
        path: "songDetail",
        component: SongDetail,
        meta: { name: "songDetail" }
      },
      {
        path: "albumDetail",
        component: AlbumDetail,
        meta: { name: "albumDetail" }
      },
      {
        path: "playlistDetail",
        component: PlaylistDetail,
        meta: { name: "playlistDetail" }
      },
      {
        path: "searchResultDetail",
        component: SearchResultDetail,
        meta: { name: "searchResultDetail" }
      }
    ]
  },
  {
    name: "My",
    path: "/My",
    component: My,
    meta: { index: 1 },
    children: [
      { path: "", component: Like, meta: { name: "like" } },
      { path: "like", component: Like, meta: { name: "like" } },
      { path: "follows", component: Follows, meta: { name: "follows" } },
      { path: "followeds", component: Followeds, meta: { name: "followeds" } }
    ]
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
