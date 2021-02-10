import { createRouter, createWebHistory } from "vue-router";

const MusicLibrary = () => import("views/MusicLibrary");
const Home = () => import("views/musicLibrary/Home");
const Songers = () => import("views/musicLibrary/Songers");
const NewDisc = () => import("views/musicLibrary/NewDisc");
const Ranking = () => import("views/musicLibrary/Ranking");
const Classified = () => import("views/musicLibrary/Classified");
const Radions = () => import("views/musicLibrary/Radions");
const MV = () => import("views/musicLibrary/MV");

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
      { path: "mv", component: MV }
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
  routes
});

export default router;
