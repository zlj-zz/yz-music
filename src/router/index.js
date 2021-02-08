import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("views/Home");
const My = () => import("views/My");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
